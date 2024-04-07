// Car Description Class

class Car {
    constructor(c,m,y){
        this.company = c,
        this.model = m,
        this.year = y
    }

    getDescription (){
        return (`This is a ${this.year} ${this.company} ${this.model} `);
    }
};

const obj = new Car('Mahindra','Thar',2022);

console.log(obj.getDescription()); // → This is a 2022 Mahindra Thar 