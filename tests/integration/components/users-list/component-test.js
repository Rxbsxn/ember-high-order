import { test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';
import moduleForComponent from 'high-order/tests/helpers/module-for-component';
import Ember from 'ember';

const { getOwner } = Ember;

moduleForComponent('users-list', 'Integration | Component | users list', {
  integration: true,
  beforeEach() {
    let mockedUser = server.create('user', {name: "Andrew"})
    let store = getOwner(this).lookup('service:store');
    let user = store.createRecord('user', mockedUser.attrs);
    this.set('model', [user])
  }
});




test('it renders', function(assert) {
  this.render(hbs`{{#users-list users=model as |user|}}
  {{user.header "Hi"}}
  <div data-test-name>{{user.details.name}}</div>
    {{#user.footer}}
      Hello from block
    {{/user.footer}}
  {{/users-list}}`);

  assert.equal(this.$('[data-test-name]').text().trim(), 'Andrew');
  assert.equal(this.$('[data-test-header]').text().trim(), 'Hi')
  assert.equal(this.$('[data-test-footer]').text().trim(), 'Hello from block')
});
