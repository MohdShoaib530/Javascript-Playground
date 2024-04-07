// hello world in js
console.log("shoaib");
console.log(this);

// values and data types

// primitive data types

// numbers 1, 3, 4 5.3
// string- "pw skills" or 'pw skills'
// boolean- true and false
// null - whan server is not able to show weather temp then show nothing or empty
// undefined
let a ;

// non primitive data types

// Arrays 

let name1 = "shoaib";
let name2 = "sakib";
let name3 = "fija";
let name4 = "saba";

let name5 = ["shoaib","sakib","fija","saba",3, 5.4,false,true,]

let myName = "shoaib"
myName = "mohd shoaib"

// -object: {}

let dog = {name:"jhabbu", Owner: "Shoaib"}

// practice

let highScore = 300
console.log(highScore);

/* let pwSkillsCoursePrice = 3500
console.log(pwSkillsCoursePrice);

pwSkillsCoursePrice = 3999
console.log(pwSkillsCoursePrice);

let username = "shoaib" */

let pwSkillsCoursePrice = 200
let gst = 36
let finalCoursePrice = pwSkillsCoursePrice + gst
console.log("final amount to be paid",finalCoursePrice);

let pwDsaCourse = 500
let finalDsaPrice = pwDsaCourse + gst
console.log("dsa course price", finalDsaPrice);

console.log("Answer is:", 5 % 2);
console.log("Answer is:", 5 / 2);
console.log("Answer is:", 5 ** 2);

let shaoaibHighScore = 300
let sakibHighScore = "300"
console.log(shaoaibHighScore === sakibHighScore);

// And opertator

let value1 = true 
let value2 = false
let value3 = true
let value4 = false
console.log(value1 && value3);
console.log(value1 && value2);


let isLogged  = true
let cardDetails = true

// or operator

let gmailAccount = true
let githubAccount = false

console.log(gmailAccount || githubAccount);