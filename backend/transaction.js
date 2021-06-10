const database = require("./database");
const express = require("express");

router = express.Router();

router.get("/transaction/all", (request, response) => {
    database.connection.query(`select *
                               from transaction`, (errors, results) => {
        if (errors) {
            console.log(errors);
            response.status(500).send("Internal Serve Error");
        } else {
            response.status(200).send(results);
        }
    });
});

router.get("/transaction/by-tid", (request, response) => {
    if (request.query.id.length === 0 || isNaN(request.query.id)) {
        console.log(`Invalid ID received. ID: ${request.query.id}`);
        response.status(400).send("Invalid ID received.");
        return;
    }
    database.connection.query(
        `select *
         from transaction
         where transaction_id = ${request.query.id}`,
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
