const express = require('express');

const app = express();
const PORT = 3010;
const HOSTNAME = 'localhost';

app.get('/',(req,res) => {
    res.send('hello')
});
app.get('/about',(req,res) => {
    res.send('<h1>About Our Company</h1>')
});
app.get('/Contact',(req,res) => {
    res.send('<h1>Contact Us </h1>')
});

app.listen(PORT,() => {
    console.log(`server is working on ${HOSTNAME}:${PORT}`);
})