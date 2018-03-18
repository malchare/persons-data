module.exports = function(app) {

    var person = require('../controllers/person.controller.js');

    app.get('/app', person.find);
    app.post('/app', person.create);

}