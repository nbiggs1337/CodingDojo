//String to Word Array
// Given a string, return an array with each individual word in it
// Ex: Given "Hello World" return ["Hello", "World"]
// Ex: Given "Happy Monday everyone" return ["Happy", "Monday", "everyone"]

// //Reverse Word Order
// Given a string, return a new string that has all the words reversed (NOT the letters)
// Ex: Given "Hello World" return "World Hello"
// Ex: Given "Happy Monday everyone" return "everyone Monday Happy"


const StringArray = string => {
    let word = '';
    let array = [];
    for ( var i = 0; i < string.length; i++) {
        if ( string[i] != ' ' ) {
            word += string[i];
        }
        else if ( string[i] == " " ) {
            array.push(word);
            word = '';
            
        }
    }
    array.push(word);
    return array;
}


const ReverseWords = string => {
    let stringArr = StringArray(string);
    let x = "";
    for ( var j = stringArr.length-1; j > -1; j-- ){
        if ( j != 0 ){
            x += stringArr[j];
            x += " ";
        } else {
            x += stringArr[j];
        }
    }
    return x;
}



let monday =  "Happy Monday everyone!";
// let monday = "           Life is          not a drill!";
console.log(ReverseWords(monday));

console.log(StringArray(monday));