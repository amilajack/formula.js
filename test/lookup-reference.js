
import error from '../lib/error';

import lookup from '../lib/lookup-reference';

describe('Lookup Reference', () => {
  test('MATCH', () => {
    expect(lookup.MATCH()).toBe(error.na);
    expect(lookup.MATCH(1)).toBe(error.na);
    expect(lookup.MATCH(1, [0, 1, 2, 3, 4, 100, 7])).toBe(2);
    expect(lookup.MATCH(4, [0, 1, 2, 3, 4, 100, 7], 1)).toBe(5);
    expect(lookup.MATCH(4, [0, 1, 2, 3, 4, 100, 7], 0)).toBe(5);
    expect(lookup.MATCH(4, [0, 1, 2, 3, 4, 100, 7], -1)).toBe(5);
    expect(lookup.MATCH(5, [0, 1, 2, 3, 4, 100, 7], 1)).toBe(5);
    expect(lookup.MATCH(5, [0, 1, 2, 3, 4, 100, 7], 0)).toBe(error.na);
    expect(lookup.MATCH(5, [0, 1, 2, 3, 4, 100, 7], -1)).toBe(7);
    expect(lookup.MATCH(4, [0, 1, 2, 3, 4, 100, 7], 2)).toBe(error.na);
    expect(lookup.MATCH(4, [0, 1, 2, 3, 4, 100, 7], -2)).toBe(error.na);
    expect(lookup.MATCH('jima', ['jima', 'jimb', 'jimc', 'bernie'], 0)).toBe(1);
    expect(lookup.MATCH('j*b', ['jima', 'jimb', 'jimc', 'bernie'], 0)).toBe(2);
    expect(lookup.MATCH('j?b', ['jima', 'jimb', 'jimc', 'bernie'], 0)).toBe(error.na);
    expect(lookup.MATCH('j??b', ['jima', 'jimb', 'jimc', 'bernie'], 0)).toBe(2);
    expect(lookup.MATCH('j???b', ['jima', 'jimb', 'jimc', 'bernie'], 0)).toBe(error.na);
    expect(lookup.MATCH('j???', ['jima', 'jimb', 'jimc', 'bernie'], 0)).toBe(1);
    expect(lookup.MATCH('jimc', ['jima', 'jimb', 'jimc', 'bernie'], 0)).toBe(3);
    expect(lookup.MATCH('jimc', ['jima', 'jimb', 'jimd', 'bernie'], -1)).toBe(3);
    expect(lookup.MATCH('jimc', ['jima', 'jimb', 'jimd', 'bernie'], 1)).toBe(2);
  });
});
