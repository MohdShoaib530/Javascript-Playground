let myHeroes = ["ironMan", "spiderMan", "batMan"];


let heroPower = {
    ironMan: "jarvis",
    spiderMan: "spider sense",
    batMan: "money",

    ironManPower: function () {
            console.log(`I am ironman and I have ${this.ironMan} power`);
    },
};

// this bestHero method is available for all in the code
Object.prototype.bestHero = function () {
    console.log(`This is object proto which is good`);
    return this
};
console.log('myHeroes', myHeroes.bestHero()); // available for all
console.log('heroPower', heroPower.bestHero()); // available for all

// this bestHero method is available for all arrays in the code
Array.prototype.trueLength = function(){
    console.log(`this is a true lengthof array ${this.length}`);
}
myHeroes.trueLength();
// heroPower.trueLength(); // not available for object


const user = {
    name: 'shoaib',
    email: 'shoaib@gmal.com'
}

const teacher = {
    makeVideos: true
}

const teachingSupport = {
    isAvialable: false
}

const TAsupport = {
    makeAssignment: "for js",
    isFullTime: true,
    __prot0__: teachingSupport
}

teacher.__prot0__ = user;

// moder syntax
Object.setPrototypeOf(teacher,user);

let myName = 'shoaib';

// this method is only available for string
String.prototype.sayHi = function(){
    console.log(`Hello ${this} nice to meet you`);
}
myName.sayHi();
'sakib'.sayHi();