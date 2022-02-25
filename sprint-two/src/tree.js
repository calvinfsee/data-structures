var Tree = function(value) {
  var newTree = {};
  newTree.value = value;

  // your code here
  newTree.children = []; // fix me
  _.extend(newTree, treeMethods);

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  let newChild = Tree(value);
  this.children.push(newChild);
};

treeMethods.contains = function(target) {
  let contained = false;
  if (this.value === target) {
    return true;
  } else {
    if (this.children.length > 0) {
      this.children.forEach((child) => {
        contained = contained || child.contains(target);
      });
    }
  }
  return contained;
};



/*
 * Complexity: What is the time complexity of the above functions?
 */