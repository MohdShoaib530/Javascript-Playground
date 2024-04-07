class Product {
    // here we are defining that which properties will be private

    #rating;
    constructor(n,p,r){
        console.log('Calling the constructor');
        this.name = n;
        this.price = p;
        this.#rating = r;
    }
    
    static custom(){
        console.log('calling a static method');
    };

    display(){
        console.log('display the current price',this.name,this.price,this.#rating);
    }
}

const p = new Product('Samsung s21 Ultra', 123000, 5)

// we can not call static method using an object we can static method only using Product class because static method is a property of class not an obj;
console.log(p);
p.rating = 10;
console.log(p.rating);
p.display()
