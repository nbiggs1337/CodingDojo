// Singly Linked List Has Loop
// Some dastardly coding has left you with a loop in your singly linked list! (Meaning your while loop will run forever!) -- It's up to you to figure out if it's just a really long list or your coworker has created a loop in your list!
// Return true if a loop is found, false if one is not

// Break loop
// After identifying that a loop has been found, break it


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
    
    ///Adds given num into back of list - basiclly pushes.
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
    //Runs through list and prints each nodes Value
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
    
    //Determine if loops exist in SLL
    isLoop() {
        if (this.head == null){
            return false;
        }
        var runner = this.head;
        var jumper = this.head;
        while (jumper != null){
            runner = runner.next;
            jumper = jumper.next.next;
            if (runner == jumper){
                return true;
            }
        }
        return false;
    }
    
    killLoop(){
        if (this.head == null){
            return "There are no loops here."
        }
        var runOne = this.head.next;
        var runTwo = this.head;
        runTwo.marked = true;
        while (runOne.marked != true){
            if (runOne.next == null){
                return "There are no loops here."
            }
            runOne = runOne.next;
            runTwo = runTwo.next;
            runTwo.marked = true;
        }
        runTwo.next = null;
        return "Loop broken --maaayybeee--";
    }
    
}

function generateNewList(length = 5, min_value = 0, max_value = 10) {
    var new_sll = new SinglyLinkedList();

    for (var i = 0; i < length; i++) {
        var value = Math.round((Math.random() * (max_value - min_value)) + min_value);
        // console.log(value);
        new_sll.add(value);
    }

    return new_sll;
}

//Creating a nice SLL.
var list = generateNewList();
list.printList();

//Creating loop
console.log("Setting this value to start loop:" + list.head.next.next.next.next.value);
list.head.next.next.next.next.next = list.head.next;

// list.printList(); /// List is looped infinite ******Comment out*********

console.log("Is list looping?: "+  list.isLoop()); //Should return true - list is now looped

console.log(list.killLoop()); // should break looop...... .. . should.

list.printList();


// console.log("-=-=-=-=-=-=- Second List -=-=-=-=-=-=-=-");


//Larger list loop testing: 
//Creating a nice SLL.
// var list2 = generateNewList(12,0,20);
// list2.printList();

// //Creating loop
// console.log("Setting this value to start loop: " + list2.head.next.next.next.next.next.next.next.next.next.next.next.value);
// list2.head.next.next.next.next.next.next.next.next.next.next.next.next = list2.head.next.next.next;

// // list2.printList(); /// List is looped infinite ******Comment out*********

// console.log("Is list looping?: "+  list2.isLoop()); //Should return true - list is now looped

// console.log(list2.killLoop()); // should break looop --maybbb--

// list2.printList();
