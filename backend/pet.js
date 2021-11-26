// Import database file to use the established mysql connection.
const database = require("./database");

// Import express to define URI mappings
const express = require("express");

// Define a router object which will hold the URI mappings.
router = express.Router();

// Define a mapping for a GET request on API path /account/by-aid
// to an arrow function which requires a parameter named id from the request
// and calls a mysql query and populates the response with the data.
router.get("/pet/by-aid", (request, response) => {
    // Before making a query, validate the id received from the request.
    // If the id is empty or if the id is not a number, then return a "bad request" response.
    if (request.query.account_id.length === 0 || isNaN(request.query.account_id)) {
        console.log(`Invalid ID received. ID: ${request.query.account_id}`);
        response.status(400).send("Invalid ID received.");
        return;
    }
    // After the validation check, call a mysql query to request data from account using the account id received in the request.
    database.connection.query(
        `select *
         from pet
         where account_id = ${request.query.account_id}`,
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

module.exports = {
    router,
};