
import error from '../lib/error';

import logical from '../lib/logical';

describe('Logical', () => {
  test('AND', () => {
    expect(logical.AND(true, true)).toBe(true);
    expect(logical.AND(true, false)).toBe(false);
  });

  test('CHOOSE', () => {
    expect(logical.CHOOSE()).toBe(error.na);
    expect(logical.CHOOSE(1)).toBe(error.na);
    expect(logical.CHOOSE(1, 'jima')).toBe('jima');
    expect(logical.CHOOSE(3, 'jima', 'jimb', 'jimc')).toBe('jimc');
    expect(logical.CHOOSE(2, 'jima')).toBe(error.value);
    expect(logical.CHOOSE(255, 'jima')).toBe(error.value);
  });

  test('FALSE', () => {
    expect(logical.toBe(false)).toBe(false);
  });

  test('IF', () => {
    expect(logical.IF(true, 1, 2)).toBe(1);
    expect(logical.IF(false, 1, 2)).toBe(2);
  });

  test('IFERROR', () => {
    expect(logical.IFERROR(1, 2)).toBe(1);
    expect(logical.IFERROR(error.value, 2)).toBe(2);
  });

  test('IFNA', () => {
    expect(logical.IFNA(1, 2)).toBe(1);
    expect(logical.IFNA(error.na, 2)).toBe(2);
  });

  test('NOT', () => {
    expect(logical.NOT(true)).toBe(false);
    expect(logical.NOT(false)).toBe(true);
  });

  test('OR', () => {
    expect(logical.OR(true)).toBe(true);
    expect(logical.OR(false)).toBe(false);
    expect(logical.OR(true, false)).toBe(true);
  });

  test('TRUE', () => {
    expect(logical.toBe(true)).toBe(true);
  });

  test('XOR', () => {
    expect(logical.XOR(false, false)).toBe(false);
    expect(logical.XOR(false, true)).toBe(true);
    expect(logical.XOR(true, false)).toBe(true);
    expect(logical.XOR(true, true)).toBe(false);
  });

  test('SWITCH', () => {
    expect(logical.SWITCH()).toBeFalsy();
    expect(logical.SWITCH(7)).toBeFalsy();
    expect(logical.SWITCH(7, 'Default Expression')).toBe('Default Expression');
    expect(logical.SWITCH(7, 9, 'Nine')).toBeFalsy();
    expect(logical.SWITCH(7, 9, 'Nine', 7, 'Seven')).toBe('Seven');
    expect(logical.SWITCH(7, 9, 'Nine', 7, 'Seven')).toBe('Seven');
    expect(logical.SWITCH(8, 9, 'Nine', 7, 'Seven', 'Eight')).toBe('Eight');
    expect(logical.SWITCH(10, 9, 'Nine', 7, 'Seven', 8, 'Eight')).toBeFalsy();
  });
});
