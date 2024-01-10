// for of

// ["", "", ""]
// [{}, {}, {}]

const arrs = [1, 2, 3, 4, 5]

for (const arr of arrs) {
    // console.log( arr);
}

const greetings = "Hello world!"
for (const greet of greetings) {
    // console.log(`Each chai is ${greet}`)
}

// Maps

const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "India")


console.log(map);

    for (const [key, value] of map) {
        console.log(key, ':-', value);
    }

const myObject = {
    game1: 'NFS',
    game2: 'Spiderman'
}

for (const [key, value] of myObject) {
    console.log(key, ':-', value);
    
}