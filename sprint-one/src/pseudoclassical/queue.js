var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.storage = {};
  this.head = 0;
  this.tail = 0;
};
Queue.prototype.size = function() {
  return Object.keys(this.storage).length;
};

Queue.prototype.enqueue = function(value) {
  this.storage[this.head] = value;
  this.head++;
};
Queue.prototype.dequeue = function() {
  let dequeued = this.storage[this.tail];
  delete this.storage[this.tail];
  this.tail++;
  return dequeued;
};
