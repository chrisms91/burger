var burger = require("../models/burger.js");
var express = require("express");
var router = express.Router();

router.get("/", function(req, res){
    res.redirect("/burgers");
});

router.get("/burgers", function(req, res){
    burger.selectAll(function(data){
        console.log(res);
        res.render("index", {
            burgers: data
        });
    })
});

module.exports = router;