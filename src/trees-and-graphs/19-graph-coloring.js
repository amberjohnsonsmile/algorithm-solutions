export class GraphNode {
  constructor(label) {
    this.label = label
    this.neighbors = new Set()
    this.color = null
  }
}

/**
 * Given an undirected graph with maximum degree D, find a graph coloring using at most D+1 colors.
 * @param {Array<GraphNode>} graph - array of graph nodes, including label, neighbors, and color.
 * @param {Array<string>} colors - array of colors as string values.
 */
export function colorGraph(graph, colors) {
  // Set node color one at a time
  graph.forEach((node) => {
    // Error out if any node has itself as a neighbor
    if (node.neighbors.has(node)) {
      throw new Error(
        `Legal coloring impossible for node with loop: ${node.label}`
      )
    }

    // Create a set of illegal colors
    const illegalColors = new Set()
    node.neighbors.forEach((neighbor) => {
      if (neighbor.color) illegalColors.add(neighbor.color)
    })

    // Iterate through colors until a legal color is found, then set it
    for (let i = 0; i < colors.length; i++) {
      const color = colors[i]
      if (!illegalColors.has(color)) {
        node.color = color
        break
      }
    }
  })
}
