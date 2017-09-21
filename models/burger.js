// Import orm object
var orm = require("../config/orm.js");

var burger = {
    selectAll: function(callback){
        orm.selectAll(function(data){
            callback(data);
        });
    },
    insertOne: function(whatToInsert){
        orm.insertOne(whatToInsert);
    },
    updateOne: function(whatToUpdate, updateValue){
        orm.updateOne(whatToUpdate, updateValue);
    }
}

module.exports = burger;
