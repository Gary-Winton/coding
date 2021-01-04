'use strict';

// Telephone Number Validator
function telephoneCheck(str) {
    // Check given phone number against regex
    var regex = /^(1\s?)?(\(\d{3}\)|\d{3})[\s\-]?\d{3}[\s\-]?\d{4}$/;
    return regex.test(str);
}
  
telephoneCheck("555-555-5555");


// Cash Register Function
function checkCashRegister(price, cash, cid) {
    // Setup status and change in cash register
    let change = {
        status: 'OPEN',
        change: []
    };
    // Calculate total change to return
    let totalChange = cash - price;
    // Calulate total cash in register
    let totalCid = 0;
    for(let item in cid){
        totalCid += cid[item][1];
    }
    totalCid = totalCid.toFixed(2);
    // Compare total cash in register with total required change
    if(totalChange > totalCid){
        change.status = "INSUFFICIENT_FUNDS";
        change.change = [];
        return change;
    } else if(totalChange == totalCid){
        change.status = "CLOSED";
    };

    // Set up the values and initial state of change to return
    let values = [["PENNY", 0.01], ["NICKEL", 0.05], ["DIME", 0.1], ["QUARTER", 0.25], ["ONE", 1], ["FIVE", 5], ["TEN", 10], ["TWENTY", 20], ["ONE HUNDRED", 100]];

    let amount = [["PENNY", 0], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]];

    // Calculate number coins/notes available
    for(let item in cid){
        amount[item][1] = Math.round(cid[item][1] / values[item][1], 2);
    }

    let counter = 0;
    // Calculate amount of each type of change to return
    for(let i = cid.length-1; i >= 0; i--){
        // If type of change available
        if(amount[i][1] > 0){
            // Count down to highest available subtraction
            for(let j = amount[i][1]; j > 0; j--){
                counter = (values[i][1]*j);
                if(totalChange >= counter){
                    // Remove current cash type value from total change needed and from register
                    totalChange -= counter;
                    totalChange = totalChange.toFixed(2);
                    cid[i][1] -= counter;
                    // Remove number of cash type given as change from amount available in register
                    amount[i][1] -= j;
                    // Break out of nested for loop
                    break;
                // Set counter to zero for use outside loop when none available
                } else {
                    counter = 0;
                }
            }
        }
        // Push or unshift change values to change array depending on cash register state
        if(change.status !== 'CLOSED'){
            // Include only cash types that are being returned
            if(counter > 0){
                change.change.push([values[i][0], counter]);
            }
        } else {
            change.change.unshift([values[i][0], counter]);
        }
    }
    // If total need change has not been reduced to zero
    if(totalChange > 0){
        change.status = "INSUFFICIENT_FUNDS",
        change.change = []
    }
    return change;
}
let result;

// checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);

result = checkCashRegister(3.26, 100, [
    ["PENNY", 1.01], 
    ["NICKEL", 2.05], 
    ["DIME", 3.1], 
    ["QUARTER", 4.25], 
    ["ONE", 90], 
    ["FIVE", 55], 
    ["TEN", 20], 
    ["TWENTY", 60], 
    ["ONE HUNDRED", 100]
]);
console.log(result);
// should return      { status: "OPEN", change: [["TWENTY", 60], ["TEN", 20], ["FIVE", 15], ["ONE", 1], ["QUARTER", 0.5], ["DIME", 0.2], ["PENNY", 0.04]]}

result = checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 1], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]])
console.log(result)
// should return     { status: "INSUFFICIENT_FUNDS", change: [] }

result = checkCashRegister(19.5, 20, [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]])
console.log(result)
// should return     { status: "CLOSED", change: [ [ "PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]}
