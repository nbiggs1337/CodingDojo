// isPalindrome(input)
// input is a string
// output is true if the string forms a palindrome and false otherwise
// (the boolean true, not the string "true")
// for the purposes of this function, we're considering spaces,
// punctuation, etc. for determining if a palindrome is valid or not
// "racecar" -> true
// "Racecar" -> false ("racecaR")
// "race car" -> false
// "tacocat" -> true
// "abba" -> true
// "abbba" -> true
// "abb ... bba" -> true
// "a" -> true (?)
// "" -> true
// "literally anything that is not a palindrome" -> false
// suggestion: no need to use .split()
// note: don't use .reverse() after .split()ing it into an array.
// because there's no need to use split().
// also note: this can end early
// "ab (100 billion characters) ca"

function isPalindrome(input) {
    for (var i=0; i<input.length/2; i++){
        if (input[i] != input[input.length-i-1]){
            return false;
        }
        }
        return true;
    }
    


console.log(isPalindrome("racecar"));
console.log(isPalindrome("raceecar"));
console.log(isPalindrome("raceeecar"));
console.log(isPalindrome(""));
console.log(isPalindrome("a"));
console.log(isPalindrome("aa"));
console.log(isPalindrome("abda"));
console.log(isPalindrome("abdafdsa"));

// longestPalindrome(input)
// input is a string
// return the longest substring inside your input that is a palindrome
// "ehjgkkgeh" -> "gkkg"
// "ehjg kkgeh" -> "kk"
// "qwertttreqwerewy" -> "ertttre"
// "qwerttttttreqwerewy" -> "erttttttre"
// "abacabd" -> "bacab"
// "abacaed" -> "aba" or "aca"
// "abcde" -> "a" or "e", but probably "a"
// "a" -> "a" (lol)
// "racecar" -> "racecar" (no need to use the previous function if you don't want to)
// "I like to drive the racecar extremely fast" -> "e racecar e"
// suggestion: don't use your previous isPalindrome function
// suggestion: .substring() ... ?

// function longestPalindrome(input) {

// }