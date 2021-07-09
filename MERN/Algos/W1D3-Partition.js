//Array Partition
// Given an array of unsorted numbers and a pivot index, sort the array so that all values less than the value at 
// the pivot index are on the left of the value and all values greater than the pivot value are on the right
// Ex: 
// Given var sortArr = [7,9,1,6,2,10,8,4,3] and a pivot index of 3, return [1,2,4,3,6,9,7,10,8]
// Notice how the pivot index of 3 lands on the value of 6 originally and then sorts all numbers in the array 
// around being less than or greater than the number 6
// It is OKAY for the pivot to move, just keep track of the original VALUE of the pivot
// Starter code:

const partition = (arr, pivot) => {
    let i = 0;
    let j = arr.length-1;
    while ( i != pivot || j != pivot ) {
        
        console.log(`start   : i = ${i} - (${arr[i]})  :  j = ${j} - (${arr[j]})`);
        if ( arr[i] < arr[pivot] ){
            i++;
        }
        if ( arr[j] > arr[pivot] ){
            j--;
        }
        if ( arr[i] >= arr[j] ) {
            console.log(`swapping: i = ${i} - (${arr[i]})  :  j = ${j} - (${arr[j]})`);
            [arr[i], arr[j]] = [arr[j], arr[i]];
            
            if ( i != pivot){
                i++;
            }
            if ( j != pivot) {
                j--;
            }
        }
    }
    return arr;
}

const quicksort = (arr) => {
    for ( let a = 0; a < arr.length; a++){
        // if ( arr[a] > arr[a+1] ) {
        //     partition(arr, a)
        // }
        partition(arr, a)
    }
    return arr;
}

// console.log(partition([7,9,1,6,2,10,8,4,3], 2));

// console.log(partition([7,12,5,9,1,3,10,4], 3));

console.log(quicksort([7,9,1,6,2,10,8,4,3]));
console.log(quicksort([7,98,1,14,6,5,8,25,3,120,15,-12,18,4,22,9,14,56,3])); 