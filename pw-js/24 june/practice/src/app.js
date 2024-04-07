import Express from "express";
const app = Express();

// All the work of routing we will do here 

app.get('/',(req,res) => {
    res.send("This is a home")
});

app.get('/instagram',(req,res) => {
    res.send("This is a instagram page")
})

app.get('/facebook',(req,res) => {
    res.send('facebook is one of the biggest social media platform ')
})

export default app;











