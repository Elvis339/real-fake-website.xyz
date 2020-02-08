const 
  controller = require('../controllers/app/Articles/ArticleController'),
  auth = require('../middleware/auth');

module.exports = (router) => {
  router.route('/articles')
    .post(auth, controller.addNewArticle)
    .get(controller.getArticles)
    .patch(auth, controller.editArticle) 
};