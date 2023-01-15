const jwt = require('jsonwebtoken')
const config = require('config')
const Sample = require('../models/sample')

async function isLogin(req, res, next) {
    const token = req.header('x-auth-token')
    if (!token) {
        res.status(401).send({status: false, message: 'Access Denied', data: null})
    } else {
        try {
            const decoded = jwt.verify(token, config.get('jwt_key'))
            req.user = await Sample.findById(decoded._id)
            next()
        } catch (e) {
            res.status(400).send({status: false, message: 'Access Denied', data: null})

        }
    }

}

module.exports = {isLogin}