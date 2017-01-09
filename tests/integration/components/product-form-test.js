import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('product-form', 'Integration | Component | product form', {
  integration: true
});

test('it renders', function(assert) {
  assert.expect(2);
  this.set('model', {
    name: "xmas Tree",
    description: "It is green still!"
  });
  this.render(hbs`{{product-form model=model}}`);

  assert.equal(this.$('.form-horizontal .name').val(), 'xmas Tree');
  assert.equal(this.$('.form-horizontal .description').val(), 'It is green still!');
});
