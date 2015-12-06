/**
 * State routes
 *
 * Author: 
 * Description:
 *
 */
module.exports = function (app) {
  
  var controller = app.controllers.state;

  app.route('/state')
    .get(controller.list)
    .post(controller.save);

  app.route('/state/:id')
    .get(controller.getById)
    .delete(controller.remove);
};