// Fill in the object constructor with the methods specified in the tests.

// Those methods are getFirstName(), getLastName(), getFullName(), setFirstName(first), setLastName(last), and setFullName(firstAndLast).

// All functions that take an argument have an arity of 1, and the argument will be a string.

// These methods must be the only available means for interacting with the object.


// ===================
// Code by Ryan Oliver
// ===================



var Person = function(firstAndLast) {
    
  var names = firstAndLast.split(' ');
  
  this.getFirstName = function () {
    return names[0];
  };
  
  this.getLastName = function () {
    return names[1];
  };
  
  this.getFullName = function () {
    return names[0] + ' ' + names[1];
  };
  
  this.setFirstName = function (first) {
    names[0] = first;
  }; 
  
  this.setLastName = function (last) {
    names[1] = last;
  };
  
  this.setFullName = function (firstAndLast) {
    names = firstAndLast.split(' ');
  };
  
};

var bob = new Person('Bob Ross');
bob.getFullName();

