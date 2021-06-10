// Matrix Search
// Given a 2-dimensional array and a smaller 2-dimensional array, return the location of the first match found, or [-1,-1] if no match is found
// Ex: given: 
// [ [12,1,4,19],
//   [3,4,11,17],
//   [18,72,2,10],
//   [9,15,32,16]]
// and 
// [ [11,17]
//   [2,10]]
// Return [1,2] (this is the location where the inner matrix begins)

// setup:
function matrixSearch(matrix,search){
    for(let i = 0; i < matrix.length; i++){
        for(let j = 0; j < matrix[0].length; j++){
        if(matrix[i][j] == search[0][0]){
            console.log("We found the start of a match!");
            let match = true;
          //Now we need to search through the 
          //matched sections to see if they still match
            for(let x = 0; x < search.length; x++){
            for(let z = 0; z < search[0].length; z++){
                if(matrix[x+i][z+j] == search[x][z]){
                console.log("It's still matching!");
                // We're good, keep going
                } else {
                // We're not good, need to break out
                match = false;
                }
            }
            }
            if (match) return [i, j];
        }
        }
    }
    return [-1,-1]
}

console.log(matrixSearch([[1,2,3],[4,5,6],[7,8,9]],[[5,66],[8,9]]));