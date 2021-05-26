// inOrderCombinations(input, ...? output)
// input is a string
// return an array with all strings you could make with the characters from the
// given input, in the order that they're presented
// (output array order doesn't matter)
// "abc" -> ["", "c", "b", "bc", "a", "ac", "ab", "abc"] (8)
// "zhk" -> ["", "z", "h", "k", "hk", "zh", "zk", "zhk"] (8)
// "hjj" -> ["", "h", "j", "j", "hj", "hj", "jj", "hjj"]
// "tkps" -> ["", "t", "k", "p", "s", "tk", "tp", "ts", "kp", "ks", "ps",
// "tkp", "tks", "tps", "kps", "tkps"] (16)
// input of length n leads to 2^n output elements
// every character in the output appears with equal occurance
// test with at least 4 characters in input
// make sure to use recursion

function inOrderCombinations(input, output = [], position = 0, partial = '') {
    //somewhere in here, push to output maybe?

    if (input.length == position) {
        output.push(partial);
    }

    // when you call recursively, make sure to provide the output
    else {
        inOrderCombinations(input, output, position + 1, partial + input[position]);
        inOrderCombinations(input, output, position + 1, partial);
    }

    return output;
}

console.log(inOrderCombinations('zbon'));

// function inOrderSubsets(str, solutions = [], partial = "") {
//     solutions.push(partial);
    
//     for (let i = 0; i < str.length; i++) {
//         const sliced = str.slice(i + 1);
//         inOrderSubsets(sliced, solutions, partial + str[i]);
//     }
    
//     return solutions;
// }

// console.log(inOrderSubsets('zbonik'));