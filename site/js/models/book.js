var App = App || {};

(function () {
	App.Book = Backbone.Model.extend({
		defaults:{
			coverImage: 'img/the_oath_of_the_vayuputras.jpg',
			title: 'Unknown',
			author: 'Anonymous',
			releaseDate: 'N/A',
			keywords: 'Fiction'
		},
		idAttribute: _.id
		// parse: function(response){
		// 	response.id = response._id
		// 	return response
		// }
	});
})();