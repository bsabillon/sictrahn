const mysql = require("mysql");

var database = mysql.createPool({
    host: 'us-cdbr-iron-east-04.cleardb.net', 
    user: 'b2f5ade50893bc',
    password: 'd65d8fa0',
    database: 'heroku_0c8724ebbc7aa98',
    multipleStatements: true,
    connectTimeout: 1000000
})


module.exports = database;