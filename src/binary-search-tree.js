const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {

  constructor() {
    this.roots = null;
  }

  root() {
    return this.roots;
  }

  add(data) {
    this.roots = addIn(this.roots, data);

    function addIn(node, data) {
      if (!node) {
        return new Node(data);
      }

      if(node.data === data) {
        return node;
      }

      if(data < node.data) {
        node.left = addIn(node.left, data);
      } else {
        node.right = addIn(node.right, data);
      }

      return node;
    }
  }

  has(data) {
    return findIn(this.roots, data);

    function findIn(node, data) {
      if(!node) {
        return false;
      }

      if(node.data === data) {
        return true;
      }

      if (data < node.data) {
        return findIn(node.left, data);
      } else {
        return findIn(node.right, data);
      }
    }
  }

  find(data) {
    return findOne(this.roots, data);

    function findOne(node, data) {
      if(!node) {
        return null;
      }

      if(node.data === data) {
        return node;
      }

      if (data < node.data) {
        return findOne(node.left, data);
      } else {
        return findOne(node.right, data);
      }
    }
  }

  remove(data) {
    this.roots = deleteNode(this.roots, data);

    function deleteNode(node, data) {
      if(!node) {
        return null;
      }

      if(data < node.data) {
        node.left = deleteNode(node.left, data);
        return node;
      } else if (node.data < data) {
        node.right = deleteNode(node.right, data);
        return node;
      } else {
        if(!node.left && !node.right) {
        return null;
        }

        if(!node.left) {
          node = node.right;
          return node; 
        }

        if(!node.right) {
          node = node.left;
          return node;
        }

        let littleRight = node.right;

        while (littleRight.left) {
          littleRight = littleRight.left;
        }

        node.data = littleRight.data;

        node.right = deleteNode(node.right, littleRight.data);


        return node;
      }
    }
  }

  min() {
    if (!this.roots) {
      return null;
    }

    let node = this.roots;

    while (node.left) {
      node = node.left;
    }

    return node.data;

  }

  max() {
    if (!this.roots) {
      return null;
    }

    let node = this.roots;

    while (node.right) {
      node = node.right;
    }

    return node.data;

  }
}

module.exports = {
  BinarySearchTree
};