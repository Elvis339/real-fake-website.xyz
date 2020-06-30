const { PortfolioController: controller } = require('../index');
const auth = require('../../../middleware/auth');

module.exports = (router) => {
    router.route('/portfolios')
        .post(auth, controller.addNewArticle)
        .get(controller.getArticles)
        .patch(auth, controller.editArticle)
};
