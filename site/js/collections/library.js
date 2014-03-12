var App = App || {};

(function () {
	App.library = Backbone.Collection.extend({
		model : App.Book,
		url: '/api/books' // fetches models from this URL in JSON format
	});
})();