const express = require("express");
const router = express.Router();

const DonationController = require("../controllers/Donation.controller");

router.get("/", DonationController.getRoute);

module.exports = router;
