// singly linked lists
// ListNode class: we'll be using this

class ListNode {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

// var x = new ListNode(7);

// var y = new ListNode(3);
// x.next = y;

// var z = new ListNode(29);
// y.next = z;

// console.log(y);

class SinglyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
    }
    // addToFront - adds a node with the given value to the head of the list
    addToFront(value) {
        var new_node = new ListNode(value);

        // if list is empty
        if (this.head == null) {
            this.head = new_node;
            this.tail = new_node;
        }

        // otherwise
        else {
            new_node.next = this.head;
            this.head = new_node;
        }
    }
    // addToBack - adds a node with the given value to the tail of the list
    addToBack(value) {
        var new_node = new ListNode(value);

        // if list is empty
        if (this.head == null) {
            this.head = new_node;
            this.tail = new_node;
        }

        else {
            this.tail.next = new_node;
            this.tail = new_node;
        }
    }
    // contains - returns true if target is in the linked list (as a node value),
    // false otherwise
    contains(target) {
        var runner = this.head;

        while (runner != null) {

            if (runner.value == target) {
                return true;
            }

            runner = runner.next;
        }

        return false;
    }
    
    // display()
    // return a string with the value of every node from the
    // linked list - like "3 - 7 - 13 - 4 - 8"
    display() {

        if (this.head == null) {
            return null;
        }

        var output = this.head.value;
        var runner = this.head.next;

        while (runner != null) {
            output += " - " + runner.value;
            runner = runner.next;
        }

        return output;
    }

    // removeFront() - remove the head of the linked list and return its value
    // that means that this.head is going to change as well
    // is there a special case for if the linked list only has two nodes? one node?
    // zero nodes????????

    removeFront() {

        if (this.head == null) {
            return null;
        }
        // else if (this.head.next == null)
        else if (this.head == this.tail) {
            var temp = this.head;
            this.head = null;
            this.tail = null;
            return temp.value;
        }

        var temp = this.head
        this.head = this.head.next
        temp.next = null 

        return temp.value

    }

    // removeBack() - remove the tail of the linked list and return its value
    // again, this means this.tail will change
    // as above - is there a special case for linked lists with a minimal number of
    // nodes inside them?

    removeBack() {

        if (this.head == null) {
            return null;
        }

        else if (this.head == this.tail) {
            var temp = this.head;
            this.head = null;
            this.tail = null;
            return temp.value;
        }

        let runner = this.head;
        while (runner != this.tail) {
            if (runner.next == this.tail) {
                let getBack = this.tail;
                this.tail = runner;
                runner.next = null;
                return getBack.value;
            }
            runner = runner.next;
        }
    }

    // findMinNode() - find the node in the linked list with the lowest value
    // and return that node - the node itself, not its value
    // if you find two or more nodes tied for that value,
    // return the first one you find
    findMinNode() {
        if (this.head == null) {
            return null;
        }

        var runner = this.head;
        var currentMin = runner;
        while (runner != null) {

            if (runner.value < currentMin.value) {
                currentMin = runner;
            }

            runner = runner.next;
        }

        return currentMin;
    }

    // findMaxNode() - find the node in the linked list with the highest value
    // and return that node - the node itself, not its value
    // if you find two or more nodes tied for that value,
    // return the first one you find
    findMaxNode() {
        if (this.head == null) {
            return null;
        }

        var runner = this.head;
        var currentMax = runner;
        while (runner != null) {

            if (runner.value > currentMax.value) {
                currentMax = runner;
            }

            runner = runner.next;
        }

        return currentMax;
    }

    // secondToLast() - return the value of the second-to-last node in
    // the linked list
    // what should you do if the list has less than two nodes?
    secondToLast() {
        if (this.head == null || this.head == this.tail) {
            return null;
        }

        else if (this.head.next == this.tail) {
            return this.head.value;
        }

        let runner = this.head;
        while (runner != this.tail) {
            if (runner.next == this.tail) {
                
                
                return runner.value;
            }
            runner = runner.next;
        }
    }

    moveMinToFront(){

        if(!this.head) return this;

        this.minNode = this.head;
        var runner = this.head;
        // Loop to find minNode
        while(runner){
            if (runner.val < this.minNode.val){
                this.minNode = runner;
            }
            runner = runner.next;
        }
        runner = this.head;
        while(runner){
            if(runner.next == this.minNode){
                runner.next = this.minNode.next;
                this.minNode.next = this.head;
                this.head = this.minNode;
                return this;
            }
            runner = runner.next;
        }

    }

    moveMaxToBack(){
        if(!this.head) return this;

        this.maxNode = this.head;
        var runner = this.head;
        
        while(runner){
            if(runner.val > this.maxNode.val){
                this.maxNode = runner;
            }
            runner = runner.next;
        }
        
        
        
        runner = this.head;
        while(runner){
            if(runner.next == this.maxNode){
                break;
            }
            runner = runner.next
        }
        runner.next = this.maxNode.next;
        this.tail.next = this.maxNode;
        this.maxNode.next = null;
        this.tail = this.maxNode;
        return this;


    }

    // partition(target)
    // rearrange the nodes in the list so that all nodes with values less than
    // the target value come first in the list, then all nodes with the target
    // value, then all nodes with values greater than the target value
    // if there are no nodes with values greater or less than the target value,
    // or no nodes with the target value at all, the function should still work
    // if the target is 5, and the list is 8 - 7 - 1 - 5 - 4 - 5 - 2 - 8 - 3
    // the list should rearrange so that the nodes (represented by values)
    // are in this order:
    // 1 - 4 - 2 - 3 - 5 - 5 - 8 - 7 - 8
    // if the target 5, and the list contains:
    // 8 - 1 - 7 - 2 - 4 - 9 - 0 - 1 - 3 - 8
    // the output should be:
    // 1 - 2 - 4 - 0 - 1 - 3 - 8 - 7 - 9 - 8
    // order of nodes does not matter as long as the above rules 
    // for placement are respected
    // remember to fix your head and tail afterwards
    // bonus: can you do it without using an array?
    // other bonus: can you do it without using an array -and- without using
    // another instance(s) of SinglyLinkedList?

    partition(target) {

        if (this.head == this.tail || this.head == null) {
            return null;
        }

        var lowerHead = null;
        var lowerTail = null;
        var middleHead = null;
        var middleTail = null;
        var upperHead = null;
        var upperTail = null;

        var runner = this.head;

        while (runner != null) {
            var temp = runner;
            runner = runner.next;

            temp.next = null;

            if (temp.value < target) {
                if (lowerHead == null) {
                    lowerHead = temp;
                    lowerTail = temp;
                }

                else {
                    lowerTail.next = temp;
                    lowerTail = temp;
                }
            }

            else if (temp.value == target) {
                if (middleHead == null) {
                    middleHead = temp;
                    middleTail = temp;
                }

                else {
                    middleTail.next = temp;
                    middleTail = temp;
                }
            }

            else if (temp.value > target) {
                if (upperHead == null) {
                    upperHead = temp;
                    upperTail = temp;
                }

                else {
                    upperTail.next = temp;
                    upperTail = temp;
                }
            }
        }
        // if only nodes greater than the target are found
        if (lowerHead == null && middleHead == null) {
            this.head = upperHead;
            this.tail = upperTail;
            return null;
        }
        // if only nodes less than the target are found
        if (middleHead == null && upperHead == null) {
            this.head = lowerHead;
            this.tail = lowerTail;
            return null;
        }

        //if only nodes with target value are found
        if (lowerHead == null && upperHead == null) {
            this.head = middleHead;
            this.tail = middleTail;
            return null;
        }

        // if no nodes less than target are found
        if (lowerHead == null) {
            this.head = middleHead;
            this.tail = upperTail;
            middleTail.next = upperHead;
            return null
        }

        // if no nodes with target are found
        if (middleHead == null) {
            this.head = lowerHead;
            this.tail = upperTail;
            lowerTail.next = upperHead;
            return null;
        }

        // if no nodes great than target are found
        if (upperHead == null) {
            this.head = lowerHead;
            this.tail = middleTail;
            lowerTail.next = middleHead;
            return null;
        }

        //final case - all three linked lists have some kind of data
        this.head = lowerHead;
        this.tail = upperTail;
        lowerTail.next = middleHead;
        middleTail.next = upperHead;
        return null;
    }

}

// generateNewList(length, min_value, max_value) -> creates a new SLL of the
// given length, with nodes containing values from min_value up to max_value
// some random integers may be helpful here

function generateNewList(length = 10, min_value = 0, max_value = 10) {
    var new_sll = new SinglyLinkedList();

    for (var i = 0; i < length; i++) {
        var value = Math.round((Math.random() * (max_value - min_value)) + min_value);
        new_sll.addToBack(value);
    }

    return new_sll;
}

var new_sll = generateNewList(length = 20, min_value = 0, max_value = 10);
console.log(new_sll.display());
new_sll.partition(21);
console.log(new_sll.display());