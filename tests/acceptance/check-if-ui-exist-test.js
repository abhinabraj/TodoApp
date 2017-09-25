import { test } from 'qunit';
import moduleForAcceptance from 'todo-app2/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | check if ui exist');

test('Check if create input exist', function(assert) {
  visit('/todos');

  andThen(function() {
    assert.equal(currentURL(), '/todos');
    assert.equal(find('#header input').length,1,"Check if create input exist");
  });

   andThen(function(){
  	visit('/active');

	 andThen(function() {
	     assert.equal(currentURL(), '/active');
	     assert.equal(find('#header input').length,1,"Check if create input exist")
	 });
   })

   andThen(function(){
   	visit('/completed');

	andThen(function() {
	    assert.equal(currentURL(), '/completed');
	    assert.equal(find('#header input').length,1,"Check if create input exist");
	});
  })

});
