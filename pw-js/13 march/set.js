/* const mySet1 = new Set();

mySet1.add(1);
mySet1.add(5);
mySet1.add(5);
mySet1.add('some text');
const o = {a:1,b:2};
mySet1.add(o);
console.log(mySet1);
mySet1.add({a:1,b:2});
console.log(mySet1);
console.log(mySet1.has(1));
mySet1.delete(5);
console.log(mySet1.has(5));
mySet1.add(5)
console.log(mySet1);


for(const item of mySet1){
    console.log(item);
};

for (const item of mySet1.keys()){
    console.log(item);
}

for(const item of mySet1.values()){
    console.log(item);
}

for(const [key,value] of mySet1.entries()){
    console.log(key)}

    const myArr = Array.from(mySet1);
    console.log(myArr);

    // converting between Set and Array

    const mySet2 = new Set([1,2,3,4])
    console.log(mySet2);
    console.log([...mySet2]);
    
    console.log("hi");
    console.log(mySet1);
    console.log(mySet2);

    const difference = new Set([...mySet1].filter((x) => !mySet2.has(x)));
    console.log(difference);

    mySet2.forEach((value) => {
        console.log(value);
    }) */

/* 
    function isSuperset(set,subset){
        for(const elem of subset){
            if(!set.has(elem)){
                return false;
            }
        }
        return true;
    }

    function union(setA, setB){
        const _union = new Set(setA);
        for(const elem of setB){
            _union.add(elem);
        }
        return _union;
    }

    function intersection(setA,setB){
        const _intersection = new Set();
        for(const elem of setB){
            if(setA.has(elem)){
                _intersection.add(elem);

            }
        }
        return _intersection;
    };

    function symmetricDifference(setA,setB){
        const _differnce = new Set(setA);
        for(const elem of setB){
            if(_differnce.has(elem)){
                _differnce.delete(elem)
            } else{
                _differnce.add(elem)
            }

        }
        return _differnce;
    };

    function difference(setA, setB) {
        const _difference = new Set(setA);
        for (const elem of setB) {
          _difference.delete(elem);
        }
        return _difference;
      };

      const setA = new Set([1, 2, 3, 4]);
      const setB = new Set([2, 3]);
      const setC = new Set([3, 4, 5, 6]);   


console.log(isSuperset(setA, setB));; // returns true
union(setA, setC); // returns Set {1, 2, 3, 4, 5, 6}
intersection(setA, setC); // returns Set {3, 4}
symmetricDifference(setA, setC); // returns Set {1, 2, 5, 6}
difference(setA, setC); // returns Set {1, 2} */


//Relation to arrays 

/* const myArray = ['value1','value2','value3'];
const mySet = new Set(myArray);

console.log(mySet.has('value1'));

console.log([...mySet]); */


// Remove duplicate element from an aray 

const numbers = [2, 3, 4, 4, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 5, 32, 3, 4, 5];
console.log([...new Set(numbers)]);

// Relation to strings

const text = "12345";
console.log([...new Set(text)]);

// use a set to ensure the uniqueness of a list of values

const array = Array.from(document.querySelector('[id]')).map((e) => e.id)

const set = new Set (array);


