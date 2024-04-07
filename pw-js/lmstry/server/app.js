import cookieParser from "cookie-parser";  // Middleware for parsing cookies
// Import necessary modules
import { config } from 'dotenv';
config(); // Importing configuration settings
import userRoutes from './routes/user.Routes.js'
import cors from "cors";  // Middleware for enabling CORS
import express from "express";  // Express.js framework
import morgan from 'morgan';  // HTTP request logger
import errorMiddleware from './middlewares/error.middleware.js';

// Create an express app
const app = express();

// Middleware for parsing request body as JSON
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Middleware for enabling CORS with credentials and specified origin
app.use(
  cors({
    origin: [process.env.FRONTEND_URL],
    credentials: true,
  })
);

// Middleware for parsing cookies
app.use(cookieParser());

// Middleware for logging requests in the development environment
app.use(morgan('dev'));

// Route for handling ping requests
app.get("/ping", (_req, res) => {
  res.send("pong");
});

// Routes for handling user authentication
app.use('/api/v1/user', userRoutes);

// Error handling middleware
app.all("*", (_req, res) => {
  res.status(404).send("OOPS!! 404 page not found");
});

app.use(errorMiddleware);

// Export the app for use in other modules
export default app;
