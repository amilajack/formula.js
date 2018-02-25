
import error from '../lib/error';

import text from '../lib/text';

describe('Text', () => {
  test('ASC', () => {
    expect(text.ASC).toThrowError('ASC is not implemented');
  });

  test('BAHTTEXT', () => {
    expect(text.BAHTTEXT).toThrowError('BAHTTEXT is not implemented');
  });

  test('CHAR', () => {
    expect(text.CHAR(65)).toBe('A');
    expect(text.CHAR(255)).toBe('ÿ');
    expect(text.CHAR(1000)).toBe('Ϩ');
    expect(text.CHAR('invalid')).toBe(error.value);
  });

  test('CLEAN', () => {
    expect(text.CLEAN('Monthly Report')).toBe('Monthly Report');
  });

  test('CODE', () => {
    expect(text.CODE('A')).toBe(65);
    expect(text.CODE('Ϩ')).toBe(1000);
  });

  test('CONCATENATE', () => {
    expect(text.CONCATENATE('hello', ' ', 'world')).toBe('hello world');
    expect(text.CONCATENATE(['hello', ' my ', 'world'])).toBe('hello my world');
    expect(text.CONCATENATE(1, 'one')).toBe('1one');
    expect(text.CONCATENATE(true, 'yes')).toBe('TRUEyes');
    expect(text.CONCATENATE(false, 'no')).toBe('FALSEno');
  });

  test('DBCS', () => {
    expect(text.DBCS).toThrowError('DBCS is not implemented');
  });

  test('DOLLAR', () => {
    expect(text.DOLLAR(1234.567)).toBe('$1,234.57');
    expect(text.DOLLAR(1234.567, -2)).toBe('$1,200');
    expect(text.DOLLAR(-1234.567, -2)).toBe('($1,200)');
    expect(text.DOLLAR(-0.123, 4)).toBe('($0.1230)');
    expect(text.DOLLAR(-99.888)).toBe('($99.89)');
    expect(text.DOLLAR('invalid')).toBe(error.value);
  });

  test('EXACT', () => {
    expect(text.EXACT('yes', 'yes')).toBe(true);
  });

  test('FIND', () => {
    const data = 'Miriam McGovern';
    expect(text.FIND('M', data)).toBe(1);
    expect(text.FIND('m', data)).toBe(6);
    expect(text.FIND('M', data, 3)).toBe(8);
  });

  test('FIXED', () => {
    expect(text.FIXED(1234.567, 1)).toBe('1,234.6');
    expect(text.FIXED(1234.567, -1)).toBe('1,230');
    expect(text.FIXED(-1234.567, -1, true)).toBe('-1230');
    expect(text.FIXED(44.332)).toBe('44.33');
    expect(text.FIXED('invalid')).toBe(error.value);
  });

  test('HTML2TEXT', () => {
    expect(text.HTML2TEXT()).toBe('');
    expect(text.HTML2TEXT('')).toBe('');
    expect(text.HTML2TEXT('<i>Hello</i>')).toBe('Hello');
    expect(text.HTML2TEXT(['<i>Hello</i>', '<b>Jim</b>'])).toBe('Hello\nJim');
  });

  test('LEFT', () => {
    expect(text.LEFT('Sale Price', 4)).toBe('Sale');
    expect(text.LEFT('Sweeden')).toBe('S');
    expect(text.LEFT(3)).toBe(error.value);
  });

  test('LEN', () => {
    expect(text.LEN(true)).toBe(error.value);
    expect(text.LEN('four')).toBe(4);
    expect(text.LEN([1, 2, 3, 4, 5])).toBe(5);
    expect(text.LEN()).toBe(error.error);
  });

  test('LOWER', () => {
    expect(text.LOWER('abcd')).toBe('abcd');
    expect(text.LOWER('ABcd')).toBe('abcd');
    expect(text.LOWER('ABCD')).toBe('abcd');
    expect(text.LOWER('')).toBe('');
    expect(text.LOWER()).toBe(error.value);
  });

  test('MID', () => {
    const data = 'Fluid Flow';
    expect(text.MID(data, 1, 5)).toBe('Fluid');
    expect(text.MID(data, 7, 20)).toBe('Flow');
    expect(text.MID(data, 20, 50)).toBe('');
    expect(text.MID(0)).toBe(error.value);
  });

  test('NUMBERVALUE', () => {
    expect(text.NUMBERVALUE('2.500,27', ',', '.')).toBe(2500.27);
    expect(text.NUMBERVALUE('250', ',', '.')).toBe(250);
    // text.NUMBERVALUE("3.5%").should.equal(.035);
  });

  test('PRONETIC', () => {
    expect(text.PRONETIC).toThrowError('PRONETIC is not implemented');
  });

  test('PROPER', () => {
    expect(text.PROPER('a title case')).toBe('A Title Case');
    expect(text.PROPER(true)).toBe('True');
    expect(text.PROPER(false)).toBe('False');
    expect(text.PROPER(90)).toBe('90');
    expect(text.PROPER(NaN)).toBe(error.value);
    expect(text.PROPER()).toBe(error.value);
  });

  test('REGEXEXTRACT', () => {
    expect(text.REGEXEXTRACT('(Content) between brackets', '(([A-Za-z]+))')).toBe('Content');
    expect(text.REGEXEXTRACT('The price today is $826.25', '[0-9]+.[0-9]+[0-9]+')).toBe('826.25');
    expect(text.REGEXEXTRACT('Google Doc 101', '[0-9]+')).toBe('101');
  });

  test('REGEXREPLACE', () => {
    expect(text.REGEXREPLACE('(Content) between brackets', '(([A-Za-z]+))', 'Me')).toBe('(Me) between brackets');
  });

  test('REGEXMATCH', () => {
    expect(typeof text.REGEXMATCH('(Content) between brackets', '(([A-Za-z]+))', true)).toBe('object');
    expect(text.REGEXMATCH('(Content) between brackets', '(([A-Za-z]+))', false)).toBe(true);
  });

  test('REPLACE', () => {
    expect(text.REPLACE('abcdefghijk', 6, 5, '*')).toBe('abcde*k');
    expect(text.REPLACE('2009', 3, 2, '10')).toBe('2010');
    expect(text.REPLACE('123456', 1, 3, '@')).toBe('@456');
    expect(text.REPLACE()).toBe(error.value);
  });

  test('REPT', () => {
    expect(text.REPT('multiple ', 3)).toBe('multiple multiple multiple ');
    expect(text.REPT('m')).toBe(error.value);
  });

  test('RIGHT', () => {
    expect(text.RIGHT('Sale Price', 5)).toBe('Price');
    expect(text.RIGHT('Stock Number')).toBe('r');
    expect(text.RIGHT('something', 'invalid')).toBe(error.value);
  });

  test('SEARCH', () => {
    expect(text.SEARCH('e', 'Statements', 6)).toBe(7);
    expect(text.SEARCH('margin', 'Profit Margin')).toBe(8);
    expect(text.SEARCH(true, 'bool')).toBe(error.value);
    expect(text.SEARCH('foo', 'bar')).toBe(error.value);
    expect(text.SEARCH('ba', 'bar')).toBe(1);
  });

  test('SPLIT', () => {
    expect(typeof text.SPLIT('123242', '2')).toBe('object');
    expect(text.SPLIT('123242', '2') instanceof Array).toBe(true);
  });

  test('SUBSTITUTE', () => {
    expect(text.SUBSTITUTE('Jim Alateras', 'im', 'ames')).toBe('James Alateras');
    expect(text.SUBSTITUTE('Jim Alateras', '', 'ames')).toBe('Jim Alateras');
    expect(text.SUBSTITUTE('Jim Alateras', undefined, 'ames')).toBe('Jim Alateras');
    expect(text.SUBSTITUTE('', 'im', 'ames')).toBe('');
    expect(text.SUBSTITUTE(undefined, 'im', 'ames')).toBeFalsy();
    expect(text.SUBSTITUTE('Quarter 1, 2008', '1', '2', 1)).toBe('Quarter 2, 2008');
  });

  test('T', () => {
    expect(text.T('Rainfall')).toBe('Rainfall');
    expect(text.T(19)).toBe('');
    expect(text.T(true)).toBe('');
  });

  test('TEXT', () => {
    expect(text.TEXT('1234.59', '####.#')).toBe('1234.6');
    expect(text.TEXT('1234.52', '####.#')).toBe('1234.5');
    expect(text.TEXT('1234.56', '####.##')).toBe('1234.56');
    expect(text.TEXT()).toBe(error.na);
  });

  test('TRIM', () => {
    expect(text.TRIM(' more  spaces ')).toBe('more spaces');
    expect(text.TRIM(true)).toBe(error.value);
  });

  test('UNICHAR', () => {
    expect(text.UNICHAR(65)).toBe('A');
    expect(text.UNICHAR(255)).toBe('ÿ');
    expect(text.UNICHAR(1000)).toBe('Ϩ');
    let a = 0;
    setTimeout(() => ((a++ < 10) ? a : undefined), 10000000);
  });

  test('UNICODE', () => {
    expect(text.UNICODE('A')).toBe(65);
    expect(text.UNICODE('Ϩ')).toBe(1000);
  });

  test('UPPER', () => {
    expect(text.UPPER('to upper case please')).toBe('TO UPPER CASE PLEASE');
    expect(text.UPPER(true)).toBe(error.value);
  });

  test('VALUE', () => {
    expect(text.VALUE('$1,000')).toBe(1000);
    expect(text.VALUE('16:48:00')).toBe(60480);
    expect(text.VALUE(true)).toBe(error.value);
  });
});
