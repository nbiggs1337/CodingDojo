class ListNode {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

// a stack! last in, first out
// we add/remove from the top of a stack
// what's going to be the top of our stack here?

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

var x = new SLLStack();
console.log(x.isEmpty(), "empty")
console.log(x.push(5), "push")
console.log(x.push(3), "push")
console.log(x.push(1), "push")
console.log(x.push(4), "push")
console.log(x, "list")
console.log(x.pop(), "pop")
console.log(x.top(), "top")
console.log(x.contains(7), "contains")
console.log(x.contains(3), "contains")
console.log(x.isEmpty(), "empty")
console.log(x.size(), "size")
