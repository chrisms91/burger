// Import mysql connection.
var con = require("./connection.js");

// Helper function for SQL syntax.
function objToSql(ob) {
    var arr = [];
  
    for (var key in ob) {
      if (Object.hasOwnProperty.call(ob, key)) {
        arr.push(key + "=" + ob[key]);
      }
    }
  
    return arr.toString();
}

// Object Relational Mapper
var orm = {
    selectAll: function() {
        return new Promise(function(res, rej){
            var queryString = "SELECT * FROM burgers";
            con.query(queryString, function(err, data){
                if (err) rej(err);
                console.log("selectAll()");
                res(data);
            });
        });
    },
    // insertOne: function(whatToInsert, callback) {
    //     var queryString = "INSERT INTO burgers SET ?";
    //     con.query(queryString, [{burger_name: whatToInsert}], function(err, data){
    //         if (err) throw err;
    //         console.log("insertOne()");
    //         callback(data);
    //     });
    // },
    insertOne: function(whatToInsert) {
        return new Promise(function(res, rej){
            var queryString = "INSERT INTO burgers SET ?";
            con.query(queryString, [{burger_name: whatToInsert}], function(err, data){
                if (err) rej(err);
                console.log("insertOne()");
                res(data);
            });
        })
    },
    // updateOne: function(whatToUpdate, updateValue, callback) {
    //     var queryString = "UPDATE burgers SET ? WHERE ?";
    //     con.query(queryString, [{devoured: updateValue}, {id: whatToUpdate}], function(err, data){
    //         if (err) throw err;
    //         console.log("updateOne()")
    //         callback(data);
    //     });
    // },
    // updateOne: function(whatToUpdate, updateValue) {
    //     return new Promise(function(res, rej){
    //         var queryString = "UPDATE burgers SET ? WHERE ?";
    //         con.query(queryString, [{devoured: updateValue}, {id: whatToUpdate}], function(err, data){
    //             if (err) rej(err);
    //             console.log("updateOne()")
    //             res(data);
    //         });
    //     });
    // },
    updateOne: function(objColVals, condition) {
        return new Promise(function(res, rej){
            var queryString = "UPDATE burgers ";

            queryString += " SET ";
            queryString += objToSql(objColVals);
            queryString += " WHERE ";
            queryString += condition;

            console.log(queryString);
            con.query(queryString, function(err, data){
                if (err) rej(err);
                res(data);
            })
        })
    }
}

// Export orm object
module.exports = orm;