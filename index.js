const express = require('express');
const mongoose = require('mongoose');
const productRoute=require('./routes/product.route.js');
const userRoute=require('./routes/user.route.js');

// Running On PORT
const app = express();
app.listen(6000, () => {
  console.log("Server is Running on PORT 6000");
});

// MiddleWare
app.use(express.json());
app.use(express.urlencoded({extended:false}));

//Routes
app.use("/api/products",productRoute);
app.use("/users",userRoute);

mongoose.connect('mongodb+srv://nanthagopal:9994797571@cluster0.0am1g.mongodb.net/Node-API')
  .then(() => console.log('Connected to Database'))
  .catch((error) => console.error('Connection failed!', error));
