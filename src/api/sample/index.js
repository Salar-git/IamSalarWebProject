const express = require('express');
const router = express.Router();
const controller = require('./controller');
const {isLogin} = require('../../middlewares/auth')

router.get('/', isLogin, controller.get);
router.post('/', controller.add);
router.post('/check', controller.check);


module.exports = router;
