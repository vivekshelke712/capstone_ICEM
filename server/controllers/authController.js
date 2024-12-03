const asyncHandler = require("express-async-handler")
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")
const validator = require("validator")
const User = require("../models/user")

exports.register = asyncHandler(async (req,res) => {
    const { name, email, password, role, number } = req.body
    if (!validator.isEmail(email)) {
        return res.status(400).json({message:"Please provide valid email" })
    }
    if (!validator.isStrongPassword(password)) {
        return res.status(400).json({message:"please enter srong password"})
    }
    if (!name) {
        return res.status(400).json({message:"please enter Name"})
    }
    if (!number) {
        return res.status(400).json({message:"enter a valid number"})
    }
    const result = await User.findOne({ email })
    if (result) {
        return res.status(400).json("already user Exist")
    }
    const hashPass = await bcrypt.hash(password, 10)
    await User.create({ ...req.body, password: hashPass })
    res.status(201).json({message: "user Register Success"})
})

exports.login = asyncHandler(async (req,res) => {
    const { email, password } = req.body 
    if (!email || !password) {
        return res.status(400).json({message:"email and password required"})
    }
    if (!validator.isEmail(email)) {
        return res.status(400).json({message:"please enter valid email"})
    }

    const result = await User.findOne({ email })
    if (!result) {
        return res.status(400).json({message:"Email is not registerd with us"})
    }

    const verify = await bcrypt.compare(password, result.password)
    if (!verify) {
        return res.status(400).json({message:"password do not match"})
    }

    const token = jwt.sign({ userId: result._id }, process.env.JWT_KEY, { expiresIn: "1d" })
    res.cookie('userAuth', token, { maxAge: 1000 * 60 * 60 * 6 })
    
    res.status(200).json({
        message: "Login Success",
        result: {
            name: result.name,
            email: result.email,
            role:result.role
        }
    })
})
exports.logout = asyncHandler(async (req, res) => {
    // await User.deleteMany()
    // res.status(200).json({message:"all user Deleted"})
    res.clearCookie("userAuth")
    res.status(200).json({message: "logout Success"})
})