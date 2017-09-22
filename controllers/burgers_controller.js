var burger = require("../models/burger.js");
var express = require("express");
var router = express.Router();

router.get("/", function(req, res){
    res.redirect("/burgers");
});

// router.get("/burgers", function(req, res){
//     burger.selectAll(function(data){
//         res.render("index", {
//             burgers: data
//         });
//     });
// });
router.get("/burgers", function(req, res){
    burger.selectAll().then(function(data){
        res.render("index", {
            burgers: data
        });
    });
});

router.post("/burgers/add", function(req, res){
    burger.insertOne(req.body.burger_name).then(function(data){
        res.redirect("/burgers");
    });
});

router.put("/burgers/:id", function(req, res){
    var condition = "id = " + req.params.id;
    console.log("Condition: " + condition);
    burger.updateOne({devoured: req.body.devoured}, condition).then(function(data){
        res.redirect("/burgers");
    });
});

module.exports = router;