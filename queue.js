class Queue {
    constructor() {
        this.items = [];
    }

    enqueue(element) {
        return this.items.push(element);
    }

    dequeue() {
        if (this.items.length > 0) {
            return this.items.shift();
        }
    }

    peek() {
        if (this.items.length > 0) return this.items[this.items.length - 1];
    }

    isEmpty() {
        if (this.items.length === 0) return this.items.length === 0;
    }

    size() {
        return this.items.length;
    }

    clear() {
        this.items = [];
    }
}

let queue = new Queue();

queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(4);
queue.enqueue(6);

console.log(queue.size());

console.log(queue.peek());

queue.dequeue();

console.log(queue.size());

queue.clear();

console.log(queue.size());
