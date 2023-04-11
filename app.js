require('dotenv').config()

const bodyParser = require('body-parser');
const express = require('express');
const expressPartials = require('express-partials');
const morgan = require('morgan');
const app = express()



//importing self-created modules
const mainRouter = require('./router/main.router')



//using needful middleware
app.use(morgan('dev'))
app.use(bodyParser.urlencoded({ extended: false }))

app.use('/', express.static('public'))

//setting up template engin
app.set('view engine', 'ejs')
app.use(expressPartials())



//using router from router file
app.use(mainRouter)


app.listen(process.env.PORT || 5000, (err) => {
    if (err) return console.log(err)
    console.log(`Successfully started server on port number ${process.env.PORT || 5000}`)
})