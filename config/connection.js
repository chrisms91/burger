var mysql = require("mysql");

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    database: "burgers_db"
});

con.connect(function(err) {
    if (err) {
        console.error("Error connecting: " + err.stack);
    }
    console.log("Connected as id " + con.threadId);
});

module.exports = con;