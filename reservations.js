// Requiring our Reservation constructor function we exported from castMember.js
// var reservation = require("./reservation");

// Constructor function for creating Movie objects
var Table = function(ID, Name, Email, Phone) {
  // this.cast will hold all of our reservation objects
  this.ID = ID;
  this.Name = Name;
  this.Email = Email;
  this.Phone = Phone;
};

// Exporting the Movie constructor which we will use in server.js
module.exports = Table;
