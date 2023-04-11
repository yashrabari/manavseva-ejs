const express = require('express');
const router = express.Router()

const ContactRouter = require('../controllers/Contact.controller')


router.get('/', ContactRouter.getRoute)


module.exports = router