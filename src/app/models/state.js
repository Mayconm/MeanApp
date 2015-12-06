/**
 * Template model
 *
 * Author: 
 * Description:
 *
 */
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
module.exports = function() {
  var schema = mongoose.Schema({
    unit: {
      type: String
    },
    name: {
      type: String
    }
  });
  
  return mongoose.model('State', schema);
};