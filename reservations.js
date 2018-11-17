// Requiring our Reservation constructor function we exported from castMember.js
var reservation = require("./reservation");

// Constructor function for creating Movie objects
var Table = function(ID, Name, Email, Phone) {
  // this.cast will hold all of our reservation objects
  this.table = [];
  this.Name = Name;
  this.Email = Email;
  this.Phone = Phone;

  // This method that creates a CastMember object from the constructor function we required and pushes it to the `this.table` array
  this.addreservation = function(ID, Name, Email, Phone) {
    this.cast.push(new reservation(ID, Name, Email, Phone));
  };
};

// Exporting the Movie constructor which we will use in server.js
module.exports = Table;
