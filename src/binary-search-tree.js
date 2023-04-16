const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {

  constructor() {
    this.firstNode = null;
  }

  root() {
    return this.firstNode;
  }

  add(data) {
    this.firstNode = addIn(this.firstNode, data);

    function addIn(someNode, data) {
      if (!someNode) {
        return new Node(data);
      }

      if(someNode.data === data) {
        return someNode;
      }

      if(data < someNode.data) {
        someNode.left = addIn(someNode.left, data);
      } else {
        someNode.right = addIn(someNode.right, data);
      }

      return someNode;
    }
  }

  has(data) {
    return findIn(this.firstNode, data);

    function findIn(someNode, data) {
      if(!someNode) {
        return false;
      }

      if(someNode.data === data) {
        return true;
      }

      if (data < someNode.data) {
        return findIn(someNode.left, data);
      } else {
        return findIn(someNode.right, data);
      }
    }
  }

  find(data) {
    return findOne(this.firstNode, data);

    function findOne(someNode, data) {
      if(!someNode) {
        return null;
      }

      if(someNode.data === data) {
        return someNode;
      }

      if (data < someNode.data) {
        return findOne(someNode.left, data);
      } else {
        return findOne(someNode.right, data);
      }
    }
  }

  remove(data) {
    this.firstNode = deleteNode(this.firstNode, data);

    function deleteNode(someNode, data) {
      if(!someNode) {
        return null;
      }

      if(data < someNode.data) {
        someNode.left = deleteNode(someNode.left, data);
        return someNode;
      } else if (someNode.data < data) {
        someNode.right = deleteNode(someNode.right, data);
        return someNode;
      } else {
        if(!someNode.left && !someNode.right) {
        return null;
        }

        if(!someNode.left) {
          someNode = someNode.right;
          return someNode; 
        }

        if(!someNode.right) {
          someNode = someNode.left;
          return someNode;
        }

        let littleRight = someNode.right;

        while (littleRight.left) {
          littleRight = littleRight.left;
        }

        someNode.data = littleRight.data;

        someNode.right = deleteNode(someNode.right, littleRight.data);


        return someNode;
      }
    }
  }

  min() {
    if (!this.firstNode) {
      return null;
    }

    let someNode = this.firstNode;

    while (someNode.left) {
      someNode = someNode.left;
    }

    return someNode.data;

  }

  max() {
    if (!this.firstNode) {
      return null;
    }

    let someNode = this.firstNode;

    while (someNode.right) {
      someNode = someNode.right;
    }

    return someNode.data;

  }
}

module.exports = {
  BinarySearchTree
};