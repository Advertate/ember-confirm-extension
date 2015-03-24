import {
  moduleForComponent,
  test
}
from 'ember-qunit';
import Ember from 'ember';

moduleForComponent('confirm-extension');

test('click on yielded template shows a bubble with a confrim and a decline option', function(assert) {
  assert.expect(4);

  var component = this.subject({
    questionText: 'really?',
    confirmText: 'yes',
    declineText: 'no'
  });

  var $component = this.render();
  assert.equal($component.find('.ece-bubble').length, 0);
  $component.find('span').click();
  assert.equal($component.find('.ece-confirm').text().trim(), 'yes');
  assert.equal($component.find('.ece-decline').text().trim(), 'no');
  assert.equal($component.find('.ece-bubble').length, 1);
});

test('click on decline leaves the confirm mode and hides the bubble', function(assert) {
  assert.expect(3);

  var component = this.subject({
    confirmMode: true
  });

  var $component = this.render();
  assert.equal($component.find('.ece-bubble').length, 1);
  $component.find('.ece-decline').click();
  assert.equal(component.get('confirmMode'), false);
  assert.equal($component.find('.ece-bubble').length, 0);
});

test('click on the yielded template leaves the confirm mode and hides the bubble', function(assert) {
  assert.expect(3);

  var component = this.subject({
    confirmMode: true
  });

  var $component = this.render();
  assert.equal($component.find('.ece-bubble').length, 1);
  $component.find('span')[0].click();
  assert.equal(component.get('confirmMode'), false);
  assert.equal($component.find('.ece-bubble').length, 0);
});

test('click on confirm triggers the confirmAction, leaves confirmMode and hides bubble', function(assert) {
  assert.expect(4);

  var targetObject = {
    externalAction: function() {
      assert.ok(true);
    }
  };
  var component = this.subject({
    confirmMode: true,
    confirmAction: 'externalAction',
    targetObject: targetObject
  });

  var $component = this.render();
  assert.equal($component.find('.ece-bubble').length, 1);
  $component.find('.ece-confirm').click();
  assert.equal(component.get('confirmMode'), false);
  assert.equal($component.find('.ece-bubble').length, 0);
});
