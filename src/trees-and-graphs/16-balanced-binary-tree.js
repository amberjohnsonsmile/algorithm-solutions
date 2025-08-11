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
 * Write a function to check if a binary tree is "superbalanced", meaning
 * the difference between depths of any two leaf nodes in no more than one.
 *
 * @param {BinaryTreeNode} treeRoot - root of the tree being checked
 * @returns {boolean} - whether or not the tree is superbalanced
 */
export function isBalanced(treeRoot) {
  // Get depth of every leaf and add to array
  const depths = []

  // Track node, depth in a stack
  const nodes = []
  nodes.push([treeRoot, 0])

  while (nodes.length) {
    // Process first item in nodes
    const nodePair = nodes.pop()
    const node = nodePair[0]
    const depth = nodePair[1]

    const isLeaf = !node.left && !node.right
    const notInDepthsArray = depths.indexOf(depth) === -1
    if (isLeaf && notInDepthsArray) {
      depths.push(depth)
    }

    // If more than two depths, or depths are more than two apart, return false
    const moreThanTwoDepths = depths.length > 2
    const moreThanTwoApart =
      depths.length === 2 && Math.abs(depths[0] - depths[1]) > 1

    if (moreThanTwoDepths || moreThanTwoApart) {
      return false
    }

    if (node.right) {
      nodes.push([node.right, depth + 1])
    }
    if (node.left) {
      nodes.push([node.left, depth + 1])
    }
  }

  return true
}
