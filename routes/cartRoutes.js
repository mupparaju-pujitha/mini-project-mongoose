//import express module
const express=require("express")
//create router instance
const router=express.Router()
//import cart api
const cartApi=require("../apis/cartApis")
//fetch all records in cart
router.get("/cartfetch",cartApi.cart_all)
//insert data to cart
router.post("/cartinsert",cartApi.insert_cart)
//update cart
router.put("/cartupdate",cartApi.update_cart)
//delete cart
router.delete("/cartdelete",cartApi.delete_cart)

//export module
module.exports=router