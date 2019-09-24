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
		const poppedNode = this.tail;

		if (this.length === 1) {
			this.head = null;
			this.tail = null;
		} else {
			this.tail = poppedNode.prev;
			this.tail.next = null;
			poppedNode.prev = null;
		}

		this.length--;
		return poppedNode;
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
list.push(9);
list.print();
