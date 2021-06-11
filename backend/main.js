// import express to create backend service
const express = require("express");
// import body-parser to parse incoming requests
const bodyParser = require("body-parser");
// import cors to allow running server and client on the same system
const cors = require("cors");

// Import the code from user, account and transaction
const user = require("./user");
const account = require("./account");
const transaction = require("./transaction");

// create a service object which will listen to clients' requests
service = express();
// Tell the service to use JSON parser to parse requests.
service.use(bodyParser.json());
// Tell the service to use cors.
service.use(cors());

// Import API path mappings from user.js
service.use(user.router);
// Import API path mappings from account.js
service.use(account.router);
// Import API path mappings from transaction.js
service.use(transaction.router);

// Start the service at port number 3000
service.listen(3000);
