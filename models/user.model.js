const {request}=require('express');
const mongoose=require('mongoose');


const userSchema=mongoose.Schema(
    {
        username:{
            type:String,
            required:[true,"please enter your username:"]
        },
        email:{
            type:String,
            required:[true,"please enter your email:"]

        },

        password:{
            type:String,
            required:[true,"please enter your password:"]

        }
    }
);

const user=mongoose.model("user",userSchema);
module.exports=user;

