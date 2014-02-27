// Sample Data for filling Database.

$.post('/api/books',{
	'title':'The immortals of Meluha',
	'author':'Amish Tripathi',
	'releaseDate': new Date(2008,4,1).getTime(),
	'keywords':[
		{'keyword': 'Fiction'}
	] 
},function(data, textStatus, XHR){
	console.log('posted response');
	console.log(data);
	console.log(textStatus);
	console.log(XHR);
});

$.get('/api/books',function(data, textStatus, XHR){
	console.log('getting response');
	console.log(data);
	console.log(textStatus);
	console.log(XHR);
});

$.ajax({
	url: '/api/books/:id',
	type: 'put',
	data: {
		'title': 'The immortals Of Meluha',
		'author': 'Amish',
		'releaseDate': new Date(2013,5,5).getTime()
		'keywords':[
			{'keyword': 'Fiction'}
		]
	},
	success: function(data, textStatus, XHR){
		console.log('updating :id');
		console.log(data);
		console.log(textStatus);
		console.log(XHR);
	}
});

$.ajax({
	url: '/api/books/530f14795638d6f412000002',
	type: 'delete',
	success: function(data, textStatus, XHR){
		console.log('deleting :id');
		console.log(data);
		console.log(textStatus);
		console.log(XHR);
	}
});