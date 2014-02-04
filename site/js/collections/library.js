var App = App || {};

(function () {
	App.library = Backbone.Collection.extend({
		model : App.Book
	});
})();