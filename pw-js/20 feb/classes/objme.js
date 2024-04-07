let emp = {
    name : "md shoaib",
    village : "dihwa",
    city : "pratapgarh"
}
console.log(emp);
console.log(emp.name);

// if we want to see only keys of the object

let keys = Object.keys(emp);
console.log(keys);

// if we want to see only value of the keys of the given object

let values = Object.values(emp);
console.log(values);

// if we want to see all values and keys in a seprated string

let entries = Object.entries(emp);
console.log(entries);

// if we want to freez the object and nothing want to change in the object

Object.freeze(emp);
console.log(emp);


// use seal if you only want to update values and you can not add or remove values

Object.seal(emp);
emp.name = "sakib";
console.log(emp);

// another ways to assign to a new object

let a = Object.assign({id : 22},emp)
console.log(a);

// by creating instance of object directly

let obj = new Object();
Obj.id = 22;
Obj.name = 'shoaib';
console.log(obj);