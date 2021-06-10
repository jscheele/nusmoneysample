# nusmoneysample
Sample NUSmoney app featuring HTML-CSS-Javascript frontend, Node.js backend and MySQL database

This repo consists of the folders:
/frontend         HTML, CSS, Javascript code for the frontend client
/backend          Node.js code for the backend server
/database_sample  Sample data to load into your MySQL database

Not included are:
- Database connection parameters. You will need to create a .env file in the /backend folder to contain connection parameters for your MySQL database.
- Node modules. You will need to initialise a node.js project in the /backend folder:
        npm init
        npm install --save mysql express body-parser cors dotenv
        
