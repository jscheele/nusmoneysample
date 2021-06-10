const mysql = require("mysql");
const dotenv = require("dotenv").config();

var properties = {
  host: `${process.env.DBHOST}`,
  port: process.env.DBPORT,
  user: `${process.env.DBUSER}`,
  password: `${process.env.DBPASSWD}`,
  database: `${process.env.DBNAME}`,
};

var connection = mysql.createConnection(properties);

connection.connect((errors) => {
  if (errors) {
    console.log("Couldn't connect to the MySQL Server. Error: " + errors);
  } else {
    console.log("Connected to MySQL successfully!");
  }
});

module.exports = {
  connection,
};
