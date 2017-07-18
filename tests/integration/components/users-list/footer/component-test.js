import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';


moduleForComponent('users-list/footer', 'Integration | Component | users list footer', {
  integration: true
});

test('it renders without text', function(assert) {
  // // Set any properties with this.set('myProperty', 'value');
  // // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{users-list/footer}}`);

  assert.equal(this.$().text().trim(), '');
});

test('it renders with text', function(assert) {
    this.render(hbs`{{#users-list/footer}}
        Hello from component
        {{/users-list/footer}}
    `);

    assert.equal(this.$().text().trim(), 'Hello from component')
});
