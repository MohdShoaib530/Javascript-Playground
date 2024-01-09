// singleton
// Object.create

// object literals

const mySym = Symbol("key1")


const JsUser = {
    name: "Shoaib",
    "full name": "Mohd Shoaib",
    [mySym]: "mykey1",
    age: 18,
    location: "Uttar Pradesh",
    email: "shoaib@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

console.log(JsUser.email)
console.log(JsUser["email"])
console.log(JsUser["full name"])
console.log(typeof JsUser[mySym])

JsUser.email = "shoaib@chatgpt.com"
// Object.freeze(JsUser)

JsUser.greeting = function(){
    console.log("Hello JS user");
   
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
    return 'if we will not return anything then it will return undefined'
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());