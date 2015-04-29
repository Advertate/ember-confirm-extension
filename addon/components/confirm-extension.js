import Ember from 'ember';
import layout from '../templates/components/confirm-extension';

/* global $ */

export default Ember.Component.extend({
  layout: layout,

  tagName: 'span',
  classNames: ['ece-container'],

  _setupClickHandler: function () {
    var closer = _clickHandlerFor(this);
    this.set('_closer', closer);
    $(document).on('click', closer);
  },
  _teardownClickHandlerIfNeeded: function () {
    var closer = this.get('_closer');
    if (closer) {
      $(document).off('click', closer);
      this.set('_closer', null);
    }
  },
  _autoCloser: Ember.observer('confirmMode', function () {
    if (this.get('confirmMode')) {
      this._setupClickHandler();
    } else {
      this._teardownClickHandlerIfNeeded();
    }
  }),
  _beforeRemove: Ember.on('willDestroyElement', function () {
    this._teardownClickHandlerIfNeeded();
  }),
  _afterInsert: Ember.on('didInsertElement', function () {
    if (this.get('confirmMode')) {
      this._setupClickHandler();
    }
  }),

  actions: {
    click: function() {
      this.toggleProperty('confirmMode');
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

function _contains(ancestor, child) {
  return ancestor.has(child).length !== 0;
}

function _clickHandlerFor(self) {
  return function (e) {
    if (!_contains(self.$(), e.target)) {
      Ember.run(self, 'set', 'confirmMode', false);
    }
  };
}
