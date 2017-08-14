var express = require("express");

var router = express.Router();

// Import the model (cat.js) to use its database functions.
var burger = require("../models/burger.js");

// Create all our routes and set up logic within those routes where required.
router.get("/", function(req, res) {
  burger.all(function(data) {
    var hbsObject = {burgers: data};
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});

router.post("/burgers/create", function(req, res) {
  burger.create([
    "burger_name", "devoured", "date" 
  ], [
    req.body.burger_name, req.body.devoured, req.body.date 
  ], function(data) {
    res.redirect("/burger");
  });
});

router.put("/burgers/update/:id", function(req, res) {
  var condition = "id = " + req.params.id;

  console.log("condition", condition);

  burger.update({
    devoured: req.body.devoured
  }, condition, function() {
    res.redirect("/burger");
  });
});

router.delete("/burgers/delete/:id", function(req, res) {
  var condition = "id = " + req.params.id;

  burger.delete(condition, function() {
    res.redirect("/burger");
  });
});

// Export routes for server.js to use.
module.exports = router;