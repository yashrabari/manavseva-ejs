const axios = require('axios')






async function getRoute(req, res) {
    var jobs = await axios.get("http://185.208.206.231:8899/api/jobs?filters[active][$eq]=true&populate=*", {
        headers: {
            Authorization: "Bearer " + process.env.API_TOKEN
        }
    })

    console.log(jobs.data.data)
    res.render("careers", {
        route: 'careers',
        data: jobs.data.data
    })
}




module.exports = {
    getRoute,
}