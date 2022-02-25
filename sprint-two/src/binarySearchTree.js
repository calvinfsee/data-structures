var BinarySearchTree = function(value) {
  var tree = Object.create(BinarySearchTree.prototype);
  tree.value = value;
  tree.left = null;
  tree.right = null;
  return tree;
};

BinarySearchTree.prototype.insert = function (insertedVal) { //Logarithmic
  if (this.value < insertedVal) {
    if (this.right === null) {
      this.right = BinarySearchTree(insertedVal);
    } else {
      this.right.insert(insertedVal);
    }
  } else {
    if (this.left === null) {
      this.left = BinarySearchTree(insertedVal);
    } else {
      this.left.insert(insertedVal);
    }
  }
};

BinarySearchTree.prototype.contains = function (target) { //Logarithmic
  let foundMatch = false;
  if (this.value === target) {
    return true;
  } else if (this.value < target && this.right !== null) {
    foundMatch = this.right.contains(target);
  } else if (this.value > target && this.left !== null) {
    foundMatch = this.left.contains(target);
  }
  return foundMatch;
};

BinarySearchTree.prototype.depthFirstLog = function (callback) { //Linear
  callback(this.value);
  if (this.left !== null) {
    this.left.depthFirstLog(callback);
  }
  if (this.right !== null) {
    this.right.depthFirstLog(callback);
  }

};

/*
 * Complexity: What is the time complexity of the above functions?
 */
