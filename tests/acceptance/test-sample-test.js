import { test } from 'qunit';
import moduleForAcceptance from 'ember-hasiera/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | test sample');

test('visiting /test-sample', function(assert) {
  visit('/test-sample');

  andThen(function() {
    assert.equal(currentURL(), '/test-sample');
  });
});
