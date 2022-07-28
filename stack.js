class Stack {
    constructor() {
        this.items = [];
    }

    add(element) {
        return this.items.push(element);
    }

    remove(){
        return this.items.pop();
    }

    peek() {
        return this.items[this.items.length - 1]
    }

    isEmpty() {
        return this.items.length === 0;
    }

    size() {
        return this.items.length;
    }

    clear() {
        this.items = [];
    }
}

let stack = new Stack();

stack.add(1);
stack.add(4);
stack.add(2);
stack.add(7);

console.log(stack.items);

console.log(stack.peek());

stack.remove();

console.log(stack.items);