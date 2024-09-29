import {LinkedList, Node} from "./linkedLists.js";

let newNode = new Node();
newNode.value = "dog";

let list = new LinkedList();
list.head = newNode;

list.append("cat");

console.log(list.toString());