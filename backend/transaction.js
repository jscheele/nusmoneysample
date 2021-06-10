const database = require("./database");
const express = require("express");

router = express.Router();

router.get("/transaction/all", (request, response) => {
  database.connection.query(`select * from transaction`, (errors, results) => {
    if (errors) {
      console.log(errors);
      response.status(500).send("Internal Serve Error");
    } else {
      response.status(200).send(results);
    }
  });
});

router.get("/transaction/by-tid", (request, response) => {
  database.connection.query(
    `select * from transaction where transaction_id = ${request.query.id}`,
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

router.get("/transaction/by-uid", (request, response) => {
  database.connection.query(
    `select * from transaction where user_id = ${request.query.id}`,
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
