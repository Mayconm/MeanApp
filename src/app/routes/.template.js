/**
 * Template routes
 *
 * Author: 
 * Description:
 *
 */
module.exports = function (app) {
  
  var controller = app.controllers.template;

  app.route('/template')
    .get(controller.list)
    .post(controller.save);

  app.route('/template/:id')
    .get(controller.getById)
    .delete(controller.remove);
};