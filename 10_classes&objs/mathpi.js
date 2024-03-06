let descriptor = Object.getOwnPropertyDescriptor(Math,"PI");

// console.log(descriptor);
// console.log(Math.PI);
// Math.PI = 5,
// console.log(Math.PI);

const user = {
    name: 'mohd shoaib',
    email: 'mohd@gmail.com',
    password: '12121',

    details: function(){
        console.log(`${name} details are here`);
    }
};

// console.log(user);
// console.log(Object.getOwnPropertyDescriptor(user,'name'));

Object.defineProperty(user,'name', {
    writable:false,
    enumerable: false,
    configurable: false
});

user.name = 'sakib'
// console.log(user);

// for (let [key,value] of Object.entries(user)) {
//     if(typeof value !== 'function'){
//         console.log(`${key}: ${value}`);
//     }
// }


Object.defineProperty(Math,'PI',{
    writable: true,
    enumerable: true,
    configurable: true
});

Math.PI = 5;
console.log(Math.PI);