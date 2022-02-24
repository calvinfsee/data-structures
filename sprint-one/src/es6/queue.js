class Queue {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    this.storage = {};
    this.head = 0;
    this.tail = 0;
  }
  size() {
    return Object.keys(this.storage).length;
  }
  enqueue (value) {
    this.storage[this.head] = value;
    this.head++;
  }
  dequeue () {
    let dequeued = this.storage[this.tail];
    delete this.storage[this.tail];
    this.tail++;
    return dequeued;
  }
}
