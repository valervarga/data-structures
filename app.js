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

	set(index, val) {
		const node = this.get(index);

		if (!node) return false;

		node.val = val;
		return true;
	}

	insert(index, val) {
		if (index < 0 || index > this.length) return false;
		if (index === 0) return !!this.unshift(val);
		if (index === this.length) return !!this.push(val);

		const node = new Node(val);
		const prevNode = this.get(index - 1);

		node.next = prevNode.next;
		prevNode.next = node;
		this.length++
		return true;
	}

	remove(index) {
		if (index < 0 || index >= this.length) return false;
		if (index === 0) return !!this.shift();
		if (index === this.length - 1) return !!this.pop();

		const prevNode = this.get(index - 1);
		const removedNode = prevNode.next;
		prevNode.next = removedNode.next;
		this.length--;
		return removedNode.val;
	}

	reverse() {
		let node = this.head;
		this.head = this.tail;
		this.tail = node;

		let next = null;
		let prev = null;

		for (let i = 0; i < this.length; i++) {
			next = node.next;
			node.next = prev;
			prev = node;
			node = next;
		}

		return this;
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
};

const list = new SinglyLinkedList();
list.push(3);
list.push(45);
list.push(26);
list.pop();
list.push(14);
list.shift();
list.push(100);
list.unshift(13);
list.get(1);
list.set(1, 79);
list.insert(1, 43 );
list.remove(2);
list.print();
list.reverse();
list.print();
