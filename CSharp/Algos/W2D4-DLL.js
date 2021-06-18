// Doubly Linked List
// Using your knowledge of Singly Linked Lists, build out the following methods for DLL:
// Add to front
// Add to back
// Remove from front
// Remove from back
// Append value (given a value to search for and a value to insert, insert the new value AFTER the given value)
// Prepend value (same as append, but add the value AFTER the given value)

class ListNode {
    constructor(value){
        this.value = value;
        this.next = null;
        this.prev = null;
    }
}

class DLL {
    constructor(){
        this.head = null;
        this.tail = null;
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
    
    ///Todays Algos ~
    
    addToFront(value){
        if (this.head == null){
            this.head = new ListNode(value);
            this.tail = this.head;
        }
        else {
            var node = new ListNode(value);
            node.next = this.head;
            this.head.prev = node;
            this.head = node;
            return this;
        }
    }
    
    addToBack(value){
        var node = new ListNode(value);
        if (this.head == null){
            this.head = node;
            this.tail = node;
        }
        else {
            this.tail.next = node;
            node.prev = this.tail;
            node = this.tail;
            return this;
        }
    }
    
    offWithYourHead(){
        if (this.head == this.tail){
            this.head = null;
            this.tail = null;
            return this;
        }
        else {
            this.head = this.head.next;
            this.head.prev = null;
            return this;
        }
    }
    
    removeTail(){
        if (this.head == this.tail){
            this.head = null;
            this.tail = null;
        }
        else {
            var tailPrev = this.tail.prev;
            this.tail.prev = null;
            tailPrev.next = null;
            tailPrev = this.tail;
        }
    }
    
    append(trgt, value){
        var temp = new ListNode(value);
        var runner = this.head;
        while (runner.value != trgt && runner.next != null){
            runner = runner.next;
        }
        if (runner.next == null){
            return false;
        }
        if (runner.value == trgt){
            if( runner.prev == null){
                var prev = null;
            }
            else {
                var prev = runner.prev;
            }
            
            prev.next = temp;
            temp.next = runner;
            temp.prev = prev;
            runner.prev = temp;
        }
    }
    
    prepend(trgt, value){
        var temp = new ListNode(value)
        if ( this.head = null){
            return false;
        }
        else {
            var runner = this.head;
            while(runner.value != trgt && runner.next != null){
                runner = runner.next;
            }
            if (runner.next == null && runner.value != trgt){
                return false;
            }
            if (runner.next != null && runner.value == trgt){
                
            }
        }
    }
    
    
    
}
function generateNewList(length = 5, min_value = 0, max_value = 5) {
    var new_DLL = new DLL();

    for (var i = 0; i < length; i++) {
        var value = Math.round((Math.random() * (max_value - min_value)) + min_value);
        // console.log(value);
        new_DLL.addToFront(value);
    }

    return new_DLL;
}

list = generateNewList(10, 0, 5);
list.printList();

// list.offWithYourHead();
// list.printList();
// list.removeTail();
// list.printList();

list.append(3, 0);
list.printList();