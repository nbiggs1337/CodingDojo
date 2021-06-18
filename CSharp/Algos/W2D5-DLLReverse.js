
// Doubly Linked List Reverse
// Given a doubly linked list, write a function that reverses the order


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
    
    printList(){
        let output = ""
        let runner = this.head;
        if(runner.prev == null){
            output += " | null |"
        }
        while(runner != null)
        {
            output += " <- | " + runner.value + " | -> ";
            runner = runner.next;
        }
        if(runner == null){
            output += " | null |"
        }
        console.log(output);
        return output;
    }
    
    ///Todays Algos ~
    reverse(){
        if (this.head == null){
            return false;
        }
        if (this.head == this.tail){
            return this;
        }
        var runner = this.head;
        var pre = null;
        var post = runner.next;
        while (runner.next != null){
            runner.next = pre;
            runner.prev = post;
            pre = runner;
            runner = post;
            post = runner.next;
        }
        runner.next = pre;
        runner.prev = post;
        var temp = this.head;
        this.head = this.tail;
        this.tail = temp;
        return this;
    }
    
    ReverseDLL() { /// Mitch absolutly destroying my hopes & dreams in just 5 simple lines
        let runner = this.head;
        while (runner) {
            [runner.next, runner.prev] = [runner.prev, runner.next]
            runner = runner.prev;
        }
        [this.head, this.tail] = [this.tail, this.head]
    }
    
    
    //Yesterdays Algos~
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

list = generateNewList();

list.printList();

list.reverse();
list.printList();




// console.log('-=-==-=-=-=-=-New List-=-=-=-=-=-=-=-');

// list2 = generateNewList(10,0,20);
// list2.printList();

// list2.reverse();
// list2.printList();



//Mitchs method logic example

// var arr = [0,1,2,3,4,5,6,7];
// for(let i = 0; i < Math.floor(arr.length/2); i++)
// {
//     [arr[i], arr[arr.length-(1+i)]] = [arr[arr.length-(1+i)], arr[i]]
// }
// console.log(arr)