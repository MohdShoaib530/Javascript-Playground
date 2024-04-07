try{
    console.log('hello');
    console.log(a);
    console.log('not executed');
} catch(err){
    console.log('Try has some error so catch is working',err);
} finally {
    console.log('finally will always work ');
}
console.log('end');
