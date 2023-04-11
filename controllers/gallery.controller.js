
const axios = require('axios')





async function getRoute(req, res) {

    var gallery = await axios.get("http://185.208.206.231:8899/api/gallery?populate=*", {
        headers: {
            Authorization: "Bearer " + process.env.API_TOKEN
        }
    })
    res.render("gallery", {
        gallery: gallery.data.data.attributes.gallery.data,
        route: 'gallery'
    })
}




module.exports = {
    getRoute,
}