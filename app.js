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

const list = DoublyLinkedList();
list.print();
