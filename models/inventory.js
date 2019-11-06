// Dependencies
// =============================================================
var Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
// Sequelize (capital) references the standard library
// var Sequelize = require("sequelize");
// // sequelize (lowercase) references my connection to the DB.
// var sequelize = require("../config/connection.js");

// Creates a "Book" model that matches up with DB
var Inventory = sequelize.define("Inventory", {
  product: Sequelize.STRING,
  quantity: Sequelize.INTEGER,
  category: Sequelize.STRING,
  cost: Sequelize.INTEGER,
  total_cost: Sequelize.INTEGER,
  sales_price: Sequelize.INTEGER,
  potential_sales: Sequelize.INTEGER
});

// Syncs with DB
// Inventory.sync();

// Makes the Book Model available for other files (will also create a table)
return Inventory;

};
