const graph = {
  A: ["B", "C"],
  B: ["D", "E"],
  C: ["E", "F"],
  D: ["E"],
  E: [],
  F: ["E"],
};

function dfs(graph) {
  const path = [];
  const stack = [];

  function dfsHelper(package) {
    path.push(package);
    for (const dep of graph[package]) {
      if (!path.includes(dep)) {
        dfsHelper(dep);
      }
    }
    stack.push(package);
  }

  for (const package in graph) {
    if (!path.includes(package)) {
      dfsHelper(package);
    }
  }

  return stack;
}
const sequence = dfs(graph);

console.log({ sequence });

// const express = new Node('express', ['accepts', 'array-flatten', 'content-disposition', '...']);
// const cookieParser = new Node('cookie-parser', ['cookie', 'debug', 'depd', '...']);
// const debug = new Node('debug', ['ms', '...']);
// const accepts = new Node('accepts', ['mime-types', 'negotiator', '...']);
