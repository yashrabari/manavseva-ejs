const express = require("express");
const router = express.Router();

const DonationDetailsController = require("../controllers/DonationDetails.controller");

router.get("/", DonationDetailsController.getRoute);

module.exports = router;
