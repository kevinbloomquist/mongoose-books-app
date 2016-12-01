//  require mongoose for book schema
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// create book schema
var BookSchema = new Schema({
	title:String,
	author:String,
	image:String,
	releaseDate:String


});

// create book model 
var Book = mongoose.model('Book',BookSchema);

// ...and export
module.exports = Book;