const user = {
    username: "shoaib",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`);
        console.log(this);
    }

}

user.welcomeMessage()
user.username = "sam"
// user.welcomeMessage()

console.log(this);

// function chai(){
//     const username = "shoaib"
//     console.log(this.username);
//     console.log(this);
// }

// chai()

// const chai = function () {
//     let username = "shoaib"
//     console.log(this.username);
// }

const chai =  () => {
    let username = "shoaib"
    console.log(this);
}


chai()

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// const addTwo = (num1, num2) =>  num1 + num2

// const addTwo = (num1, num2) => ( num1 + num2 )

const addTwo = (num1, num2) => ({username: "shoaib"})


console.log(addTwo(3, 4))


// const myArray = [2, 5, 3, 7, 8]

// myArray.forEach()