var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var newStack = {
    storage: {}
  };
  _.extend(newStack, stackMethods);
  return newStack;
};

var stackMethods = {
  push: function (value) {
    this.storage[this.size()] = value;
  },
  pop: function () {
    let popped = this.storage[this.size() - 1];
    delete this.storage[this.size() - 1];
    return popped;
  },
  size: function () {
    return Object.keys(this.storage).length;
  }
};