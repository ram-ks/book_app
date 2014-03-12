var App = App || {};

(function () {
	App.Book = Backbone.Model.extend({
		defaults:{
			coverImage: 'img/the_oath_of_the_vayuputras.jpg',
			title: 'Unknown',
			author: 'Anonymous',
			releaseDate: new Date(2013,5,5).getTime(),
			keywords: [
				{keyword: 'fiction'}
			]
		},
		idAttribute: '_id' // used for parsing id 
		// parse: function(response){
		// 	response.id = response._id
		// 	return response
		// }
	});
})();