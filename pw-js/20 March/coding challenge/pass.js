class User{
    constructor(name,pass){
        this._Username = name,
        this._Password = pass
    }
    setPassword(password){
        // Define a regular expression pattern
        const pattern = /^(?=.*[A-Z])(?=.*\d).{8,}$/;

        if(pattern.test(password)){
           this._Password = password;
        } else {
           this._Password = 'error: Password must be at least 8 characters long and constain at least  one number and one uppercase letter'
        }
    }
    getPassword(){
       return `${this._Password}`;
        
    }
}
const user = new User('shoaib',);
user.setPassword('password232')
console.log(user.getPassword()); // Output: error: Password must be at least 8 characters long and constain at least  one number and one uppercase letter

user.setPassword('Password232')

console.log(user.getPassword()); // Output: Password232
