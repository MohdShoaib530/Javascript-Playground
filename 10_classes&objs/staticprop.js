class User {
    constructor(username){
        this.username = username
    }

    loginCount(){
        console.log(`${this.username} has logged in 3 times`);
    }

    static private(){
        console.log('it can be access only inside this method');
    }
}

let user1 = new User('shoaib');
// console.log(user1);
// user1.loginCount();
// user1.private(); // Error: user1.private is not a function because it is static method and it can be access only inside the class

class Teacher extends User {
    constructor(username,role){
        super(username);
        this.role = role;
    }

    userRole (){
        console.log(`this user is ${this.role} and his name is ${this.username}`);
    }
}

const teacher1 = new Teacher('shoaib','teacher');
console.log(teacher1);
teacher1.loginCount();
teacher1.userRole()
// teacher1.private() // Error: user1.private is not a function because it is static method and it can be access only inside the class