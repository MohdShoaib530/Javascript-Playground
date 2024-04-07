const powerTwo = n => {
    return n * 2 ;
}

function powerCube(powerTwo, n){
    return powerTwo(n) * n;
}

console.log(powerCube(powerTwo, 3)); // Call powerTwo with a number, not as a function

/* function sayHello(){
    return () => {
        console.log("Hello Shoaib");
    }
}
const valueGuess = sayHello();
console.log(valueGuess);

valueGuess(); */

/* const higherOrder = n => {
    const oneFun = m => {
        const twoFun = p => {
            return n+m+p;
        }
        return twoFun;
    }
    return oneFun;
}
console.log(higherOrder(3)(4)(5));
 */

/* let myNums = [2,3,4,5];
const sumArray = (arr) => {
    let total = 0;
    arr.forEach(function (element)  {
        total += element;
    });
    return total;
}
console.log(sumArray(myNums)); */
/* 
function oneMoreHello(){
    console.log("Hello Shoaib", Math.random());
}
// setInterval(oneMoreHello,1000);
setTimeout(oneMoreHello,2000) */