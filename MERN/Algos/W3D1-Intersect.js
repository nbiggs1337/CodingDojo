//Intersect sorted arrays
// Given two arrays of sorted numbers, return a new array that contains only the numbers that are in both arrays - do NOT count duplicates
// Ex: given [1,2,2,3,4,5] and [2,4,6,7,8] return [2,4]
// Ex: given [1,1,1,2,3,4] and [1,1,3,4,5] return [1,3,4]

const intersect = (a, b) => {
    let c = [];
    let i = 0;
    let j = 0;
    while ( i < a.length && j < b.length ) {
        if ( a[i] === b[j] ) {
            if ( !c.includes(a[i])) c.push(a[i]); i++; j++;}
        if ( a[i] < b[j]) i++
        if ( a[i] > b[j]) j++
    }
    return c;
}

const unsortedIntersect = (a,b) => {
    let c = [];
    for ( let i = 0; i < a.length; i++ ) {
        if ( b.includes(a[i]) && !c.includes(a[i]) ) c.push(a[i]);
    }
    return c;
}

console.log(unsortedIntersect([5,2,7,5,9,2,3,7],[5,9,6,8,3,5,3]))

console.log(intersect([1,1,1,2,3,4], [1,1,3,4,5]));

console.log(intersect([1,2,2,3,4,5],[2,4,6,7,8]));