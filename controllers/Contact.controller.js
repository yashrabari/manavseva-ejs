






async function getRoute(req, res) {

    var contactFunction = async () => {
        console.log("hello i am here")
    }

    res.render("contact", {
        cb: contactFunction,
        route: 'contact'
    })
}




module.exports = {
    getRoute,
}