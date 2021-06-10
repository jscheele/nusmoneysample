# nusmoneysample
Sample NUSmoney app featuring HTML-CSS-Javascript frontend, Node.js backend and MySQL database

This repo consists of the folders:
/frontend         HTML, CSS, Javascript code for the frontend client
/backend          Node.js code for the backend server
/database_sample  Sample data to load into your MySQL database

Not included are:
- Database connection parameters. You will need to create a .env file in the /backend folder to contain connection parameters for your MySQL database. The .env_sample file contains a list of the parameters you need to set.
- Database server. The backend server uses the node.js mysql module to connect to a MySQL server. The MySQL server itself is not provided, but sample data is available in the /database_sample folder.
- Node modules. You will need to initialise a node.js project in the /backend folder:
        npm init
        npm install --save mysql express body-parser cors dotenv
        
To execute the code:
1. In the /backend server folder, execute the node.js application with: npm start main.js
2. In the /frontend folder, open index.html in your browser
