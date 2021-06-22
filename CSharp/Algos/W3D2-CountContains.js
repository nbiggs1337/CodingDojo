//Morning Algos Jun 21 2021
//Data Structures
//Binary Search Trees


class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}


class BST {
    constructor() {
        this.root = null;
        this.spaces = 8;
        this.count = 0;
    }

    //methods
    printUtil(node, space) {
        if (node == null) {
            return;
        }
        space += this.spaces;
        this.printUtil(node.right, space);
        let j = [];
        for (var i = this.spaces; i < space; i++) {
            j.push(" ");
        }

        console.log((j.join('')) + `${node.value} \n`);
        this.printUtil(node.left, space);
    }


    printMin() {
        var runner = this.root;
        while (runner.left != null) {
            runner = runner.left;
        }
        console.log(runner.value);
        return runner.value;
    }

    printMax() {
        var runner = this.root;
        while (runner.right != null) {
            runner = runner.right;
        }
        console.log(runner.value);
        return runner.value;
    }

    add(value) {
        var newNode = new Node(value);
        if (this.root == null) {
            this.root = newNode;
            return this;
        }
        else {
            var runner = this.root;
            while (true) {
                if (runner.value < value) {
                    if (runner.right == null) {
                        runner.right = newNode;
                        return this;
                    }
                    runner = runner.right;
                }
                else {
                    if (runner.left == null) {
                        runner.left = newNode;
                        return this;
                    }
                    runner = runner.left;
                }
            }
        }
    }
    
    
    ///Use for height function in future.
    // count() {
    //     function helper(root){
    //         if (root === null) return 0
    //         let left = helper(root.left) + 1;
    //         let right = helper(root.right) + 1;
    //         console.log(`L${left} R${right} together${left + right}`)
    //         return left > right ? left : right;
    //     }
    //     return helper(this.root)
    // }
    isEmpty() {
        return this.root == null;
    }

    AddLeaf(val) {
        let newNode = new Node(val)
        if (!this.root) {
            this.root = newNode;
            this.count++;
            return this;
        }
        this.count++;
        let runner = this.root;
        while (runner) {
            if (val > runner.value) {
                if (runner.right) {
                    runner = runner.right
                }
                else {
                    runner.right = newNode;
                    return this;
                }
            }
            else if (val < runner.value) {
                if (runner.left) {
                    runner = runner.left
                }
                else {
                    runner.left = newNode;
                    return this
                }
            }
            else {
                this.count--;
                console.log("Already in tree");
                return this;
            }
        }
    }

    //Todays Algos
    // Binary Search Trees
    // Contains
    // Given a value to search for, return true if the value IS found in the binary search tree and false if it is not
    findValue(value) {
        if (this.isEmpty()) {
            return false;
        }
        var runner = this.root;
        while (runner != null) {
            if (runner.value == value) {
                return true;
            }
            if (runner.value > value) {
                runner = runner.left;
            }
            else {
                runner = runner.right;
            }
        }
        return false;
    }


    // Size
    // Return how many values are inside a binary search tree



}


var tree = new BST;
tree.AddLeaf(5).AddLeaf(2).AddLeaf(7).AddLeaf(4).AddLeaf(1).AddLeaf(9).AddLeaf(8).AddLeaf(8);


console.log(tree.findValue(4));
tree.printUtil(tree.root, 0);
console.log(tree.count)

