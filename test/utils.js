
import utils from '../lib/utils';

import error from '../lib/error';

describe('Utils', () => {
  test('flatten', () => {
    expect(utils.flatten([
      [1, 2],
      [3, 4]
    ])).deepEqual([1, 2, 3, 4]);

    expect(utils.flatten([
      1, 2,
      [3, 4],
      [[5, 6]]
    ])).deepEqual([1, 2, 3, 4, 5, 6]);
  });

  test('argsToArray', () => {
    (function () {
      expect(utils.argsToArray(arguments)).deepEqual([1, 2, 3]);
    }(1, 2, 3));
  });

  test('cleanFloat', () => {
    expect(utils.cleanFloat(3.0999999999999996)).toBe(3.1);
  });

  test('parseBool', () => {
    expect(utils.parseBool(true)).toBe(true);
    expect(utils.parseBool(0)).toBe(false);
    expect(utils.parseBool(1)).toBe(true);
    expect(utils.parseBool('TRUE')).toBe(true);
    expect(utils.parseBool('FALSE')).toBe(false);
    expect(utils.parseBool(new Date())).toBe(true);
    expect(utils.parseBool(NaN)).toBe(true);
    const err = new Error();
    expect(utils.parseBool(err)).toBe(err);
  });

  test('parseNumberArray', () => {
    expect(utils.parseNumberArray()).toBe(error.value);
  });

  test('parseMatrix', () => {
    expect(utils.parseMatrix()).toBe(error.value);
  });

  test('parseDateArray', () => {
    expect(utils.parseDateArray(['01/jan/2009', 'invalid'])).toBe(error.value);
  });

  test('arrayValuesToNumbers', () => {
    expect(utils.arrayValuesToNumbers(['1.4'])).deepEqual([1.4]);
    expect(utils.arrayValuesToNumbers(['not convertible'])).deepEqual([0]);
  });

  test('rest', () => {
    expect(utils.rest([1, 2, 3], 2)).toHaveLength(1);
    expect(utils.rest('abc', 2)).toHaveLength(1);
    expect(utils.rest(true, 2)).toBe(true);
  });

  test('initial', () => {
    expect(utils.initial([1, 2, 3], 1)).toHaveLength(2);
    expect(utils.initial('abc', 2)).toHaveLength(1);
    expect(utils.initial(true, 1)).toBe(true);
  });
});
