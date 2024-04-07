import app from './app'
import mongoose from "mongoose";
const port = 3000;

// connect database 

(async () => {
    try {
      // db connect 
     await mongoose.connect('mongodb+srv://moshoaib9621910125:tn49pEp8pmuNhm7X@cluster0.wfw2fy8.mongodb.net/');
     
     app.on("error",(err) => {
        console.log("Error: ",err)
        throw err
     })
     const onListening = () => {
        console.log(`Listening on port ${port}`);
     }
       app.listen(port,onListening)


    } catch(error) {
        console.error('ERROR:',err)
        throw err
    }
})()

/* app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
}); */