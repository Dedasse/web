'use strict';
const routes = require("./routes/routes");
const express = require("express"),
    server = express(),
    fs = require("fs"),
    path = require("path"),
    https = require("https"),
    http = require("http")
const cookieParser = require("cookie-parser");


const port = process.env.SERVER_PORT
server.use(express.json());
server.use(routes);
server.use(cookieParser());

const options = {
    key: fs.readFileSync("private.key"),
    cert: fs.readFileSync("certificate.crt"),
};

http.createServer(options, server )
    .listen(port, function () {
        console.log(`SERVER listening on port ${port}!`)});