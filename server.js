// Dependencies
// =============================================================
var express = require("express");
var path = require("path");
var Reservations = require("./reservations");
require('dotenv');

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 8080;
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use('/assets', express.static('assets'));

// App in-Memory contecnt
// =============================================================
var reservations = [];

reservations.push(new Reservations(12, "Eddie", "eddie@mail.localhost", "123-234-4567"));

// Routes
// =============================================================

app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "views/index.html"));
});

app.get("/tables", function(req, res) {
  res.sendFile(path.join(__dirname, "views/tables.html"));
});

app.get("/reserve", function(req, res) {
  res.sendFile(path.join(__dirname, "views/reserve.html"));
});

// Displays all characters
app.get("/api/tables", function(req, res) {
  return res.json(reservations);
});

// Displays a single character, or returns false
app.post("/api/reserve", function(req, res) 
{
    var newItem = new Reservations(req.body.id, req.body.name, req.body.email, req.body.phone);
    reservations.push(newItem);
    if(reservations.length > 4) return res.json(false);
    else return res.json(true);
});

// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
