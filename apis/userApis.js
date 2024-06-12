//import db schema
const users=require("../model/users")
//get all users
const users_all=async (req,res)=>{
    try{
        const user=await users.find()
        console.log("data sent")
        res.json(user)
    }
    catch(error){
        comsole.log("Fetch error:-",error)
        res.json("'message",error)
    }
}

//register user
const register=async (req,res)=>{
    const user=new users({
        u_id:req.body.u_id,
        u_name:req.body.u_name,
        u_pwd:req.body.u_pwd,
        u_email:req.body.u_email,
        u_addr:req.body.u_addr,
        u_contact:req.body.u_contact
    })
    try{
        const registerduser=await user.save()
        console.log("User Registed")
        res.send(registerduser)
    }
    catch(error){
        res.status(400).send(error)
    }
}
//login user
const login=async (req,res)=>{
    const user={
        u_name:req.body.u_name,
        u_pwd:req.body.u_pwd
    }
    console.log(user)
    try{
        const loginuser=await users.findOne(user)
        if (loginuser) {
            console.log('Auth Success')
            res.json({'auth':"success"})
        } else {
            console.log('Auth failed');
            res.json({ 'auth': "failed" })
        }
    }
    catch(error){
        res.status(400).send(error)
    }
}
//update user
const update_user=async (req,res)=>{
    let u_id=req.body.u_id
    const user={
        u_name:req.body.u_name,
        u_pwd:req.body.u_pwd,
        u_email:req.body.u_email,
        u_addr:req.body.u_addr,
        u_contact:req.body.u_contact
    }
    try{
        const updateusers=await users.updateOne({u_id},user)
        if(updateusers.modifiedCount!=0){
            console.log('User data modified',updateusers)
            res.send({'update':'success'})
        }
        else{
            console.log('user data not updated')
            res.send({'update':"failed"})
        }
    }
    catch(error){
        res.status(400).send(error)
    }
}

module.exports={
    users_all,
    register,
    login,
    update_user
}