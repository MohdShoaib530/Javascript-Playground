class User {
    constructor(username,role){
        this.username = username;
        this.role = role;
    }

    userRole(){
        return `Your role is ${this.role}`;
    }
}

class Teacher extends User {
    constructor(username,role,subject){
        super(username,role);
        this.subject = subject;
    }

    teacherSubject(){
        return `Your subject is ${this.subject}`;
    }
}

const user1 = new User('shoaib','admin');
// console.log(user1.userRole());

const teacher1 = new Teacher('shoaib','teacher','maths');
// console.log(teacher1);
// console.log(teacher1.teacherSubject());
// console.log(teacher1.userRole());
console.log(user1 instanceof User);
console.log(teacher1 instanceof Teacher);
console.log(teacher1 instanceof User);