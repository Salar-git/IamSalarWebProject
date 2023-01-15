const controller = require('./../controller');
const config = require('config')
const debug = require('debug')('app:API')
const jwt = require('jsonwebtoken')
module.exports = new (class extends controller {

    async get(req, res) {

        let output = []
        output = await this.Sample.find();
        if (output.length > 0) {
            return this.response({status: true, res, message: "List Of All Sample", data: output})
        } else {
            return this.response({status: false, res, message: "No Sample Is Exist", code: 404, data: output})
        }

    }

    async add(req, res) {
        const input = req.body
        const output = {}

        const sample = new this.Sample({firstName: input.firstName, lastName: input.lastName, age: input.age})
        const result = await sample.save()
        if (result != null) {
            const token = jwt.sign({_id: result._id}, config.get('jwt_key'))
            output.result = 'OK'
            output.token = token
            return this.response({status: true, res, message: "New Sample", data: output})
        } else {
            output.result = 'NOT OK'
            output.token = ''
            return this.response({status: false, res, message: "Cant Add Samplet", code: 404, data: output})
        }

    }


    async check(req, res) {
        const input = req.body
        const sample = await this.Sample.findOne({firstName: input.firstName, lastName: input.lastName})
        const output = {}
        if (sample != null) {
            const token = jwt.sign({_id: sample._id}, config.get('jwt_key'))
            output.result = 'OK'
            output.token = token
            return this.response({status: true, res, message: "Sample Is Exist", code: 200, data: output})

        } else {
            output.result = 'NOT OK'
            output.token = ''
            return this.response({status: false, res, message: "No Sample Is Exist", code: 404, data: output})
        }


    }

})();