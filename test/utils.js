/* global suite, test */
import utils from '../lib/utils';

import should from 'should';
import error from '../lib/error';

suite('Utils', () => {
  test('flatten', () => {
    should.deepEqual(utils.flatten([
      [1, 2],
      [3, 4]
    ]), [1, 2, 3, 4]);

    should.deepEqual(utils.flatten([
      1, 2,
      [3, 4],
      [[5, 6]]
    ]), [1, 2, 3, 4, 5, 6]);
  });

  test('argsToArray', () => {
    (function () {
      should.deepEqual(utils.argsToArray(arguments), [1, 2, 3]);
    }(1, 2, 3));
  });

  test('cleanFloat', () => {
    utils.cleanFloat(3.0999999999999996).should.equal(3.1);
  });

  test('parseBool', () => {
    utils.parseBool(true).should.equal(true);
    utils.parseBool(0).should.equal(false);
    utils.parseBool(1).should.equal(true);
    utils.parseBool('TRUE').should.equal(true);
    utils.parseBool('FALSE').should.equal(false);
    utils.parseBool(new Date()).should.equal(true);
    utils.parseBool(NaN).should.equal(true);
    const err = new Error();
    utils.parseBool(err).should.equal(err);
  });

  test('parseNumberArray', () => {
    utils.parseNumberArray().should.equal(error.value);
  });

  test('parseMatrix', () => {
    utils.parseMatrix().should.equal(error.value);
  });

  test('parseDateArray', () => {
    utils.parseDateArray(['01/jan/2009', 'invalid']).should.equal(error.value);
  });

  test('arrayValuesToNumbers', () => {
    should.deepEqual(utils.arrayValuesToNumbers(['1.4']), [1.4]);
    should.deepEqual(utils.arrayValuesToNumbers(['not convertible']), [0]);
  });

  test('rest', () => {
    utils.rest([1, 2, 3], 2).length.should.equal(1);
    utils.rest('abc', 2).length.should.equal(1);
    utils.rest(true, 2).should.equal(true);
  });

  test('initial', () => {
    utils.initial([1, 2, 3], 1).length.should.equal(2);
    utils.initial('abc', 2).length.should.equal(1);
    utils.initial(true, 1).should.equal(true);
  });
});
