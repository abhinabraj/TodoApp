import Ember from 'ember';

export default Ember.Controller.extend({
	isChecked : false,

	allChecked:Ember.computed('model.@each.isCompleted',{
		get(){
			var todos = this.get('model');
			return todos.get('length') && todos.isEvery('isCompleted');
		},
		set(key, value){
			this.get('model').setEach('isCompleted',value);
			this.get('model').save();
			return value;
		}
	}),

	todoCount: Ember.computed('model.@each.isCompleted', function() {
		let total = 0;
		let model = this.get('model');
		model.forEach((item) => {
			if(!item.get('isCompleted')) ++total;
		});
		
		return total;
	}),

	actions:{
		createTodo: function(){
			//var controller = this.controller;
			//var title = controller.get('newTitle');
			var title = this.get('newTitle');
			if(title != '' && title != undefined){
				var todo = this.store.createRecord('todo', {
                title: title,
                isCompleted: false
            });

           this.set('newTitle', '');

           todo.save();
       }else{
       	alert('enter something');
       }

			

		},
	updateTodo(todo) {	
		
			todo.save();
			todo.set('isEdit', false);
		},
		completedTodo(todo){
			todo.set('isCompleted', !todo.get('isCompleted'));
			todo.save();
			
		},
		selectAll:function(model){
			if (!this.get('isChecked')) {
				model.forEach((item, key) => {
					item.set('isCompleted', true);
				});
			} else {
				model.forEach((item)=> {
					item.set('isCompleted', false);
				});
			}
		},

		toggleCheck(status) {
			this.set('allChecked', status);
		}

	}
});
