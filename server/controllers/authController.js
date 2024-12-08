const asyncHandler = require("express-async-handler")
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")
const validator = require("validator")
const User = require("../models/user")


exports.register = asyncHandler(async (req, res) => {
    const {
      name,
      email,
      password,
      number,
      role,
      orgName,
      orgType,
      orgService,
      registrationNumber,
      contactPerson,
      contactInfo,
      address,
      city,
      description
    } = req.body;
  
    // Validate required fields
    if (!name || !email || !password || !number || !role) {
      return res.status(400).json({ message: "Name, email, password, number, and role are required" });
    }
  
    // If role is organization, validate additional organization fields
    if (role === "organization") {
      if (!orgName || !orgType || !orgService || !registrationNumber || !contactPerson || !contactInfo || !address || !city) {
        return res.status(400).json({ message: "All organization fields are required" });
      }
    }
  
    // Validate email format
    if (!validator.isEmail(email)) {
      return res.status(400).json({ message: "Invalid email format" });
    }
  
    // Validate phone number
    if (!validator.isMobilePhone(number.toString(), "en-IN")) {
      return res.status(400).json({ message: "Invalid phone number" });
    }
  
    // Validate password strength
    if (!validator.isStrongPassword(password)) {
      return res.status(400).json({
        message: "Password must be at least 6 characters long, with one uppercase letter, one symbol, and one number"
      });
    }
  
    // Check if the email already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists with this email" });
    }
  
    // Hash the password
    const hashPassword = await bcrypt.hash(password, 10);
  
    // Create a new user
    const user = new User({
      name,
      email,
      password: hashPassword,
      number,
      role,
      orgName: role === "organization" ? orgName : undefined,
      orgType: role === "organization" ? orgType : undefined,
      orgService: role === "organization" ? orgService : undefined,
      registrationNumber: role === "organization" ? registrationNumber : undefined,
      contactPerson: role === "organization" ? contactPerson : undefined,
      contactInfo: role === "organization" ? contactInfo : undefined,
      address: role === "organization" ? address : undefined,
      city: role === "organization" ? city : undefined,
      description: role === "organization" ? description : undefined,
      Active: true,
      profileStatus: role === "organization" ? false : true, // Default true for non-org
    });
  
    // Save the user
    await user.save();
  
    // Sanitize response data (remove password from response)
    user.password = undefined;
    res.status(201).json({ message: "User registered successfully", data: user });
  });
  

  
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