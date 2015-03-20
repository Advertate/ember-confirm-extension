import {
  moduleForComponent,
  test
}
from 'ember-qunit';
import Ember from 'ember';

moduleForComponent('confirm-button');

test('label of button is the components label property', function(assert) {
  assert.expect(1);

  var component = this.subject({
    label: 'foobar'
  });

  var $component = this.render();
  assert.equal($component.find('.ecb-button').text().trim(), 'foobar');
});

test('click on button changes button label to questionText property', function(assert) {
  assert.expect(1);

  var component = this.subject({
    label: 'foobar',
    questionText: 'really?'
  });

  var $component = this.render();
  $component.find('button').click();
  assert.equal($component.find('.ecb-question').text().trim(), 'really?');
});

test('click on button adds a confirm and discard button', function(assert) {
  assert.expect(2);

  var component = this.subject({
    label: 'foobar',
    questionText: 'really?',
    confirmText: 'yes',
    declineText: 'no'
  });

  var $component = this.render();
  $component.find('.ecb-button').click();
  assert.equal($component.find('.ecb-confirm').text().trim(), 'yes');
  assert.equal($component.find('.ecb-decline').text().trim(), 'no');
});

test('click on decline leaves the confirm mode', function(assert) {
  assert.expect(2);

  var component = this.subject({
    confirmMode: true,
    label: 'foobar'
  });

  var $component = this.render();
  $component.find('.ecb-decline').click();
  assert.equal($component.find('.ecb-button').text().trim(), 'foobar');
  assert.equal(component.get('confirmMode'), false);
});

test('click on confirm triggers the confirmAction and leaves confirmMode', function(assert) {
  assert.expect(3);

  var targetObject = {
    externalAction: function() {
      assert.ok(true);
    }
  };
  var component = this.subject({
    confirmMode: true,
    label: 'foobar',
    confirmAction: 'externalAction',
    targetObject: targetObject
  });

  var $component = this.render();
  $component.find('.ecb-confirm').click();
  assert.equal($component.find('.ecb-button').text().trim(), 'foobar');
  assert.equal(component.get('confirmMode'), false);
});
