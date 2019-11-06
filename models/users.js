// Dependencies
// =============================================================
var Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
// Sequelize (capital) references the standard library
// var Sequelize = require("sequelize");
// // sequelize (lowercase) references my connection to the DB.
// var sequelize = require("../config/connection.js");

// Creates a "Book" model that matches up with DB
// var Users = sequelize.define("Users", {
//   user: DataTypes.STRING,
//   pass: DataTypes.INTEGER,
//   account: DataTypes.
// });

// Syncs with DB
// Inventory.sync();

// Makes the Book Model available for other files (will also create a table)
// return Inventory;
//
// };
var User = sequelize.define("User", {
  name: Sequelize.STRING,
  password: Sequelize.STRING,
});
// create table with user model
// User.sync()
//   .then(() => console.log(‘Oh yeah! User table created successfully’))
//   .catch(err => console.log(‘BTW, did you enter wrong database credentials?’));

  return User;
};
