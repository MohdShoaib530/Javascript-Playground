import mongoose from "mongoose";
import app from "./app"
const port = 3000; 

// Here we will connect our database,make a connection with our app,and will start our sever on a port

(async () => {
  try {
    // connect to database
    await mongoose.connect("mongodb+srv://moshoaib9621910125:tn49pEp8pmuNhm7X@cluster0.wfw2fy8.mongodb.net/");

    // connect to our app
    app.on("error",(error) => {
      console.log("Can not connect to app: ",error);
      throw error
    })

    // listen on a port to our server

    onListening = () => {
      console.log(`Server is listening on port ${port}`);
    };
    app.listen(port,onListening)

  } catch (error) {
    console.log("Error",err);
    throw err
  }
})()