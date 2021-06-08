function BinaryS(array, t){
    var mid = Math.floor(array.length/2);
    if (array[mid] == t) {
        return true;
    }
    if(array.length <= 1){
       return false;
    }
    else if (t > array[mid]){
        var half = array.slice(mid);
        return BinaryS(half, t);
        
    }
    else if (t < array[mid]){
        var half2 = array.slice(0,mid);
        return BinaryS(half2, t);
    }

    
}

var noo = [2,6,8,10,14,16];
var sure = [1,3,4,6,8,10];

console.log(BinaryS(noo, 12));
console.log(BinaryS(sure, 3));