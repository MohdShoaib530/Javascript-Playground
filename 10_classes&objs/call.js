function setUsername(username){
    // complex db calls
    this.username = username
    console.log('hello');
    return this
}

function createUser(username, email, password){
    setUsername.call(this,'shoaib');

    this.email = email,
    this.password = password
}

const user = new createUser('shoaib','shoaib@gmail.coom','1212')
console.log(user);
// console.log(setUsername('shoaib'));