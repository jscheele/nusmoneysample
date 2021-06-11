// Import mysql package to connect to mysql server
const mysql = require("mysql");
// Import dotenv to import properties from .env file
const dotenv = require("dotenv").config();

// Define properties to be used for mysql connection
const properties = {
    host: `${process.env.DBHOST}`,
    port: process.env.DBPORT,
    user: `${process.env.DBUSER}`,
    password: `${process.env.DBPASSWD}`,
    database: `${process.env.DBNAME}`,
};

// Create a connection object which will hold the connection to cloud mysql server.
let connection = mysql.createConnection(properties);

// Attempt to connect with the mysql server.
// If connection fails, print the error message. Otherwise, print the success message.
connection.connect((errors) => {
    if (errors) {
        console.log("Couldn't connect to the MySQL Server. Error: " + errors);
    } else {
        console.log("Connected to MySQL successfully!");
    }
});

// Export the connection object so that it could be used in other code files.
module.exports = {
    connection,
};
