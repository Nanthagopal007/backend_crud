// const { request } = require("express");

const mongoose =require('mongoose');

const ProductSchema= mongoose.Schema(
    {
        name:{
            type:String,
            required:[true,"please enter product name:"],
        },
        age:{
            type:Number,
            required:true,
            default:0

        },


        city:{
            type:String,
            required:[true,"please enter product name:"],
            

        },

        number:{
            type:Number,
            required:true,
            default:0
        },
        image:{
            type:String,
            required:false,
        },
        

    },
    {
        timestamps:true
    }
)

const product =mongoose.model("product",ProductSchema);
module.exports=product;