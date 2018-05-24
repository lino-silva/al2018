const indexController = require('../controllers/');

module.exports = app => {
  app.get('/', indexController.index);
  app.get('/follow', indexController.follow);
};
