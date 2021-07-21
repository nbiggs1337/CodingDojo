//Heaps. Like a BST but different i guess. Uses array instead of pointers. IDK.


class MinHeap {
    constructor() {
        //init an array with null 0 index. heap is now heap ig.
        this.heap = [null];
        
    }
    
    size(){
        //Returns size of array not including null value!
        return this.heap.length - 1;
    }
    
    top() {
        //returns top priority item from heap ( peak of tree ), null else
        return this.heap.length > 1 ? this.heap[1] : null
    }
    
    print(){
        //prints heap values
        console.log(this.heap);
    }
}






const Heap = new MinHeap()

console.log(Heap.size())

Heap.print()

console.log(Heap.top());