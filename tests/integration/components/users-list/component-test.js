import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';
import Ember from 'ember';

const mockedUser = Ember.Object.create({name: "Andrew", age: 140});

moduleForComponent('users-list', 'Integration | Component | users list', {
  integration: true
});

test('it renders', function(assert) {
  this.set('model', mockedUser)
  // // Set any properties with this.set('myProperty', 'value');
  // // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{users-list users=model}}`);

  assert.equal(this.$().text().trim(), '');

  // // Template block usage:
  this.render(hbs`
  //   {{#users-list users=model as |usr|}}
  //     {{usr.header "Hi"}}
  //   {{/users-list}}
  // `);

  assert.equal(this.$().text().trim(), "");
});
