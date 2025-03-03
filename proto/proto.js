const myHero = ['vivekanand', 'j krishnmurti'];
const heroPower = {
  vivekanand: 'advait vedant',
  krishnmurti: 'philosophy',
  getVivekanandPower: function () {
    console.log(`power of vivekanand is ${this.vivekanand}`);
  }
};
heroPower.getVivekanandPower();

Object.prototype.hello = function () {
  console.log('hello my name is mohd shoaib');
};
heroPower.hello();
myHero.hello();

Array.prototype.sayHello = function () {
  console.log('this is an array proto');
};
myHero.sayHello();
// heroPower.sayHello();

const user = {
  name: 'shoaib',
  email: 'shoaib@gmail.com'
};

const teacher = {
  isAvailable: true
};
Object.setPrototypeOf(user, teacher);
console.log(user.isAvailable);

String.prototype.trueLength = function () {
  console.log(`true length is ${this.trim().length}`);
};
'fkdsj     '.trueLength();
