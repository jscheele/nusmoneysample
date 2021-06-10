const database = require("./database");
const express = require("express");

router = express.Router();

router.get("/account/all", (request, response) =>{


var get_all_accounts = () =>{
    database.connection.query(`select * from account`,
        (errors, results) => {
            if (errors) {
                console.log(errors);
            } else {
                console.log(results);
            }
        }
    );
};


var get_account_by_id = (id) =>{
    database.connection.query(`select * from account where user = ${id}`,
        (errors, results) => {
            if (errors) {
                console.log(errors);
            } else {
                console.log(results);
            }
        }
    );
};

module.exports = {
    router
}