const axios = require("axios");

async function getRoute(req, res) {
  return res.render("volunteer");
}

module.exports = {
  getRoute,
};
