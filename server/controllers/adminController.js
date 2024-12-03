const asyncHandler = require("express-async-handler")
const Jobs = require("../models/Jobs")
const User = require('../models/user')

exports.adminJobPost = asyncHandler(async(req,res) => {
    const result = await Jobs.create(req.body)
    res.status(200).json({message:"Jobs Added Success",result})
})
exports.getAllUsers = asyncHandler(async(req,res)=> {
    const result = await User.find()
    res.status(200).json({message:"users Fetch SuccessFully",result})
} )


