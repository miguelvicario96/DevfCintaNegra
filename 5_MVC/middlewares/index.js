/* eslint-disable no-console */
module.exports = {
  showDate: (req, res, next) => {
    const date = Date.now();
    console.log(`🤠 Fecha de Petición: ${date}`);
    next();
  },
};
