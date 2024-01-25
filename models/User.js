const mongoose =require("mongoose");


const usereSchema =new mongoose.Schema({

    firstname:{
        type:String,
        required:true
    },
    lastname:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true,
        
    },
    confirmpassword:{
        type:String,
        required:true,
        
    },
    image:{
        type:String,
        required:true
    }

})



const User =mongoose.model("users",usereSchema);

module.exports={User}