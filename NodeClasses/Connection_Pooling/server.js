/*
var mysql= require("mysql");
/!*
var connection = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"root",
    database:"node_services"
});
connection.connect();
*!/

/!*
var pool = mysql.createPool({
    connectionLimit: 100, //important
    host: '127.0.0.1',
    user: 'root',
    password: 'root',
    database: 'node_services',
    debug: false
});
*!/

var config = require(__dirname+"/config.js");
var pool = mysql.createPool({
    connectionLimit: config.connectionLimit, //important
    host: config.host,
    user: config.user,
    password: config.password,
    database: config.database,
    debug: config.debug
});

pool.getConnection(function (err,connection) {
    connection.query("select * from user_details",function (err,records,fields) {
        console.log(records);
    });
});


*/

/*
var connection = mysql.createConnection({
    host:config.host,
    user:config.user,
    password:config.password,
    database:config.database
});
connection.connect();
 */

var mysql = require("mysql");
var config = require(__dirname+"/config.js");
var pool = mysql.createPool({
    connectionLimit:config.connectionLimit,
    user:config.user,
    password:config.password,
    database:config.database,
    debug:config.debug
});

pool.getConnection(function (err,connection) {
    connection.query("select * from user_details",function (err,records,fields) {
        console.log(records);
    });
});
