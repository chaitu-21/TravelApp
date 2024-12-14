const express=require('express')

const User=require('../model/user.model')
const router=express.Router();
const CryptoJS=require('crypto-js');
const jwt=require('jsonwebtoken')


const singupHandler = require("../controllers/signupController");
const loginHandler = require("../controllers/loginController");


router.route("/register")
    .post(singupHandler)

router.route("/login")
    .post(loginHandler)

module.exports = router;