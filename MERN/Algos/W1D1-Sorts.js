//Bubble Sort
//Given an array of numbers, sort the numbers by swapping adjacent values that are in the wrong order
//Ex:
//[5,9,2,7,6] -> [5,2,7,6,9] -> [2,5,7,6,9] -> [2,5,6,7,9]
//Image: https://miro.medium.com/max/776/1*7QsZkfrRGhAu5yxxeDdzsA.png

//Selection Sort
//Given an array of numbers, sort the numbers by finding the smallest number in the array and moving it to the beginning. 
//Then iterate through everything except the first number, which is now sorted, and find the next smallest value and 
//move it to index 1. Keep doing this until all values are sorted. 
//Ex:
//[7,5,2,8,4] -> [2,7,5,8,4] -> [2,4,7,5,8] -> [2,4,5,7,8]
//Image: https://www.w3resource.com/w3r_images/selection-short.png


function bubbleSort(arr) {
    if ( arr.length == 1 ) {
        // console.log("Length = 1");
        return arr;
    }
    for ( var i = 0; i < arr.length; i ++ ) {
        for ( var j = 0; j < arr.length - i - 1; j++ ) {
            if ( arr[j] > arr[j + 1] ){
                let x = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = x;
            }
            
        }
    }
    return arr;
}


function selectionSort(arr) {
    if ( arr.length == 1 ) {
        return arr;
    }
    let x = 0;
    for ( let i = 0; i < arr.length; i ++ ) {
        let sm = i;
        for ( let j = i+1; j < arr.length; j++) {
            if ( arr[j] < arr[sm] ) {
                sm = j;
            }
            
        }
        
        if ( sm != i ) {
        let x = arr[i];
        arr[i] = arr[sm];
        arr[sm] = x;
        }
    }
    return arr;
    
}


arr = [1];
arr2 = [10,7,11,2,3,6,3];

bubbleSort(arr);
console.log(selectionSort(arr2));