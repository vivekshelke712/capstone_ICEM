const mongoose = require('mongoose');

const helpRequestSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    age: {
        type: Number,
        required: true,
        min: 1,
        max: 100,
    },
    needType: {
        type: String,
        required: true,
    },
    contact: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    city: {
        type: String,
        required: true,
    },
    organization: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Organization', // Reference to the Organization model
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    isApproved: {
        type: Boolean,
        default: false,
    },
}, {
    timestamps: true,
});

module.exports = mongoose.model('HelpRequest', helpRequestSchema);