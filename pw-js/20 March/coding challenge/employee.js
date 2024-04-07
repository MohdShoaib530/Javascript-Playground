// Employee Class Challenge 

class Employee {
    constructor(n,p,s) {
        this.name = n,
        this.position = p,
        this.salary = s
    }
    getSalary(){
        return `${this.salary}`
    }
};

const person1 = new Employee('Shoaib','CEO',100000000);

console.log(person1.getSalary()); // → output: 100000000