
const axios = require('axios')

var md = require("markdown-it")();




async function getRoute(req, res) {

    var services = await axios.get("http://185.208.206.231:8899/api/services?populate=*", {
        headers: {
            Authorization: "Bearer " + process.env.API_TOKEN
        }
    })

    res.render("services", {
        route: 'service',
        data: services.data.data
    })
}

async function getOneRoute(req, res) {
    var service = await axios.get(`http://185.208.206.231:8899/api/services/${req.params.id}?populate=*`, {
        headers: {
            Authorization: "Bearer " + process.env.API_TOKEN
        }
    })

    res.render("serviceDetails", {
        route: 'service',
        data: service.data.data,
        para: md.render(service.data.data.attributes.para)
    })
}




module.exports = {
    getRoute,
    getOneRoute
}