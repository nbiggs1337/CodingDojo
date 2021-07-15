//You are given a string that may contain sequences of consecutive characters.
//Create a function to shorten a string by including the character, then the 
//number of times it appears. For "aaaabbcddd" return "a4b2c1d3"
//no built in functions!!!! parseInt() is ok
//If result is not shorter(such as "bb"->"b2"), return the original string("bb")

const encode = (str) => {
    let coded = '';
    let count = 1;
    for ( let r = 0; r < str.length; r++ ) {
        if ( str[r] === str[r+1] ) {
            count++;
        } else {
            if ( count > 1 ) {
                coded += str[r] + count;
                count = 1;
            } else {
                coded += str[r];
            }
        }
    }
    return coded;
}

//given an encoded string, decode and return it
//given "a3b2c1d3" return "aaabbcddd"
//special note: can your function handle "g14f12"?

const decode = (str) => {
    let decoded = '';
    for ( let i = 0; i < str.length; i++) {
        if ( isNaN(str[i])  ) {
            if ( !isNaN(str[i+2]) ) {
                if ( !isNaN(str[i+3]) ){
                    for ( var j = 0; j < str[i+1] + str[i+2] + str[i+3]; j++ ){
                        decoded += str[i];
                    }
                }
                else {
                    for ( var j = 0; j < str[i+1] + str[i+2]; j++ ){
                    decoded += str[i];
                    }
                }
            } 
            else {
                for ( var k = 0; k < str[i+1]; k++ ) {
                    decoded += str[i]
                }
            }
        }
    }
    return decoded;
}






console.log(encode("aaabbcccc"));
console.log(encode("ddddeeeeeffgggg"));
console.log(encode("aaaaabbbbbbbc"));
console.log(encode("bb"));

// console.log(encode(decode("$4a3b2c4")));
// console.log(decode("t2h10j4"));
console.log(decode("g140f12"));

// console.log(encode(decode("g140f12")));