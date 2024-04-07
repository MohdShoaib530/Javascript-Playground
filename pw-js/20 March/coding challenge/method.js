class Student {
    constructor(n) {
      this.name = n;
    }
  
    printDetails() {
      console.log(`This student is ${this.name}`);
    }
  }
  
  const student = new Student('Shoaib');
  student.printDetails(); // Output: This student is Shoaib
  