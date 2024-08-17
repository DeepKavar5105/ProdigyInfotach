const jwt = require('jsonwebtoken');
const config = require('../config/config');

const authenticateToken = (req, res, next) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];

  if (!token) return res.sendStatus(401); // If no token, return 401 (Unauthorized)

  jwt.verify(token, config.jwt.secret, (err, user) => {
    if (err) return res.sendStatus(403); // If token is invalid, return 403 (Forbidden)
    req.user = user;
    next();
  });
};

module.exports = { authenticateToken };

