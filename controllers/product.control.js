const product=require('../models/product.model');

//Get ALL products
const getProducts=async(req,res)=>{
    try{
        const allProducts=await product.find({});
        res.status(200).json(allProducts);

    }catch(error){
        res.status(500).json({message:error.message});
    }
};

//Get A Single Product Using With ID
const getProduct=async(req,res)=>{
    try{
      const {id}=req.params;
      const singleProduct=await product.findById(id);

      if (!singleProduct) {
        return res.status(404).json({ message: "Product not found" });
    }

      res.status(200).json(singleProduct);
  
    }catch(error){
      res.status(500).json({message:error.message});
    }
  };

  //Create A Product
  const createProduct= async(req, res) => {
    try{
      const newProduct=await product.create(req.body);
      res.status(200).json(newProduct);
  
    }catch(error){
      res.status(500).json({message:error.message});
    }
  };

//Update A Product
  const updateProduct=async(req,res)=>{
    try{
      const {id}=req.params;
      const updatedProduct=await product.findByIdAndUpdate(id, req.body, { new: true });
  
      if(!updatedProduct){
        return res.status(404).json({message:"product not found"});
  
      };
  
      res.status(200).json(updatedProduct);
  
    }catch(error){
      res.status(500).json({message:error.message});
    }
  };

  //Delete A Product
const deleteProduct=async(req,res)=>{
    try {
      const {id}=req.params;
      const deletedProduct=await product.findByIdAndDelete(id);
  
      if(!deletedProduct){
        return res.status(404).json({message:"Product not found"});
      };
      res.status(200).json({message:"Product Deleted successfully!"});
  
      
    } catch (error) {
      res.status(500).json({message:error.message});
      
    }
  };
module.exports={
    getProducts,
    getProduct,
    createProduct,
    updateProduct,
    deleteProduct
};




