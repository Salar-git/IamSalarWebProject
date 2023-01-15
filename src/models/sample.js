const mongoose = require('mongoose');
const timeStamp = require("mongoose-timestamp");


const sampleSchema = new mongoose.Schema({
    firstName: {type: String, default: ''},
    lastName: {type: String, default: ''},
    age: {type: Number, default: ''},
})
sampleSchema.plugin(timeStamp);
const Sample = mongoose.model('Sample', sampleSchema);
module.exports = Sample;
