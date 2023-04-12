const axios = require("axios");

async function getRoute(req, res) {
  return res.render("helpHistory");
}

module.exports = {
  getRoute,
};
