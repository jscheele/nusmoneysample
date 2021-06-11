// Import database file to use the established mysql connection.
const database = require("./database");

// Import express to define URI mappings
const express = require("express");

// Define a router object which will hold the URI mappings.
router = express.Router();

// Define a mapping for a GET request on API path /account/all
// to an arrow function which calls a mysql query and populates the response with the data.
router.get("/account/all", (request, response) => {
    // Make a mysql query to get all the records from accounts table.
    database.connection.query(
        `select *
         from account`,
        (errors, results) => {
            // if the query failed, return a "failure" message to the frontend client.
            if (errors) {
                console.log(errors);
                response.status(500).send("Internal Serve Error"); // status(500) sets the status code to 500, which means some error occurred in the server.
            }
            // Otherwise, populate the response with the results.
            else {
                response.status(200).send(results); // status(200) sets the status code to 200, which means response is OK.
            }
        });
});

// Define a mapping for a GET request on API path /account/by-aid
// to an arrow function which requires a parameter named id from the request
// and calls a mysql query and populates the response with the data.
router.get("/account/by-aid", (request, response) => {
    // Before making a query, validate the id received from the request.
    // If the id is empty or if the id is not a number, then return a "bad request" response.
    if (request.query.id.length === 0 || isNaN(request.query.id)) {
        console.log(`Invalid ID received. ID: ${request.query.id}`);
        response.status(400).send("Invalid ID received.");
        return;
    }
    // After the validation check, call a mysql query to request data from account using the account id received in the request.
    database.connection.query(
        `select *
         from account
         where account_id = ${request.query.id}`,
        (errors, results) => {
            // if the query failed, return a "failure" message to the frontend client.
            if (errors) {
                console.log(errors);
                response.status(500).send("Internal Serve Error"); // status(500) sets the status code to 500, which means some error occurred in the server.
            }
            // Otherwise, populate the response with the results.
            else {
                response.status(200).send(results); // status(200) sets the status code to 200, which means response is OK.
            }
        }
    );
});

// Define a mapping for a GET request on API path /account/by-uid
// to an arrow function which requires a parameter named id from the request
// and calls a mysql query and populates the response with the data.
router.get("/account/by-uid", (request, response) => {
    if (request.query.id.length === 0 || isNaN(request.query.id)) {
        console.log(`Invalid ID received. ID: ${request.query.id}`);
        response.status(400).send("Invalid ID received.");
        return;
    }
    database.connection.query(
        `select *
         from account
         where user_id = ${request.query.id}`,
        (errors, results) => {
            if (errors) {
                console.log(errors);
                response.status(500).send("Internal Serve Error");
            } else {
                response.status(200).send(results);
            }
        }
    );
});

module.exports = {
    router,
};
