import * as assert from 'assert'
import {
  BinaryTreeNode,
  findLargest,
  findSecondLargest
} from '../../src/trees-and-graphs/18-second-largest-item.js'

describe('findSecondLargest', function () {
  it('gets second largest item from full tree', () => {
    const treeRoot = new BinaryTreeNode(50)
    const leftNode = treeRoot.insertLeft(30)
    leftNode.insertLeft(10)
    leftNode.insertRight(40)
    const rightNode = treeRoot.insertRight(70)
    rightNode.insertLeft(60)
    rightNode.insertRight(80)

    const result = findSecondLargest(treeRoot)
    assert.equal(result, 70)
  })

  it('gets second largest item when largest has a left child', () => {
    const treeRoot = new BinaryTreeNode(50)
    const leftNode = treeRoot.insertLeft(30)
    leftNode.insertLeft(10)
    leftNode.insertRight(40)
    const rightNode = treeRoot.insertRight(70)
    rightNode.insertLeft(60)

    const result = findSecondLargest(treeRoot)
    assert.equal(result, 60)
  })

  it('gets second largest item when largest has a left subtree', () => {
    const treeRoot = new BinaryTreeNode(50)
    let leftNode = treeRoot.insertLeft(30)
    leftNode.insertLeft(10)
    leftNode.insertRight(40)
    const rightNode = treeRoot.insertRight(70)
    leftNode = rightNode.insertLeft(60)
    leftNode.insertRight(65)
    leftNode = leftNode.insertLeft(55)
    leftNode.insertRight(58)

    const result = findSecondLargest(treeRoot)
    assert.equal(result, 65)
  })

  it('gets second largest item when it is the root node', () => {
    const treeRoot = new BinaryTreeNode(50)
    const leftNode = treeRoot.insertLeft(30)
    leftNode.insertLeft(10)
    leftNode.insertRight(40)
    treeRoot.insertRight(70)

    const result = findSecondLargest(treeRoot)
    assert.equal(result, 50)
  })

  it('gets second largest item when it is the root node on a two node tree', () => {
    const treeRoot = new BinaryTreeNode(50)
    treeRoot.insertLeft(30)

    const result = findSecondLargest(treeRoot)
    assert.equal(result, 30)
  })

  it('gets second largest item when it is in a right offshoot of the left subtree', () => {
    const treeRoot = new BinaryTreeNode(50)
    const leftNode = treeRoot.insertLeft(30)
    leftNode.insertRight(40)
    leftNode.insertLeft(10)

    const result = findSecondLargest(treeRoot)
    assert.equal(result, 40)
  })

  it('gets second largest item given a descending linked list', () => {
    const treeRoot = new BinaryTreeNode(50)
    let leftNode = treeRoot.insertLeft(40)
    leftNode = leftNode.insertLeft(30)
    leftNode = leftNode.insertLeft(20)
    leftNode = leftNode.insertLeft(10)

    const result = findSecondLargest(treeRoot)
    assert.equal(result, 40)
  })

  it('gets second largest item given an ascending linked list', () => {
    const treeRoot = new BinaryTreeNode(50)
    let rightNode = treeRoot.insertRight(60)
    rightNode = rightNode.insertRight(70)
    rightNode = rightNode.insertRight(80)

    const result = findSecondLargest(treeRoot)
    assert.equal(result, 70)
  })

  it('throws an error for a tree with only one node', () => {
    const treeRoot = new BinaryTreeNode(50)
    assert.throws(() => {
      findSecondLargest(treeRoot)
    }, TypeError)
  })

  it('throws an error for an empty tree', () => {
    const treeRoot = null
    assert.throws(() => {
      findSecondLargest(treeRoot)
    }, TypeError)
  })
})

describe('findLargest', function () {
  it('gets the largest item from a full tree', () => {
    const treeRoot = new BinaryTreeNode(50)
    const leftNode = treeRoot.insertLeft(30)
    leftNode.insertLeft(10)
    leftNode.insertRight(40)
    const rightNode = treeRoot.insertRight(70)
    rightNode.insertLeft(60)
    rightNode.insertRight(80)

    const result = findLargest(treeRoot)
    assert.equal(result, 80)
  })

  it('gets the largest item when it has a left child', () => {
    const treeRoot = new BinaryTreeNode(50)
    const leftNode = treeRoot.insertLeft(30)
    leftNode.insertLeft(10)
    leftNode.insertRight(40)
    const rightNode = treeRoot.insertRight(70)
    rightNode.insertLeft(60)

    const result = findLargest(treeRoot)
    assert.equal(result, 70)
  })

  it('gets the largest item when it has a left subtree', () => {
    const treeRoot = new BinaryTreeNode(50)
    let leftNode = treeRoot.insertLeft(30)
    leftNode.insertLeft(10)
    leftNode.insertRight(40)
    const rightNode = treeRoot.insertRight(70)
    leftNode = rightNode.insertLeft(60)
    leftNode.insertRight(65)
    leftNode = leftNode.insertLeft(55)
    leftNode.insertRight(58)

    const result = findLargest(treeRoot)
    assert.equal(result, 70)
  })

  it('gets the largest item when it is in right subtree', () => {
    const treeRoot = new BinaryTreeNode(50)
    const leftNode = treeRoot.insertLeft(30)
    leftNode.insertLeft(10)
    leftNode.insertRight(40)
    treeRoot.insertRight(70)

    const result = findLargest(treeRoot)
    assert.equal(result, 70)
  })

  it('gets the largest item when there are two nodes and root is largest', () => {
    const treeRoot = new BinaryTreeNode(50)
    treeRoot.insertLeft(30)

    const result = findLargest(treeRoot)
    assert.equal(result, 50)
  })

  it('gets the largest item when there are multiple nodes and root is largest', () => {
    const treeRoot = new BinaryTreeNode(50)
    const leftNode = treeRoot.insertLeft(30)
    leftNode.insertRight(40)
    leftNode.insertLeft(10)

    const result = findLargest(treeRoot)
    assert.equal(result, 50)
  })

  it('gets the largest item from a descending linked list', () => {
    const treeRoot = new BinaryTreeNode(50)
    let leftNode = treeRoot.insertLeft(40)
    leftNode = leftNode.insertLeft(30)
    leftNode = leftNode.insertLeft(20)
    leftNode = leftNode.insertLeft(10)

    const result = findLargest(treeRoot)
    assert.equal(result, 50)
  })

  it('gets the largest item from an ascending linked list', () => {
    const treeRoot = new BinaryTreeNode(50)
    let rightNode = treeRoot.insertRight(60)
    rightNode = rightNode.insertRight(70)
    rightNode = rightNode.insertRight(80)

    const result = findLargest(treeRoot)
    assert.equal(result, 80)
  })

  it('gets the largest item from a one node tree', () => {
    const treeRoot = new BinaryTreeNode(50)
    const result = findLargest(treeRoot)
    assert.equal(result, 50)
  })

  it('throws an error when tree is empty', () => {
    const treeRoot = null
    assert.throws(() => {
      findLargest(treeRoot)
    }, TypeError)
  })
})
