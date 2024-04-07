// Require the express application
import db from "./config/db.js";
import app from "./app.js";
import {v2} from 'cloudinary';

// Set the port to listen on. This will use the process environment variable if set, otherwise it will default to 5000.
const PORT = process.env.PORT || 5000;

//cloudinary 
       
v2.config({ 
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME, 
  api_key: process.env.CLOUDINARY_API_KEY, 
  api_secret: process.env.CLOUDINARY_API_SECRET, 
});

// Start the server by listening on the specified port.
app.listen(PORT, () => {

    // Start the application by connecting to the database and setting up database events.// Log a message to the console to indicate that the server is running and listening for connections.
    const startApp = async () => {
        const connection = await db.connectToDb();
        db.setupDbEvents();

        // Your application logic here
        console.log(`Server is running on port: ${PORT}`);
    };

    startApp();

    
});