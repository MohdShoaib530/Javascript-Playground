function createPromise(){
    return new Promise(function exed(resolve,reject){
        setTimeout(function f(){
            console.log('Timer done');
            resolve('done')
        },3000)
    });
};

console.log('start');
let x = createPromise();
console.log('got a new peomise');
x.then(function f(value){
    console.log('promise done',value);
});
x.catch(function g(value){
    console.log('handeled',value);
}).finally(function fn(){
    console.log('finally');
});
console.log('end');
for(let i = 0; i < 100000000; i++){

}