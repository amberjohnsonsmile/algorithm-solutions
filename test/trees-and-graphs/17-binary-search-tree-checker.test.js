import * as assert from 'assert'
import {
  BinaryTreeNode,
  isBinarySearchTree
} from '../../src/trees-and-graphs/17-binary-search-tree-checker.js'

describe('isBinarySearchTree', function () {
  it('identifies a valid full tree', () => {
    const treeRoot = new BinaryTreeNode(50)
    const leftNode = treeRoot.insertLeft(30)
    leftNode.insertLeft(10)
    leftNode.insertRight(40)
    const rightNode = treeRoot.insertRight(70)
    rightNode.insertLeft(60)
    rightNode.insertRight(80)

    const result = isBinarySearchTree(treeRoot)
    assert.equal(result, true)
  })

  it('identifies an invalid tree with valid subtrees', () => {
    const treeRoot = new BinaryTreeNode(50)
    const leftNode = treeRoot.insertLeft(30)
    leftNode.insertLeft(20)
    leftNode.insertRight(60)
    const rightNode = treeRoot.insertRight(80)
    rightNode.insertLeft(70)
    rightNode.insertRight(90)

    const result = isBinarySearchTree(treeRoot)
    assert.equal(result, false)
  })

  it('identifies a valid tree with a descending linked list', () => {
    const treeRoot = new BinaryTreeNode(50)
    let leftNode = treeRoot.insertLeft(40)
    leftNode = leftNode.insertLeft(30)
    leftNode = leftNode.insertLeft(20)
    leftNode = leftNode.insertLeft(10)

    const result = isBinarySearchTree(treeRoot)
    assert.equal(result, true)
  })

  it('identifies an invalid tree with an out of order linked list', () => {
    const treeRoot = new BinaryTreeNode(50)
    let rightNode = treeRoot.insertRight(70)
    rightNode = rightNode.insertRight(60)
    rightNode = rightNode.insertRight(80)

    const result = isBinarySearchTree(treeRoot)
    assert.equal(result, false)
  })

  it('identifies a valid tree with only one node', () => {
    const treeRoot = new BinaryTreeNode(50)
    const result = isBinarySearchTree(treeRoot)
    assert.equal(result, true)
  })
})
