const express = require('express');
const app = express();
const { createProxyMiddleware } = require('http-proxy-middleware');

const routes = require('./routes.json');

app.use('/api', (req, res, next) => {
  const routeKeys = Object.keys(routes);
  for (const routeKey of routeKeys) {
    const pattern = new RegExp(`^${routeKey}`);
    if (pattern.test(req.path)) {
      const target = routes[routeKey];
      const proxy = createProxyMiddleware({
        target,
        changeOrigin: true,
        pathRewrite: { [routeKey]: '' },
      });
      return proxy(req, res, next);
    }
  }
  res.status(404).json({ message: 'Not found' });
});

app.listen(4000, () => {
  console.log('API Gateway listening on port 4000');
});