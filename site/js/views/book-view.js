var App = App || {};

(function () {
	App.bookView = Backbone.View.extend({
		tagName: 'li',
		className: 'book-container',
		events: {
			'click #delete': 'deleteBook'
		},
		deleteBook: function(e){
			//removes model by sending HTTP delete request
			this.model.destroy({success: function(model, response) {
				console.log(model);
				console.log(response);
			}});
			//removes view from DOM
			this.remove();
		},
		render: function(){
			var tmp = _.template($('#book-template').html());
			this.$el.html(tmp(this.model.toJSON()));
			return this;
		}
	});
})();