text = "   This is an Example String   ";

result = text.lower().strip().split();
const text = "   This is an Example String   ";

const result = text
  .toLowerCase() // Convert to lowercase
  .trim() // Remove leading and trailing whitespace
  .split(/\s+/);
