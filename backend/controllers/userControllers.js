const asyncHandler = require("express-async-handler");
const User = require("../models/userModel");

const registerUser = asyncHandler( async (req,res) => {
    const { name, password } = req.body

    if(!name || !password){
        res.status(4000);
        throw new Error("Please Enter all the Fields");

    }

    const userExists = await User.findOne({ name });

    if(userExists) {
        res.status(400);
        throw new Error("User already exists");
    }

    const user = await User.create({
        name,
        password,
    });
    
    if(user){
        res.status(201).json({
            _id: user.id,
            name: user.name,
        });
    }else{
        res.status(400);
        throw new Error("Failed to Create User");
    }
});

module.exports = { registerUser };