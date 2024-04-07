 const fs = require("fs");
console.log('Read Start');

 //Asynchronous way to read file

fs.readFile('input.txt',function (err,data){
    if(err){
        console.log('Error:',err);
        return err;
    };
    console.log('Data:',data.toString());
    console.log('Read End');
    return data;
})
console.log('Other Stuff');

// Synchrnous way to Read file

/* var data = fs.readFileSync('input.txt');
console.log('Data:',data.toString());;
console.log('Read End');
console.log('Other Stuff'); */

// Read and write files 

const buf = new Buffer(1024);

fs.open('input.txt','r+',function(err,fd){
    if(err){
        console.log('Error in opening file:',err);
    };
    console.log("file opened seccessfully!");
    fs.read(fd,buf,0,buf.length,4,function(er,bytes){
        if(er){
            console.log('error in file reading');
        }
        console.log("data:",bytes);
        console.log('data:',buf.slice(0,bytes).toString());
    });
}); 


const fs = require('fs');

fs.unlink('./index.txt',function (err){
    if(err){
        console.log('Error in deleting file');
    } else{
        console.log('File deleted successfully');
    }
})

