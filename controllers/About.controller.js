const axios = require("axios");

async function getRoute(req, res) {
  var testimonials = await axios.get(
    "http://185.208.206.231:8899/api/testimonials?populate=*",
    {
      headers: {
        Authorization: "Bearer " + process.env.API_TOKEN,
      },
    }
  );
  var gallery = await axios.get(
    "http://185.208.206.231:8899/api/gallery?populate=*",
    {
      headers: {
        Authorization: "Bearer " + process.env.API_TOKEN,
      },
    }
  );
  res.render("about", {
    testimonials: testimonials.data.data,
    gallery: gallery.data.data.attributes.gallery.data,
    route: "about",
  });
}

module.exports = {
  getRoute,
};
