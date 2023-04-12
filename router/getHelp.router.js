const express = require("express");
const router = express.Router();

const GetHelpController = require("../controllers/GetHelp.controller");

router.get("/", GetHelpController.getRoute);

module.exports = router;
