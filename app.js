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
}
