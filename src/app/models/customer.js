// /**
//  * Template model
//  *
//  * Author: 
//  * Description:
//  *
//  */
// var mongoose = require('mongoose');
// var Schema = mongoose.Schema;
// module.exports = function() {
//   var schema = mongoose.Schema({
//     name: {
//       type: String
//     },
//     cpf: {
//     type: String //rever
//     },
//     rg: {
//       type: String,
//       unique: true
//     },
//     location: {
//       state: {
//         _id: Schema.Types.ObjectId,
//         ref: 'State'
//       },
//       city: {
//         _id: Schema.Types.ObjectId,
//         ref: 'City'
//       },
//       district: {
//         _id: Schema.Types.ObjectId,
//         ref: 'District'
//       },
//       street: {
//         type: String
//       },
//       number: {
//         type: Number
//       },
//       complement: {
//         type: String
//       }
//     }
//   });
  
//   return mongoose.model('Customer', schema);
// };