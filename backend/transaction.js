const database = require("./database");
const express = require("express");

router = express.Router();

router.get("/transaction/all", (request, response) => {


    var get_all_transactions = () => {
        database.connection.query(`select * from transaction`,
            (errors, results) => {
                if (errors) {
                    console.log(errors);
                } else {
                    console.log(results);
                }
            }
        );
    };


    var get_transaction_by_id = (id) => {
        database.connection.query(`select * from transaction where transaction_id = ${id}`,
            (errors, results) => {
                if (errors) {
                    console.log(errors);
                } else {
                    console.log(results);
                }
            }
        );
    };

    var get_transaction_by_user = (user) => {
        database.connection.query(`select * from transaction where user_id = ${user}`,
            (errors, results) => {
                if (errors) {
                    console.log(errors);
                } else {
                    console.log(results);
                }
            }
        );
    };
});

    module.exports = {
        router
    };