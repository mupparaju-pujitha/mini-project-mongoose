//import mongoose
const mongoose=require("mongoose")
//create schema
const usersSchema=new mongoose.Schema({
    u_id:String,
    u_name:String,
    u_pwd:String,
    u_email:String,
    u_addr:String,
    u_contact:Number
})
module.exports=mongoose.model("users",usersSchema)