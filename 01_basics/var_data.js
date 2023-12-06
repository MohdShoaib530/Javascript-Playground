// 1. Number: Represents numeric values
const age = 20;
console.log(age); // Output → 20

// 2. String: Represents text
const name = "Mohd Shoaib";
const message = "Hello, Welcome to my GitHub account";
console.log(name); // Output → Mohd Shoaib
console.log(message); // Output → Hello, Welcome to my GitHub account

// 3. Boolean: Represents true or false values
const readyToWork = true;
const lazy = false;
console.log(readyToWork); // Output → true
console.log(lazy); // Output → false

// 4. Undefined: Represents an uninitialized variable
let undefinedVar;
console.log(undefinedVar); // Output → undefined

// 5. Null: Represents the intentional absence of any object value
const nullVar = null;
console.log(nullVar); // Output → null

// 6. Object: Represents a collection of key-value pairs
const person = {
  firstName: "Mohd",
  lastName: "Shoaib",
  age: 20,
  isStudent: true,
};
console.log(person); // Output → {firstName: 'Mohd', lastName: 'Shoaib', age: 20, isStudent: true}

// 7. Array: Represents an ordered list of values
const baseOfLife = ["Meditation", "Yoga", "Exercise","Study","beReady"];
console.log(baseOfLife); // Output → ['Meditation','Yoga','Exercise','Study','beReady']

const numbers = [1, 2, 3, 4, 5];
console.log(numbers); // Output → 1,2,3,4,5

// 8. Function: Represents a reusable block of code
function addNumbers(a, b) {
  return a + b;
} // The value of addNumbers is a function that takes two parameters and returns their sum
console.log(addNumbers(2, 3)); // Output → 5

// 9. Symbol: Represents a unique identifier
const sym1 = Symbol("key1");
const sym2 = Symbol("key1");
console.log(sym1 === sym2); // Output → false (Symbols are unique)

// 10. BigInt: Represents integer with arbitrary precision
const bigNum = BigInt(1000000000000000000n);
console.log(bigNum); // Output → 1000000000000000000
