function bubbleSort(arr) {
    let swapped = false;
    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        let temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
        swapped = true;
      }
    }
    
    // Check if any swaps were made in the entire pass through the array
    if (!swapped) {
      break; // This break statement is not needed and should be removed
    }
    
    return arr;
  }
  console.log(bubbleSort([2, 1, 4, 3, 5, 6, 9, 6, 5]));
  