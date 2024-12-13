const asyncHandler = require("express-async-handler")

const User = require('../models/user')



exports.getAllUsers = asyncHandler(async(req,res)=> {
    const result = await User.find()
    res.status(200).json({message:"users Fetch SuccessFully",result})
} )



