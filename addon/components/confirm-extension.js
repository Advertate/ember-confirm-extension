import Ember from 'ember';
import layout from '../templates/components/confirm-extension';

export default Ember.Component.extend({
  layout: layout,

  actions: {
    click: function() {
      this.set('confirmMode', !this.get('confirmMode'));
    },
    confirm: function() {
      this.set('confirmMode', false);
      this.sendAction('confirmAction');
    },
    decline: function() {
      this.set('confirmMode', false);
    }
  }
});
