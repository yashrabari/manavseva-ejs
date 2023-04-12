const express = require("express");
const router = express.Router();

const HelpHistoryRouter = require("../controllers/HelpHistory.controller");

router.get("/", HelpHistoryRouter.getRoute);

module.exports = router;
