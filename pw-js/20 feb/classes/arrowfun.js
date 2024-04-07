// one parameter with a single return statement

const square = (x) => x*x ;

console.log(square(3));

// two parameter with a single return statement

const sumOfTwoNumbrs = (x , y) => x + y;
console.log(sumOfTwoNumbrs(6,5));

// Multiple statement in function expression

const sum = (x,y) => {
    console.log(`adding ${x} and ${y}`);
    return x + y;
}

console.log(sum(2,4));

// returning an object

const sumAndDiffrnce = (x,y) => (
    {sum : x + y, difference : x - y}
)
console.log(sumAndDiffrnce(3,4));