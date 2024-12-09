const mongoose = require("mongoose")

const orgSchema = new mongoose.Schema({
    orgName: {
        type: String,
        required: true
    },
    orgEmail: {
        type: String,
        required: true,
        unique: true
    },
    number: {
        type: Number,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    role: {
        type: String,
        required: true,
        enum: ['organization'] // Correctly defined as an array
    },
    registrationNumber: {
        type:String,
        required:true,
    },
    address: {
        type:String,
        required:true
    },
    city:{
        type:String,
        required :true,

    },
    description:{
        type :String,
        required:true
    }
    

},{
    timestamps:true
})

module.exports = mongoose.model("organization",orgSchema)