const axios = require("axios");

async function getRoute(req, res) {
  return res.render("getHelp");
}

module.exports = {
  getRoute,
};
