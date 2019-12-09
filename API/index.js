var express = require("express");
var app = express();
app.listen(6969);

//middleware
var cors = require("cors");
app.use(cors()); //allow cross-origin requests
//bodyparser
var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
//routes
app.use("/propertys", require("./property.js"));
