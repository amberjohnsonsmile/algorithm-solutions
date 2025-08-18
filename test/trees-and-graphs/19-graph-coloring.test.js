import * as assert from 'assert'
import {
  colorGraph,
  GraphNode
} from '../../src/trees-and-graphs/19-graph-coloring.js'

describe('colorGraph', function () {
  const colors = ['red', 'green', 'blue', 'orange', 'yellow', 'white']

  it('colors a line graph', () => {
    let graph = []
    {
      const nodeA = new GraphNode('A')
      const nodeB = new GraphNode('B')
      const nodeC = new GraphNode('C')
      const nodeD = new GraphNode('D')
      nodeA.neighbors.add(nodeB)
      nodeB.neighbors.add(nodeA)
      nodeB.neighbors.add(nodeC)
      nodeC.neighbors.add(nodeB)
      nodeC.neighbors.add(nodeD)
      nodeD.neighbors.add(nodeC)
      graph = [nodeA, nodeB, nodeC, nodeD]
    }

    colorGraph(graph, colors)
    const result = validateGraphColoring(graph)
    assert.equal(result, true)
  })

  it('colors a separate graph', () => {
    let graph = []
    {
      const nodeA = new GraphNode('A')
      const nodeB = new GraphNode('B')
      const nodeC = new GraphNode('C')
      const nodeD = new GraphNode('D')
      nodeA.neighbors.add(nodeB)
      nodeB.neighbors.add(nodeA)
      nodeC.neighbors.add(nodeD)
      nodeD.neighbors.add(nodeC)
      graph = [nodeA, nodeB, nodeC, nodeD]
    }
    colorGraph(graph, colors)

    const result = validateGraphColoring(graph)
    assert.equal(result, true)
  })

  it('colors a triangle graph', () => {
    let graph = []
    {
      const nodeA = new GraphNode('A')
      const nodeB = new GraphNode('B')
      const nodeC = new GraphNode('C')
      nodeA.neighbors.add(nodeB)
      nodeA.neighbors.add(nodeC)
      nodeB.neighbors.add(nodeA)
      nodeB.neighbors.add(nodeC)
      nodeC.neighbors.add(nodeA)
      nodeC.neighbors.add(nodeB)
      graph = [nodeA, nodeB, nodeC]
    }
    colorGraph(graph, colors)

    const result = validateGraphColoring(graph)
    assert.equal(result, true)
  })

  it('colors an envelope graph', () => {
    let graph = []
    {
      const nodeA = new GraphNode('A')
      const nodeB = new GraphNode('B')
      const nodeC = new GraphNode('C')
      const nodeD = new GraphNode('D')
      const nodeE = new GraphNode('E')
      nodeA.neighbors.add(nodeB)
      nodeA.neighbors.add(nodeC)
      nodeB.neighbors.add(nodeA)
      nodeB.neighbors.add(nodeC)
      nodeB.neighbors.add(nodeD)
      nodeB.neighbors.add(nodeE)
      nodeC.neighbors.add(nodeA)
      nodeC.neighbors.add(nodeB)
      nodeC.neighbors.add(nodeD)
      nodeC.neighbors.add(nodeE)
      nodeD.neighbors.add(nodeB)
      nodeD.neighbors.add(nodeC)
      nodeD.neighbors.add(nodeE)
      nodeE.neighbors.add(nodeB)
      nodeE.neighbors.add(nodeC)
      nodeE.neighbors.add(nodeD)
      graph = [nodeA, nodeB, nodeC, nodeD, nodeE]
    }
    colorGraph(graph, colors)

    const result = validateGraphColoring(graph)
    assert.equal(result, true)
  })

  it('throws an error if the graph contains a loop', () => {
    let graph = []
    {
      const nodeA = new GraphNode('A')
      nodeA.neighbors.add(nodeA)
      graph = [nodeA]
    }

    assert.throws(() => {
      colorGraph(graph)
    }, Error)
  })
})

function validateGraphColoring(graph) {
  const maxDegree = Math.max(...graph.map((node) => node.neighbors.size))

  const colorsUsed = new Set()

  graph.forEach((node) => {
    colorsUsed.add(node.color)
  })

  if (colorsUsed.has(null)) {
    return false
  }

  if (colorsUsed.size > maxDegree + 1) {
    return false
  }

  let badEdges = 0

  graph.forEach((node) => {
    node.neighbors.forEach((neighbor) => {
      if (neighbor.color === node.color) {
        badEdges += 1
      }
    })
  })

  if (badEdges > 0) {
    return false
  }

  return true
}
