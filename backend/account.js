const database = require("./database");
const express = require("express");

router = express.Router();

router.get("/account/all", (request, response) => {
  database.connection.query(`select * from account`, (errors, results) => {
    if (errors) {
      console.log(errors);
      response.status(500).send("Internal Serve Error");
    } else {
      response.status(200).send(results);
    }
  });
});

router.get("/account/by-aid", (request, response) => {
  database.connection.query(
    `select * from account where id = ${request.query.id}`,
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

router.get("/account/by-uid", (request, response) => {
  database.connection.query(
    `select * from account where user = ${request.query.id}`,
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
