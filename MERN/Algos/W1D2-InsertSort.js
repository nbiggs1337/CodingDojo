//Insertion Sort
//Given an array of numbers, sort the numbers by placing values into their correct position at the front (sorted part) of the array
//Ex:
//[9,5,2,7,1] -> [5,9,2,7,1] -> [2,5,9,7,1] -> [2,5,7,9,1] -> [1,2,5,7,9]

const insertSort = arr => {
    for ( var i = 0; i < arr.length; i++ ) {
        let index = arr[i];
        
        for ( var j = i-1; arr[j] > index ; j--) {
            arr[j+1] = arr[j];
        }
        arr[j+1] = index;
        
    }
    return arr;
}


const insertS = arr => {
    for ( var i = 0; i < arr.length; i ++ ){
        let min = arr[i];
        let x = i-1;
        
        while ( x >= 0 && arr[x] > min) {
            arr[x+1] = arr[x];
            x--;
        }
        console.log(arr);
        arr[x+1] = min;
        console.log(arr);
    }
    return arr;
}




arr = [9,5,2,7,1];

console.log(insertS(arr));