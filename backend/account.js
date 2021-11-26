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
    if (request.query.account_id.length === 0 || isNaN(request.query.account_id)) {
        console.log(`Invalid ID received. ID: ${request.query.account_id}`);
        response.status(400).send("Invalid ID received.");
        return;
    }
    // After the validation check, call a mysql query to request data from account using the account id received in the request.
    database.connection.query(
        `select *
         from account
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

// Define a mapping for a GET request on API path /account/by-uid
// to an arrow function which requires a parameter named id from the request
// and calls a mysql query and populates the response with the data.
router.get("/account/by-uid", (request, response) => {
    if (request.query.user_id.length === 0 || isNaN(request.query.user_id)) {
        console.log(`Invalid ID received. ID: ${request.query.user_id}`);
        response.status(400).send("Invalid ID received.");
        return;
    }
    database.connection.query(
        `select *
         from account
         where user_id = ${request.query.user_id}`,
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

router.post("/account/add", (request, response) =>{
    let account = request.body;
    console.log(`Request object to be sent out: ${JSON.stringify(account)}`);
    database.connection.query(`insert into account (account_id, user_id, account_name, wallet_id) values (${account.account_id}, ${account.user_id}, "${account.account_name}", "${account.wallet_id}");`, (error, records) =>{
        if(error){
            console.log(error)
            response.status(500).send("Some error occured when adding a user");
        }else{
            response.status(200).send("User added to database successfully");
        }
    })
})

// Define a mapping for a DELETE request on API path /account/by-uid
// to an arrow function which requires a parameter named id from the request
// and calls a mysql query and populates the response with the data.
router.delete("/account/delete", (request, response) => {
        if (request.query.account_id.length === 0 || isNaN(request.query.account_id)) {
            console.log(`Invalid ID received. ID: ${request.query.account_id}`);
            response.status(400).send("Invalid ID received.");
            return;
        }

        async function getUserIdAccount(){
            var query1 = `select account.user_id from user
            right join account
            on user.user_id = account.account_id
            where account.account_id = ${request.query.account_id}`;

            database.connection.query(query1, async (error, result) => {
                console.log(query1);
                if (error){
                    console.log(`Unable to find account that is tagged to user account. Error: ${error}`);
                    response.status(500).send(`Unable to delete account: ${request.query.account_id}`);
                }else{
                    data1 = await result;
                    console.log(`getUserIdAccount: ${JSON.stringify(data1)}`);
                    await deleteAccount(data1);
                }
            })
        }

       async function deleteAccount(data1){
            var query2 = `delete from account where account_id = ${request.query.account_id}`;
            database.connection.query(query2, async (error, result) => {
                console.log(query2);
                if (error){
                    console.log(`Unable to delete account: ${request.query.account_id}. Error: ${error}`);
                    response.status(500).send(`Unable to delete user's account: ${request.query.account_id}`);
                }else{
                    data2 = await result;
                    console.log(`deleteAccount: ${JSON.stringify(data2)}`);
                    console.log(`data: in delete account: ${JSON.stringify(data1)}`);
                    await deleteUserAccount(data1);
                }
            })
        }

        async function deleteUserAccount(data1){
            console.log(`deleteUserAccount: ${JSON.stringify(data1)}`);
            console.log(`data1 user_id: ${data1[0].user_id}`);
            var query3 = `delete from user where user_id = ${data1[0].user_id}`;
            database.connection.query(query3, [data1[0].userid]  ,async (error, result) => {
                console.log(`data: in deleteUserAccount: ${JSON.stringify(data1)}`);
                console.log(query3);
                if(error){
                    console.log(`Unable to delete user: ${data1[0].user_id}. Error: ${error}`);
                    response.status(500).send(`Unable to delete user account: ${data1[0].user_id}`);
                }else{
                    data3 = await result;
                    console.log(`deleteUserAccount: ${JSON.stringify(data3)}`);
                    console.log(`Deleted account: ${request.query.account_id} associated with User: ${data1[0].user_id}.`);
                    response.status(200).send("Account deleted successfully");
                }
            })
        }

        getUserIdAccount();
})

module.exports = {
    router,
};
