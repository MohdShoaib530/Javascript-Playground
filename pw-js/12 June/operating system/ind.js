//  const os = require('os');

// // console.log("CPU Architecture:" + os.arch());
// // console.log("Free Memory:" + os.freemem());
// // console.log("Total Memory"+ os.totalmem());
// // console.log("Network Interface:" + JSON.stringify(os.networkInterfaces()));
// console.log("OS default temp dir" + os.tmpdir());
// console.log('endianness:' + os.endianness());
// console.log("Hostname:" + os.hostname());
// console.log("type:" +os.type());
// console.log("platform:" +os.platform());

// const os = require('os');

// console.log("os release:" +os.release());
// console.log('os name:' + os.type());

/* const http = require('http');
const server = http.createServer((req,res) => {
    if(req.url === '/'){
        res.write('<h1>"I Am Happy To Learn Full Stack Web Development From PW Skills!"</h1>')
    }
    s.end();
});
server.listen(5002)
console.log('The http server is running on port 5002');  */

// const fs = require('fs');

// const data = 'Hi,this is a new text file';

// fs.writeFile('../input.txt', data,(err) => {
//     if(err){
//         console.log(err);
//         return;
//     } else {
//     	console.log('Writen to file successfully!');
//     }
// });

/* 
const fs = require('fs');

const data = 'I am learning full-stack web development and I am learning data science also.';

fs.appendFile('./input.txt', data, (err) => {
    if (err) {
        console.log('There is an error!');
    } else {
        console.log(data);
    }
});


const d = 'Hi,this is a new text file create by me.I am learning full-stack web development and I am learning data science also.' */

// const fs = require('fs');

// fs.unlink('./input.txt', (err) => {
//     if(err){
//         console.log('Error in deleting file');
//     } else{
//         console.log('File deleted successfully');
//     }
// });


const path = require('path');
/* console.log(path.sep);
console.log(process.env.PATH);
console.log(path.delimiter); */
const filePath = __filename;
console.log(filePath);