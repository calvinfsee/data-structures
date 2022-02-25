var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var startIndex = 0;
  var numValues = 0;


  // Implement the methods below
  var tail = 0;
  var head = 0;

  someInstance.size = function() {
    return numValues;
  };

  someInstance.enqueue = function(value) {
    storage[head] = value;
    head++;
  };

  someInstance.dequeue = function() {
    let dequeued = storage[tail];
    delete storage[tail];
    tail++;
    return dequeued;
  };

  someInstance.size = function() {
    return Object.keys(storage).length;
  };

  return someInstance;
};
