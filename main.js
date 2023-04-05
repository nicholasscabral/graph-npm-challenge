const packagesGraphs = {
  express: ["array-flatten", "body-parser"],
  accepts: ["mime-types", "negotiator"],
  "array-flatten": [],
  "body-parser": ["bytes", "content-type", "debug", "qs"],
  bytes: [],
  "content-type": ["mime-types"],
  debug: ["ms"],
  "mime-types": ["mime-db"],
  "mime-db": [],
  negotiator: ["accepts"],
  qs: ["side-channel"],
  "side-channel": [],
  ms: [],
};

function printSequence(sequence) {
  sequence.forEach((item, index) => {
    console.log(`${index + 1}: ${item}`);
  });
}

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
const sequence = dfs(packagesGraphs);
printSequence(sequence);
// const express = new Node('express', ['accepts', 'array-flatten', 'content-disposition', '...']);
// const cookieParser = new Node('cookie-parser', ['cookie', 'debug', 'depd', '...']);
// const debug = new Node('debug', ['ms', '...']);
// const accepts = new Node('accepts', ['mime-types', 'negotiator', '...']);
