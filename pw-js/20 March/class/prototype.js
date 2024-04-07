 let myHeroes = ['Kalam','Ambedkar','Sarabhai'];

 let dcHeroes = {
    thor:'Hammer',
    hela:'Asguard',
    getthorPower: function (){
        console.log(`thor power is ${this.thor}`);
    }
 };
// Here we are defining a method for all the objects in the js because at least all the things in js is object so it will apply at everyone 
 Object.prototype.shoaib = function (){
    console.log(`Shoaib is present in all objects`);
 };

//  console.log(dcHeroes.shoaib());
//  console.log(myHeroes.shoaib());

// here we are defining a method for Arrays only 

Array.prototype.bhai = function (){
    console.log('Hello Bhai log kaise ho');
};
// console.log(myHeroes.bhai());
// console.log(dcHeroes.bhai()); // Because this is defined just for Arrays only so it will not work


//    Here we will learn older wey of inheritance 

const person1 = {
    na:'Shoaib',
    class: 'B.Tech',
    Address:'Dihwa',
    age:21,

}
const person2 = {
    name:'Sakib',
    class: 'B.A',
    Address:'Dihwa',
    age:21,
    nowIn:'Allahabad'
}
const person3 = {
    name:'Fija',
    class: 'Intermediate',
    Address:'Dihwa',
    age:17
}
const person4 = {
    name:'Saba',
    class: 'B.Tech',
    Address:'B.A',
    age:22
    

}
person1.__proto__ = person2;
// here we are accessing values of person2 in person1 obj;
// console.log(person1.nowIn);
//   Now we use a new way of inheriting of prototype

Object.setPrototypeOf(person1,person2);
console.log(person1.nowIn);

String.prototype.trueLength = function() {
    console.log(`True length is ${this.trim().length}`);
}
// "shoaib   ".trueLength();
// 'sakib    '.trueLength()


