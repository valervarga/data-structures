class Node {
	constructor(value) {
		this.value = value;
		this.left = null;
		this.right = null;
	}
}

class BinarySearchTree {
	constructor() {
		this.root = null;
	}

	insert(value) {
		const node = new Node(value);

		if (!this.root) {
			this.root = node;
		} else {
			this.determineTreeSide(this.root, node);
		}

		return this;
	}

	determineTreeSide(root, node) {
		if (root.value === node.value) return;
		if (root.value > node.value) {
			if (!root.left) root.left = node;
			root = root.left
		} else {
			if (!root.right) root.right = node;
			root = root.right;
		}

		this.determineTreeSide(root, node);
	}
}

var tree = new BinarySearchTree();
tree.root = new Node(10);
tree.root.right = new Node(15);
tree.root.left = new Node(6);
tree.root.left.left = new Node(3);
tree.root.left.right = new Node(8);
tree.root.right.right = new Node(20);
tree.insert(13);
