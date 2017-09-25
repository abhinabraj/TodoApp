import { test } from 'qunit';
import moduleForAcceptance from 'todo-app2/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | is page loaded');

test('visiting /', function(assert) {
  visit('/');

  andThen(function() {
    assert.equal(currentURL(), '/todos');
  });
});

test('visiting /active', function(assert) {
  visit('/active');
  
  andThen(function() {
    assert.equal(currentURL(), '/active');
  });
});

test('visiting /completed', function(assert) {
  visit('/completed');
  
  andThen(function() {
    assert.equal(currentURL(), '/completed');
  });
});