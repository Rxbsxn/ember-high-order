import Ember from 'ember';
import { moduleForComponent } from 'ember-qunit';
import { startMirage } from 'high-order/initializers/ember-cli-mirage';

const { RSVP: { resolve } } = Ember;

export default function(name, description, options = {}) {
  moduleForComponent(name, description, {
    integration: true,

    beforeEach() {
      this.server = startMirage();

      if (options.beforeEach) {
        return options.beforeEach.apply(this, arguments);
      }
    },
    afterEach() {
      let afterEach = options.afterEach && options.afterEach.apply(this, arguments);
      return resolve(afterEach).then(() => this.server.shutdown());
    }
  });
}
