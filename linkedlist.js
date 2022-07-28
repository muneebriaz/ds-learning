class ListNode {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class LinkedList {
    constructor(head = null){
        this.head = head;
    }

    size() {
        let count = 0;
        let node = this.head;

        while (node) {
            count++;
            node = node.next;
        }
        return count;
    }

    clear() {
        this.head = null;
    }

    firstNode() {
        return this.head;
    }

    lastNode() {
        let lastNode = this.head;
        if (lastNode) {
            while (lastNode.next) {
                lastNode = lastNode.next;
            }
        }
        return lastNode;
    }
}

let node1 = new ListNode(4);
let node2 = new ListNode(2);

node1.next = node2;

let linkedList = new LinkedList(node1);

console.log(linkedList);

console.log(linkedList.size());

console.log(linkedList.lastNode());

console.log(linkedList.firstNode());