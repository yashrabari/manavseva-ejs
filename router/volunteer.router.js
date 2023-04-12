const express = require("express");
const router = express.Router();

const VolunteerRouter = require("../controllers/Volunteer.controller");

router.get("/", VolunteerRouter.getRoute);

module.exports = router;
