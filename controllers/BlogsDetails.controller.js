const axios = require("axios");

async function getRoute(req, res) {
  return res.render("blog-details");
}

module.exports = {
  getRoute,
};
