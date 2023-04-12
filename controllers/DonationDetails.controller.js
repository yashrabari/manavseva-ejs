const axios = require("axios");

async function getRoute(req, res) {
  return res.render("donationDetails");
}

module.exports = {
  getRoute,
};
