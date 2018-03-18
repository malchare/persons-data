var Person = require('../model/person.model.js');


exports.create = function(req, res) {

    var person = new Person({name: req.body.name, surname: req.body.surname, age: req.body.age});
    person.save(function(err, data) {
        if(err) {
            res.status(500).send("error while creating the person");
        } else {
            res.send(data);
        }
    });

}


exports.find = function(req, res) {

    Person.find(function(err, data){
        if(err) {
            res.status(500).send("error while retrieving data");
        } else {
            res.send(data);
        }
    });

}