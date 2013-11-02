/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
    config = require('../../config/config'),
    Schema = mongoose.Schema;


/**
 * Article Schema
 */
var ItemSchema = new Schema({
    created: {
        type: Date,
        default: Date.now
    },
    name: {
        type: String,
        default: '',
        trim: true
    },
    vendor: {
        type: String,
        default: 'general',
        trim: true
    },
    priority: {
      type: String,

    },
    list: {
        type: Schema.ObjectId,
        ref: 'List'
    }
});

/**
 * Validations
 */

ItemSchema.path('priority').validate(function (value) {
  return '/normal|high/i'.test(value);
}, 'Invalid priority');

ItemSchema.path('name').validate(function(name) {
    return name.length;
}, 'Name cannot be blank');

mongoose.model('Item', ItemSchema);