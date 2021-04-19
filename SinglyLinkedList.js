class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

// PUSH pseudocode
// define a push function that should accept a value
// create a new node using the value passed to the function
// if there is no head property on the list set the head and tail to be the newly created node
// otherwise set the next property on the tail to be the new node, and set the tail property on the list to be the newly created node
// increment length by 1
// return the linked list

// POP pseudocode
// define a pop function that takes no argumants
// if there are no nodes in the list return undefined
// loop through entire list until you reach the tail
// set next property of 2nd to last node in the list to null
// decrement the length by 1
// return the value of the node removed

// SHIFT pseudocode
//  define a shift function that takes no arguments
// if there's no nodes return undefined
// store the current head in a variable
// set the head property to be the current head's next property
// decrement length of list by 1
//  return the variable for the node removed.

// UNSHIFT pseudocode
// define an unshift function that takes one argument
// create a new node using the value
// if there is no head, set the new head and tail
// otherwise set the newly created nodes next propert to the current head property
// increment length of list by 1
// return full list

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val) {
    let newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  pop() {
    if (!this.head) return undefined;
    let current = this.head;
    let newTail = current;
    while (current.next) {
      newTail = current;
      current = current.next;
    }
    this.tail = newTail;
    this.tail.next = null;
    this.length--;
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    return current;
  }

  shift() {
    if (!this.head) return undefined;
    let currentHead = this.head;
    this.head = currentHead.next;
    this.length--;
    if (this.length === 0) {
      this.tail = null;
    }
    return currentHead;
  }

  unshift(val) {
    let newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }

    this.length++;
    return this;
  }
}

let list = new SinglyLinkedList();
list.push("Hi!");
list.push("you!!");
list.push(99);
list.pop();

console.log(list.unshift("FIRST"));
