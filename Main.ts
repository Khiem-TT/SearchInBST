import {BinarySearchTree} from "./BinarySearchTree";

let tree = new BinarySearchTree();

tree.insert(1);
tree.insert(2);
tree.insert(3);
tree.insert(4);
tree.insert(5);
tree.insert(6);
tree.insert(7);

console.log(tree.search(2));
console.log(tree.search(4));
console.log(tree.search(6));
console.log(tree.search(8));