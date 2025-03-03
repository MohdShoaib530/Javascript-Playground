class ComplexNumber {
  #real;
  #imag;
  constructor(a, b) {
    this.#real = a;
    this.#imag = b;
  }
  get real() {
    return this.#real;
  }
  get imag() {
    return this.#imag;
  }
  addComplexNumbers(c) {
    this.#real += c.real;
    this.#imag += c.imag;
  }
  display() {
    console.log('displaying the number', this.#real, '+ i', this.#imag);
  }
}

const c1 = new ComplexNumber(3, 5);
console.log(c1.display());
const c2 = new ComplexNumber(2, 7);

const addComplex = c1.addComplexNumbers(c2);
console.log(c1.display());
