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
                    console.log("I found a child value: " + word[i]);
                    found = true;
                    runner = runner.children[j];
                }

            }
            if (!found) {
                runner.children.push(new node(word[i]));
                console.log("Added node w/ value: " + word[i]);
                runner = runner.children[runner.children.length - 1];
            }
        }
        runner.isWord = true;
        console.log('isWord = True - word added')
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


}

var trie = new Trie;

// trie.add("C");

trie.add("ROOT");
trie.add("CABZ");
trie.add("CABD");
trie.add("CABT");
trie.add("CABS");

console.log(trie.contains("CABS"));

console.log(trie.contains("ROT"));