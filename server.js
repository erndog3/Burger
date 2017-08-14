var express = require("express");
var bodyParser = require("body-parser");
var methodOverride = require("method-override");
var orm = require ("./config/orm.js");

var app = express();

var PORT = process.env.PORT || 8080;

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("public"));

// Parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());
// parse various different custom JSON types as JSON 
app.use(bodyParser.json({ type: 'application/*+json' }));
// parse some custom thing into a Buffer 
app.use(bodyParser.raw({ type: 'application/vnd.custom-type' })); 
// parse an HTML body into a string 
app.use(bodyParser.text({ type: 'text/html' }));
// Override with POST having ?_method=DELETE
app.use(methodOverride("_method"));

//Uses handlds as the default templating engine
var exphbs = require("express-handlebars");
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

//imports the routes
var routes = require('./controllers/burgers_controllers.js');
app.use('/', routes);


//begins listener
app.listen(port, function() {
  console.log("Listening on PORT " + port);
});
