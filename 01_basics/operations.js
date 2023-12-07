// operators in js

console.log(+true);
console.log(-false);
console.log(+"");
console.log(!false);
console.log();
let gameCounter = 100;
++gameCounter;
console.log(gameCounter);
--gameCounter;
console.log(gameCounter);

// prefix and postfix 
let m = 3;
console.log(m);
const n = m++;
console.log(n);

console.log(`x:${m}, y:${n}`);
// Expected output: "m:4, n:3"

let a1 = 3;
console.log(a1);
const b1 = ++a1;
console.log(b1);

console.log(`a:${a1}, b:${b1}`);
// Expected output: "a1:4, b1:4"
let counter = 10;
counter++; //prefix
console.log(counter);
--counter; //postfix
console.log(counter);
// logical operators
// arithmetic operators: +, -, *, /, %
let num1 = 5;
let num2 = 3;

// addition
console.log(num1 + num2); // Output → 8
// subtraction
console.log(num1 - num2); // Output → 2
// multiplication
console.log(num1 * num2); // Output → 15
// division
console.log(num1 / num2); // Output → 1.666
// modulus (remainder)
console.log(num1 % num2); // Output → 2

// assignment operator: =
let x = 7;
x = x + 4;
console.log(x); // Output → 11

// comparison operators: ==, ===, !=, !==, >, <, >=, <=
let a = 5;
let b = "5";

// loose equality check (value only)
if (a == b) {
  console.log("equal"); // output → equal
} else {
  console.log("not equal");
}

// strict equality check (value and data type)
if (a === b) {
  console.log("identical");
} else {
  console.log("not identical");// output → not identical 
}

let c = 5;

// inequality check (value only)
if (c != b) {
  console.log("different");
} else {
  console.log("same"); // output → same 
}

// strict inequality check (value and data type)
if (c !== b) {
  console.log("strictly different"); // output →strictly different
} else {
  console.log("strictly same");
}

// greater than
if (c > b) {
  console.log("greater than");
} else {
  console.log("lesser than or equal to"); // output →lesser than or equal to
}

// lesser than
if (c < b) {
  console.log("lesser than");
} else {
  console.log("greater than or equal to"); // output → greater than or equal to 
}

// greater than or equal to
if (c >= b) {
  console.log("greater than or equal to");// output → greater tham or equal to 
} else {
  console.log("lesser than");
}

// lesser than or equal to
if (c <= b) {
  console.log("lesser than or equal to"); // output → lesser than or equal to 
} else {
  console.log("greater than");
}

// logical operators: &&, ||, !
let d = true;
let e = false;

// logical NOT
console.log(!e); // Output → true

// logical AND
if (!(d && e)) {
  console.log("true and false is not true"); // output → true and false is not true 
} else {
  console.log("false");
}

// logical OR
if (!d || e) {
  console.log("one of them is true");
} else {
  console.log("none of them are true"); // output → none of them are true 
}
