import express from 'express';
import { getWeatherData } from '../controller/controller.js';
import { cacheMiddleware } from '../middleware/cacheMiddleware.js';

const router = express.Router();

router.get('/', cacheMiddleware, getWeatherData);

export default router;
