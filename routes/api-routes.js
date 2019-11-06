// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================
var Inventory = require("../models/inventory.js");
require('path');

// Routes
// =============================================================
module.exports = function(app) {
  // Get all books
  app.get("/api/all", function(req, res) {
    Inventory.findAll({}).then(function(results) {
      res.json(results);
    });
  });

  app.get("/api/User", function(req, res) {
  getAllUsers().then(user => res.json(user));
});
// register route


  // // Get a specific book
  // app.get("/api/:product", function(req, res) {
  //   Inventory.findAll({
  //     where: {
  //       product: req.params.product
  //     }
  //   }).then(function(results) {
  //     res.json(results);
  //   });
  // });

  // // Get all books of a specific genre
  // app.get("/api/category/:category", function(req, res) {
  //   Inventory.findAll({
  //     where: {
  //       category: req.params.category
  //     }
  //   }).then(function(results) {
  //     res.json(results);
  //   });
  // });

  // Get all books from a specific author
  // app.get("/api/product/:product", function(req, res) {
  //   Inventory.findAll({
  //     where: {
  //       author: req.params.author
  //     }
  //   }).then(function(results) {
  //     res.json(results);
  //   });
  // });

  // Add a book
  app.post("/api/addItem", function(req, res) {
    console.log("Inventory Data:");
    console.log(req.body);
    Inventory.create({
      product: req.body.product,
      category: req.body.category,
      quantity: req.body.quantity,
      cost: req.body.cost,
      total_cost: req.body.total_cost,
      sales_price: req.body.sales_price,
      potential_sales: req.body.potential_sales
    }).then(function(results) {
      res.json(results);
    });
  });

  app.post("/api/addUser", function(req, res) {
    User.create({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      password: req.body.password,
      email: req.body.email
    }).then(function(results) {
      res.json(results)
    });
  });

  // Delete a book
  app.delete("/api/inventory/:id", function(req, res) {
    console.log("Inventory ID:");
    console.log(req.params.id);
    Inventory.destroy({
      where: {
        id: req.params.id
      }
    }).then(function() {
      res.end();
    });
  });
};
