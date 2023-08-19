const formatNumberFieldValue = (inputValue) => {
    const numericValue = inputValue.replace(/[^\d]/g, ''); // Remove non-numeric characters
    return '+' + numericValue; // Add a plus sign at the beginning
  };
  
  console.log(formatNumberFieldValue("+123-456-7890")); // Output: +1234567890
  