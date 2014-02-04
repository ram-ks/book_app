$(function(){
	var books = [
		{ title: 'The Immortals Of Meluha', author: 'Amish Tripathi', coverImage: 'img/the_immortals_of_meluha.jpg',
		  releaseDate: '2013', keywords: 'Fiction' },
		{ title: 'The Oath of Vayuputras', author: 'Amish Tripathi', coverImage: 'img/the_oath_of_the_vayuputras.jpg',
		  releaseDate: '2012', keywords: 'Fiction' },
		{ title: 'The Secret of Nagas', author: 'Amish Tripathi', coverImage: 'img/the_secret_of_the_nagas.jpg',
		  releaseDate: '2010', keywords: 'Fiction' },
		{ title: 'Eleqount Javascript', author: 'Doughlas Crockford', coverImage: 'img/eloquent_javascript.jpg',
		  releaseDate: '2009', keywords: 'Javascript Programming' },
	];

	var libraryView = new App.libraryView( books );
});