const express = require('express');
const router = express.Router()

const CareerRouter = require('../controllers/Career.controller')


router.get('/', CareerRouter.getRoute)


module.exports = router