/* function fetchData(){
    return new Promise((reslove, reject) => {
        setTimeout(() => {
            console.log('shoaib');
            const data = {message: 'Data fetched successfully'};
            // sumulate a successful response
            reslove(data);
            // simulate an error
            reject(data);
            //reject(new Error('failed to fetch data));
        },4000);
    });
};

// using the promise 
console.log('start');
fetchData()
.then(result =>{
    console.log('Wow:',result.message);
})
.catch(error => {
    console.error(error.message); // Handle errors here
  });
console.log('end');   */   


/* 
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

} */


function createPromisse(){
    return new Promise((ressolve,reject) => {
        // your code goes here
        setTimeout(() => {
            const data = {message:'Timer has completed'};
            ressolve(data);
            reject(data);
        },5000)
    })
};

async function consume(){
    try{
        console.log('Inside function');
        const response = await createPromisse();
        console.log('hi');
        fetch(uu)
        const response1 = await createPromisse();
        console.log('response is',response.message);
        console.log('response is',response1);
    }
    catch(error){
        console.log('handeled',error);
    }
};
console.log('start');
consume(); 
console.log('end');