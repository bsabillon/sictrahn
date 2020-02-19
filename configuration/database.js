const mysql = require("mysql");

var database = mysql.createConnection({
    host: '51.68.203.83', 
    user: 'gprometeo_sictra',
    password: 'adminsictra',
    database: 'gprometeo_sictra',
    multipleStatements: true
})


module.exports = database;