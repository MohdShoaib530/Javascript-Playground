const person = {
    name:'shoaib',
    age:21,
    address:{
        street:'B8, Block, Industrial Area',
        city: 'Sector 62, Noida',
        state: 'Uttar Pradesh'
    },
};

function details(person){
    const { name, address: { street } } = person;
    return [name,street]
}
console.log(details(person));