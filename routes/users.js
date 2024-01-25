const mongoose =require("mongoose");
const {User} =require("../models/User");
const express=require("express");
const router =express.Router();


router.post("/signup",async(req,res)=>{
    try {

        const {email}=req.body;

        const user =await User.findOne({email:email})
       if(user){
           res.json({message:"email is already exists",alert:false});
       }
        
       const data =await User.create(req.body);
       res.json({message:"user created successfully",alert:true})
    } catch (error) {

        console.log(error);
        res.json({message:error.message})
        
    }
   
});



//login 

router.post("/login", async(req, res) => {

    try {


        const { email } = req.body;
        const user =await  User.findOne({ email: email }) 
           if (user) {

            const dataSend =await User.find(user);
            console.log(user);
            
          
             res.send({
               message: "Login is successfully",
               alert: true,
               data:dataSend,
             });
           } else {
             res.send({
               message: "Email is not available, please sign up",
               alert: false,
             });
           }
        
    } catch (error) {
        res.json({msg:error.message})
    }
    // console.log(req.body);
   
    });
 
        

   
  
module.exports=router;