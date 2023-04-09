const packagesGraphs = {
  express: ["array-flatten", "accepts", "body-parser"],
  accepts: ["mime-types"],
  "array-flatten": [],
  "body-parser": ["bytes", "content-type", "debug"],
  bytes: [],
  "content-type": ["mime-types"],
  debug: ["ms"],
  "mime-types": ["mime-db"],
  "mime-db": [],
  ms: [],
};

function printSequence(sequence) {
  console.log("Installation order");
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
