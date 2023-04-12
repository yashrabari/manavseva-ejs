async function getRoute(req, res) {
  res.render("blogs", {
    route: "blogs",
  });
}

module.exports = {
  getRoute,
};
