//import express module
const express=require("express")
//create router instance
const router=express.Router()
//import user api
const userApi=require("../apis/userApis")
//fetch all records
router.get("/users",userApi.users_all)
//insert record
router.post("/register",userApi.register)
//login
router.post("/login",userApi.login)
//update user
router.put("/updateuser",userApi.update_user)
//export module
module.exports=router