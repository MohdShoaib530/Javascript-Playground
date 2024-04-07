// Anonyms function 

let a = function (){
    console.log("hello");
}
a();

// self invoke function

(function sqr(x){
    console.log(x*x);
})(2);

(function (){
  console.log("hi");
})();