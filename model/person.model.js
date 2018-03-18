var mongoose = require('mongoose');

var personSchema = mongoose.Schema({
    name: String,
    surname: String,
    age: Number
});

module.exports = mongoose.model('Person', personSchema);