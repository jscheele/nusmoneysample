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
  if (request.query.id.length == 0 || isNaN(request.query.id)) {
    console.log(`Invalid ID received. ID: ${request.query.id}`);
    response.status(400).send("Invalid ID received.");
    return;
  }
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
  if (request.query.id.length == 0 || isNaN(request.query.id)) {
    console.log(`Invalid ID received. ID: ${request.query.id}`);
    response.status(400).send("Invalid ID received.");
    return;
  }
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
