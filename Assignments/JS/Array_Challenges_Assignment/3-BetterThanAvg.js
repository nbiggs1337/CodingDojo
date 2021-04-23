function betterThanAverage(arr) {
    var sum = 0;
    var avg = 0;
    var count = 0;
    for (var i=0;i<arr.length-1;i++){
        sum+=arr[i]
        avg =  sum/arr.length;
    }
    for (var o=0;o<arr.length-1;o++){
        if (arr[o]>avg){
            count+=1;
        }
    }
    
    return count;
}
var result = betterThanAverage([6, 8, 3, 10, -2, 5, 9]);
console.log(result); // we expect back 4