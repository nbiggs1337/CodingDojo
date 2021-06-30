class node {
    constructor(value) {
        this.value = value;
        this.children = [];
        this.isWord = false;
    }
}
class Trie {
    constructor() {
        this.root = new node("");
    }

    // Tries
    // Write a function that adds a word to a trie

    add(word) {
        var runner = this.root;
        for (let i = 0; i < word.length; i++) {
            var found = false;
            for (let j = 0; j < runner.children.length; j++) {
                if (runner.children[j].value == word[i]) {
                    // console.log("I found a child value: " + word[i]);
                    found = true;
                    runner = runner.children[j];
                }

            }
            if (!found) {
                runner.children.push(new node(word[i]));
                // console.log("Added node w/ value: " + word[i]);
                runner = runner.children[runner.children.length - 1];
            }
        }
        runner.isWord = true;
        // console.log('isWord = True - word added')
        return this;
    }


    // Contains
    // Given a string, return true or false whether that string exists in the trie

    contains(word) {
        if (this.root == null) {
            return false;
        }
        else {
            var runner = this.root;
            for (var i = 0; i < word.length; i++) {
                for (var j = 0; j < runner.children.length; j++) {
                    // console.log(runner.children[j].value)
                    if (runner.children[j]) {
                        if (runner.children[j].value == word[i]) {
                            if(runner.children[j].value == word[word.length-1]){
                                console.log("found matching value " + runner.children[j].value);
                                return true}
                            console.log("found matching value " + runner.children[j].value);
                            runner = runner.children[j];
                        }
                    }
                    else {
                        return false;
                    }
                }
            }
            return false;
        }
    }
    // Tries
// Autocomplete
// Alright we've come to the final challenge with tries! The autocomplete! 
//We can add words and confirm what words are in our trie, now write a function that, given a starter bit of letters, 
//returns all words down that particular branch
// Ex, say we have a trie that has the words "car", "cat", "dog", carrot", "saw", and "can"
// if we ran autocomplete("ca"), we would expect back an array with ["car", "cat", "carrot", "can"]
// if we ran autocomplete("car") we would expect back an array with ["car","carrot"] - NOT cat and can, because they don't start with "car"
// Hint: you might have the best luck with this one using our old friend recursion
    
autocomplete(start){
    // code here
    // We need to get to the end of our starting position ex: if we're passed "CA" we need to get down to the A node and search from there
    let runner = this.root;
    let word = "";
    let wordsArray = [];
    // For loop to check if the start is in the trie
    for(let letter = 0; letter < start.length; letter++){
        let idx = start[letter].toLowerCase().charCodeAt(0) - 97;
        if(runner.children[idx]){
            // if there is something there, head down
            word+=runner.children[idx].val;
            runner = runner.children[idx];
            console.log(`The word is currently ${word}`);
        } else {
            // If nothing is there, return the blank array because we never found anything
            console.log("We don't seem to have that route available, no words to show!");
            return wordsArray;
        }
    }
    // If the place we stopped is a word, add it to the array
    if(runner.isWord){
        wordsArray.push(word);
    }
    // Call our recursive function
    for(let i = 0; i < runner.children.length; i++){
        this.autoHelper(runner.children[i], word, wordsArray);
    }
    return wordsArray;
}

// Helper function
autoHelper(node, word, wordsArray){
    // we're gonna do some recursion
    // Identify break case
    if(node == null) return wordsArray;
    // if there IS a node
    word+=node.val;
    if(node.isWord) wordsArray.push(word);
    // Time for recursion!
    for(let i = 0; i < node.children.length; i++){
        this.autoHelper(node.children[i], word, wordsArray);
    }
}
}

var trie = new Trie;

trie.add("CAT");
trie.add("CAR");
trie.add("DOG");
trie.add("CARROT");
trie.add("SAW");
trie.add("CAN");

console.log(trie.autocomplete("CA"));