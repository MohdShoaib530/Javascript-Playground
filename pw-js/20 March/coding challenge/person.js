// Implementing a Person Class with Default Values

class person {
    constructor(n = 'Unknown',a = 0) {

        this.name = n,
        this.age = a
    };
    // getDetails method
    getDetails(){
        return `Name: ${this.name},Age: ${this.age}`;
    }
}

const person1 = new person('shoaib',20);
console.log(person1.getDetails());  // → Output: person { name: 'shoaib', age: 20 }

const person2 = new person();
console.log(person2.getDetails());  // → Output: person { name: 'Unknown', age: 0 }