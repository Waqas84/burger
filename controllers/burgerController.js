const express = require("express");
var bodyParser = require("body-parser");
var exphbs = require("express-handlebars");
var burger = require("../models/burger");

var router = express.Router();

router.get("/", function(req, res) {
  burger.all(function (data) {
    var burgerObj = {
      burgers:data
    }
    res.render("index", burgerObj)
  })
})

router.post("/", function(req, res) {
  var name = req.body.name;
  burger.create(name, function (data) {
    res.redirect("/")
  })
})

router.put("/:id", function(req, res) {
  var id = {id: +req.params.id};
  burger.devour(id, function () {
    res.redirect("/");
  })
 })

router.put("/name/:id", function(req, res) {
  var id =  {id: +req.params.id};
  var colObj = {
    burger_name: req.body.name
  }
  burger.update(colObj, id, function () {
    res.redirect("/")
  })
})

router.delete("/:id", function(req, res) {
  var id = {id: +req.params.id};
  burger.remove(id, function () {
    res.redirect("/")
  })
})



module.exports = router;