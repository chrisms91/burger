var con = require("./connection.js");

// Object Relational Mapper
var orm = {
    selectAll: function(cb) {
        var queryString = "SELECT * FROM burgers";
        con.query(queryString, function(err, data){
            if (err) throw err;

            cb(data);
        });
    },

    insertOne: function(whatToInsert, cb) {
        var queryString = "INSERT INTO burgers SET ?";
        con.query(queryString, [{burger_name: whatToInsert}], function(err, data){
            if (err) throw err;

            console.log("\nNew Burger " + whatToInsert + " is inserted into database!\n");
            cb(data);
        });
    },

    updateOne: function(whatToUpdate, updateValue, cb) {
        var queryString = "UPDATE burgers SET ? WHERE ?";
        con.query(queryString, [{devoured: updateValue}, {id: whatToUpdate}], function(err, data){
            if (err) throw err;

            console.log("\n" + whatToUpdate + " is updated to " + updateValue + "\n");
            cb(data);
        });
    }
}

module.exports = orm;