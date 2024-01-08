//  Primitive

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

const score = 100
console.log(typeof score);
const scoreValue = 100.3
console.log(typeof scoreValue);

const isLoggedIn = false
console.log(typeof isLoggedIn);
const outsideTemp = null
console.log(typeof outsideTemp);

let person = {firstName:"John", lastName:"Doe", age:50, eyeColor:"blue"};
console.log(person);
console.log(typeof person);
person = null;  
console.log(person);
console.log(typeof person);

let person2 = {firstName:"John", lastName:"Doe", age:50, eyeColor:"blue"};
console.log(person2);
console.log(typeof person2);
person2 = undefined;
console.log(person2);
console.log(typeof person2);

console.log(typeof undefined);
console.log(typeof null);
console.log(undefined === null);
console.log(undefined == null);

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

// const bigNumber = 3456543576654356754n



// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "hitesh",
    age: 22,
}

const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof anotherId);
console.log(typeof outsideTemp);

// https://262.ecma-international.org/5.1/#sec-11.4.3


// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// stack(primitive) heap(non-primitive)

let name = 'shoaib'
let name2 = name;
console.log(name);
console.log(name2);
name2 = 'sakib'
console.log(name);
console.log(name2);

let user = {
    name:'shoaib',
    email:'shoaib@google.com'
}

let user2 = user;
user2.name = 'sakib';
console.log(user);
console.log(user2);


