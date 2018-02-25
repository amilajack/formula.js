
import misc from '../lib/miscellaneous';

describe('Miscellaneous', () => {
  test('NUMERAL', () => {
    expect(misc.NUMERAL(10000, '0,0.0000')).toBe('10,000.0000');
    expect(misc.NUMERAL(10000.23, '0,0')).toBe('10,000');
    expect(misc.NUMERAL(1000.234, '$0,0.00')).toBe('$1,000.23');
    expect(misc.NUMERAL(100, '0b')).toBe('100B');
    expect(misc.NUMERAL(0.974878234, '0.000%')).toBe('97.488%');
  });

  test('UNIQUE', () => {
    expect(misc.UNIQUE(1, 2, 3, 4, 5, 6, 6, 3)).to.containDeep([1, 2, 3, 4, 5, 6]);
    expect(misc.UNIQUE('jima', 'jimb', 'jima', 'jimc')).to.containDeep(['jima', 'jimb', 'jimc']);
    expect(misc.UNIQUE()).toEqual([]);
    expect(misc.UNIQUE([])).toEqual([[]]);
  });

  test('ARGS2ARRAY', () => {
    expect(misc.ARGS2ARRAY(1, 2, 3, 4)).toEqual([1, 2, 3, 4]);
    expect(misc.ARGS2ARRAY('jim', 2, 3.14)).toEqual(['jim', 2, 3.14]);
  });

  test('FLATTEN', () => {
    expect(misc.FLATTEN([1, [2, 3, [4, 5]]])).toEqual([1, 2, 3, 4, 5]);
    expect(misc.FLATTEN([])).toEqual([]);
  });

  test('GETJSON', () => {
    // var type = typeof misc.GETJSON('https://api.github.com/');
    // type.should.equal('object');
  });

  test('JOIN', () => {
    expect(misc.JOIN([1, [2, 3, [4, 5]]])).toEqual('1,2,3,4,5');
    expect(misc.JOIN(['jim', 'alateras'], ' ')).toBe('jim alateras');
  });

  test('NUMBERS', () => {
    expect(misc.NUMBERS([1, [2, 3, [4, 5]]])).toBe(true);
    expect(misc.NUMBERS(['jim', 'alateras'], ' ')).toBe(false);
  });

  test('REFERENCE', () => {
    const ctx = {
      name: {
        firstName: 'Jim',
        lastName: 'Alateras',
        nickNames: [
          'jforce',
          'jimmya',
          'jima'
        ],
        address: {
          number: '5',
          street: 'Kalulu',
          type: 'Rd',
          mobile: '0422344861'
        }
      }
    };

    expect(misc.REFERENCE(ctx, 'name.firstName')).toBe('Jim');
    expect(misc.REFERENCE(ctx, 'name.address')).toHaveProperty('number', '5');
    expect(misc.REFERENCE(ctx, 'name.address.mobile')).toBe('0422344861');
    expect(misc.REFERENCE(ctx, 'name.nickNames[0]')).toBe('jforce');
    expect(misc.REFERENCE(ctx, 'name.address2')).toBeFalsy();
  });
});
