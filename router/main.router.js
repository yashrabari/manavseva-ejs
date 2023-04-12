const express = require("express");
const router = express.Router();

const indexRouter = require("./index.router");
const aboutRouter = require("./about.router");
const contactRouter = require("./contact.router");
const blogsRouter = require("./blogs.router");
const blogsDetailsRouter = require("./blogsDetails.router");
const eventsRouter = require("./events.router");
const eventsDetailsRouter = require("./eventsDetails.router");
const donationRouter = require("./donation.router");
const donationDetailsRouter = require("./donationDetails.router");
const getHelpRouter = require("./getHelp.router");
const helpHistoryRouter = require("./helpHistory.router");
const volunteerRouter = require("./volunteer.router");

router.use("/", indexRouter);
router.use("/about", aboutRouter);
router.use("/contact", contactRouter);
router.use("/blog", blogsRouter);
router.use("/blog/details", blogsDetailsRouter);
router.use("/event", eventsRouter);
router.use("/event/details", eventsDetailsRouter);
router.use("/donation", donationRouter);
router.use("/donation/details", donationDetailsRouter);
router.use("/getHelp", getHelpRouter);
router.use("/helpHistory", helpHistoryRouter);
router.use("/volunteer", volunteerRouter);

module.exports = router;
