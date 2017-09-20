import DS from 'ember-data';
const { attr } = DS;

let todo = DS.Model.extend({
	title: attr('string'),
	isCompleted: attr('boolean')
});

todo.reopen({
	isEdit:false
});

export default todo;