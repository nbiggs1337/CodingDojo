function evensOfOdds(arr) {
    var totalOdds = 0;
    var totalEvens = 0;
    // your code here
    for (var i=0; i<arr.length;i++){
        if (arr[i] % 2 == 0){
            totalEvens+=1
        }
        if (arr[i] % 2 != 0) {
            totalOdds+=1;
        }
    }
    if (totalOdds > totalEvens) {
            return ("Odds are larger");
    }
    if (totalEvens>totalOdds) {
            return ("Evens are larger");
    }
    else (console.log("Both are tied"));
            console.log(totalEvens,totalOdds)
            return ("Both are tied")
    
}

var result = evensOfOdds([6, 8, 3, 10, -2, 5, 9]);
console.log(result); // we expect back "evens are larger"
