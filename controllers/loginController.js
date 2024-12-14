const CryptoJS = require('crypto-js');
const jwt = require('jsonwebtoken');

const User = require("../model/user.model");

const loginHandler = async (req, res) => {
    try{
        const user=await User.findOne({number:req.body.number})//user login with number//find one as only one user will have that uniwue number
        !user && res.status(401).json({message:"Invalid mobile number"})
        const decodedPassword=CryptoJS.AES.decrypt(user.password,process.env.PASSWORD_SECRET_KEY).toString(CryptoJS.enc.Utf8)//for dectryp password in i=utf 8 format
        decodedPassword!==req.body.password && res.status(401).json({message:"Incorrect password"})

        const {password, ...rest}=user._doc;// we are removing password from responsein postman and adding all filed in user._doc all details are present
        // res.json(rest);

        const accessToken=jwt.sign({username:user.username},process.env.ACCESS_TOKEN)

        res.json({...rest,accessToken})

        
    }catch(err){
        console.log(err)
    }
}
module.exports = loginHandler;
