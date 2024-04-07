/* // if we want to join two arrays
const oneArray = [1,2,3,4,5];
const twoArray = [3,4,5,6];
// const threeArray = oneArray.concat(twoArray);


// we can use achieve this using ...spread operator

const threeArray = [...oneArray,...twoArray]
console.log(threeArray); */
/* 
function testOne(){
    console.log(arguments);
} */
// testOne(1,2,3,4)
// testOne([1,2,3,4])

/* let array = [1,2,3];
console.log(array);

function testOne(){
    console.log(arguments);
};
testOne(1,3,4,6) */
// this is how you can construct an array is't mean that you can constructre of the array
/* let newArray = new Array(1,2,3,4)
console.log(newArray);
 */
// this is the of constructing of an array using function object
/* 
function arratArguments(){
    let args = Array.from(arguments)
    let finalArr = args.map(e => e)
    console.log(typeof finalArr);
}
arratArguments(1,2,3,4)

function manyArgument(...args){
    let finalArr = args.map(e => e);
    console.log(typeof finalArr);
}
manyArgument(1,3,4,5);

const names = ['superman','flash'];
const newName = ['batman',...names,'thor'];
console.log(newName);

const siteName = "pwskills";
console.log(...siteName);

function pwskills(...values){
    return values;
}
console.log(pwskills('shoaib','sakib')); */

// +++++++++++++++++++++++++++++++
// the set contains only unique values duplicate valuues are removed
/* let newArray = [1,2,3,4,4,6,6,9];
let newSet = new Set(newArray);
console.log(newSet);


const arrayTwo = [1,2,3,4,5,5,6,0,2,1];
let setTwo = new Set([...arrayTwo]);
console.log(setTwo);

setTwo.add(7)
console.log(setTwo);
console.log(setTwo.has(3));

console.log(setTwo.clear); */

// Set differnce (if we want differnce between two sets then );
/* const arr = [1,2,3,4];
const setA = new Set(arr);
const setB = new Set(arr);
setB.add(6,1,3);
setB.delete(1)
console.log(setB);

function setDiffernce(setA,setB){
   return new Set([...setA].filter(e => !setB.has(e)))
}
console.log(setDiffernce(setA,setB)); */

// Map

const map = new Map();

let arr = [
    [1,'one'],
    [2,'two'],
    [3,'three'],
    [4,'four'],
    [5,'five']
  ];
  
function mapping(){
   return arr.map(e => map.set(e[0],e[1]))
}
console.log(mapping());
/* 
const original = { data: { value: 42 } };
const copy = { ...original }; // Shallow clone
console.log(copy);
copy.data.value = 99;

console.log(original.data.value); // Outputs '99' (shared reference) */

  




