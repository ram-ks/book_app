var App = App || {};

(function () {
	App.bookView = Backbone.View.extend({
		tagName: 'li',
		className: 'book-container',
		render: function(){
			var tmp = _.template($('#book-template').html());
			this.$el.html(tmp(this.model.toJSON()));
			return this;
		}
	});
})();