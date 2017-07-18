import Model from 'ember-data/model';
import attr from 'ember-data/attr';
import Ember from 'ember';
const { computed } = Ember

export default Model.extend({
  name: attr('string'),
  age: attr('number'),


  nameWithAge: computed('name', 'age', function() {
    return `${this.get('name')} is ${this.get('age')} years old`;
  })
});
