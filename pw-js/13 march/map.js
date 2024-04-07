/* const map1 = new Map();

map1.set('a',1)
map1.set('b',2)
map1.set('c',3)

console.log(map1);

map1.set('a',44);

console.log(map1.get('a'));

console.log(map1.size);

map1.delete('b')
console.log(map1.size); */

/* const contacts = new Map();
contacts.set("shoaib",{phone:3366557788,address:'sarai jagar'});
contacts.has('shoaib');
console.log(contacts.get('shoaib'));

contacts.set("sakib",{phone:9966557788,address:'sarai jagar'})
console.log(contacts);
 */

/* const myMap = new Map();

const keyString = "a string";
const keyObj = {};
const keyFunc = function () {};

// setting the values
myMap.set(keyString, "value associated with 'a string'");
myMap.set(keyObj, "value associated with keyObj");
myMap.set(keyFunc, "value associated with keyFunc");


console.log('hi');
console.log(myMap.entries);
 */
/* const myMap = new Map();
myMap.set(NaN, "not a number");

myMap.get(NaN);
// "not a number"

const otherNaN = Number("foo");
myMap.get(otherNaN);
// "not a number" */

/* const myMap = new Map();
myMap.set(0, "zero");
myMap.set(1, "one");

for (const entry of myMap) {
    const key = entry[0];
    const value = entry[1];
    console.log(`${key} = ${value}`);
} */
/* 
const myObject = {
    name:'shoaib',
    age:22,
    city:'wing'
}
console.log(Object.entries(myObject)); */

/* const myMap = new Map();
myMap.set(0, "zero");
myMap.set(1, "one");

myMap.forEach((value,key) => {
    console.log(`${key} = ${value}`);
}) */

/* const kvArray = [
    ['key1', 'value1'],
    ['key2','value2']
]
 */
// use regular map constructor to transform a 2D key-value array into a map
/* 
const myMap = new Map(kvArray);
console.log(myMap);

console.log(myMap.get('key1'));

console.log(Array.from(myMap));
console.log(Array.from(myMap.keys())) */;

// Cloning and merging Maps
/* 
const original = new Map([[1,'one']]);
original.set("name",'shoaib')

console.log(original);
console.log(original.get('name'));
const clone = new Map(original);
console.log(clone);

console.log(original === clone); */


const first = new Map([
    [1, "one"],
    [2, "two"],
    [3, "three"],
  ]);
  console.log(first);
  
  const second = new Map([
    [1, "uno"],
    [2, "dos"],
  ]);
  
  // Merge two maps. The last repeated key wins.
  // Spread syntax essentially converts a Map to an Array
  const merged = new Map([...first, ...second]);
  console.log(merged);
  
/*   console.log(merged.get(1)); // uno
  console.log(merged.get(2)); // dos
  console.log(merged.get(3)); // three */
  

