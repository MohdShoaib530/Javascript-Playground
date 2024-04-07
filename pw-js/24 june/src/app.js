import express from "express"
const app = express();

app.get('/', (req, res) => {
    res.send('Hello World!')
  })

app.get('/instagram',(req,res) => {
  res.send('You have visited instagram')
})

app.get('/twitter',(req,res) => {
    res.send('this is a twitter')
  })

  export default app;