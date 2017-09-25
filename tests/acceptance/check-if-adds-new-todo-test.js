import { test } from 'qunit';
import moduleForAcceptance from 'todo-app2/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | check if adds new todo');

test('visiting /check-if-adds-new-todo', function (assert) {
	visit('/');
	fillIn('input#new-todo', 'New Todo');
	
	keyEvent('#new-todo', 'keyup', 13);
	andThen(function () {
		assert.equal(find('ul.todo-list li:first .view label.myLabel').text(), 'New Todo');
		
	});
});

test('check if delete button works', function (assert) {
	visit('/');

	var todoCount=1

	click('button.destroy');
	andThen(function () {
		assert.equal(find('ul.todo-list li .view label.myLabel').length,todoCount-1);
	});

});

test('check if completed check box works',function(assert){
		visit('/');
		click('input.myCheckbox');
		andThen(function(){
			assert.equal(find('ul#todo-list li.completed').length, 1);
		});
});

test('check if select all works',function(assert){
		visit('/');
		var totalArr = find('ul.todo-list li .view label.myLabel').length;
		click('input#toggle-all');
andThen(function(){
	assert.equal(find('ul#todo-list li.completed').length,totalArr);
});
		

});