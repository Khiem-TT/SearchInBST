import {TreeNode} from "./TreeNode";

export class BinarySearchTree<T> {
    root: TreeNode<T> | null;

    constructor() {
        this.root = null;
    }

    insert(data: T): TreeNode<T> {
        if (!this.root) {
            this.root = new TreeNode<T>(data);
            return this.root;
        } else {
            let node = new TreeNode(data);
            let currentNode = this.root;
            while (currentNode) {
                if (data < currentNode.data) {
                    if (!currentNode.left) {
                        currentNode.left = node;
                        break;
                    }
                    currentNode = currentNode.left;
                } else if (data > currentNode.data) {
                    if (!currentNode.right) {
                        currentNode.right = node;
                        break;
                    }
                    currentNode = currentNode.right;
                }
            }
            return currentNode;
        }
    }

    search(data: T): TreeNode<T> {
        let currentNode = this.root;
        while (currentNode) {
            if (currentNode.data === data) {
                return currentNode;
            }
            if (data < currentNode.data) {
                currentNode = currentNode.left;
            } else currentNode = currentNode.right;
        }
        console.log('Can not find the node with this data');
    }
}