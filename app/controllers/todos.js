import Ember from 'ember';

export default Ember.Controller.extend({
	isChecked : false,

	todoCount: Ember.computed('items.@each.isCompleted', function() {
		const items = this.get('items');

		let total = 0;
		items.forEach((item) => {
			if(!item.get('isCompleted')) ++total;
		});
		
		return total;
	}),

	actions:{
	updateTodo(todo) {	
		
			todo.save();
			todo.set('isEdit', false);
		},
		completedTodo(todo){
			todo.set('isCompleted', !todo.get('isCompleted'));
			todo.save();
			
		},
		selectAll:function(model){
			if(!this.get('isChecked')){
			model.forEach((item)=>{
				item.set('isCompleted', true);
			});
		}
		else{
			model.forEach((item)=>{
				item.set('isCompleted', false);
				
			});
		}
		}
	}
});
