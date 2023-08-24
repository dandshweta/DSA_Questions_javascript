const validParanthesis = (input) => {
  const splittedArr = input.split("");

  const [firstElem] = splittedArr;

  if (
    typeof input !== "string" ||
    !input ||
    input.length % 2 !== 0 ||
    !["{", "(", "["].includes(firstElem)
  ) {
    return false;
  }

  const stackArr = [];

  for (let i = 0; i < splittedArr.length; i++) {
    const currentElem = splittedArr[i]; // ")"
    const recentlyAddedStackElem = stackArr[stackArr.length - 1]; // (

    // Check for {}
    if (recentlyAddedStackElem === "{" && currentElem === "}") {
      stackArr.pop();
      continue;
    }

    // Check for []
    if (recentlyAddedStackElem === "[" && currentElem === "]") {
      stackArr.pop();
      continue;
    }

    // Check for ()
    if (recentlyAddedStackElem === "(" && currentElem === ")") {
      stackArr.pop();
      continue;
    }

    stackArr.push(currentElem); // []

    // Handle false case
  }
  return stackArr.length === 0;
};

console.log(validParanthesis("([}}])"));
console.log(validParanthesis("(({[]}[[]]))"));
console.log(validParanthesis("(["));
