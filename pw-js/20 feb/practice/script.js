// here we are defining an array

let a = [1, 2, 3, 4, 5,"shoaib",false];
console.log(a);

let b = new Array("shoaib", "sakib", "fija");
console.log(b);

/* 
given array → ["shoaib","sakib","saba","fija","farman bhai","hani bhai","Noorul bhai","khusbu appi"]
index/posi →  [0,         1,     2,      3,       4,             5,           6,          7, ] */

// position of values  in js starts from 0 

// lost elements position = arr.length - 1 → 0 based index arrays
console.log(a[5]);

// if we want to update  value in array a at 4th position 

a[4] = "md";
console.log(a); // the value has been updated at 4th position 

            // Arrays mentods

let arr = [1, 2, 3, "shoaib",false, "sakib" ];
console.log(arr);

// if we want to add any element at the end of array then we use push 

arr.push(4,5)
console.log(arr);

// if we want to remove any element at the end of the array then we use pop method

arr.pop();
console.log(arr);

// if we want to remove any element at the starting of the array

arr.shift();
console.log(arr);

// if we want to add and element at the starting of the array

arr.unshift(44,47);
console.log(arr);

// if we want to join two arrays then we use concat

let a1 = [1, 2, 3, 4,"shoaib"];
let a2 = [44, 33, 22, "sakib"];
let a3 = a1.concat(a2);
console.log(a3);
console.log(a1,a2,a3);

let join = a3.join("");
console.log(join);

// if we want to reverse your array

a3.reverse();
console.log(a3);

// if we want to know the index of a particulr element

console.log(a3.indexOf("sakib"));

// if we want to extract elements from array then use slice

let a4 = a3.slice(2,5);
console.log(a4);

// if we want to add few elements then we use splice

let b1 = [1, 3 , 4, 6, 9];
b1.splice(3, 0, 77);
console.log(b1);

// //          function 

function greet() {
    console.log("hello bhai");
    console.log("this is mohd shoaib");
}
greet();

// fun witha  parameter

function sqr(x){
    console.log(x*x);
}
sqr(3);

// we don't want to print the value of the fun instead of this we want to use that value in any other place then we use return statement and we can call the fun when we want


function retu(x){ // x → parameter
    return x**x;
}

let ret = retu(4); // 4 → argument
console.log(ret);

      // function without a parameter  return statement 

let ne = ret + 44;
console.log(ne);

//  function without  a parameter and single and multiple statement

function singal(x = "hello, mohd shoaib is here"){
    console.log(x);
}
singal("how are you ?");
singal(); 

// fun with two parameters

function sumOfTwoNumbers(num1,num2){
    return num1 + num2;

}
let sum = sumOfTwoNumbers(3,6);
console.log(sum);

let numbers = [33,66];
let result = sumOfTwoNumbers(numbers);
console.log(result);






