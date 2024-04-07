/* function Product(n,p,r){
    this.name = n;
    this.price = p;
    this.rating = r;
    // return 20 // if you are returning primitive data type then it will avoid and if you will return non primitive data type then it will work
        // return {x:4, y:7} if you will not return any return any return statement then it wil return that obj
};

const p = new Product('Mackbook',150000,5);
console.log(p);

let x = {
    p: Product
};

x.p('laptop',49998,5)
console.log(x);
 */
/* 
*1. this keyword in js is diff than other languages
* 2. this keyword refers to the constext from where we called
* in the function constructor also
* if you return primitive it is ignored and we return the object referred by this
if you return a custom object then the custom object is returned 
if you don't return anything, then object by this is retuned 
*/

/* console.log('arrow fun');

const Product = (n,p,r) => {
    this.name = n;
    this.price = p;
    this.rating = r;
}
const p2 = new Product('iphone',100000,5)
console.log(p2); */

/* let obj = {
    x: 10,
    fun(){
         console.log(this.x);
    }
}
obj.fun(); */

// using arrow function 
/* 
let obj = {
    X:10,
    fun: () => {
        console.log(this.x);
    }
}
obj.fun(); */

// again using arrow function 

let obj = {
    x:10,
    fun(){
        y= {
            gun: () => {
                console.log(this.x);
            }
        }
        y.gun();
    }
}

obj.fun();