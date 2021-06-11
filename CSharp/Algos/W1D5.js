// Taco Truck
// Joe drives a taco truck in the booming town of Squaresburg. He uses an array of [x,y] coordinates corresponding to locations of his customers. 
//They walk to his truck, but he is fair-minded so he wants to minimize total distance from truck to customers. 
//City blocks are perfect squares, and every street is two-way, at perfect right angles. He only parks by stree corners (coordinates like [37,-16]). 
//Customers only travel on streets: coordinate [2,-2] is distance 4 from [0,0]. Joe checks the array before deciding where to park.
// Given a customer coordinate array, return an optimal taco truck location.
// Example: given [[10,0],[-1,-10],[2,4]] return [2,0], as total distance is 25 (8+13+4) which is the shortest possible combined distance for all customers.
function sort(a){
    for (var b = 0; b < len; b++){
        if (a[b] > a[b+1]){
            let temp = a[b];
            a[b] = a[b+1];
            a[b+1] = temp;
            b = -1;
        }
    }
    return a;
}


function TT(cust){
    var x = [];
    var y = [];
    len = cust.length;
    for (var i = 0; i < len; i++){
        x.push(cust[i][0]);
        y.push(cust[i][1])
    }
    console.log(x);
    console.log(y);
    
    x = sort(x);
    y = sort(y);
    
    console.log(x);
    console.log(y);
    half = Math.floor(len/2);
    console.log(half);
    return [x[half], y[half]];
    
}

arr = [[10,0],[-1,-10],[2,4]];

console.log(TT(arr));