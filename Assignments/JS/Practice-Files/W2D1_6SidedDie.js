function d6() {
    var roll = Math.floor(Math.random() * 6) + 1;
    // your code here
    return roll;
}
    
var playerRoll = d6();
console.log("The player rolled: " + playerRoll);