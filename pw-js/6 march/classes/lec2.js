/* let arr = [2,3,4];
arr.forEach(function(element, index, arr){
    console.log(index,element,arr);
});

arr.forEach((index,element,arr) => {
    console.log("arrow",index,element,arr);
});

const heros = ["naagraj","doga","dhruva","maniraj"];

heros.forEach((el) => {
  console.log(el.toUpperCase());
});

arr.map(function(element,index,arr){
    console.log(element,index,arr);
});

heros.map((h) => console.log(h.toUpperCase()));

// filter 

console.log(heros);
const herosWithRaj = heros.filter((h) => {
    return h.endsWith("raj")
});
console.log(herosWithRaj);

// shopin cart



const cartBill = [20, 30, 40, 50];
const sumOfCartBill = cartBill.reduce((prev,curr) => {
  return prev + curr;
},0);
console.log(sumOfCartBill);


const gameScore = [200, 300, 310, 250, 150];
// check if all values are numbers
console.log(typeof gameScore[3]);
const gameScoreCheck = gameScore.every((v) => typeof v === "number" );
console.log(gameScoreCheck);

// find score above 200

const above200 = gameScore.find((score) => score > 200);
console.log(above200);
 */
// findIndex
// some
//sort
/* 
gameScore = [200,300,400,600]
const above200 = gameScore.some((score) => score > 200);

console.log(above200); */

/* const fruits = ['banana', 'apple', 'cherry', 'date'];

const sortedFruits = fruits.sort();

console.log(sortedFruits); // Output: ['apple', 'banana', 'cherry', 'date'] */

/* const numbers = [30, 10, 5, 80, 20];

const sortedNumbers = numbers.sort();

console.log(sortedNumbers); // [ 10, 20, 30, 5, 80 ] */

/* const numbers = [30, 10, 5, 80, 20];

const sortedNumbers = numbers.sort(function(a, b) {
  return a - b;
});

console.log(sortedNumbers); // Output: [5, 10, 20, 30, 80] */







