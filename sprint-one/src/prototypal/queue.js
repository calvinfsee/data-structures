var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var newQueue = Object.create(queueMethods);
  newQueue.storage = {};
  newQueue.head = 0;
  newQueue.tail = 0;
  return newQueue;
};

var queueMethods = {
  enqueue: function(value) {
    this.storage[this.head] = value;
    this.head++;
  },

  dequeue: function() {
    let dequeued = this.storage[this.tail];
    delete this.storage[this.tail];
    this.tail++;
    return dequeued;
  },

  size: function() {
    return Object.keys(this.storage).length;
  }
};