# nusmoneysample

A sample application for the **National University of Singapore**'s [FintechSG Programme](https://fintechlab.nus.edu.sg/nus-fintechsg-programme/).
This sample NUSmoney app features HTML-CSS-Javascript frontend, Node.js backend and MySQL database.

This repo consists of the folders:
```
/frontend         HTML, CSS, Javascript code for the frontend client
/backend          Node.js code for the backend server
/database_sample  Sample data to load into your MySQL database
```

To clone this repo:
```
        git clone https://github.com/jscheele/nusmoneysample.git
```

Not included are:
- Database connection parameters. You will need to create a **.env** file in the **/backend** folder to contain connection parameters for your MySQL database. The **.env_sample** file contains a list of the parameters you need to set.
- Database server. The backend server uses the node.js mysql module to connect to a MySQL server. The MySQL server itself is not provided, but sample data is available in the **/database_sample** folder.
- Node modules. You will need to initialise a node.js project in the **/backend** folder:
```
        npm init                                                    /* initialise a new node.js application */
        npm install --save mysql express body-parser cors dotenv    /* install the modules required by the backend */
````     
To execute the code:
1. In the **/backend** server folder, execute the node.js application with:
```
        node main.js
```
3. In the **/frontend** folder, open **index.html** in your browser
