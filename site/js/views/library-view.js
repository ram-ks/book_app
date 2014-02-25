var App = App || {};

(function () {
	App.libraryView = Backbone.View.extend({
		tagName: 'ul',
		className: 'book-content-wrap',
		initialize: function(){
			this.collection = new App.library();
			this.collection.fetch({reset:true});
			this.render();

			this.listenTo( this.collection, 'add', this.addOne );
			this.listenTo( this.collection, 'reset', this.render );
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