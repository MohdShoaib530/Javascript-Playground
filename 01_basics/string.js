// string

let name11 = 'shoaib';
console.log(typeof name11);
let age = 20;

let user = `hello my name is  ${name11} and my age is ${age}`;
console.log(user);

let name2 = new String('mohd shoaib')
console.log(name2.__proto__);
console.log(typeof name2);

let name3 = name2
console.log(name3[2]);

const name = "shoaib"
const repoCount = 50

// console.log(name + repoCount + " Value");

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('mohd-shoaib')

// console.log(gameName[0]);
// console.log(gameName.__proto__);


// console.log(gameName.length);
// console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('s'));

const newString = gameName.substring(0, 4)
console.log(newString);

const anotherString = gameName.slice(-8, 4)
console.log(anotherString);

const newStringOne = "   shoaib    "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://shoaib.com/mohd%20shoaib"

console.log(url.replace('%20', '-'))

console.log(url.includes('sundar'))

console.log(gameName.split('-'));