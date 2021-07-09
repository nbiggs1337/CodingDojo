// //Quick sort 
// Use the ideas from partition to create a quick sort. Basically, run partitions until an array is completely sorted
// Partition: given an array and a pivot index, roughly sort the array around the value at the original pivot 
// point (does not fully sort the array, only sorts the numbers relative to the pivot)


function partArr(arr) {
    let i = -1;
    let j = 0;
    let p = arr[arr.length - 1];

    while (j < arr.length) {
        console.log(`start: arr: ${arr}  i: ${i} - ${arr[i]}  j: ${j} - ${arr[j]}`);
        if (arr[j] <= p) {
            i++;
            [arr[j], arr[i]] = [arr[i], arr[j]]
        }
        else if (arr[j] == p) {
            [arr[j], arr[i + 1]] = [arr[i + 1], arr[j]]
        }
        else {
            j++;
        }
    }
    return arr
}

const quicksort = (arr) => {
    if (arr.length <= 1) {
        return arr
    }
    else {
        let p = arr.length-1
        for(var j = 0, i = j-1; j < p; j++){
            if(arr[j] <= arr[p])
            {
                i++;
                [arr[i],arr[j]] =[arr[j],arr[i]]
            }
        }
        [arr[p],arr[i+1]] =[arr[i+1],arr[p]]
        p = i+1
        var arr1 = arr.slice(0,p)
        var arr2 = arr.slice(p)
        console.log(arr1, arr2)
        return quicksort(arr1).concat(quicksort(arr2))
    }
}

// console.log(partArr([5,4,9,2,5,3]))
console.log(partArr([7, 4, 5, 1, 2, 0, 1, 2]))
console.log(quicksort([7, 4, 5, 1, 2, 0, 1, 2]))


// console.log(partition([7,9,1,6,2,10,8,4,3], 3));