let emp = {
    id : 105,
    name : "shoaib",
    age : 21
}

console.log(emp);

/* let obj = new Object();
obj.id = 200;
obj.name = "md shoaib"
console.log(obj); */

// creating an object using function

/* function obj(i,j,k){
    this.id = i;
    this.name = j;
    this.class = k;
}

const e = new obj(299,"shoaib",'web dev')
console.log(e);
 */
console.log(emp.id);
console.log(emp['id']);
emp.job = "fswd";
console.log(emp);

delete emp.id
console.log(emp);