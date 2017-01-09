import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('product-detail', 'Integration | Component | product detail', {
  integration: true
});

test('it renders', function(assert) {
  this.set('model', {
    name: "emberJs",
    description: "testing is easy"
  });
  this.render(hbs`{{product-detail model=model}}`);

  assert.equal(this.$('.panel-body h2').text().trim(), 'emberJs');
  assert.equal(this.$('.panel-body p').text().trim(), 'testing is easy');
});


