var DoublyLinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    let newNode = DoubleNode(value);
    if (this.head === null) {
      this.head = newNode;
    } else {
      newNode.previous = this.tail;
      this.tail.next = newNode;
    }

    this.tail = newNode;
  };

  list.removeHead = function() {
    let out = this.head.value;
    this.head = this.head.next;
    this.head.previous = null;
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
    list.head.previous = newNode;
    newNode.next = list.head;
    list.head = newNode;
  };

  list.removeTail = function (value) {
    let out = list.tail;
    list.tail = list.tail.previous;
    list.tail.next = null;
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
 * removeHead: O(1)
 *
 * contains: O(n)
 */
