import NodeCache from 'node-cache';

// Create a new instance of NodeCache with a standard Time-To-Live (TTL) of 3600 seconds (1 hour)
const cache = new NodeCache({ stdTTL: 3600 });

export const cacheMiddleware = (req, res, next) => {
  // Extract the 'cityName' from the query parameters
  const { cityName } = req.query;

  // Generate a cache key based on the city name
  const cacheKey = `weatherData:${cityName}`;

  // Attempt to retrieve data from the cache using the cache key
  const cachedData = cache.get(cacheKey);

  if (cachedData) {
    // If cached data exists for the given city, respond with the cached data
    res.status(200).json(cachedData);
  } else {
    // If no cached data exists, continue to the next middleware or route handler
    next();
  }
};

export default cache;
