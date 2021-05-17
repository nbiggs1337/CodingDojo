class ArrayStack {
    constructor() {
        this.contents = [];
    }
    // push(value) - adds the given value to the stack
    push(value) {
            this.contents.push(value);
        }

    // pop() - removes the top value from stack and returns it
    pop() {
        if (this.contents.length > 0) {
            var x = this.contents.pop()
            return x
        } else {
        return null
        }
    }
    

    // top() - returns the top value without removing it
    top() {
        if (this.contents.length > 0) {
            var top = this.contents[this.contents.length - 1]
            return top
        } else {
            return null
        }
    }

    // contains(target) - returns true if the target value is in the stack,
    // false if not
    contains(target) {
        for (var x = 0; x < this.contents.length; x++){
            if (this.contents[x] == target) {
                return true
            }
            }
        return false
        }


    // isEmpty() - returns true if the stack is empty, false otherwise
    isEmpty() {
        if (this.contents.length < 1) {
            return true
        } else {
            return false
        }
    }

    // size() - returns the size of the stack
    // bonus - there's a way to make this call way easier at the expense of
    // push/pop - can you find it?
    size() {
        return this.contents.length;
    }
}

// make sure you test all six methods!
// make sure that you test any edge cases you find

var x = new ArrayStack();
console.log(x.isEmpty())
x.push(9)
x.push('hello')
x.push(66)
x.push(78)
x.push(1)
console.log(x)

console.log(x.pop())

console.log(x)

console.log(x.top())
console.log(x.contains(78))
console.log(x.contains(79))

console.log(x.isEmpty())
console.log(x.size())