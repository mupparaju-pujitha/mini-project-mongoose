//import mongoose
const mongoose=require("mongoose")
const url = require("../url")
//create schema
const productSchema =new mongoose.Schema({
    p_id:String,
    p_name:String,
    p_cost:Number,
    p_cat:String,
    p_desc:String,
    p_img:String
})
module.exports=mongoose.model("products",productSchema)