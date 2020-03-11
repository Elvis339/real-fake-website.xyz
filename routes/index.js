const 
  users = require('./users'),
  articles = require('./articles'),
  portfolios = require('./portfolios');

module.exports = (router) => {
  users(router);
  articles(router);
  portfolios(router);

  return router;
};