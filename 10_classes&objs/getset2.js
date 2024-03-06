class Product {
    // properties → variables → data members
    // custom constructor
    // name;
    // price;
    // rating;
    #rating // private field
    constructor(name,price,rating) {
        this.name = name,
        this.price = price,
        this.#rating = rating
    }
    
    // this method can only be accessible by the class Product.custom()
    static custom () {
        console.log('calling a static method');
    }
    
    // getRating (this is a method p1.getRating())
    get ratingGetter(){ // this is prop like
        console.log(`this is rating ${this.#rating}`);
    }
    
    // we can check valus first then set it
    /**
     * @param {number} r
     */
    set ratingSetter (r){
        if(r <= 0) {
            return console.log('can not set the value less than 0');
        } else {
            this.#rating = r
        }
        
    }
    
    //  this method can be access by any obj created by this class
    display() {
        console.log(`displaying the current name ${this.name} and rating ${this.#rating}`);
    }
}

const p1 = new Product('laptop','24424', 5)
// console.log(p1);
// console.log(p1.name);
// console.log(p1.rating); // Property 'rating' is not accessible outside class 'Product' because it has a private
// console.log(p1.custom()); // custom can not be accessed outsed that class, because this is static method
// console.log(Product.custom());

// p1.ratingSetter  = 0;  // work like props 
// p1.ratingGetter;


class ComplesNumber {
    #real;
    #imag;
    constructor(real, imag){
        this.#real = real;
        this.#imag = imag
    }

    display (){
        console.log(`${this.#real} + ${this.#imag}i`);
    }

    get real(){
        return this.#real;
    }

    get imag(){
        return this.#imag
    }

    addComplexNumber(c){
        this.#real += c.real
        this.#imag += c.imag
    }
}

const c1 = new ComplesNumber(2,3);
// console.log(c1.display());
const c2 = new ComplesNumber(4,7);
c1.addComplexNumber(c2); // here c1 is calling context
c1.display()
