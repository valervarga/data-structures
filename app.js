class Node {
	constructor(val) {
		this.val = val;
		this.next = null;
	}
};

class SinglyLinkedList {
	constructor() {
		this.head = null;
		this.tail = null;
		this.length = 0;
	}

	push(val) {
		const node = new Node(val);

		if (!this.head) {
			this.head = node;
			this.tail = this.head;
		} else {
			this.tail.next = node;
			this.tail = node;
		}

		this.length++;
		return this;
	}

	pop() {
		if (!this.head) return undefined;

		let current = this.head;
		if (current === this.tail) {
			this.head = null;
			this.tail = null;
		} else {
			let newTail = current;
			
			while (current.next !== null) {
				newTail = current;
				current = current.next;
			}

			newTail.next = null;
			this.tail = newTail;
		}

		this.length--;
		return current;
	}

	shift() {
		if (!this.head) return undefined;
		let current = this.head;
		this.head = current.next;
		this.length--;

		if (!this.head) {
			this.tail = null;
		}

		return current;
	}

	unshift(val) {
		const node = new Node(val);

		if (!this.head) {
			this.head = node;
			this.tail = this.head;
		} else {
			node.next = this.head;
			this.head = node;
		}

		this.length++;
		return this;
	}

	get(index) {
		if (index < 0 || index >= this.length) return undefined;

		let counter = 0;
		let current = this.head;

		while (counter < index) {
			current = current.next;
			counter++;
		}

		return current;
	}
};

const list = new SinglyLinkedList();
list.push(3);
list.push(45);
list.push(26);
list.pop();
list.push(14);
list.shift();
list.shift();
list.push(100);
list.unshift(13);
list.get(1);

console.log(list);
