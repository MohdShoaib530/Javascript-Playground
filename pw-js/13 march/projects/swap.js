function swapValues(x, y) {
    // Use destructuring assignment to swap the values of x and y
    [x, y] = [y, x];
  
    // Return an array with the swapped values
    return [x, y];
  }
  
  // Example usage:
  let a = 5;
  let b = 10;
  
  let swapped = swapValues(a, b);
  
  console.log(swapped); // Output: [10, 5]
  console.log(a); // Output: 10 (a is now 10)
  console.log(b); // Output: 5 (b is now 5)
  