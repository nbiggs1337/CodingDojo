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
    
    /// Todays Algo~~
    
    reverse() {
        if (this.head === null) { //edge case check first~~
            console.log("This is not the list you are looking for.");
            return this;
        }
        //begining of actual reverse~
        var runner = this.head;
        var temp = null;
        while (runner.next != null) {
            console.log("************* LOOP CYCLE START **************");
            temp = runner.next;//line 1
            console.log("line 1: temp = runner.next");
            console.log("Runner: " + runner.value + "  Runner.next: "+runner.next.value);
            if (temp.next === null){
                console.log("Temp: " + temp.value + "   Temp.Next: null");
            }
            else {
                console.log("Temp: " + temp.value + "   Temp.Next: " + temp.next.value);
            }
            console.log("Head: " + this.head.value + "   Head.next: " + this.head.next.value);
            console.log("--------------------------------------------");
            
            runner.next = runner.next.next;//line 2
            console.log("Line 2: runner.next = runner.next.next");
            if (runner.next === null){
                console.log("Runner: " + runner.value + "  Runner.next: null");
            }
            else { 
                console.log("Runner: " + runner.value + "  Runner.next: "+runner.next.value);
            }
            
            if (temp.next === null){
                console.log("Temp: " + temp.value + "   Temp.Next: null");
            }
            else {
                console.log("Temp: " + temp.value + "   Temp.Next: " + temp.next.value);
            }
            console.log("Head: " + this.head.value + "   Head.next: " + this.head.next.value);
            console.log("--------------------------------------------");
            
            temp.next = this.head;//line 3
            console.log("Line 3: temp.next = this.head");
            if (runner.next === null){
                console.log("Runner: " + runner.value + "  Runner.next: null")
            }
            else {
                console.log("Runner: " + runner.value + "  Runner.next: "+runner.next.value);
            }
            
            if (temp.next === null){
                console.log("Temp: " + temp.value + "   Temp.Next: null");
            }
            else {
                console.log("Temp: " + temp.value + "   Temp.Next: " + temp.next.value);
            }
            console.log("Head: " + this.head.value + "   Head.next: " + this.head.next.value);
            console.log("--------------------------------------------");
            
            this.head = temp; //line 4
            console.log("Line 4: this.head = temp");
            if (runner.next === null){
                console.log("Runner: " + runner.value + "  Runner.next: null");
            }
            else {
                console.log("Runner: " + runner.value + "  Runner.next: "+runner.next.value);
            }
            
            if (temp.next === null){
                console.log("Temp: " + temp.value + "   Temp.Next: null");
            }
            else {
                console.log("Temp: " + temp.value + "   Temp.Next: " + temp.next.value);
            }
            console.log("Head: " + this.head.value + "   Head.next: " + this.head.next.value);
            console.log("************* LOOP CYCLE END **************");
        }
        return this;
    }
    
}

function generateNewList(length = 10, min_value = 0, max_value = 10) {
    var new_sll = new SinglyLinkedList();

    for (var i = 0; i < length; i++) {
        var value = Math.round((Math.random() * (max_value - min_value)) + min_value);
        // console.log(value);
        new_sll.add(value);
    }

    return new_sll;
}

var list =  generateNewList(3, 0, 12);

list.printList();
list.reverse();
list.printList();

