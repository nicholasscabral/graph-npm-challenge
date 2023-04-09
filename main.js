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
  const known = [];
  const installed = [];

  function dfsHelper(package) {
    known.push(package);
    for (const dep of graph[package]) {
      if (!known.includes(dep)) {
        dfsHelper(dep);
      }
    }
    installed.push(package);
  }

  for (const package in graph) {
    if (!known.includes(package)) {
      dfsHelper(package);
    }
  }

  return installed;
}
const sequence = dfs(packagesGraphs);
printSequence(sequence);
