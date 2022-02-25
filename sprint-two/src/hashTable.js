var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
  this._numValues = 0;
};

HashTable.prototype.insert = function(k, v) {
  if (this._limit * 0.75 <= this._numValues) {
    let oldLimit = this._limit;
    let oldStorage = this._storage;
    this._limit *= 2;
    this._storage = LimitedArray(this._limit);

    for (let i = 0; i < oldLimit; i++) {
      let newThis = this;
      if (oldStorage.get(i)) {
        oldStorage.get(i).forEach(function(pair) {
          newThis.insert(pair[0], pair[1]);
        });
      }
    }
  }

  var index = getIndexBelowMaxForKey(k, this._limit);
  if (this._storage.get(index)) {
    for (let i = 0; i < this._storage.get(index).length; i++) {
      if (this._storage.get(index)[i][0] === k) {
        this._storage.get(index)[i][1] = v;
        return;
      }
    }
    this._storage.get(index).push([k, v]);
  } else {
    this._storage.set(index, [[k, v]]);
  }

  this._numValues++;
};
HashTable.prototype.retrieve = function(k) { //Linear
  var index = getIndexBelowMaxForKey(k, this._limit);
  if (this._storage.get(index).length > 0) {
    for (let i = 0; i < this._storage.get(index).length; i++) {
      if (this._storage.get(index)[i][0] === k) {
        return this._storage.get(index)[i][1];
      }
    }
  }
};
HashTable.prototype.remove = function(k) { //Linear
  var index = getIndexBelowMaxForKey(k, this._limit);
  if (this._storage.get(index)) {
    for (let i = 0; i < this._storage.get(index).length; i++) {
      if (this._storage.get(index)[i][0] === k) {
        this._storage.get(index).splice(i, 1);
        this._numValues--;
        break;
      }
    }
  }
};
/*
 * Complexity: What is the time complexity of the above functions?
 *
 * Insert: O(n)
 *
 * retreive: O(n)
 *
 * remove: O(n)
 */