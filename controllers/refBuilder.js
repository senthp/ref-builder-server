const Referral = require("../models/referral");

const createReferral = async (req, res, next) => {
  const referral = await Referral.findOne({ email: req.body.email });

  if (referral) {
    return res.status(409).send({ message: "Duplicate referral" });
  }

  try {
    const newReferral = new Referral(req.body);
    const result = await newReferral.save();
    return res.send(result);
  } catch (err) {
    res.status(500).send(err);
  }
};

const getSingleReferral = (req, res, next) => {
  res.json({ message: "Get Single Referral for: " + req.params.email });
};

const getAllReferrals = async (req, res, next) => {
  try {
    const referrals = await Referral.find({});
    res.send(referrals);
  } catch (err) {
    res.status(500).send(err);
  }
};

const deleteAllReferrals = async (req, res, next) => {
  try {
    await Referral.deleteMany({});
    res.send({ message: "All referrals deleted" });
  } catch (err) {
    res.status(500).send(err);
  }
};

module.exports = {
  createReferral,
  getAllReferrals,
  getSingleReferral,
  deleteAllReferrals,
};
