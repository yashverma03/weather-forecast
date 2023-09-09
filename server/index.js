import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import router from './routes/route.js';

// Load environment variables from a .env file
dotenv.config();

// Create an instance of the Express application
const app = express();

// Middleware Setup
app.use(cors()); // Enable CORS for cross-origin requests
app.use(express.json()); // Parse incoming JSON data
app.use(express.urlencoded({ extended: true })); // Parse incoming URL-encoded data

// Set up routes using the imported router
// Mount the router at the root URL ('/') of the application
app.use('/', router); 

// Server port
const port = 4000;

// Start the Express server, and listen on the specified port
app.listen(port, () => {
  console.log(`Server is running on PORT ${port}`);
});
