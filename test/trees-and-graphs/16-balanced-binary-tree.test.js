import * as assert from 'assert'
import {
  BinaryTreeNode,
  isBalanced
} from '../../src/trees-and-graphs/16-balanced-binary-tree.js'

describe('isBalanced', function () {
  it('identifies a superbalanced full tree', () => {
    const treeRoot = new BinaryTreeNode(5)
    const leftNode = treeRoot.insertLeft(8)
    leftNode.insertLeft(1)
    leftNode.insertRight(2)
    const rightNode = treeRoot.insertRight(6)
    rightNode.insertLeft(3)
    rightNode.insertRight(4)

    const result = isBalanced(treeRoot)
    assert.equal(result, true)
  })

  it('identifies a superbalanced tree with both leaves at the same depth', () => {
    const treeRoot = new BinaryTreeNode(3)

    const leftNode = treeRoot.insertLeft(4)
    leftNode.insertLeft(1)

    const rightNode = treeRoot.insertRight(6)
    rightNode.insertRight(9)

    const result = isBalanced(treeRoot)
    assert.equal(result, true)
  })

  it('identifies a superbalanced tree when leaf heights differ by one', () => {
    const treeRoot = new BinaryTreeNode(6)
    const leftNode = treeRoot.insertLeft(1)
    const rightNode = treeRoot.insertRight(0)
    rightNode.insertRight(7)

    const result = isBalanced(treeRoot)
    assert.equal(result, true)
  })

  it('identifies an unbalanced tree when leaf heights differ by two', () => {
    const treeRoot = new BinaryTreeNode(6)
    const leftNode = treeRoot.insertLeft(1)
    const rightNode = treeRoot.insertRight(0)
    rightNode.insertRight(7).insertRight(8)

    const result = isBalanced(treeRoot)
    assert.equal(result, false)
  })

  it('identifies an superbalanced tree with three leaves total', () => {
    const treeRoot = new BinaryTreeNode(1)
    const leftNode = treeRoot.insertLeft(5)
    const rightNode = treeRoot.insertRight(9)
    rightNode.insertLeft(8)
    rightNode.insertRight(5)

    const result = isBalanced(treeRoot)
    assert.equal(result, true)
  })

  it('identifies an unbalanced tree when both subtrees are superbalanced', () => {
    const treeRoot = new BinaryTreeNode(1)
    const leftNode = treeRoot.insertLeft(5)
    const rightNode = treeRoot.insertRight(9)
    rightNode.insertLeft(8).insertLeft(7)
    rightNode.insertRight(5)

    const result = isBalanced(treeRoot)
    assert.equal(result, false)
  })

  it('identifies an unbalanced tree when both subtrees are superbalanced in a different way', () => {
    const treeRoot = new BinaryTreeNode(1)
    const leftNode = treeRoot.insertLeft(2)
    leftNode.insertLeft(3)
    leftNode.insertRight(7).insertRight(8)
    treeRoot.insertRight(4).insertRight(5).insertRight(6).insertRight(9)

    const result = isBalanced(treeRoot)
    assert.equal(result, false)
  })

  it('identifies an unbalanced tree with three leaves at different levels', () => {
    const treeRoot = new BinaryTreeNode(1)
    const leftNode = treeRoot.insertLeft(2)
    const leftLeft = leftNode.insertLeft(3)
    leftNode.insertRight(4)
    leftLeft.insertLeft(5)
    leftLeft.insertRight(6)
    treeRoot.insertRight(7).insertRight(8).insertRight(9).insertRight(10)

    const result = isBalanced(treeRoot)
    assert.equal(result, false)
  })

  it('identifies a superbalanced tree with only one node', () => {
    const treeRoot = new BinaryTreeNode(1)
    const result = isBalanced(treeRoot)
    assert.equal(result, true)
  })

  it('identifies a superbalanced tree given a linked list', () => {
    const treeRoot = new BinaryTreeNode(1)
    treeRoot.insertRight(2).insertRight(3).insertRight(4)

    const result = isBalanced(treeRoot)
    assert.equal(result, true)
  })
})
