// Singly Linked List Flatten Children
// Given a Singly Linked List that may contain nodes with children, return a flattened version of the list
// Ex: given 1 -> 2 -> 3    ->     4 -> 5
//                     |           |
//                      1 -> 2 ->  3   2 -> 3
// Return a list like so: 1 -> 2 -> 1 -> 2 -> 3 -> 3 -> 4 -> 2 -> 3 -> 5

// Singly Linked List Unflatten Children
// Given a Singly Linked List that may have flattened children, unflatten it back to its original state

class ListNode {
    constructor(value) {
        this.value = value;
        this.next = null;
        this.child = null;
    }
}

class SinglyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
    }
    
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
        return this;
    }
    
    addChild(num){//pushes child on tail node of list~
        if (this.head == null){
            return "Error ~ empty list!"
        }
        else {
            let runner = this.head;
            while (runner.next !== null){
                runner = runner.next
            }
            if (runner.child !== null){
                let childRun = runner.child;
                while (childRun.next !== null){
                    childRun = childRun.next;
                }
                childRun.next = new ListNode(num);
            }
            else{
                runner.child = new ListNode(num)
            }
            
        }
        return this.child;
    }
    
    flattenChilden(){
        if (this.head == null){
            return "This is not the list you are looking for..."
        }
        else {
            var runner = this.head;
            var temp = null;
            while (runner.next !== null){
                if (runner.child !== null){
                    temp = runner.next;
                    runner.next = runner.child;
                    
                    while (runner.next !== null){
                        runner = runner.next;
                    }
                    runner.next = temp;
                }
                else {
                    runner = runner.next;
                }
            }
        }
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
}

list = new SinglyLinkedList;

list.add(1);
list.add(2);
list.add(3);
list.addChild(4);
list.addChild(5);
list.addChild(6);
list.add(7);
list.add(8);
list.add(9);

list.printList();

list.flattenChilden(); //fuck dem kidz

list.printList();