const axios = require("axios");

async function getRoute(req, res) {
  return res.render("eventsDetails");
}

module.exports = {
  getRoute,
};
