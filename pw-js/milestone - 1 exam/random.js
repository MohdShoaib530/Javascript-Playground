(function ()  {
   console.log(Math.floor(Math.random() * 100));
}());

const generateRandomNumber = (() => Math.floor(Math.random() * 100))();
console.log("Random Number",generateRandomNumber);
