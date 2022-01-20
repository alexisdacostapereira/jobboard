const mysql = require ('mysql');
const db = mysql.createConnection ({
    password:'password',
    user:'root',
    database:'jobboard',
    host:'localhost',
    port:'3306'
});

module.exports = db;



