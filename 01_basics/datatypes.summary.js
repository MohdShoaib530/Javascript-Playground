// in js there are two types of datatypes 1.primitive and 2. non-primitive

//  Primitive

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

const score = 100;
console.log(typeof score);

const isLoggedIn = false;
console.log(typeof isLoggedIn);

const outsideTemp = null;
console.log(typeof outsideTemp);

let person = { firstName: 'John', lastName: 'Doe', age: 50, eyeColor: 'blue' };
console.log(person);
console.log(typeof person);
person = null;
console.log(person);
console.log(typeof person);

let person2 = { firstName: 'John', lastName: 'Doe', age: 50, eyeColor: 'blue' };
console.log(person2);
console.log(typeof person2);
person2 = undefined;
console.log(person2);
console.log(typeof person2);

console.log(typeof undefined);
console.log(typeof null);
console.log(undefined === null);
console.log(undefined == null);

const id = Symbol('123');
const anotherId = Symbol('123');
console.log(id);

console.log(id === anotherId);

// const bigNumber = 3456543576654356754n

// Reference (Non primitive)

// Array, Objects, Functions

const heros = ['shaktiman', 'naagraj', 'doga'];
let myObj = {
    name: 'hitesh',
    age: 22,
};

const myFunction = function () {
    console.log('Hello world');
};

console.log(typeof anotherId);
console.log(typeof outsideTemp);

// https://262.ecma-international.org/5.1/#sec-11.4.3

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// stack(primitive) heap(non-primitive)

let name = 'shoaib';
let name2 = name;
console.log(name);
console.log(name2);
name2 = 'sakib';
console.log(name);
console.log(name2);

let user = {
    name: 'shoaib',
    email: 'shoaib@google.com',
};

let user2 = user;
user2.name = 'sakib';
console.log(user);
console.log(user2);

// In JavaScript, objects are reference types, which means when you assign an object to a variable, you're actually assigning a reference (memory address) to that object, not a copy of the object itself. This is different from primitive types like strings or numbers, where a copy of the value is made when assigning to a new variable.

// When you do let user2 = user;, you are not creating a new object. Instead, you are creating a new variable user2 that points to the same object in memory that user points to. So, user and user2 are essentially referring to the same object in memory.

// When you modify the name property of the object using user2.name = 'sakib';, you are modifying the same object that user is pointing to because user2 and user refer to the same object in memory.

/*/////////////// null and undefined  //////////////////*/

function getVowels(str) {
    const m = str.match(/[aeiou]/gi);
    console.log("m", m);
    if (m === null) {
        return 0;
    }
    return m.length;
}

console.log(getVowels('sky'));
// Expected output: 0

// foo does not exist. It is not defined and has never been initialized:
//foo; //ReferenceError: foo is not defined

// foo is known to exist now but it has no type or value:
const foo = null;
foo; //null
typeof null; // "object" (not "null" for legacy reasons)
typeof undefined; // "undefined"
null === undefined; // false
null == undefined; // true
null === null; // true
null == null; // true
console.log(!null); // true
console.log(Number.isNaN(1 + null)); // false
Number.isNaN(1 + undefined); // true
console.log(1 + undefined);

let a = null
console.log(a);
console.log(typeof null);
let x = null;
console.log(x == undefined);
if (typeof x === "undefined") {
    console.log("kp");
}

const areEqualInUpperCase = (str1, str2) =>
    str1.toUpperCase() === str2.toUpperCase();
const areEqualInLowerCase = (str1, str2) =>
    str1.toLowerCase() === str2.toLowerCase();

console.log(areEqualInUpperCase("ß", "ss"));; // true; should be false
areEqualInLowerCase("ı", "I"); // false; should be true

