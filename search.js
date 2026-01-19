export function bfs(start, end, getNeighbors) {
  // returns shortest path from start to end
  const queue = [[start, [start]]];
  const visited = new Set();

  visited.add(start.toString());

  while (queue.length > 0) {
    const [current, path] = queue.shift();

    if (current[0] === end[0] && current[1] === end[1]) {
      return path;
    }

    // array of neighboring squares (possible knight moves)
    const neighbors = getNeighbors(current);

    for (const neighbor of neighbors) {
      const key = neighbor.toString();

      if (!visited.has(key)) {
        visited.add(key);
        queue.push([neighbor, [...path, neighbor]]);
      }
    }
  }

  return null; // no path found (theoretically impossible here)
}
