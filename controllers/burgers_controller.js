var burger = require("../models/burger.js");
var express = require("express");
var router = express.Router();

router.get("/", function(req, res){
    res.redirect("/burgers");
});

router.get("/burgers", function(req, res){
    burger.selectAll(function(data){
        res.render("index", {
            burgers: data
        });
    });
});

router.post("/burgers/add", function(req, res){
    burger.insertOne(req.body.burger_name, function(data){
        res.redirect("/burgers");
    });
});

module.exports = router;