const mongoose = require("mongoose");

const ReferralSchema = new mongoose.Schema({
  givenName: {
    type: String,
    required: true,
    trim: true,
  },
  surName: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    trim: true,
  },
  phone: {
    type: String,
    required: true,
    trim: true,
  },
  streetNumber: {
    type: String,
    required: true,
    trim: true,
  },
  streetName: {
    type: String,
    required: true,
    trim: true,
  },
  suburb: {
    type: String,
    required: true,
    trim: true,
  },
  state: {
    type: String,
    required: true,
    trim: true,
  },
  postcode: {
    type: String,
    required: true,
    trim: true,
  },
  country: {
    type: String,
    required: true,
    trim: true,
  },
});

const Referral = mongoose.model("Referral", ReferralSchema);

module.exports = Referral;
