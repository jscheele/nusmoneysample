const express = require("express");
const bodyParser = require("body-parser");
const user = require("./user");
const account = require("./account");
const transaction = require("./transaction");

app = express();
app.use(bodyParser.json());

app.use(user.router);
app.use(account.router);
app.use(transaction.router);

app.listen(3000);