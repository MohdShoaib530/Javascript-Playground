function createPromisse(){
    return new Promise((ressolve,reject) => {
        // your code goes here
        setTimeout(() => {
            const data = {message:'Timer has completed'};
            ressolve(data);
            reject(data);
        },4000)
    })
};

async function consume(){
    try{
        console.log('Inside function');
        const response = await createPromisse();
        const response1 = await createPromisse();
        console.log('response is',response.message);
        console.log('response is',response1);
    }
    catch(error){
        console.log('handeled',error);
    }
};
consume(); 