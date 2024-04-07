/* // values and data types

// primitive data types

// number : 1,2,3,4,5.6
// string : "string" or 'string'
// boolean : true and false
// null : when server is not available to show weather temprature then show nothing
// undefined : 
let a ;

// non primitive data types

// Arrays
let name1 = "shoaib";
let name2 = "sakib";
let name3 = "saba";
let name4 = "fija";

// here we are declaring an array
let name5 = ["shoaib","sakib","saba","fija"]

// Object 
// here we are declaring an object
let dog = {name:"hari", owner: "gullu"} 

// I created a game user played it  and got some score 230 and I want to sow it user

let highScore = 230;
console.log(highScore);

// we want to show pw skills course price which is 4000

let pwSkillsCoursePrice = 4000;
console.log(pwSkillsCoursePrice);

// suppose price has changed to 2000

pwSkillsCoursePrice = 2000;
console.log(pwSkillsCoursePrice);

// if we impose 18 percent gst on it then what will be the final value of the  course

let pwCoursePrice = 1000;
let gstOnCourse = 180;
let finalCoursePrice = pwCoursePrice + gstOnCourse;
console.log(finalCoursePrice);

// let gst is same for all course and course price is 4000 then find the final amount which should be paid to purchase the course

let pwNewCoursePrice = 4000;
let finalAmount = pwNewCoursePrice + gstOnCourse;
console.log(finalAmount);


// division 

console.log("Answer is:", 5/2);

// modulo and it gives remainder

console.log("Answer is:", 5%2)

// multiplication

console.log("Answer is:", 3 ** 3);

// comparison operator

let shoaibHighScore = 200;
let sakibHighScore  = "200";
console.log(shoaibHighScore === sakibHighScore);

// not equal operator

console.log(shoaibHighScore !== sakibHighScore);

// And and Or operator

// And operator

let value1 = true;
let value2 = false;
let value3 = true;
let value4 = false;

console.log(value1 && value3);

// Or operator

let gmailAccount = true;
let emailAccount = false;
console.log(gmailAccount  ||  emailAccount); */


// Basics of programming

// conditions and loops
// conditions

/* let age = 19;
if(age >= 18){
    console.log("Allow me to vote");
}
else{
    console.log("Not allow to vote");

}

// traffic chauraha view condition

let signal = "red";
if(signal = "red"){
    console.log("red = stop");
}
else if (signal = "green"){
    console.log("green = go");
}
else if ( signal = "yellow"){
    console.log("yellow = ready to go ");
}

// switch user case

let user = "shoaib";
switch (user) {
    case "shoaib":
        console.log("No problem, Admin is using the computer");
        break;
    case "sakib":
        console.log("Second Admin is using the computer");
        break;
    case "lull" :
        console.log("this is not a Admin");
    default : {
        console.log("A spy is using my computer");
    }
}

// loops (do while , while , for)

for (i = 0; i < 6; i++){
    console.log(i);
} */

// while

/* let i = 0;
while (i < 5){
    console.log(i);
    i++;
} */

// do while (the code will run at least one time the condition is checked)

/* let i = 2;
do {
    console.log("Hello World");
    i++;
}
while (i < 5)

// Ternary Operator
// condition ? true ! false

isLoggedIn = true;
isLoggedIn ? console.log("logged in ") : ! console.log("not logged In ");

// using for loop print md shoaib for three times


for (i = 0; i < 3; i++ ){
    let name = "md shoaib";
    console.log(name);
}

// nested for loop 
//Write a programm to show the inner for loop values for each outer iteration in along with the outer for loop

for (i = 1; i <= 3; i++){
    console.log("for i = "+i+" the inner loop values are");
    for (j = 1; j < 3; j++){
        console.log("j = "+j+"");
    }
}

// break statement 

for (let i = 0; i < 4; i++){
    console.log(i);
    if (i == 2 ) {
       break;
    }
}
 */
// while loop with break statement

/* let i = 0; 
while (i < 4){
    console.log(i);
    i++;
} */
/* 
let i = 0 ;
while (i < 5){
    console.log(i);
    i++;
if (i == 3){
    break;
}
   }

   // continue statement

   for ( let i = 0; i <= 20; i++){
    if(i % 2 === 0){
        continue;
    }
    console.log(i);
   }
 */
//  continue statement in while loop
/* 
let i = 0;
while (i < 20) {
  i++;
  if (i % 2 === 0) {
    continue;
  }
 console.log(i);
}

// Ternary operator

// Assume that you need to check if the person is logged in or not and provide the access to pw skills lab

// if else statement

let isTheUserLoggedIn = true;

if(isTheUserLoggedIn){
    console.log("pw skills lab granted");
}
else{
    console.log("pw skills lab not granted");
}

// using ternary operator

isTheUserLoggedIn ? console.log("pw skills lab granted") : console.log("lab not granted "); */

// let's assume in order to access the full stack web devel course the user must be both logged in and should have purchased the course . let's see how can we do this using the ternary operator.

``
var isTheUserLoggedIn = true;
var isCoursePurchased  = true;
isTheUserLoggedIn 
     ? isCoursePurchased
       ? console.log("Access granted")
       : console.log("Access denied please buy the course")
     : console.log("Access Denied !! Please login");

//  do while 

let i = 0;
do {
    console.log("hello world");
    i++;
} while ( i <5)



