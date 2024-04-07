class Product{
    // Properties
    constructor(n,p,r){
        this.name = n;
        this.price = p;
        this.rating = r;
        // return {x:4, y:7}
    }
    // return 20  // → if you are returning primitive data type then it will avoid and if you will return non primitive data type then it will work
    
     // Behaviour → function → member functions
    display(){
        console.log('displaying ',this);
        console.log('display the currnet product',this.name,this.price,this.rating);
       
    }; 

}


const p = new Product('apple',100000,5)
console.log(p);
p.display();

