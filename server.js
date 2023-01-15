const express = require('express')
const app = express()
const PORT = process.env.SERVERPORT || 8080
const debug = require('debug')('app:main')
const config = require("config");




require('./startup/db')();
require('./startup/config')(app,express);
require('./startup/logging')();




app.listen(PORT, () => {
    debug(`${config.get('name')} Is Start On http://localhost:${PORT}`)
})












