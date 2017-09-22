// Import orm object
var orm = require("../config/orm.js");

var burger = {
    // selectAll: function(callback){
    //     orm.selectAll(function(data){
    //         callback(data);
    //     });
    // },
    selectAll: function(){
        return orm.selectAll().then(function(data){
            return data;
        });
    },
    // insertOne: function(whatToInsert, callback){
    //     orm.insertOne(whatToInsert, function(data){
    //         callback(data);
    //     });
    // },
    insertOne: function(whatToInsert){
        return orm.insertOne(whatToInsert).then(function(data){
            return data;
        });
    },
    // updateOne: function(whatToUpdate, updateValue, callback){
    //     orm.updateOne(whatToUpdate, updateValue, function(data){
    //         callback(data);
    //     });
    // },
    updateOne: function(objColVals, condition){
        return orm.updateOne(objColVals, condition, function(data){
            return data;
        });
    }
}

module.exports = burger;
