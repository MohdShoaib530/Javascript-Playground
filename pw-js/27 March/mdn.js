function fetchData(){
    return new Promise((reslove, rejet) => {
        setTimeout(() => {
            console.log('shoaib');
            const data = {message: 'Data fetched successfully'};
            // sumulate a successful response
            reslove(data);
            // simulate an error
            rejet(data);
            //reject(new Error('failed to fetch data));
        },4000);
    });
};

// using the promise 
console.log('start');
fetchData()
.then(result =>{
    console.log('Wow:',result.message);
})
.catch(error => {
    console.error(error.message); // Handle errors here
  });
console.log('end');