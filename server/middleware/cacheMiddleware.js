import NodeCache from 'node-cache';

const cache = new NodeCache({ stdTTL: 3600 });

export const cacheMiddleware = (req, res, next) => {
  const { cityName } = req.query;
  const cacheKey = `weatherData:${cityName}`;

  const cachedData = cache.get(cacheKey);

  if (cachedData) {
    res.status(200).json(cachedData);
  } else {
    next();
  }
};

export default cache;
