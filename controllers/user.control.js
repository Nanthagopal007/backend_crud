
const jwt = require('jsonwebtoken');
const User = require('../models/user.model');
const bcrypt=require ('bcryptjs');

const register= async (req, res) => {
    try {
      // Check if the email already exists
      const existingUser = await User.findOne({ email: req.body.email });
      if (existingUser) {
        return res.status(400).json({ error: 'Email already exists' });
      }
  
      // Hash the password
      const hashedPassword = await bcrypt.hash(req.body.password, 10);
  
      // Create a new user
      const newUser = new User({
        username: req.body.username,
        email: req.body.email,
        password: hashedPassword
      });
      
      await newUser.save();
      res.status(201).json({ message: 'User registered successfully' });
    } catch (error) {
      res.status(500).json({ error: 'Internal server error' });
    }
  };
  
  // Route to authenticate and log in a user
const login = async (req, res) => {
    const {email, password} = req.body
    try {


      // Check if the email exists
      const founduser = await User.findOne({ email });
      if (!founduser) {
        return res.status(401).json({ error: 'Invalid credentials' });
      }
  
      // Compare passwords
      const passwordMatch = await bcrypt.compare(password, founduser.password);
      if (!passwordMatch) {
        return res.status(401).json({ error: 'Invalid credentials' });
      }
  
      // Generate JWT token
      const token = jwt.sign({ email: User.email }, 'secret');
      res.status(200).json({ token , founduser});
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };

 module.exports={
    register,
    login   
}; 
