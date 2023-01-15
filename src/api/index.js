const express = require('express');
const router = express.Router();
const sampleRouter = require('./sample');


const error = require('../middlewares/error')

router.use('/sample', sampleRouter);


router.use(error)
module.exports = router;