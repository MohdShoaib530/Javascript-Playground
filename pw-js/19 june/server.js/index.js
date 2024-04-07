const http = require('http');
 

const PORT = 3036;
const HOSTNAME = 'localhost';

const server = http.createServer((req,res) => {
    if(req.url == '/'){
        res.statusCode = 200;
        res.setHeader('content-type','text/plain');
        res.end('Welcome to node js server');
    } else if(req.url == '/about'){
        res.statusCode = 200;
        res.setHeader('content-type','text/plain');
        res.end('About Page');
    } else if(req.url == '/Contact'){
        res.statusCode = 200;
        res.setHeader('content-type','text/plain');
        res.end('Contact page!');
    } else if(req.url == '/product'){
        const options = {
            hostname:'fakestoreapi.com',
            path:'/products/1',
            method:'GET'
        };
        const apiReq = http.request(options,(apiRes) =>{
            apiRes.on('data',(data) => {
                res.statusCode = 200;
                res.setHeader('Content-type','application/json');
                res.end((data.toString()));
            });
        });
        apiReq.on('error',() => {
            console.log(e);
        });
        
        apiReq.end();

    } else {
        res.statusCode = 500;
        res.setHeader('content-type','text/plain');
        res.end('Server Error!');
    }
});

server.listen(PORT,() => {
    console.log(`server running at ${HOSTNAME}:${PORT}`);
});