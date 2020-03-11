const controller = require('../controllers/app/Articles/ArticleController');

module.exports = (router) => {
  router.route('/portfolios')
    .get(controller.getPortfolios)
};