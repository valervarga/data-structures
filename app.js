class Node {
	constructor(val) {
		this.val = val;
		this.next = null;
	}
};

/**
 * Stack is a LIFO data structure (abstract data type)
 * LIFO => Last In First Out
 */

class Stack {
	constructor() {
		this.first = null;
		this.last = null;
		this.length = 0;
	}

	push(val) {
		const newNode = new Node(val);

		if (!this.first) {
			this.first = newNode;
			this.last = newNode;
		} else {
			newNode.next = this.first;
			this.first = newNode;
		}

		return ++this.length;
	}

	pop() {
		if (!this.first) return null;
		const oldNode = this.first;

		if (this.length === 1) {
			this.last = null;
		}
		this.first = this.first.next;

		this.length--;
		return oldNode;
	}
}

const stack = new Stack();
stack.push(1);
stack.push(230);
stack.push(56);
stack.pop();
stack.pop();
stack.pop();

/**
 * Queue is a FIFO data structure (abstract data type)
 * FIFO => First In First Out
 */

class Queue {
	constructor() {
		this.first = null;
		this.last = null;
		this.length = 0;
	}

	enqueue(val) {
		const newNode = new Node(val);

		if (!this.first) {
			this.first = newNode;
			this.last = newNode;
		} else {
			this.last.next = newNode;
			this.last = newNode;
		}

		return ++this.length;
	}

	dequeue() {
		if (!this.first) return null;
		const oldNode = this.first;

		if (this.length === 1) {
			this.last = null;
		}
		this.first = this.first.next;

		this.length--;
		return oldNode;
	}
}

const queue = new Queue();
queue.enqueue(1);
queue.enqueue(230);
queue.enqueue(56);
queue.dequeue();
queue.dequeue();
queue.dequeue();
