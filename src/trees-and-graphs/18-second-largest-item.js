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
 * Finds the largest value in a binary search tree.
 * @param {BinaryTreeNode} rootNode - The root of a binary search tree.
 * @returns {number} The largest value in the tree.
 */
export function findLargest(rootNode) {
  if (!rootNode) throw new TypeError('Tree must have at least one node')

  let current = rootNode
  while (current) {
    if (!current.right) return current.value
    current = current.right
  }
}

/**
 * Finds the second largest value in a binary search tree.
 * @param {BinaryTreeNode} rootNode - The root of a binary search tree.
 * @returns {number} The second largest value in the tree.
 */
export function findSecondLargest(rootNode) {
  if (!rootNode || (!rootNode.left && !rootNode.right)) {
    throw new TypeError('Tree must have at least two nodes')
  }

  let current = rootNode
  while (current) {
    // If no right children, return highest value from left subtree
    if (current.left && !current.right) {
      return findLargest(current.left)
    }

    // If current is parent of largest and largest has no children, return current
    if (current.right && !current.right.left && !current.right.right) {
      return current.value
    }

    current = current.right
  }
}
