//String dedupe
// Given a string, return a new string that has all duplicate letters removed -- do not count capital and lowercase as duplicates
// Ex: given: "Alabama" return "Alabm"
// Ex: given: "It's time to duel!" return "It's imeodul!" (notice a space was also counted as a letter)

const dedupe = input => {
    for ( let i = 0; i < input.length; i++ ) {
        for ( let j = i+1; j < input.length; j++ ){
            if ( input[i] == input[j] ){
                input = input.slice(0,j) + input.slice(j+1, input.length)
                i--;
            }
        }
    } 
    return input;
}


console.log(dedupe("Alabama"));
console.log(dedupe("Iaataa's timaaaa to aaaduaaael!"));
