const morgan = require('morgan')
// importing routes
const router = require('../src/api');


module.exports = function (app,express){
    process.env.TZ = "Asia/Tehran";
    app.use(express.json({limit: '50mb'}));
    app.use(express.urlencoded({limit: '50mb',extended: true}));
    app.use(express.static('assets'));
    app.use(morgan('tiny'))


    //use routes
    app.use('/api', router);
}