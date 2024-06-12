//import db schema
const cart=require("../model/cart")
//get all products in cart
const cart_all=async (req,res)=>{
    try{
        const carts=await cart.find()
        console.log("data sent")
        res.send(carts)
    }
    catch(error){
        console.log("Fetch error:-",error)
        res.json({'message':error})
    }
}

//insert item to cart
const insert_cart=async (req,res)=>{
    const carts=new cart({
        p_id:req.body.p_id,
        p_cost:req.body.p_cost,
        qty:1,
        p_img:req.body.p_img,
        u_name:req.body.u_name
    })
    try{
        const savedcart=await carts.save()
        console.log("Item added to cart")
        res.send(savedcart)
    }
    catch(error){
        res.status(400).send(error)
    }
}

//update cart
const update_cart=async (req,res)=>{
    let u_name=req.body.u_name
    let p_id=req.body.p_id
    let qty=req.body.qty
    try{
        const updatecart=await cart.updateOne({p_id,u_name},{$set:{qty:qty}})
        if(updatecart.matchedCount!=0){
            console.log('Cart updated:',updatecart)
            res.json({'update':"success"})
        }
        else{
            console.log("Cart not updated")
            res.json({'update':"failed"})
        }
    }
    catch(error){
        res.status(400).send(error)
    }
}

//delete item from cart
const delete_cart=async (req,res)=>{
    let obj={
        p_id:req.body.p_id,
        u_name:req.body.u_name
    }
    try{
        const deletecart=await cart.deleteOne(obj)
        if(deletecart.deletedCount!=0){
            console.log("Cart deleted")
            res.json({'delete':"success"})
        }
        else{
            console.log("Cart not deleted")
            res.json({'delete':"failed"})
        }
    }
    catch(error){
        res.status(400).send(error)
    }
}
module.exports={
    cart_all,
    insert_cart,
    update_cart,
    delete_cart
}
