const express = require("express");

const hotelRouter=require('./routes/hotel.router');
const hotelDataAddedToDBRouter=require("./routes/dataimport.router")
const categoryDataAddedToDBRouter=require('./routes/categoryimport')
const singleHotelRouter=require('./routes/singlehotel.router')
const authRouter=require('./routes/auth.router')
const wishlistRouter=require('./routes/wishlist.router')

const categoryRouter=require("./routes/category.router")
//db connection
const mongoose=require('mongoose')
const cors=require('cors')
const connectDB=require('./config/dbconfig')


const app=express();
connectDB();//to create db connect
app.use(cors)

app.use(express.json());
const PORT=3000

app.get("/",(req,res)=>{
    res.send("Hello")
})

//when for fetching data the api are seacrched from start /api/hoteldat will be fist
app.use("/api/hoteldata",hotelDataAddedToDBRouter )
app.use("/api/hotels",hotelRouter)
app.use("/api/categorydata",categoryDataAddedToDBRouter)
app.use("/api/category",categoryRouter)
app.use("/api/hotels",singleHotelRouter) //api/hotels is same, but if we provide id as parameter to api then it will use api which has parameter id
app.use("/api/auth",authRouter)
app.use("/api/wishlist",wishlistRouter)

mongoose.connection.once("open",()=>{
    console.log("connected to db")

app.listen(process.env.PORT|| PORT,()=>{
    console.log("Server is running")
})

})


