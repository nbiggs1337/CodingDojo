//Morning Algos Jun 21 2021
//Data Structures
//Binary Search Trees


class Node {
    constructor(value){
        this.value = value;
        this.left = null;
        this.right = null;
    }
}


class BST {
    constructor(){
        this.root = null;
    }
    
    //methods
    
    printMin(){
        var runner = this.root;
        while (runner.left != null){
            runner = runner.left;
        }
        console.log(runner.value);
        return runner.value;
    }
    
    printMax(){
        var runner = this.root;
        while (runner.right != null){
            runner = runner.right;
        }
        console.log(runner.value);
        return runner.value;
    }
    
    add(value){
        var newNode = new Node(value);
        if (this.root == null){
            this.root = newNode;
            return this;
        }
        else {
            var runner = this.root;
            while( true ) {
                if (runner.value < value){
                    if (runner.right == null){
                        runner.right = newNode;
                        return this;
                    }
                    runner = runner.right;
                }
                else {
                    if(runner.left == null){
                        runner.left = newNode;
                        return this;
                    }
                    runner = runner.left;
                }
            }
        }
    }
    
    
    
    
}