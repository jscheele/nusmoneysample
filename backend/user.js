const database = require("./database");
const express = require("express");

router = express.Router();

router.get("/user/all", (request, response) =>{
    database.connection.query(`select * from user`,
        (errors, results) => {
            if (errors) {
                response.status(500).send("Some error occurred")
            } else {
                response.status(200).send(results);
            }
        }
    );
});

router.get("/user/id", (request, response) =>{
    database.connection.query(`select * from user where id = ${request.query.id}`,
        (errors, results) => {
            if (errors) {
                response.status(500).send("Some error occurred")
            } else {
                response.status(200).send(results);
            }
        }
    );
});

router.post("/user/add", (request, response) =>{
    database.connection.query(`select * from user where id = ${request.query.id}`,
        (errors, results) => {
            if (errors) {
                response.status(500).send("Some error occurred")
            } else {
                response.status(200).send(results);
            }
        }
    );
});

module.exports = {
    router
}