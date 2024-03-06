const User = {
    _email : 'shoaib@gmail.com', // _ means private property
    _password: '121212',
    
    get email(){
        return this._email
    },

    set email(value){
        this._email = value
    }
}

const user1 = Object.create(User)
console.log(user1.email); // I have written email as a method but actually that is not a method that is a property and method is put on property