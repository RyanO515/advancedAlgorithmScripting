
  function drawer(price, cash, cid) {
  
  
  // any variable preceded by a '+' promises that typeof === Number
  
  var moneyType;  // PENNY , ONE, TEN
  var totalByType;   // 1.01, 2.05, 90.00
  var numberByType;  // 1.01 / .01 = 101
  var returnChange = [];  // amount customer expects returned
  
  var currencies = [0.01, 0.05, 0.10, 0.25, 1, 5, 10, 20, 100];
  var totalChange = +(cash - price).toFixed(2);
  
  
  
  
  var totalCash = +cid.map(function (money) {
    return money[1];
  }).reduce(function (current, next) {
    return current + next;
  }).toFixed(2);
  
  
  //check if change is greater than or equal to price.
  if (totalChange > totalCash) {
    return 'Insufficient Funds';
  }
  else if (totalChange === totalCash) {
    return 'Closed';
  }
  
  //start with highest type of cash
  for (var i = +cid.length-1; i >= 0; i--) {
    
    //total value per type
    totalByType = cid[i][1].toFixed(2);
    //type
    moneyType = cid[i][0];
    
    if (cid[i][1] === 0) {
      return 'Insufficient Funds';
    }
    
    // first (largest) type we can use 
    if (+currencies[i].toFixed(2) <= totalChange.toFixed(2)) {
      
      // how many we can possibly use
      numberByType = Math.floor( totalByType / currencies[i]);
      
      // if there's more than enough 
      if ((numberByType * currencies[i]) >= totalChange) {
        
        // find the greatest amount we can use 
        numberByType = Math.floor(totalChange / currencies[i]);
      }
      
      // find how many of each type we're giving the customer
      totalByType = +(currencies[i] * numberByType).toFixed(2);
      
      // and update the new change amount we owe
      totalChange = +(totalChange - totalByType).toFixed(2);
      
      // as well as the total value per type we just shortened
      cid[i][1] = totalByType;
      
      // push the type and total into the array
      returnChange.push([moneyType, totalByType]);
    }
  }
  
  return returnChange;
  
}

// Example cash-in-drawer array:
// [["PENNY", 1.01],
// ["NICKEL", 2.05],
// ["DIME", 3.10],
// ["QUARTER", 4.25],
// ["ONE", 90.00],
// ["FIVE", 55.00],
// ["TEN", 20.00],
// ["TWENTY", 60.00],
// ["ONE HUNDRED", 100.00]]




drawer(19.50, 20.00, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 1.00], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]);