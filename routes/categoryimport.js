const express=require('express')
const mongoose=require('mongoose')

const Category=require('../model/category.model')
const categories=require('../data/category')

const router = express.Router();

router.route("/")
.post(async(req,res)=>{
    try{
        //await Hotel.remove();
        const categoryInDB  =await Category.insertMany(categories.data);
    res.json(categoryInDB)
    }catch(err){
        console.log(err);
    res.json({message:"Could not add category data to DB"})
    }
} )
module.exports=router;