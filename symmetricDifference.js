function sym(args) {
   
   //convert args object into an array to use slice method
   args = Array.prototype.slice.call(arguments);

   // Return the symmetric difference of 2 arrays
   var getDiff = function(arr1, arr2) {

    // Returns items in arr1 that don't exist in arr2
    function filterFunction(arr1, arr2) {
      return arr1.filter(function(item) {
        return arr2.indexOf(item) === -1;
      });
    }

    // Run filter function on each array against the opposite then get unique values
    return filterFunction(arr1, arr2)
      .concat(filterFunction(arr2, arr1))
      .filter(function(value, index, arr) {
        return arr.indexOf(value) === index;
      });
  };

  // Get symmetric difference of each consecutive array, then compare against the following and return the array.  getDiff is run on every array passed as an argument.
  return args.reduce(getDiff, []);
}

sym([1, 2, 3], [5, 2, 1, 4]);
