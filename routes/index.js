const 
  users = require('./users'),
  articles = require('./articles');

module.exports = (router) => {
  users(router);
  articles(router);
  
  return router;
};