class Node {
	constructor(val) {
		this.val = val;
		this.next = null;
		this.prev = null;
	}
}

class DoublyLinkedList {
	constructor() {
		this.head = null;
		this.tail = null;
		this.length = 0;
	}

	push(val) {
		const newNode = new Node(val);

		if (!this.head) {
			this.head = newNode;
			this.tail = newNode;
		} else {
			newNode.prev = this.tail;
			this.tail.next = newNode;
			this.tail = newNode;
		}

		this.length++;
		return this;
	}

	pop() {
		if (!this.head) return undefined;
		const oldTail = this.tail;

		if (this.length === 1) {
			this.head = null;
			this.tail = null;
		} else {
			this.tail = oldTail.prev;
			this.tail.next = null;
			oldTail.prev = null;
		}

		this.length--;
		return oldTail;
	}

	shift() {
		if (!this.head) return undefined;
		const oldHead = this.head;

		if (this.length === 1) {
			this.head = null;
			this.tail = null;
		} else {
			this.head = oldHead.next;
			this.head.prev = null;
			oldHead.next = null;
		}

		this.length--;
		return oldHead
	}

	unshift(val) {
		const newNode = new Node(val);

		if (!this.head) {
			this.head = newNode;
			this.tail = newNode;
		} else {
			this.head.prev = newNode;
			newNode.next = this.head;
			this.head = newNode;
		}

		this.length++;
		return this;
	}

	get(index) {
		if (index < 0 || index >= this.length) return null;
		let foundNode = null;

		if (index <= this.length / 2) {
			foundNode = this.head;
			for (let i = 0; i < index; i++) {
				foundNode = foundNode.next;
			}
		} else {
			foundNode = this.tail;
			for (let i = this.length - 1; index < i; i--) {
				foundNode = foundNode.prev;
			}
		}

		return foundNode;
	}

	set(index, val) {
		const node = this.get(index);
		if (!node) return false;

		node.val = val;
		return true;
	}

	// This method is only for testing purposes
	print() {
		const arr = [];
		let current = this.head;

		while (current) {
			arr.push(current.val);
			current = current.next;
		}

		console.log(arr);
	}
}

const list = new DoublyLinkedList();
list.push(1);
list.push(4);
list.pop();
list.shift();
list.push(9);
list.push(1);
list.unshift(5);
list.unshift(7);
list.push(13)
list.push(76)
list.push(55)
list.get(5);
list.set(5, 'set');
list.print();
