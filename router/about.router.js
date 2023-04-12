const express = require("express");
const router = express.Router();

const AboutController = require("../controllers/About.controller");

router.get("/", AboutController.getRoute);

module.exports = router;
