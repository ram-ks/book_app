var application_root = __dirname,
	express = require( 'express' ),
	path = require( 'path' ),
	mongoose = require( 'mongoose' );

var app = express();

app.configure( function() {
	app.use( express.bodyParser() );
	app.use( express.methodOverride() );
	app.use( app.router );
	app.use( express.static( path.join( application_root, 'site') ) );
	app.use( express.errorHandler({ dumpExceptions: true, showStack: true }));
});

var port = 1010;

app.listen(port,function(){
	console.log('server',port,app.settings.env );
});

app.get( '/api', function(request,response){
	response.send('Library API is running');
});

mongoose.connect('mongodb://localhost/library_database');

var Keywords = new mongoose.Schema({
	keyword: String
});

var Book = new mongoose.Schema({
	title: String,
	author: String,
	releaseDate: Date,
	keywords: [ Keywords ]
});

var BookModel = mongoose.model('Book',Book);

app.get('/api/books',function(request,response){
	return BookModel.find(function(err,books){
		if(!err){
			return response.send(books);
		}else{
			return console.log(err);
		}
	});
});

app.post('/api/books',function(request,response){
	var book = new BookModel({
		title: request.body.title,
		author: request.body.author,
		releaseDate: request.body.releaseDate,
		keywords: request.body.keywords
	});
	book.save(function(err){
		if(!err){
			return console.log('created');
		}else{
			return console.log(err);
		}
	});
	return response.send(book);
});

app.get('/api/books/:id',function(request,response){
	return BookModel.findById(request.params.id,function(err,book){
		if(!err){
			return response.send(book);
		}else{
			return console.log(err);
		}
	});
});

app.put('/api/books/:id',function(request,response){
	return BookModel.findById(request.params.id,function(err,book){
		book.title = request.body.title;
		book.author = request.body.author;
		book.releaseDate = request.body.releaseDate;
		book.keywords = request.body.keywords;

		return book.save(function(err){
			if(!err){
				console.log('updated');
			}else{
				console.log(err);
			}
			return response.send(book);
		});
	});
});

app.delete('/api/books/:id',function(request,response){
	return BookModel.findById(request.params.id,function(err,book){
		return book.remove(function(err){
			if(!err){
				console.log('deleted successfully');
				return response.send('');
			}else{
				console.log(err);
			}
		});
	});
});