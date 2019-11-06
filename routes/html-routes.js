// *********************************************************************************
// html-routes.js - this file offers a set of routes for sending users to the various html pages
// *********************************************************************************

// Dependencies
// =============================================================
var path = require("path");


// Routes
// =============================================================
module.exports = function(app) {

  // Each of the below routes just handles the HTML page that the user gets sent to.

  // index route loads view.html
  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/index.html"));
  });

  app.get("/login", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/index.html"));
  });

  // add route loads the add.html page, where users can enter new books to the db
  app.get("/inventory", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/inventory.html"));
  });

  // all route loads the all.html page, where all books in the db are displayed
  app.get("/profile", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/profile.html"));
  });

  // short route loads the short.html page, where short books in the db are displayed
  app.get("/pos", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/pos.html"));
  });

  // long route loads the long.html page, where long books in the db are displayed
  app.get("/dashboard", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/dashboard.html"));
  });

  app.get("/404", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/404.html"));
  });

  app.get("/forgot-password", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/forgot-password.html"));
  });

};
