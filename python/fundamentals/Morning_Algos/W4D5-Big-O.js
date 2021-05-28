// binarySearch(input, target ... ?)
// given an input (a array of sorted integers) and a target value to search for
// return true if the value is found in the array and false otherwise
// we gotta do this recursively!
// you're going to need another two parameters
// this will have a big O time complexity of log n
// https://www.bigocheatsheet.com/


function binarySearch(input, target, left = 0, right = input.length - 1) {
    
    if(left > right) {
        return false
    }

    midpoint = Math.floor((right+left)/2)

    if(target == input[midpoint]) {
        return true;
    }

    if(target < input[midpoint]) {
        right = midpoint - 1 ;
        return binarySearch(input,target,left,right);
    }
    else if(target > input[midpoint]) {
        left = midpoint + 1;
        return binarySearch(input,target,left,right)
    }
}


// function binarySearch(input, target, something, maybe) {
//     if (target < input[0] || target > input[input.length-1]){
//         var recurse = false;
//     }
//     var mid = Math.ceil(input.length/2);
//     if (input[mid] == target){
        
//         var recurse = true;
//     }
//     if (target == input[0] || target == input[input.length-1]){
        
//         var recurse = true;
//     }
    
    
//     else if (target < input[mid]){
//         input = input.slice(0,mid);
//         var recurse = binarySearch(input, target);
//     }
//     else if (target > input[mid]){
//         input = input.slice(mid, input.length);
//         var recurse = binarySearch(input, target);
//     }
//     return recurse;
// }

input = [1, 2, 3, 4, 5, 6, 7, 8, 10, 11, 12, 13, 16, 18, 19, 20, 21, 22, 24, 25, 26, 27, 29]

console.log(binarySearch(input, -1));
console.log(binarySearch(input, 24));
console.log(binarySearch(input, 9));

console.log(binarySearch(input, 1));
console.log(binarySearch(input, 2));
console.log(binarySearch(input, 3));
console.log(binarySearch(input, 4));
console.log(binarySearch(input, 5));
console.log(binarySearch(input, 6));
console.log(binarySearch(input, 7));
console.log(binarySearch(input, 8));
console.log(binarySearch(input, 10));
console.log(binarySearch(input, 11));
console.log(binarySearch(input, 12));
console.log(binarySearch(input, 26));
console.log(binarySearch(input, 22));
console.log(binarySearch(input, 23));