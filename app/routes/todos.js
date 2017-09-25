import Ember from 'ember';


export default Ember.Route.extend({
	model() {
		return this.store.findAll('todo');
	},

	setupController(controller, model){
		this._super(...arguments);
		controller.set('newTitle', '');
	},

	actions: {
		

		deleteTodo: function(todo){
			todo.destroyRecord();
			
		},

		editTodo: function(todo) {
			let todos=this.controller.get('model');
			todos.setEach('isEdit',false);
			 todo.set('isEdit', true);
		},

		clearCompleted:function(model){
			model.forEach((item) => {
			if(item.get('isCompleted')) {
				item.destroyRecord();
			}
		});
		}



		
	}
});
