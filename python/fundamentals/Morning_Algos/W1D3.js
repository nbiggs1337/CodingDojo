// generateCoinChange(input)
// input is an integer representing an amount of money
// output is an object representing the most optimal
// (i.e. fewest coins) way to represent that amount
// with standard U.S. coins
// if the input is 74 cents, the output would be:
// {quarters: 2, dimes: 2, nickels: 0, pennies: 4}
// if the input is 109 cents, the output would be:
// {quarters: 4, dimes: 0, nickels: 1, pennies: 4}

function generateCoinChange(input) {
    var output = {'quarters': 0, 'dimes': 0, 'nickels': 0, 'pennies': 0};
    
    var amount = 0;
    
    var remaining = input;
    
    const coinValues = [25, 10, 5, 1];
    
    amount = Math.floor(input / coinValues[0]);
    remaining = remaining-(amount*coinValues[0]);
    output['quarters'] = amount //23c remain
    
    
    amount = Math.floor(remaining / coinValues[1]);
    remaining = remaining-(amount*coinValues[1]);
    output['dimes'] = amount  // 3c remain
    
    amount = Math.floor(remaining / coinValues[2]);
    remaining = remaining-(amount*coinValues[2]);
    output['nickels'] = amount 
    
    amount = Math.floor(remaining / coinValues[3]);
    remaining = remaining-(amount*coinValues[3]);
    output['pennies'] = amount 
    
    console.log(remaining);
    console.log(output);
    
    
    

    }

    return output;
}

generateCoinChange(79);

// generateCoinChangeWithGivenValues(input, values)
// input is an integer representing an amount of money
// values is an array of arrays - each array represents a
// denomination of currency (string) and its value (integer)
// (a denomination of 1 will always be present)
// that array is in order of denomination
// the output is an object representing the most optimal
// way to represent that amount given the denominations
// if the input is 127 cents, and the values are:
// [ ['metadime', 15],
//  ['supernickel', 6]
//  ['very regular penny', 1]]
// the output would be:
// {metadimes: 8, supernickels: 1, very regular pennys: 1}
// (note the pluralization)
// if the input was 127, but the values were:
// [ ['halfquarter', 12],
//  ['greater nickel', 8],
//  ['lesser dime', 3]
//  ['just-a-penny', 1]]
// the output would be:
// {halfquarters: 10, greater nickels: 0, lesser dimes: 2, just-a-pennys: 0}
// (these values -could- be an object, but I want to get you used to
// the concept of arrays within arrays and accessing that data)
//
// bonus: what would you do if we couldn't guarantee a denomination of 1
// being present? there are a few different answers

// function generateCoinChangeWithGivenValues(input, values) {
    
//     if (amount === 0){
//         return [];
//     } 
//     else {
//         if (input >= values[0]) {
//             remaining = (input - values[0]);
            
//         }
//     }
    
//     for (var i = 0; i < values.length; i++){
//         amount = Math.floor(input/values[i]);
//         amount[i] = 
// //         console.log(amount)

// }

function generateCoinChangeWithGivenValues(input, values) {
    var coin_values = {}
    for (let i = 0; i < values.length; i++) {
        var key = values[i][0];
        var valu = 0;
        coin_values[key] = valu;
    }

    for (let i = 0; i < values.length; i++) {
        while (input >= values[i][1]) {
            input -= values[i][1];
            coin_values[values[i][0]]++;
        }
    }

    console.log(coin_values)

    return coin_values;
}

generateCoinChangeWithGivenValues(52, [['halfquarter', 12], ['greater nickel', 8], ['lesser dime', 3], ['just-a-penny', 1]])