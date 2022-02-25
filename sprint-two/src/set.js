var Set = function() {
  var set = Object.create(setPrototype);
  set._storage = []; // fix me
  return set;
};

var setPrototype = {};

setPrototype.add = function(item) { //Constant
  if (!this.contains(item)) {
    this._storage.push(item);
  }
};

setPrototype.contains = function(item) { //Linear
  return _.contains(this._storage, item);
};

setPrototype.remove = function(item) { //Linear
  if (this.contains(item)) {
    this._storage.splice(this._storage.indexOf(item), 1);
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */