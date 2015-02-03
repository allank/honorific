var test = require('tape');
var lib = require('../index');

test('lib', function(t) {
  t.plan(1);
  t.equal(typeof lib.prefixes, 'object');
});

test('prefixes', function(t) {
  t.plan(2);

  t.equal(typeof lib.prefixes, 'object');
  t.true(lib.prefixes.length > 0);
});

test('suffixes', function(t) {
  t.plan(2);

  t.equal(typeof lib.suffixes, 'object');
  t.true(lib.suffixes.length > 0);
});
