// classes are a way to define blueprinting of objects(real life entities) or a way to define a type of object that you want to create you can create multiple objects from a class with shared properties.

class Student {
    // this is default constructor but we can not pass arguments here so we write our own constructor and value can not be changed
    // name = 'abc';
    // email = 'abc@gmail.com';
    // age = '22';

    // this is constructor
    constructor(name,email,age){
        this.name = name;
        this.email = email;
        this.age = age
        // return 10; // primitive data types can not be returned it will be ignored
        // return {name:'shoiab md'} // obj can be returned
    }

    studentInfo(){
        return `Name of student is ${this.name} email is ${this.email} and age is ${this.age} and ${this}`
    }

    subjects(){
        return 'student has taken five subjects in their academics'
    }

    static privateField(){
        return `only ${this.name} can access this field because this field is private`
    }
}

const student1 = new Student('mohd','mohd@gmail.com','20') //as you will call the class at that time constructor method will call automatically 
// console.log('student1',student1);
// console.log('student1',student1.studentInfo());

// blueprinting mechanism using older ways 

function Product(name,price,rating){
    this.name = name;
    this.price = price;
    this.rating = rating
}

const product1 = new Product('alchemist','299','4.9');
// console.log(product1);

let x = {
    p: Product
}

let laptop = new x.p('laptop','40000','4.5')  // this points to calling context
// console.log(laptop);
// console.log(x);

const Products = (name,price,rating) => {
    this.name = name;
    this.price = price;
    this.rating =  rating
}

// const p1 = new Products('iphone','10000',5);
// console.log('p1',p1); // you will see a typeErro 
// the theory of this keyword  pointing to calling context is not applicable in arrow fun

// const arrow = () => {
//     console.log(this);
// }

// arrow();

let obj = {
    x: 10,
    function (){
        console.log(this.x);
    }
}

// obj.function()

// let obj = {
//     x: 10,
//     function:  () => {
//         console.log(this.x);
//     }
// }

// obj.function()

// let obj = {
//     x: 10,
//     function(){
//         y = {
//           gun: () => {
//             console.log(this.x);
//           }
//         }
//         y.gun()
//     }
// }
// obj.function()





  



