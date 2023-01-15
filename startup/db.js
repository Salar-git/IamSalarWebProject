const mongoose = require("mongoose");
const config = require("config");
const debug = require('debug')('app:main');

module.exports = function () {
    mongoose.connect(config.get('db.address'))
        .then(() => {
            debug('DataBase Connection Is Ok');
        })
        .catch((err) => {
            debug('DataBase Connection Is Not Ok');
        });
}