const express=require('express');
const router = express.Router();
const UserModel= require('../models/users')
const UserService= require('../services/users')

const userService= new UserService(UserModel);

router.post('/',async(req,res)=>{
    const body= req.body;
    const user= await userService.create(body);
    console.log("-------------------User-------------------");
    console.log(user);
    console.log("-------------------End User-------------------");
    res.header("Access-Control-Allow-Origin", "*");
    res.status(201).send(user);
})

module.exports=router;