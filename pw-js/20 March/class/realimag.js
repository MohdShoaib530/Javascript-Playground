class ComplexNumbers{
    #real;
    #imag;
    constructor(r,i){
      this.#real = r;
      this.#imag = i;
    }
    display(){
        console.log(this.#real,'+ i', this.#imag);
    }
    get real(){
       return this.#real;
    }
    get imag(){
        return this.#imag;
    }

    addComplexNumber(c){
        this.#real += c.real;
        this.#imag += c.imag;
    }
    
}

const c1 = new ComplexNumbers(3,5);
c1.display();
const c2 = new ComplexNumbers(2,6);
c1.addComplexNumber(c2);
c1.display();
console.log(c1.real);
console.log(c1.imag);