// Try Conversion

function convertToNumber(inputString) {
  
  try{
    const num = Number(inputString); // Convert the string to a number
    if(isNaN(num)){
        throw new Error("Invalid Number")
    }
    return num;
  }
  catch(error){
    console.error("This is a:",error.message);
    return undefined;
  }
  
}
const inputString = "hdfs";
const inputNumber = "234"

console.log(convertToNumber(inputNumber)); // output → This is a: Invalid Number undefined
console.log(convertToNumber(inputString)); // output → 234


/* function divide(a, b) {
    try {
      if (b === 0) {
        throw new Error("Division by zero is not allowed");
      }
      return a / b;
    } catch (error) {
      console.error("An error occurred:", error.message);
      return undefined; // Handle the error by returning a special value
    }
  }
  
  console.log(divide(10, 2)); // Output: 5
  console.log(divide(8, 0));  // Output: An error occurred: Division by zero is not allowed, undefined */
  