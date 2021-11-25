const database = require("./database");
const express = require("express");

router = express.Router();

router.put("/wallet/update-balance", (request, response) =>{
    let wallet = request.body;
    console.log(`Request object to be sent out: ${wallet}`);
    database.connection.query(`update wallet set wallet_balance = (${wallet.wallet_balance}) where account_id = ${wallet.account_id};`, (error, records) =>{
        if(error){
            console.log(error)
            response.status(500).send("Some error occured when updating wallet balance");
        }else{
            response.status(200).send("Wallet balance successfully updated to database");
        }
    })
})

module.exports = {
    router,
};