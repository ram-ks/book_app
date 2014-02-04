var App = App || {};

(function () {
	App.libraryView = Backbone.View.extend({
		tagName: 'ul',
		className: 'book-content-wrap',
		initialize: function(books){
			this.collection = new App.library(books);
			this.render();
		},
		render: function(){
			this.collection.each(this.addOne,this);
			$('body').append(this.$el);
		},
		addOne: function(model){
			var bookView = new App.bookView({
				model: model
			});
			this.$el.append(bookView.render().el);
		}
	});
})();