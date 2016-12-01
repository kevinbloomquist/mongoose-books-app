var mongoose = require('mongoose');
Schema = mongoose.schema;

// vreate author Schema
var AuthorSchema = new Schema({
	name: String,
	alive:Boolean,
	image:String

});

// create model
var Author = mongoose.model('Author',AuthorSchema);
module.exports = Author;