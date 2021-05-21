class ListNode {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

// a queue! first in, first out
// where should we add items? where are they removed from
class SLLStack {
    constructor() {
        this.head = null;
        this.tail = null;
    }
    // push(value) - adds the given value to the stack
    push(value) {
        
        var node = new ListNode(value);
        
        if (this.head == null) {
            this.head = node;
            this.tail = node;
            // return value
        }
        else {
            node.next = this.head;
            this.head = node;
        }
        return value
        }
    

    // pop() - removes the top value from stack and returns it
    pop() {
        if (this.head == null){
            return null;
        }
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

    // top() - returns the top value without removing it
    top() {
        return this.head.value
    }

    // contains(target) - returns true if the target value is in the stack,
    // false if not
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

    // isEmpty() - returns true if the stack is empty, false otherwise
    isEmpty() {
        if (this.head == null){
            return true
        }
        else {
            return false
        }
    }

    // size() - returns the size of the stack
    size() {
        var count = 0

        if (this.head == null) {
            return count
        }
        else {
            var runner = this.head
            while (runner != null){
                count += 1;
                runner = runner.next;
            }
            return count
        }
    }
}

class SLLQueue {
    constructor() {
        this.head = null;
        this.tail = null;
    }
    // enqueue(value) - adds the given value to the queue (at the tail)
    enqueue(value) {
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
        return value;
    }
    
    // dequeue() - removes the top value from queue and returns it
    dequeue() {
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

    // front() - returns the top value without removing it
    front() {
        if (this.head == null) {
            return null;
        }
        return this.head.value
    }

    // contains(target) - returns true if the target value is in the queue,
    // false if not
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

    // isEmpty() - returns true if the queue is empty, false otherwise
    isEmpty() {
        if (this.head == null && this.tail == null){
            return true;
        }
        else {
            return false;
        }
    }

    // size() - returns the size of the queue
    size() {
        if (this.isEmpty()){
            return 0;
        }

        var size = 1;
        var runner = this.head;
        while (runner.next != null) {
            runner = runner.next;
            size ++;
        }
        return size;
    }

    // method: compareQueues (odd-numbered group)
    // return true if the queues have the same values in the same order
    // false otherwise
    // important: this is a non-destructive operation!
    // do not modify either queue
    compareQueues(queue2) {
        if (this.size() != queue2.size()) {
            return false;
        }
        var queue2Runner = queue2.head;
        var runner = this.head;
        while (queue2Runner != null && runner != null){
            if (queue2Runner.value != runner.value){
                return false;
            }
            queue2Runner = queue2Runner.next;
            runner = runner.next;
        }
        return true;
    }
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
    // isPalindrome() - return true if the values of the queue form a palindrome,
    // and false otherwise. don't put the values of the queue into an array!
    // (or turn them into a string, either - your queue listnode values
    // may not always be able to be turned into a string)
    // do not modify the queue state in any way
    // also don't add some kind of tricky extra queue methods - they're not needed
    // maybe... use a stack? you'll need to copy that class into this file
    // you ain't gotta tho nbd it's just a suggestion

    isPalindrome() {
        if (this.head == null){
            return false;
        }
        if (this.head.value != this.tail.value){
            return false;
        }
        var runner = this.head;
        var tempStack = new SLLStack();
        while (runner != null){
            tempStack.push(runner.value);
            runner = runner.next;
        }
        console.log(tempStack);
        return this.compareQueues(tempStack);
    }
}

var queue_A = new SLLQueue();
console.log(queue_A.enqueue(1))
console.log(queue_A.enqueue(3))
console.log(queue_A.enqueue(4))
console.log(queue_A.enqueue(5))
console.log(queue_A.enqueue(10))
console.log(queue_A.enqueue(3))
console.log(queue_A.enqueue(1))
console.log(queue_A.isPalindrome())

var queue_B = new SLLQueue();
console.log(queue_B.enqueue(1))
console.log(queue_B.enqueue(3))
console.log(queue_B.enqueue(5))
console.log(queue_B.enqueue(2))
console.log(queue_B.enqueue(5))
console.log(queue_B.enqueue(3))
console.log(queue_B.enqueue(1))
console.log(queue_B.isPalindrome())