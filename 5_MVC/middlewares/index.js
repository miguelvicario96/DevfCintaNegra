/* eslint-disable no-console */
const jwt = require('jsonwebtoken');

module.exports = {
  showDate: (req, res, next) => {
    const date = Date.now();
    console.log(`🤠 Fecha de Petición: ${date}`);
    next();
  },
  verifyToken: (req, res, next) => {
    try {
      const { authorization } = req.headers;
      const token = authorization.split(' ')[1];
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      req.decoded = decoded;
      next();
    } catch (err) {
      res.status(401).json({ message: 'Auth Error', err });
    }
  },
};
