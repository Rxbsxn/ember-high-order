import Ember from 'ember';

const HelloComponent = Ember.Component.extend({});

HelloComponent.reopenClass({
    positionalParams: 'text'
});

export default HelloComponent;
