var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

//Config express app.
var app = express();
var port = process.env.PORT || 3000;

//Expose public directory to access CSS files.
app.use(express.static(path.join(__dirname, "./app/public")));

//middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());

//Application Routes
require(path.join(__dirname, "./app/routing/apiRoutes"))(app);
require(path.join(__dirname, "./app/routing/htmlRoutes"))(app);

app.listen(port, () => console.log("Listening on port %s", port));