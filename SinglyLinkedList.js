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

// GET pseudocode
// define a get function that accepts an index
//  if the index is less than zero or the index is greated than or equal to length of list, return null
//  loop through the list until we reach the index and return the node at that specific index

// SET pseudocode
//  define a set function that accepts an index, and a value to update that index to
// use the get function to find the specific node
// if the node is not found, return false
// if the node is found, set the value and return true

// INSERT pseudocode
// define an insert function that accepts an index and a value
//  if the index is less than zero or greater than the length, return false
// if index is the same as the length, push new node to the end of the list
// if index is 0, unshift a new node to start of list
//  otherwise, use the get method, access the node at provided index - 1
// set the next property on that node to be the new node
// set the next property of the new node to the old next node
// incrememnt the length
// return true

// REMOVE pseudocode
// define a remove function that accepts an index and removes the element at that index
// if index is less than zero or greater than or equal to the length, return undefined
// if index is the same as length - 1 use pop, if index is 0 use shift method
// otherwise, using the get method access node at index - 1
// set the next property of that node to be the next of the NEXT node
// decrement the value
// return the value of the node removed

// REVERSE pseudocode
// define a reverse function that accepts no arguments
// swap the head and tail
// create a variable called next, and another called previous
// create another variable for currentNode and initialize it to the head property
// loop through the list
// set next to be the next property on whatever node is
// set the next property on the node to be whatever previous is
// set prev to be the value of the node variable
// set the node variable to be the value of the next variable.
// return the full list now reversed...

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

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

  get(index) {
    if (index < 0 || index >= this.length) return null;
    let counter = 0;
    let current = this.head;
    while (counter !== index) {
      current = current.next;
      counter++;
    }
    return current;
  }

  set(index, val) {
    let foundNode = this.get(index);
    if (foundNode) {
      foundNode.val = val;
      return true;
    }
    return false;
  }

  insert(index, val) {
    if (index < 0 || index > this.length) return false;
    if (index === this.length) return !!this.push(val);
    if (index === 0) return !!this.unshift(val);

    let newNode = new Node(val);
    let previous = this.get(index - 1);
    let temp = previous.next;
    previous.next = newNode;
    newNode.next = temp;
    this.length++;
    return true;
  }

  remove(index) {
    if (index < 0 || index >= this.length) return undefined;
    if (index === 0) return this.shift();
    if (index === this.length - 1) return this.pop();
    let previousNode = this.get(index - 1);
    let removed = previousNode.next;
    previousNode.next = removed.next;
    this.length--;
    return removed;
  }

  reverse() {
    let node = this.head;
    this.head = this.tail;
    this.tail = node;
    let next;
    let previous = null;
    for (let i = 0; i < this.length; i++) {
      next = node.next;
      node.next = previous;
      previous = node;
      node = next;
    }
    return this;
  }
}

let list = new SinglyLinkedList();
list.push("Hi");
list.push("there!");
list.push("How");
list.push("are");
list.push("you?!");
list.push("<3");

console.log(list.reverse());
