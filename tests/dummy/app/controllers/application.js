
import Ember from 'ember';

/* global alert */

export default Ember.Controller.extend({
  actions: {
    boom: function () {
      alert('BOOM');
    }
  }
});
