/**   /\/\   __ ____    __       String    __      __  __       **/

let str1 = "Mohd Shoaib";
console.log(str1); // Output → Mohd Shoaib
console.log(typeof str1); // Output → string

let num1 = Number(str1);
console.log(typeof num1); // Output → number
console.log("Number: ",num1) // Output → Number: NaN

// Convert a String to Boolean using Boolean() function
let bool1 = Boolean(str1);
console.log(bool1); // Output → true
console.log(typeof bool1); // Output → boolean

// Convert a String to Array of Characters using split() method
let arr1 = str1.split('');
console.log(arr1); // Output → [ 'M', 'o', 'h', 'd', ' ', 'S', 'h', 'o', 'a', 'i', 'b' ]
console.log(typeof arr1); // Output → object

let strNum = "Mohd123";
console.log(strNum); // Output → Modh123
console.log(typeof strNum); // Output → string

let num2 = Number(strNum);
console.log(num2); // Output → NaN
console.log(typeof num2); // Output → number

let bool2 = Boolean(strNum);
console.log(bool2); // Output → true
console.log(typeof bool2); // Output → boolean

let num3 = "11";
console.log(num3); // Output → 11
console.log(typeof num3); // Output → string

let num4 = Number(num3);
console.log(num4); // Output → 11
console.log(typeof num4); // Output → number

let bool3 = Boolean(num3);
console.log(bool3); // Output → true
console.log(typeof bool3); // Output → boolean

let strBool = "true";
console.log(strBool); // Output → true
console.log(typeof strBool); // Output → string

let bool4 = Boolean(strBool);
console.log(bool4); // Output → true
console.log(typeof bool4); // Output → boolean



/**   /\/\   __ ____    __ Number    __      __  __       **/

let num5 = 11;
console.log(num5); // Output → 11
console.log(typeof num5); // Output → number

let bool5 = Boolean(num5);
console.log(bool5); // Output → true
console.log(typeof bool5); // Output → boolean

let str6 = String(num5);
console.log(str6); // Output → 11
console.log(typeof str6); // Output → string


/**   /\/\   __ ____    __       Null    __      __  __       **/

let nullVar = null;
console.log(nullVar); // Output → null
console.log(typeof nullVar); // Output → object

let num6 = Number(nullVar);
console.log(num6); // Output → 0
console.log(typeof num6); // Output → number

let bool7 = Boolean(nullVar);
console.log(bool7); // Output → false
console.log(typeof bool7); // Output → boolean

let str8 = String(nullVar);
console.log(str8); // Output → null
console.log(typeof str8); // Output → string

/**   /\/\   __ ____    __        Undefined     __      __  __       **/

let undefVar = undefined;
console.log(undefVar); // Output → undefined
console.log(typeof undefVar); // Output → undefined

let num9 = Number(undefVar);
console.log(num9); // Output → NaN
console.log(typeof num9); // Output → number

let bool10 = Boolean(undefVar);
console.log(bool10); // Output → false
console.log(typeof bool10); // Output → boolean

let str11 = String(undefVar);
console.log(str11); // Output → undefined
console.log(typeof str11); // Output → string


/**   /\/\   __ ____    __         Arrays                          **/

let arr12 = [1, 'two', 3];
console.log(arr12[0]); // Output → 1
console.log(typeof arr12[0]); // Output → number

let arr13 = ['one', true, {name: "Mohd"}];
console.log(arr13[1]); // Output → true
console.log(typeof arr13[1]); // Output → boolean
let arr14 = [[1], [2]];
console.log(arr14[0][0]); // Output → 1
console.log(typeof arr14[0][0]); // Output → number
let arr15 = [{name: "Mohd"}, {age: 20}];
console.log(arr15[0].name); // Output → John
console.log(typeof arr15[0].name); // Output → string


/**   /\/\   __ ____    __         Objects                           **/

let obj16 = {firstName: "Mohd", lastName: "Shoaib"};
console.log(obj16.lastName); // Output → Doe
console.log(typeof obj16.lastName); // Output → string
let obj17 = new Date();
console.log(obj17.getDate()); // Output → current date 2
console.log(typeof obj17.getDate()); // Output → number

















