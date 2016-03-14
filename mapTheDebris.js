// Return a new array that transforms the element's average altitude into their orbital periods.
// The array will contain objects in the format {name: 'name', avgAlt: avgAlt}.
// You can read about orbital periods on wikipedia.
// The values should be rounded to the nearest whole number. The body being orbited is Earth.
// The radius of the earth is 6367.4447 kilometers, and the GM value of earth is 398600.4418

// ===============================================================================================
// From Orbital Period Wiki:

// According to Kepler's Third Law, the orbital period T\, (in seconds) of two bodies orbiting each other in a circular or elliptic orbit is:

// T = 2\pi\sqrt{a^3/\mu}
// where:

// a, is the orbit's semi-major axis in meters
// mu = GM , is the standard gravitational parameter in m^3/s^2
// G , is the gravitational constant,
// M , is the mass of the more massive body.
// For all ellipses with a given semi-major axis the orbital period is the same, regardless of eccentricity.

// Inversely, for calculating the distance where a body has to orbit in order to pulse a given orbital period:

//========================
//  Code by Ryan Oliver
//========================


function orbitalPeriod(arr) {
  // gravitational constant * mass
  var GM = 398600.4418;
  var earthRadius = 6367.4447;
  // this is a constant as well
  var a = 2 * Math.PI;
  // array to return with orbital periods
  var orbitalArr = [];
  
  function orbitalPeriod (element) {
    //find semi-major axis and divide by constant
    var b = Math.pow(earthRadius + element.avgAlt, 3);
    var c = Math.sqrt(b / GM);
    // orbital period
    var T = Math.round(a * c);
    // delete altitude property
    delete element.avgAlt;
    // add orbital property
    element.orbitalPeriod = T;
    // {name , orbitalPeriod} ready to return 
    return element;
  };
  

  for (var i = 0; i < arr.length; i++) {
    // loop through arguments, pushing orbital periods for each.
    orbitalArr.push(orbitalPeriod(arr[i]));
  }
  
  
  return orbitalArr;
}

orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]);
