

const axios = require('axios')
var FormData = require('form-data');
const fs = require('fs')


async function getRoute(req, res) {

    var job = await axios.get(`http://185.208.206.231:8899/api/jobs/${req.params.id}?populate=*`, {
        headers: {
            Authorization: "Bearer " + process.env.API_TOKEN
        }
    })

    console.log()

    res.render("jobDetails", {
        route: 'careers',
        data: job.data.data,
        message: req.query.success == 'true' ? "Successfully uploaded your data our team will contact you soon." : null,
    })
}

async function postRoute(req, res) {
    var job = await axios.get(`http://185.208.206.231:8899/api/jobs/${req.params.id}?populate=*`, {
        headers: {
            Authorization: "Bearer " + process.env.API_TOKEN
        }
    })

    var form = new FormData()
    form.append('files.resume', fs.createReadStream(req.files.resume.path), req.files.resume.fileName + '.pdf');
    form.append('data', JSON.stringify({ ...req.fields, job: req.params.id }));

    // console.log(form)
    var jobRequest = await axios.post(`http://185.208.206.231:8899/api/job-requests`, form, {
        headers: {
            Authorization: "Bearer " + process.env.API_TOKEN
        }
    })

    if (!jobRequest.data.data.id) return res.render("jobDetails", {
        route: 'careers',
        message: "Something went wrong!",
        data: job.data.data,
    })

    return res.redirect('/job-details/2?success=true')

}

module.exports = {
    getRoute,
    postRoute
}