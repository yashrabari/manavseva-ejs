const express = require("express");
const router = express.Router();

const EventDetailsController = require("../controllers/EventDetails.controller");

router.get("/", EventDetailsController.getRoute);

module.exports = router;
