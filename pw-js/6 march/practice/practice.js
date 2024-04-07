// Higher Order Function 

const powerTwo = (n) => {
    return n*2;
};
function powerCube(powerTwo,n){
   return powerTwo(n) * n;
};
console.log(powerCube(powerTwo,3));
console.log(typeof powerCube);

//

function sayHellow(){
    return () => {
        for(let i = 0;i <= 5; i++){
           console.log(i);
        }
    }
}
sayHellow();
let another = sayHellow();
console.log(typeof another);
another();

const higherOrder = n => {
    const secondOrder = m => {
        const thirdOrder = o => {
            return n*m*o;
        }
    return thirdOrder;

    }
    return secondOrder;
}

console.log(higherOrder(2)(3)(5));
 
let arr



