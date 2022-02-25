var DoublyLinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    let newNode = DoubleNode(value);
    if (this.head === null) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.previous = this.tail;
      this.tail.next = newNode;
    }

    this.tail = newNode;
  };

  list.removeHead = function() {
    let out = this.head.value;
    this.head = this.head.next;
    if (this.head) { this.head.previous = null; }
    return out;
  };

  list.contains = function(target) {
    currentNode = this.head;

    while (currentNode !== null) {
      if (currentNode.value === target) {
        return true;
      }
      currentNode = currentNode.next;
    }

    return false;
  };

  list.addToHead = function (value) {
    var newNode = DoubleNode(value);

    if (list.head) {
      list.head.previous = newNode;
      newNode.next = list.head;
    } else {
      list.head = newNode;
      list.tail = newNode;
    }

    list.head = newNode;
  };

  list.removeTail = function (value) {
    let out = list.tail.value;

    if (list.tail.previous) {
      list.tail = list.tail.previous;
      list.tail.next = null;
    }

    return out;
  };

  return list;
};

var DoubleNode = function(value) {
  var node = {};

  node.value = value;
  node.next = null;
  node.previous = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 *
 * addToTail: O(1)
 *
 * addToHead: O(1)
 *
 * removeHead: O(1)
 *
 * removeTail: O(1)
 *
 * contains: O(n)
 */
