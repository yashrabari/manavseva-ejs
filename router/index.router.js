const express = require('express');
const router = express.Router()

const HomeController = require('../controllers/Home.controller')


router.get('/', HomeController.getRoute)


module.exports = router