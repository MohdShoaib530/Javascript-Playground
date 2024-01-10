// Immediately Invoked Function Expressions (IIFE)


(function chai(){
    // named IIFE
    console.log(`DB CONNECTED`);
})();

( (name) => {
    console.log(`hello db is connected successfully ${name}`);
} )('shoaib')

// (() => {})() iife
