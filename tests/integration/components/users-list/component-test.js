import { test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';
import moduleForComponent from 'high-order/tests/helpers/module-for-component';


moduleForComponent('users-list', 'Integration | Component | users list', {
  integration: true,
});

test('it renders', function(assert) {
  let mockedUser = server.create('user', { name: 'Andrew' })
  this.set('model', [mockedUser])

  this.render(hbs`{{#users-list users=model as |usr|}}
    {{usr.details.name}}
  {{/users-list}}`);

  assert.equal(this.$('').text().trim(), 'Andrew');
});
