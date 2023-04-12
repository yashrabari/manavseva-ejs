const express = require("express");
const router = express.Router();

const EventController = require("../controllers/Event.controller");

router.get("/", EventController.getRoute);

module.exports = router;
