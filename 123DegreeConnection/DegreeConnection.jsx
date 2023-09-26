const connections = [
    ["Alice", "Bob"],
    ["Alice", "Carol"],
    ["Bob", "David"],
    ["Carol", "Eve"],
    ["Eve", "Frank"],
  ];
  

function findConnections(connections, startPerson, degrees) {
  const graph = {};
  for (let i = 0; i < connections.length; i++) {
    const [person1, person2] = connections[i];
    if (!graph[person1]) {
      graph[person1] = [];
    }
    if (!graph[person2]) {
      graph[person2] = [];
    }
    graph[person1].push(person2);
    graph[person2].push(person1);
  }

  const results = {};

  for (let degree = 1; degree <= degrees; degree++) {
    if (!results[degree]) {
      results[degree] = [];
    }

    if (degree === 1) {
      results[degree] = graph[startPerson] || [];
    } else {
      const prevDegreeConnections = results[degree - 1];
      for (let j = 0; j < prevDegreeConnections.length; j++) {
        const person = prevDegreeConnections[j];
        const neighbors = graph[person] || [];
        for (let k = 0; k < neighbors.length; k++) {
          const neighbor = neighbors[k];
          if (!results[degree].includes(neighbor)) {
            results[degree].push(neighbor);
          }
        }
      }
    }
  }

  return results;
}

const startPerson = "Alice";
const degrees = 3;
const connectionsResult = findConnections(connections, startPerson, degrees);

console.log(`1st-degree connections of ${startPerson}:`, connectionsResult[1]);
console.log(`2nd-degree connections of ${startPerson}:`, connectionsResult[2]);
console.log(`3rd-degree connections of ${startPerson}:`, connectionsResult[3]);
