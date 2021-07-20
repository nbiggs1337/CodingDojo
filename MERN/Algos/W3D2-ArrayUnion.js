//Union sorted arrays
// Given two arrays, create a union of the two. If you encounter duplicates, only include the greatest number of duplicates from one array. 
// (Ex, if array1 has four 4's and array2 has two 4's, the result array should only have four 4's, NOT 6)
// Ex: given [1,2,2,3,4] and [1,2,5,7] return [1,2,2,3,4,5,7] 
// Ex: given [2,3,4,4,6] and [1,2,4,4,4,4,7] return [1,2,3,4,4,4,4,6,7] 


const union = (a, b) => {
    let child = [];
    let i = 0;
    let j = 0;
    while ( i < a.length || j < b.length ) {
        if ( a[i] === b[j] ){
            child.push(a[i]);
            i++
            j++;
        }
        if ( a[i] > b[j] ){
            child.push(b[j])
            j++;
        }
        if ( a[i] < b[j] ){
            child.push(a[i])
            i++
        }
        else if (i != a.length && j === b.length ) {
            child.push(a[i]);
            i++;
        }
        else if ( j != b.length && i === a.length ) {
            child.push(b[j])
            j++
        }
    }
    return child;
}


console.log(union([2,3,4,4,6], [1,2,4,4,4,4,7]));

console.log(union([1,2,2,3,4], [1,2,5,7]));

console.log(union([1,2,2,3,4,4,5,6,7,8], [1,2,5,7]));