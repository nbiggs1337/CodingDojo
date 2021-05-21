class ListNode {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

// a queue! first in, first out
// where should we add items? where are they removed from

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
}

// compareQueues (even-numbered group)
// return true if the queues have the same values in the same order
// false otherwise
// important: this is a non-destructive operation!
// do not modify either queue
function compareQueues(queue1, queue2) {

}

// test your queue implementation here!

var queue_A = new SLLQueue();
console.log(queue_A.enqueue(1))
console.log(queue_A.enqueue(3))
console.log(queue_A.enqueue(5))
console.log(queue_A.dequeue())
console.log(queue_A.front())
console.log(queue_A.contains(5))
console.log(queue_A.contains(10))
console.log(queue_A.isEmpty())
console.log(queue_A.size())


var queue_B = new SLLQueue();
console.log(queue_B.isEmpty());
console.log(queue_B.size())
console.log(queue_A.compareQueues(queue_B))

var queue_C = new SLLQueue();
console.log(queue_C.enqueue(3))
console.log(queue_C.enqueue(5))
console.log(queue_A.compareQueues(queue_C))

var queue_D = new SLLQueue();