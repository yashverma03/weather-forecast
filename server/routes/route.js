import express from 'express';
import { getWeatherData } from '../controller/controller.js';
import { cacheMiddleware } from '../middleware/cacheMiddleware.js';

// Create an instance of the Express router
const router = express.Router();

// Define a route that listens for HTTP GET requests at the root URL ('/')
// It uses the 'cacheMiddleware' middleware before calling the 'getWeatherData' controller function
router.get('/', cacheMiddleware, getWeatherData);

export default router;
