import { moduleForModel, test } from 'ember-qunit';
import Ember from 'ember';
moduleForModel('user', 'Unit | Model | user', {
});

test('should return correct compute', function(assert) {
  const userModel = this.subject();
  Ember.run(()=> {
    userModel.set('name', 'Andrew');
    userModel.set('age', 12);
  })

  assert.equal(userModel.get('nameWithAge'), 'Andrew is 12 years old')
});
