const { UserRoutes: users } = require('../modules/User');
const { PortfolioRoutes: portfolio } = require('../modules/Portfolio');

module.exports = (router) => {
  users(router);
  portfolio(router);

  return router;
};