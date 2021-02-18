const mongoose = require('mongoose');
const ServicesSchema = mongoose.Schema({
    heading:String,
    description:String,
    img:String
});
module.exports = mongoose.model('service',ServicesSchema);