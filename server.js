'use strict';
const express = require('express');
const routes = require("./routes/routes");
const cookieParser = require("cookie-parser");
const server = express();
const port = process.env.SERVER_PORT
// const cors = require('cors')
// remove later if no issues
server.use(express.json());
server.use(routes);
server.use(cookieParser());


server.listen(port, () => console.log(`SERVER listening on port ${port}!`));


