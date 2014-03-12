var App = App || {};

(function () {
	App.libraryView = Backbone.View.extend({
		el: '#books',
		events:{
			'click #add-btn' : 'addBook'
		},
		initialize: function(){
			this.collection = new App.library();
			this.collection.fetch({reset:true}); // fetch default set of models from collection 
												 // setting reset will update collection in bulk
			this.render();

			this.listenTo( this.collection, 'add', this.addOne );

			this.listenTo( this.collection, 'reset', this.render );
		},
		addBook: function(e){
			e.preventDefault();
			var $inputs = this.$el.find('form input[type="text"]'),
				Data = {}; 
			$inputs.each(function(index,$el){
				if($(this).val() != ""){
					console.log($el.id);
					if($el.id == "keywords"){
						Data[$el.id] = [];
						var str = $('#keywords').val(),
							splitedStr = str.split(" ");
						$.each(splitedStr,function(index,item){
						    console.log(item);
						    Data["keywords"].push({"keyword":item});
						});
					}else if($el.id == "releaseDate"){
						Data[$el.id] = $("#releaseDate").datepicker('getDate').getTime();
					}else{
						Data[$el.id] = $(this).val();						
					}
				}
			});

			// this.collection.add( new App.Book(Data) );

			this.collection.create(Data);
		},
		render: function(){
			this.collection.each(this.addOne,this);
			// this.$el.append(this.$el);
		},
		addOne: function(model){
			var bookView = new App.bookView({
				model: model
			});
			this.$el.find('ul.book-content-wrap').append(bookView.render().el);
		}
	});
})();