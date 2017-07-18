import { test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';
import moduleForComponent from 'high-order/tests/helpers/module-for-component';
import Ember from 'ember';

const { getOwner } = Ember;

moduleForComponent('users-list', 'Integration | Component | users list', {
  integration: true,
  // beforeEach() {
  //   let mockedUser = server.create('user', {name: "Andrew"})
  //   let store = getOwner(this).lookup('service:store');
  //   let user = store.createRecord('user', mockedUser.attrs);
  //   return this.set('model', [user])
  // }
});




test('it renders', function(assert) {
  Ember.run(() => {
  let mockedUser = server.create('user', {name: "Andrew"})
    let store = getOwner(this).lookup('service:store');
    let user = store.createRecord('user', mockedUser.attrs);
    return this.set('model', [user])
  })


  this.render(hbs`{{#users-list users=model as |usr|}}
    {{usr.details.name}}
  {{/users-list}}`);

  assert.equal(this.$('').text().trim(), 'Andrew');
});
