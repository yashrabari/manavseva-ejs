const express = require("express");
const router = express.Router();

const BlogsController = require("../controllers/Blogs.controller");

router.get("/", BlogsController.getRoute);

module.exports = router;
