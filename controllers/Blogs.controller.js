var md = require("markdown-it")();

const axios = require('axios')

async function getRoute(req, res) {
    var data = await axios.get("http://185.208.206.231:8899/api/blogs?populate=*", {
        headers: {
            Authorization: "Bearer " + process.env.API_TOKEN
        }
    })
    res.render("blogs", {
        data: data.data.data,
        route: 'blog'
    })
}

async function getOneEventRoute(req, res) {
    var data = await axios.get(`http://185.208.206.231:8899/api/blogs/${req.params.id}?populate=*`, {
        headers: {
            Authorization: "Bearer " + process.env.API_TOKEN
        }
    })
    var recentPosts = await axios.get(`http://185.208.206.231:8899/api/blogs?sort[0]=createdAt%3Adesc&pagination[start]=0&pagination[limit]=5`, {
        headers: {
            Authorization: "Bearer " + process.env.API_TOKEN
        }
    })
    console.log(recentPosts.data.data)
    res.render("blogDetails", {
        data: data.data.data,
        content: md.render(data.data.data.attributes.content),
        recentPosts: recentPosts.data.data,
        route: 'blog'
    })
}




module.exports = {
    getRoute,
    getOneEventRoute
}