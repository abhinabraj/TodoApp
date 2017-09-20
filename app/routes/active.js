import Ember from 'ember';

export default Ember.Route.extend({
	model() {
		return this.store.findAll('todo');
	},
	setupController(controller, model){
		this._super(...arguments);
		controller.set('newTitle', '');
		this.controller.set('items', model);
	},
	actions: {
		createTodo: function(){
			var controller = this.controller;
			var title = controller.get('newTitle');
			

			var todo = this.store.createRecord('todo', {
                title: title,
                isCompleted: false
            });

           controller.set('newTitle', '');

           todo.save();

		},

		deleteTodo: function(todo){
			todo.destroyRecord();
			
		},

		editTodo: function(todo) {
			let todos=this.controller.get('model');
			todos.setEach('isEdit',false);
			 todo.set('isEdit', true);
		},

		
	}
});
