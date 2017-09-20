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
		completedTodo(todo){
			todo.set('isCompleted', !todo.get('isCompleted'));
			todo.save();
			
		},
		clearCompleted:function(model){
			model.forEach((item) => {
			if(item.get('isCompleted')) {
				item.destroyRecord();
			}
		});
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
