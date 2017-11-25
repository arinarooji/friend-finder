//Dependencies
var express = require("express");
var bodyParser = require("body-parser");

//Tells node that we are creating an "express" server
var app = express();

//Designate a port
var PORT = process.env.PORT || 8080;

//Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//Router: Points the server to the these route file
require("./routing/apiRoutes")(app);
require("./routing/htmlRoutes")(app);

//Listener
app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
});