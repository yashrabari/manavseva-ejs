const express = require('express');
const formidableMiddleware = require('express-formidable');

const router = express.Router()

const jobDetailController = require('../controllers/JobDetail.controller')


router.get('/:id', jobDetailController.getRoute)
router.use(formidableMiddleware());
router.post('/:id', jobDetailController.postRoute)


module.exports = router