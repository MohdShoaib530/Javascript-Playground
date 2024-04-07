function getPerson(obj){
   try{
    if(obj.hasOwnProperty("name") && obj.hasOwnProperty('age')){
        console.log(obj);
    }

    else  {
        throw new Error("Invalid Parameter Type")
       }
    }

    catch(error){
       console.error(error.message);
    } 
};

const obj = {
    name:'shoaib',
    age: 20
};
getPerson(obj); // → output:  name: 'shoaib', age: 20 