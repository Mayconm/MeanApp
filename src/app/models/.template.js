/**
 * Template model
 *
 * Author: 
 * Description:
 *
 */
var mongoose = require('mongoose');

module.exports = function() {
  var schema = mongoose.Schema({
    // example of mongoose data
    name:    String,
    binary:  Buffer,
    living:  Boolean,
    updated: { type: Date, default: Date.now },
    age:     { type: Number, min: 18, max: 65 },
    mixed:   Schema.Types.Mixed,
    _someId: Schema.Types.ObjectId,
    array:      [],
    ofString:   [String],
    ofNumber:   [Number],
    ofDates:    [Date],
    ofBuffer:   [Buffer],
    ofBoolean:  [Boolean],
    ofMixed:    [Schema.Types.Mixed],
    ofObjectId: [Schema.Types.ObjectId],
    nested: {
      stuff: { type: String, lowercase: true, trim: true }
    }
  });
  
  return mongoose.model('Template', schema);
};