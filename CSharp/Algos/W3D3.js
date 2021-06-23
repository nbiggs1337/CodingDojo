//Morning Algos Jun 23 2021
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
    
    // BST Height
// Write a function for your BST that returns how tall (the length of the longest running branch) your tree is
    height() {
        function helper(root){
            if (root === null) return 0
            let left = helper(root.left) + 1;
            let right = helper(root.right) + 1;
            console.log(`L${left} R${right} together${left + right}`)
            return left > right ? left : right;
        }
        return helper(this.root)
    }

    // BST isBalanced
    // Write a function for your BST that returns true or false whether the tree is balanced, meaning the height 
    //of the left side of the tree is equal to or one branch height different from the right side
    getBal(node = this.root) {
        if (node == null) {
            return true;
        }
        var BalancedQuestionMark = (Math.abs(this.getHeight(node.left) - this.getHeight(node.right)));
        if (BalancedQuestionMark > 1)
            return false
        else {
            return this.getBal(node.left) && this.getBal(node.right);
        }
    }
    getHeight(node = this.root) {
        if (node == null) return 0;
        return (1 + Math.max(this.getHeight(node.left), this.getHeight(node.right)));
    }
    
    height2() {
        const helperFunc = (root) => {
            if (root === null) return 0;
            let leftHeight = helperFunc(root.left) + 1;
            let rightHeight = helperFunc(root.right) + 1;
            return leftHeight > rightHeight ? leftHeight : rightHeight;
        }
        return helperFunc(this.root);
    }
}

var tree = new BST;
tree.AddLeaf(5).AddLeaf(2).AddLeaf(7).AddLeaf(4).AddLeaf(1).AddLeaf(9).AddLeaf(8).AddLeaf(10).AddLeaf(11);

tree.printUtil(tree.root, 0);

// console.log(tree.height());

tree.height();

console.log(tree.getBal());