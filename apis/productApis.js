//import db schema
const products=require("../model/products")
//get all products
const products_all=async (req,res)=>{
    try{
        const product=await products.find()
        console.log("data sent")
        res.json(product)
    }
    catch(error){
        console.log("Fetch error:-",error)
        res.json({'message:':error})
    }
}
//insert product
const insert_product=async (req,res)=>{
    const products=new products({
        p_id:req.body.p_id,
        p_name:req.body.p_name,
        p_cost:req.bosy.p_cost,
        p_cat:req.body.p_cat,
        p_desc:req.body.p_desc,
        p_img:req.body.p_img
    })
    try{
        const savedproducts=await products.save()
        console.log('Product inserted')
        res.send(savedproducts)
    }
    catch(error){
        res.status(400).send(error)
    }
}
//update product
const update_product=async (req,res)=>{
    let p_id=req.body.p_id
    const product={
        p_name:req.body.p_name,
        p_cost:req.bosy.p_cost,
        p_cat:req.body.p_cat,
        p_desc:req.body.p_desc,
        p_img:req.body.p_img
    }
    try{
        const updateproducts=await products.updateOne({p_id},product)
        if(updateproducts.modifiedCount!=0){
            console.log('Product updated',updateproducts)
            res.send({'update':'success'})
        }
        else{
            console.log('Product not updated')
            res.send({'update':"Record not found"})
        }
    }
    catch(error){
        res.status(400).send(error)
    }
}

//delete product
const delete_product=async (req,res)=>{
    let p_id=req.body.p_id
    try{
        const deletedproducts=await products.deleteOne({p_id})
        if(deletedproducts.deletedCount!=0){
            console.log('Product Deleeted')
            res.send({'delete':"success"})
        }
        else{
            console.log("Product not deleted")
            res.send({'delete':"record not found"})
        }
    }
    catch(error){
        res.status(400).send(error)
    }
}
module.exports={
    products_all,
    insert_product,
    update_product,
    delete_product
}