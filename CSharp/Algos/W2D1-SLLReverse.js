// Singly Linked List Reverse
// Build on your existing Singly Linked List code and write a function that would reverse the order of a list
// Ex: given a list like this: 1 -> 2 -> 3 -> 4 -> 5, reverse it to 5 -> 4 -> 3 -> 2 -> 1

class ListNode {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}


class SinglyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
    }
    // addToFront - adds a node with the given value to the head of the list
    // addToBack(value) {
    //     var new_node = new ListNode(value);

    //     // if list is empty
    //     if (this.head == null) {
    //         this.head = new_node;
    //         this.tail = new_node;
    //     }

    //     else {
    //         this.tail.next = new_node;
    //         this.tail = new_node;
    //         this.tail.next = null;
    //     }
    // }
    add(num) {
        if (this.head == null) {
            this.head = new ListNode(num);
        }
        else {
            let runner = this.head;
            while (runner.next !== null) {
                runner = runner.next;
            }
            runner.next = new ListNode(num);
        }
        // this.count++;
        return this;
    }
    
    printList() {
        var output = "";
        var runner = this.head;
        while (runner != null) {
            output += " | " + runner.value + " | ->";
            runner = runner.next;
        }
        console.log(output);
        return output;
    }
    
    /// Todays Algo~~
    // reverse(){
    //     var prev = null;
    //     var temp = this.head.next;
    //     while (temp.next != null){
    //         prev = this.head;
    //         this.head = temp;
    //         temp = temp.next;
    //     }
    //     this.head.next = prev;
    //     return this;
    // }
    
    reverse() {
        if (this.head === null) {
            console.log("This is not the list you are looking for.");
            return this;
        }
        var runner = this.head;
        var temp = null;
        while (runner.next != null) {
            temp = runner.next;
            runner.next = runner.next.next;
            temp.next = this.head;
            this.head = temp;
        }
        return this;
    }
    
}

function generateNewList(length = 10, min_value = 0, max_value = 10) {
    var new_sll = new SinglyLinkedList();

    for (var i = 0; i < length; i++) {
        var value = Math.round((Math.random() * (max_value - min_value)) + min_value);
        console.log(value);
        new_sll.add(value);
    }

    return new_sll;
}

var list =  generateNewList(10, 0, 12);
var list2 = new SinglyLinkedList();
// list2.add(1).add(2).add(4);
// list2.printList();
list.printList();
list.reverse();
list.printList();
