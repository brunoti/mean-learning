var express        = require('express');
var app            = express();
var router         = express.Router();
var bodyParser     = require('body-parser');
var mongoose       = require('mongoose');
var methodOverride = require('method-override');
var stylus         = require('stylus');
var path           = require('path');

var index = require('./app/routes/index');
var users = require('./app/routes/users');

//app.use(stylus.middleware(path.join(__dirname, 'public'))); 

// set our port
var port = process.env.PORT || 8080; 

// connect to our mongoDB database 
// (uncomment after you enter in your own credentials in config/db.js)
mongoose.connect('mongodb://localhost/test-db'); 

// get all data/stuff of the body (POST) parameters
// parse application/json 
app.use(bodyParser.json()); 

// parse application/vnd.api+json as json
app.use(bodyParser.json({ type: 'application/vnd.api+json' })); 

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true })); 

// override with the X-HTTP-Method-Override header in the request. simulate DELETE/PUT
app.use(methodOverride('X-HTTP-Method-Override')); 

// set the static files location /public/img will be /img for users
app.use(express.static(__dirname + '/public')); 

app.use('/', index); 
app.use('/users', users); 


app.listen(port);               
console.log('Magic happens on port ' + port);

exports = module.exports = app;       
