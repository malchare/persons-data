var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var mongoose = require('mongoose');

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/demo', function (err, db) {
    console.log(mongoose.connection.readyState);
});
mongoose.connection.on('error', function() {
    console.log('Could not connect to the database.');
    process.exit();
});
mongoose.connection.once('open', function() {
    console.log("Connected to the database.");
});

app.get('/', function(req, res){
    res.send("Welcome to app!");
});

require('./routes/person.routes.js')(app);

app.listen(8000, function(){
    console.log("Server running...");
});
