// function common(arr1, arr2) {
//   let result = [];

//   if (arr1[0].name === arr2[0].name) {
//     for (let i = 0; i < arr1.length; i++) {
//       for (let j = 0; j < arr2.length; j++) {
//         if (arr1[i].name === arr2[j].name) {
//           result.push(arr2[j]);
//           break;
//         }
//       }
//     }
//   }
//   return result;
// }
function common(arr1, arr2) {
  let result = [];
  console.log(arr1[0].name);
  console.log(arr2[0].name);
  if (arr1[0].name === arr2[0].name) {
    for (let i = 0; i < arr1.length; i++) {
      for (let j = 0; j < arr2.length; j++) {
        if (arr1[i].name === arr2[j].name) {
          result.push(arr2[j]);
          break; // Exit the inner loop since we found a match
        }
      }
    }
  }

  return result; // Move the return statement outside of the if block
}

console.log(
  common(
    [
      { name: "Joe Brown", goals: 0, assists: 0, points: 0 },
      { name: "Jim Bob", goals: 2, assists: 1, points: 3 },
      { name: "Harry Styles", goals: 1, assists: 1, points: 2 },
      { name: "Craig Mack", goals: 5, assists: 7, points: 12 },
      { name: "Dog", bones: 100 },
    ],
    [
      {
        name: "Craig Mack",
        goals: 3,
        assists: 3,
        points: 6,
        ppg: 0,
        ppa: 0,
        pims: 0,
      },
      {
        name: "Jim Bob",
        goals: 1,
        assists: 4,
        points: 5,
        ppg: 0,
        ppa: 1,
        pims: 0,
      },
      {
        name: "Joe Brown",
        goals: 0,
        assists: 0,
        points: 0,
        ppg: 0,
        ppa: 0,
        pims: 0,
      },
      {
        name: "Harry Styles",
        goals: 0,
        assists: 0,
        points: 0,
        ppg: 0,
        ppa: 0,
        pims: 0,
      },
    ]
  )
);
