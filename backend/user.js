const database = require("./database");
const express = require("express");

router = express.Router();

router.get("/user/all", (request, response) => {
    database.connection.query(`select *
                               from user`, (errors, results) => {
        if (errors) {
            console.log(errors);
            response.status(500).send("Internal Serve Error");
        } else {
            response.status(200).send(results);
        }
    });
});

router.get("/user/by-uid", (request, response) => {
    if (request.query.user_id.length === 0 || isNaN(request.query.user_id)) {
        console.log(`Invalid ID received. ID: ${request.query.id}`);
        response.status(400).send("Invalid ID received.");
        return;
    }
    database.connection.query(
        `select *
         from user
         where user_id = ${request.query.user_id}`,
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

router.post("/user/add", (request, response) =>{
    let user = request.body;
    console.log(`Request object to be sent out: ${JSON.stringify(user)}`);
    database.connection.query(`insert into user (user_id, name, updated_at, picture, email, email_verified) values ("${user.user_id}", "${user.name}", now(), "${user.picture}", "${user.email}", "${user.email_verified}");`, (error, records) =>{
        if(error){
            console.log(error)
            response.status(500).send("Some error occured when adding a user");
        }else{
            response.status(200).send("User added to database successfully");
        }
    })
})

// Define a mapping for a DELETE request on API path /account/by-uid
// to an arrow function which requires a parameter named id from the request
// and calls a mysql query and populates the response with the data.
router.delete("/user/delete", (request, response) => {
    if (request.query.user_id.length === 0 || isNaN(request.query.user_id)) {
        console.log(`Invalid ID received. ID: ${request.query.user_id}`);
        response.status(400).send("Invalid ID received.");
        return;
    }
    database.connection.query(
        `delete from user where user_id = ${request.query.user_id}`,
        (errors, results) => {
            if (errors) {
                console.log(errors);
                response.status(500).send("Internal Serve Error");
            } else {
                console.log(`User: ${request.query.user_id} successfully deleted`);
                response.status(200).send("User deleted successfully");
            }
        }
    );
});

module.exports = {
    router,
};
