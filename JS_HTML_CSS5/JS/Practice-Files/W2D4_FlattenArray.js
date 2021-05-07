// var arr2d = [ [2, 5, 8],
//               [3, 6, 1],
//               [5, 7, 7] ];
    
// // We can console.log the `8` in this array if we
// console.log(arr2d[0][2]);
// // the first index `0` will select the `[2, 5, 8]` sub-array
// // the second index `2` will select the `8` out of that sub-arrayc

// complete the following function
function flatten(arr2d) {
    var flat = [];
    // your code here
    for (var i = 0; i<arr2d.length;i++){   //runs through outer array
        for (var u = 0;u < arr2d[i].length;u++){  //runs through inter, within outer
                flat.push(arr2d[i][u]);  // pushes value into var flat
            }
    }
    return flat;  //returns new array
}
    
var result = flatten( [ [2, 5, 8], [3, 6, 1], [5, 7, 7] ] );
console.log(result); // we expect to get back [2, 5, 8, 3, 6, 1, 5, 7, 7]
