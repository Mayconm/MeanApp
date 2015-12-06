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
//       },
//       coords: {
//         long: {
//           type: String
//         },
//         lat: {
//           type: String
//         }
//       }
//     },
//     financial: {
//       soldPrice: {
//         type: Number
//       },
//       rentPrice: {
//         type: Number
//       }
//     },
//     owner: {
//       _id: Schema.Types.ObjectId,
//       ref: 'Client'
//     },
//     information: {
//       room: {
//         type: Number
//       },
//       bathroom: {
//         type: Number
//       },
//       suite: {
//         type: Number
//       },
//       parking: {
//         type: Number
//       },
//       finality: {
//         _id: Schema.Types.ObjectId,
//         ref: 'Finality'
//       },
//       type: {
//         type: Schema.Types.ObjectId,
//         ref: 'Type'
//       }
//     },
//     feature: {
//       type: [Schema.Types.ObjectId],
//       ref: 'feature'
//     },
//     status: {
//       sold: {
//         type: Boolean
//       },
//       rent: {
//         type: Boolean
//       }
//     },
//     configuration: {
//       address: {
//         type: Boolean
//       },
//       visible: {
//         type: Boolean
//       },
//       mainImage: {
//         type: Sting
//       }
//     }

//   });
  
//   return mongoose.model('Imovel', schema);
// };