// Dependencies
const express = require("express");
const bodyParser = require("body-parser");
var logger = require("morgan");
const mongoose = require("mongoose");
const methodOverride = require('method-override');
const path = require('path');

// Mongoose mpromise deprecated - use bluebird for promises
const Promise = require("bluebird");

mongoose.Promise = Promise;


//model controllers
const App = require("./controllers/app");
const Search = require("./controllers/search");
const clients_controller = require('./controllers/clients_controller');

// instantiatize express
const app = express();

// Express settings
// ================

// what to send based on route
app.use('/', App);
app.use('/search', Search);
app.use('/client', clients_controller);

// override POST to have DELETE and PUT
app.use(methodOverride('_method'));

// view engine setup
app.set('views', path.join(__dirname, 'views'));

app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static(path.join(__dirname, 'public')));

// Database configuration with mongoose
mongoose.connect("mongodb://localhost/homeApp");
const db = mongoose.connection;

// Show any mongoose errors
db.on("error", function(error) {
  console.log("Mongoose Error: ", error);
});

// Once logged in to the db through mongoose, log a success message
db.once("open", function() {
  console.log("Mongoose connection successful.");
});

const port = process.env.PORT || 3000;

// listen on port 3000 when local
app.listen(port, function(){
	console.log("Listening on port %s", port);
})

// our module get's exported as app.
module.exports = app;
