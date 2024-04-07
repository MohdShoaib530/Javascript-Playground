let arr = [1, 2, 3 ,4 ,5 , 6]

//if we want to remove an element from end

arr.pop();
console.log(arr);

// if we want to add an element at end

arr.push(77);
console.log(arr);

// if we want remove an element fron starting of array 

arr.shift();
console.log(arr);

// if we want to add an element at starting of an array

arr.unshift(66);
console.log(arr); 

// if we want to add an element at any place in array then 

arr.splice(2, 1, 88);
console.log(arr);

// if we want to remove an element at any place in array then

let arr1 = [1,2,3,5,7,9,0];
console.log(arr1.slice(2,4));

//if we want to join two arrays then we use concat

let a1 = [1,2,3,4,5];
let a2 = [5, 6, 7, 8];
let a3 = a1.concat(a2);
console.log(a3);

let a4 = a3.join("");
console.log(a4);

// if we want to reverse our array then

a3.reverse();
console.log(a3);

// if we want to know index of an element in an array

console.log(a3.indexOf(3));

