class User {
    constructor(name,email){
        this.name = name;
        this.email = email
    };

    get name(){
        return `Username is ${this._name}`
    }

    set name(value){
        // this.name = value // if i will do this then constructor and set method will call same time and it will full the call stack and problem will occure
        this._name = value;
        console.log('hi');
    }

    get email(){
        return `Email of the user is ${this._email}`
    }

    set email(value){
        this._email = value.toUpperCase()
    }
}

const user1 = new User('shoaib', 'shoaib@gmail.com')
console.log(user1);
// console.log(user1.email);
// user1.email = 'new@gmail.com'
// console.log(user1.email);