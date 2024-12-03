const mongoose = require('mongoose');

const organizationSchema = new mongoose.Schema({
  name: { type: String, required: true },
  address: { type: String, required: true },
  website: { type: String },
  contactPerson: { type: String, required: true },
  phone: { type: String, required: true },
  isActive:{
    type:Boolean,
    default:false,
  },
  description: { type: String },
  
  // Reference to the User collection
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true }, // Reference to User schema
  
}, { timestamps: true });

const Organization = mongoose.model('Organization', organizationSchema);
module.exports = Organization;
