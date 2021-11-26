const database = require("./database");
const express = require("express");

router = express.Router();

router.get("/wallet_transaction/all", (request, response) => {
    database.connection.query(`select *
        from wallet_transaction`, (errors, results) => {
        if (errors) {
            console.log(errors);
            response.status(500).send("Internal Serve Error");
        } else {
            response.status(200).send(results);
        }
    });
});

router.get("/wallet_transaction/by-tid", (request, response) => {
    if (request.query.transaction_id.length === 0 || isNaN(request.query.transaction_id)) {
        console.log(`Invalid ID received. ID: ${request.query.transaction_id}`);
        response.status(400).send("Invalid ID received.");
        return;
    }
    database.connection.query(
        `select *
         from wallet_transaction
         where transaction_id = ${request.query.transaction_id}`,
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

router.get("/wallet_transaction/by-wid", (request, response) => {
    if (request.query.wallet_id.length === 0 || isNaN(request.query.wallet_id)) {
        console.log(`Invalid ID received. ID: ${request.query.wallet_id}`);
        response.status(400).send("Invalid ID received.");
        return;
    }
    database.connection.query(
        `select *
         from wallet_transaction
         where transaction_id = ${request.query.wallet_id}`,
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

router.post("/wallet_transaction/add", (request, response) =>{
    console.log('HIT');
    let transaction = request.body;
    console.log(`wallet_transaction/add: ${JSON.stringify(transaction)}`);
    var query = `insert into wallet_transaction (transaction_id, transaction_date, wallet_id, cryptocurrency_id, cryptocurrency_amount, fiat_amount, fiat_currency)
    values (${transaction.transaction_id}, now(), "${transaction.wallet_id}", "${transaction.cryptocurrency_id}", "${transaction.cryptocurrency_amount}", "${transaction.fiat_amount}", "${transaction.fiat_currency}");`
    console.log(`wallet_transaction/add: Query: ${query}`);
    database.connection.query( query, (error, records) =>{
        if(error){
            console.log(error)
            response.status(500).send("Some error occured when adding a wallet transaction");
        }else{
            response.status(200).send("Wallet Transaction added succesfully");
        }
    })
})

// // Define a mapping for a DELETE request on API path /wallet_transaction/delete
// // to an arrow function which requires a parameter named id from the request
// // and calls a mysql query and populates the response with the data.
// router.delete("/wallet_transaction/delete", (request, response) => {
//     if (request.query.transaction_id.length === 0 || isNaN(request.query.transaction_id)) {
//         console.log(`Invalid ID received. ID: ${request.query.transaction_id}`);
//         response.status(400).send("Invalid ID received.");
//         return;
//     }

//     var query = `delete from wallet_transaction where transaction_id = ${request.query.transaction_id}`;
//         database.connection.query(query, (error, result) => {
//             if (error){
//                 console.log(`Unable to delete wallet transaction: ${request.query.transaction_id}. Error: ${error}`);
//                 response.status(500).send(`Unable to delete transaction record: ${request.query.transaction_id}`);
//             }else{
//                 response.status(200).send("Transaction deleted successfully");
//             }
//         })

// })

module.exports = {
    router,
};
