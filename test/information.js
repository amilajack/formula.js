
import error from '../lib/error';

import information from '../lib/information';

describe('Information', () => {
  // TODO
  test('CELL', () => {
    expect(information.CELL).toThrowError('CELL is not implemented');
  });

  test('ERROR.TYPE', () => {
    expect(information.ERROR.TYPE(error.nil)).toBe(1);
    expect(information.ERROR.TYPE(error.div0)).toBe(2);
    expect(information.ERROR.TYPE(error.value)).toBe(3);
    expect(information.ERROR.TYPE(error.ref)).toBe(4);
    expect(information.ERROR.TYPE(error.name)).toBe(5);
    expect(information.ERROR.TYPE(error.num)).toBe(6);
    expect(information.ERROR.TYPE(error.na)).toBe(7);
    expect(information.ERROR.TYPE(error.data)).toBe(8);
    expect(information.ERROR.TYPE(1)).toBe(error.na);
  });

  // TODO
  test('INFO', () => {
    expect(information.INFO).toThrowError('INFO is not implemented');
  });

  test('ISBINARY', () => {
    expect(information.ISBINARY(1)).toBe(true);
    expect(information.ISBINARY(0)).toBe(true);
    expect(information.ISBINARY(1000)).toBe(true);
    expect(information.ISBINARY('1')).toBe(true);
    expect(information.ISBINARY('0')).toBe(true);
    expect(information.ISBINARY('1000')).toBe(true);
    expect(information.ISBINARY('invalid')).toBe(false);
  });

  test('ISBLANK', () => {
    expect(information.ISBLANK(null)).toBe(true);
    expect(information.ISBLANK(1)).toBe(false);
  });

  test('ISERR', () => {
    expect(information.ISERR(1)).toBe(false);
    expect(information.ISERR(error.na)).toBe(false);
    expect(information.ISERR(error.value)).toBe(true);
    expect(information.ISERR(NaN)).toBe(true);
    expect(information.ISERR(1 / 0)).toBe(true);
  });

  test('ISERROR', () => {
    expect(information.ISERROR(1)).toBe(false);
    expect(information.ISERROR(error.na)).toBe(true);
    expect(information.ISERROR(error.value)).toBe(true);
  });

  test('ISEVEN', () => {
    expect(information.ISEVEN(-1)).toBe(false);
    expect(information.ISEVEN(2.5)).toBe(true);
    expect(information.ISEVEN(5)).toBe(false);
    expect(information.ISEVEN(0)).toBe(true);
  });

  // TODO
  test('ISFORMULA', () => {
    expect(information.ISFORMULA).toThrowError('ISFORMULA is not implemented');
  });

  test('ISLOGICAL', () => {
    expect(information.ISLOGICAL(true)).toBe(true);
    expect(information.ISLOGICAL(false)).toBe(true);
    expect(information.ISLOGICAL(1)).toBe(false);
    expect(information.ISLOGICAL('true')).toBe(false);
  });

  test('ISNA', () => {
    expect(information.ISNA(error.na)).toBe(true);
    expect(information.ISNA(1)).toBe(false);
  });

  test('ISNONTEXT', () => {
    expect(information.ISNONTEXT(1)).toBe(true);
    expect(information.ISNONTEXT(true)).toBe(true);
    expect(information.ISNONTEXT('a')).toBe(false);
  });

  test('ISNUMBER', () => {
    expect(information.ISNUMBER(1)).toBe(true);
    expect(information.ISNUMBER('1')).toBe(false);
    expect(information.ISNUMBER(1 / 0)).toBe(false);
  });

  test('ISODD', () => {
    expect(information.ISODD(-1)).toBe(true);
    expect(information.ISODD(5)).toBe(true);
    expect(information.ISODD(2.5)).toBe(false);
  });

  // TODO
  test('ISREF', () => {
    expect(information.ISREF).toThrowError('ISREF is not implemented');
  });

  test('ISTEXT', () => {
    expect(information.ISTEXT('a')).toBe(true);
    expect(information.ISTEXT(1)).toBe(false);
    expect(information.ISTEXT(true)).toBe(false);
  });

  test('N', () => {
    expect(information.N(1)).toBe(1);
    expect(information.N(new Date(0))).toBe((new Date(0)).getTime());
    expect(information.N(true)).toBe(1);
    expect(information.N(false)).toBe(0);
    expect(information.N(error.na)).toBe(error.na);
    expect(information.N('a')).toBe(0);
  });

  test('NA', () => {
    expect(information.NA()).toBe(error.na);
  });

  // TODO
  test('SHEET', () => {
    expect(information.SHEET).toThrowError('SHEET is not implemented');
  });

  // TODO
  test('SHEETS', () => {
    expect(information.SHEETS).toThrowError('SHEETS is not implemented');
  });

  test('TYPE', () => {
    expect(information.TYPE(1)).toBe(1);
    expect(information.TYPE('a')).toBe(2);
    expect(information.TYPE(true)).toBe(4);
    expect(information.TYPE(error.na)).toBe(16);
    expect(information.TYPE([1])).toBe(64);
  });
});
