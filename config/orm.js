// Import mysql connection.
var con = require("./connection.js");

// Object Relational Mapper
var orm = {
    selectAll: function(callback) {
        var queryString = "SELECT * FROM burgers";
        con.query(queryString, function(err, data){
            if (err) throw err;

            console.log(data);
            callback(data);
        });
    },

    insertOne: function(whatToInsert, callback) {
        var queryString = "INSERT INTO burgers SET ?";
        con.query(queryString, [{burger_name: whatToInsert}], function(err, data){
            if (err) throw err;

            console.log("\nNew Burger " + whatToInsert + " is inserted into database!\n");
            console.log(data);
            callback(data);
        });
    },

    updateOne: function(whatToUpdate, updateValue, callback) {
        var queryString = "UPDATE burgers SET ? WHERE ?";
        con.query(queryString, [{devoured: updateValue}, {id: whatToUpdate}], function(err, data){
            if (err) throw err;

            console.log("\n" + whatToUpdate + " is updated to " + updateValue + "\n");
            console.log(data);
            callback(data);
        });
    }
}

// Export orm object
module.exports = orm;