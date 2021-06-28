// Tries - like Trees with hella children /:

class node {
    constructor(value){
        this.value = value;
        this.children = [];
        this.isWord = false;
    }
}
class Trie {
    constructor(){
        this.root = new node("");
    }
    
    // Tries
    // Write a function that adds a word to a trie
    
    add(word){
        var runner = this.root;
        for (let i = 0; i < word.length; i++){
            var found = false;
            for(let j = 0; j < runner.children.length; j++){
                if ( runner.children[j].value == word[i] ){
                console.log("I found a child value: " + word[i]);
                found = true;
                runner = runner.children[j];
                }
                
            }
            if (!found) {
                    runner.children.push(new node(word[i]));
                    console.log("Added node w/ value: " + word[i] );
                    runner = runner.children[runner.children.length-1];
                }
        }
        runner.isWord = true;
        console.log('isWord = True - word added')
    }
    
    
    
}

var trie = new Trie;

trie.add("CAT");

trie.add("CAR");

trie.add("CARTS");