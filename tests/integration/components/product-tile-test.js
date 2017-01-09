import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('product-tile', 'Integration | Component | product tile', {
  integration: true
});

test('it renders', function(assert) {
  assert.expect(1);
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });
  this.set('model',{
    name: "xmas Tree",
    description: "Oh German word for xmas tree"
  });

  this.render(hbs`{{product-tile model=model}}`);

  

  assert.equal(this.$('.caption h3').text().trim(), 'xmas Tree');
  // assert.equal(this.$().text().trim(), 'template block text');
});
