class Product {
  // name;
  // price;
  // rating;
  #rating;
  constructor(n, p, r) {
    console.log('calling the constructor');
    this.name = n;
    this.price = p;
    this.#rating = r;
    // return 10;
    // return { name: 'shoaib' };
    // if you are returning then it will be avoided
  }

  // behaviours → functions → member function
  display() {
    console.log('display this of calling context', this);
    console.log(
      'displaying the current product',
      this.name,
      this.#rating,
      this.price
    );
  }

  static custom() {
    console.log('calling static custom fun');
  }
  /* getRating() {
    console.log(this.#rating);
  }
  setRating(r) {
    if (r < 0) return;
    this.#rating = r;
  } */
  set ratingSetter(r) {
    if (r < 0) return;
    this.#rating = r;
  }
  get ratingGetter() {
    console.log(this.#rating);
  }
}

const p = new Product('samsung', 12000, 5);
Product.custom();
// in the above piece of code we are calling the constructor method
console.log('product', p);
// p.setRating(23);
// p.getRating();
p.ratingSetter = 3443;
p.ratingGetter;
