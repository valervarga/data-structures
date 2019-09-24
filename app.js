/**
 * Stack is a LIFO data structure (abstract data type)
 * LIFO => Last In First Out
 */

class Node {
	constructor(val) {
		this.val = val;
		this.next = null;
	}
};

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

console.log(stack);
