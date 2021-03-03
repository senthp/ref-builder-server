const express = require("express");
const refBuilderController = require("../controllers/refBuilder");

const router = express.Router();

// Create Referral route
router.post("/referral", refBuilderController.createReferral);

// Get all referrals
router.get("/referrals", refBuilderController.getAllReferrals);

// Get one referral
router.get("/referral/:email", refBuilderController.getSingleReferral);

// Delete all referrals
router.delete("/referrals", refBuilderController.deleteAllReferrals);

module.exports = router;
