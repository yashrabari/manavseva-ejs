const express = require('express');
const router = express.Router()

const indexRouter = require('./index.router')
const aboutRouter = require('./about.router')
const contactROuter = require('./contact.router')
const servicesRouter = require('./services.router')
const blogsRouter = require('./blogs.router')
const careerRouter = require('./career.router')
const galleryController = require('../controllers/gallery.controller')
const jobDetailsRouter = require('./jobDetail.router')


router.use('/', indexRouter)
router.use('/about', aboutRouter)
router.use('/contact', contactROuter)
router.use('/services', servicesRouter)
router.use('/blog', blogsRouter)
router.use('/careers', careerRouter)
router.get('/gallery', galleryController.getRoute)
router.use('/job-details', jobDetailsRouter)


module.exports = router