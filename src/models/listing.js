const mongoose = require('mongoose');

const listingModel = mongoose.Schema(
  {
  title: {type: String, required: '{PATH} is required'},
  description: String,
  image: { data: Buffer, contentType: String },
  city: String
}, 
{
  timestamps: true
});

module.exports = mongoose.model('Listing', listingModel);