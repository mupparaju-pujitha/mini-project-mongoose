//import mongoose
const mongoose=require("mongoose")
const url=require("../url")
//create schema
const cartSchema=new mongoose.Schema({
    p_id:String,
    p_cost:Number,
    qty:Number,
    p_img:String,
    u_name:String
})
module.exports=mongoose.model("cart",cartSchema)