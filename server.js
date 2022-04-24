'use strict';
const routes = require("./routes/routes");
const express = require("express"),
    server = express(),
    fs = require("fs"),
    path = require("path"),
    https = require("https")
const cookieParser = require("cookie-parser");


const port = process.env.SERVER_PORT
server.use(express.json());
server.use(routes);
server.use(cookieParser());

const options = {
    key: fs.readFileSync("private.key"),
    cert: fs.readFileSync("certificate.crt"),
};

https.createServer(options, server )
.listen(port, function (req, res) {
  console.log(`SERVER listening on port ${port}!`)});


