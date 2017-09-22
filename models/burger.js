// Import orm object
var orm = require("../config/orm.js");

var burger = {
    selectAll: function(callback){
        orm.selectAll(function(data){
            callback(data);
        });
    },
    insertOne: function(whatToInsert, callback){
        orm.insertOne(whatToInsert, function(data){
            callback(data);
        });
    },
    updateOne: function(whatToUpdate, updateValue, callback){
        orm.updateOne(whatToUpdate, updateValue, function(data){
            callback(data);
        });
    }
}

module.exports = burger;
