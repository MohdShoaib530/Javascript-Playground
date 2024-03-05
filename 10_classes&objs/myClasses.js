// CS6 

// class User {
//     constructor(username,email,password){
//         this.username = username;
//         this.email = email;
//         this.password = password;
//     }

//     encryptPassword(){
//         return `Your Password ${this.password}  has been encrypted`
//     }

//     changeUsername(){
//         return `Your Username has been changed to ${this.username}`;
//     }
// }

// const user1 = new User('shoaib','shoaib@gmail.com','1313')
// console.log(user1);
// console.log(user1.changeUsername());

function User(username,email,password){
    this.username = username;
    this.email = email;
    this.password = password;

    this.encryptPassword = function(){
        return `Your Password ${this.password}  has been encrypted`
    }
}
User.prototype.changeUsername = function(){
    return `Your Username has been changed to ${this.username}`;
}

const user2 = new User('mohd','mohd@gmail.com','3232')
console.log(user2);
console.log(user2.changeUsername());
console.log(user2.encryptPassword());