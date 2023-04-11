const express = require('express');
const router = express.Router()

const ServicesController = require('../controllers/Services.controller')


router.get('/', ServicesController.getRoute)
router.get('/:id', ServicesController.getOneRoute)


module.exports = router