var App = App || {};

(function () {
	App.bookView = Backbone.View.extend({
		tagName: 'li',
		className: 'book-container',
		events: {
			'click #delete': 'deleteBook',
			'click #update': 'update'
		},
		initialize: function(){
			this.model.on('change',this.saveModel, this);
			// this.update();
		},
		update: function(e){

			var $title = $(this.el).find('ul li.title').text(),
				$author = $(this.el).find('ul li.author').text(),
				$releaseDate = $(this.el).find('ul li.releaseDate').text(),
				$keywords = $(this.el).find('ul li.keywords').text();	

			this.model.set({
				'title': $title,
				'author': $author,
				'releaseDate': new Date(2013,5,5).getTime(),
				'keywords':[{'keyword': $keywords}]
			});

		},
		saveModel: function(){
			this.model.save();
			console.log('change event fired');
			// this.model.save(attrs,{patch:true}); // sends patch request
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