import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';


moduleForComponent('users-list/header', 'Integration | Component | users list header', {
  integration: true
});

test('it renders without text', function(assert) {
  // // Set any properties with this.set('myProperty', 'value');
  // // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{users-list/header}}`);

  assert.equal(this.$().text().trim(), '');
});

test('it renders with text', function(assert) {
    this.render(hbs`{{users-list/header "Hello"}}`);

    assert.equal(this.$().text().trim(), 'Hello')
});
