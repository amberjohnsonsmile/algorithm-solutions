export class BinaryTreeNode {
  constructor(value) {
    this.value = value
    this.left = null
    this.right = null
  }

  insertLeft(value) {
    this.left = new BinaryTreeNode(value)
    return this.left
  }

  insertRight(value) {
    this.right = new BinaryTreeNode(value)
    return this.right
  }
}

/**
 * Binary search tree checker:
 * Write a function to check that a binary tree is a valid binary search tree.
 */
export function isBinarySearchTree(treeRoot) {
  // Start at root with arbitrarily low lower bound and arbitrarily high upper bound
  const nodeAndBoundsStack = []
  nodeAndBoundsStack.push({
    node: treeRoot,
    lowerBound: Number.NEGATIVE_INFINITY,
    upperBound: Number.POSITIVE_INFINITY
  })

  // Depth-first traversal
  while (nodeAndBoundsStack.length) {
    const { node, lowerBound, upperBound } = nodeAndBoundsStack.pop()

    // If node is invalid, return false
    if (node.value <= lowerBound || node.value >= upperBound) {
      return false
    }

    if (node.left) {
      // Must be less than current
      nodeAndBoundsStack.push({
        node: node.left,
        lowerBound,
        upperBound: node.value
      })
    }
    if (node.right) {
      // Must be greater than current
      nodeAndBoundsStack.push({
        node: node.right,
        lowerBound: node.value,
        upperBound
      })
    }
  }

  return true
}
