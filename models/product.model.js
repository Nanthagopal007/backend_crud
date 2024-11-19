// const { request } = require("express");

const mongoose =require('mongoose');

const ProductSchema= mongoose.Schema(
    {
        title:{
            type:String,
            required:[true,"please enter product name:"],
        },
        name:{
            type:String,
            required:[true,"please enter product name:"],
        },
        size:{
            type:Number,
            required:true,
            default:0

        },


        price:{
            type:Number,
            required:[true,"please enter product name:"],
            default:0
            

        },

        description:{
            type:String,
            required:[true,"please enter product name:"],
            
        },
        image:{
            type:String,
            required:false,
        },
        gender:{
            type:String,
            required:[true,"please enter product name:"],
        },
        

    },
    {
        timestamps:true
    }
)

const product =mongoose.model("product",ProductSchema);
module.exports=product;