function numberCheck(arr) {
    return function (x) {
      return arr.includes(x);
    };
  }
  
  const arr = [1, 3, 4, 5];
  const checkNum = numberCheck(arr);
  console.log(checkNum(3)); // true
  console.log(checkNum(2)); // false
  