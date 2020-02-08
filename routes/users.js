const
  controller = require('../controllers/app/Users/UserController'),
  auth = require('../middleware/auth');

module.exports = (router) => {
  // Register
  router.route('/users')
    .post(controller.addNewUser)
    .get(auth, controller.validate) // Validate token route

  // Login
  router.route('/login')
    .post(controller.login)

  // Log out
  router.route('/logout')
    .post(auth, controller.logOut)
};