import error from '../lib/error';

import database from '../lib/database';

describe('Database', () => {
  test('FINDFIELD', () => {
    expect(database.FINDFIELD([['Tree', 'Apple', 'Pear', 'Cherry', 'Apple', 'Pear', 'Apple'], ['Height', 18, 12, 13, 14, 9, 8], ['Age', 20, 12, 14, 15, 8, 9], ['Yield', 14, 10, 9, 10, 8, 6]], 'Yield')).toBe(3);
    expect(database.FINDFIELD([['Tree', 'Apple', 'Pear', 'Cherry', 'Apple', 'Pear', 'Apple'], ['Height', 18, 12, 13, 14, 9, 8], ['Age', 20, 12, 14, 15, 8, 9], ['Yield', 14, 10, 9, 10, 8, 6]], 'invalid')).toBe(error.value);
  });

  test('DAVERAGE', () => {
    expect(database.DAVERAGE([['Tree', 'Apple', 'Pear', 'Cherry', 'Apple', 'Pear', 'Apple'], ['Height', 18, 12, 13, 14, 9, 8], ['Age', 20, 12, 14, 15, 8, 9], ['Yield', 14, 10, 9, 10, 8, 6]], 'Yield', [['Height', '>10'], ['Age', '>14']])).toBe(12);
    expect(database.DAVERAGE([['Tree', 'Apple', 'Pear', 'Cherry', 'Apple', 'Pear', 'Apple'], ['Height', 18, 12, 13, 14, 9, 8], ['Age', 20, 12, 14, 15, 8, 9], ['Yield', 14, 10, 9, 10, 8, 6]], 'Yield', [['Height', '>10', '>9'], ['Age', '>14']])).toBe(10.75);
    expect(database.DAVERAGE([['Tree', 'Apple', 'Pear', 'Cherry', 'Apple', 'Pear', 'Apple'], ['Height', 18, 12, 13, 14, 9, 8], ['Age', 20, 12, 14, 15, 8, 9], ['Yield', 14, 10, 9, 10, 8, 6]], undefined, [['Height', '>10', '>9'], ['Age', '>14']])).toBe(error.value);
    expect(database.DAVERAGE([['Tree', 'Apple', 'Pear', 'Cherry', 'Apple', 'Pear', 'Apple'], ['Height', 18, 12, 13, 14, 9, 8], ['Age', 20, 12, 14, 15, 8, 9], ['Yield', 14, 10, 9, 10, 8, 6]], 3, [['Height', '>10', '>9'], ['Age', '>14']])).toBe(10.75);
  });

  test('DCOUNT', () => {
    expect(database.DCOUNT([['Tree', 'Apple', 'Pear', 'Cherry', 'Apple', 'Pear', 'Apple'], ['Height', 18, 12, 13, 14, 9, 12], ['Age', 20, 12, 14, 16, 8, 11], ['Yield', 14, 10, 9, 10, 8, 6]], 'Yield', [['Height', '>10'], ['Age', '>14']])).toBe(2);
    expect(database.DCOUNT([['Tree', 'Apple', 'Pear', 'Cherry', 'Apple', 'Pear', 'Apple'], ['Height', 18, 12, 13, 14, 9, 12], ['Age', 20, 12, 14, 16, 8, 11], ['Yield', 14, 10, 9, 10, 8, 6]], undefined, [['Height', '>10'], ['Age', '>14']])).toBe(error.value);
    expect(database.DCOUNT([['Tree', 'Apple', 'Pear', 'Cherry', 'Apple', 'Pear', 'Apple'], ['Height', 18, 12, 13, 14, 9, 12], ['Age', 20, 12, 14, 16, 8, 11], ['Yield', 14, 10, 9, 10, 8, 6]], 3, [['Height', '>10'], ['Age', '>14']])).toBe(2);
  });

  test('DCOUNTA', () => {
    expect(database.DCOUNTA([['Tree', 'Apple', 'Pear', 'Cherry', 'Apple', 'Pear', 'Apple'], ['Height', 18, 12, 13, 14, 9, 12], ['Age', 20, 12, 14, 16, 8, 11], ['Yield', null, 10, 9, 10, 8, 6]], 'Yield', [['Height', '>10'], ['Age', '>14']])).toBe(1);
    expect(database.DCOUNTA([['Tree', 'Apple', 'Pear', 'Cherry', 'Apple', 'Pear', 'Apple'], ['Height', 18, 12, 13, 14, 9, 12], ['Age', 20, 12, 14, 16, 8, 11], ['Yield', null, 10, 9, 10, 8, 6]], undefined, [['Height', '>10'], ['Age', '>14']])).toBe(error.value);
    expect(database.DCOUNTA([['Tree', 'Apple', 'Pear', 'Cherry', 'Apple', 'Pear', 'Apple'], ['Height', 18, 12, 13, 14, 9, 12], ['Age', 20, 12, 14, 16, 8, 11], ['Yield', null, 10, 9, 10, 8, 6]], 3, [['Height', '>10'], ['Age', '>14']])).toBe(1);
  });

  test('DGET', () => {
    expect(database.DGET([['Tree', 'Apple', 'Pear', 'Cherry', 'Apple', 'Pear', 'Apple'], ['Height', 18, 12, 13, 14, 9, 12], ['Age', 20, 12, 14, 16, 8, 11], ['Yield', 14, 10, 9, 10, 8, 6]], 'Yield', [['Height', '>10'], ['Age', '>16']])).toBe(14);
    expect(database.DGET([['Tree', 'Apple', 'Pear', 'Cherry', 'Apple', 'Pear', 'Apple'], ['Height', 18, 12, 13, 14, 9, 12], ['Age', 20, 12, 14, 16, 8, 11], ['Yield', 14, 10, 9, 10, 8, 6]], 'Yield', [['Height', '>10'], ['Age', '>14']])).toBe(error.num);
    expect(database.DGET([['Tree', 'Apple', 'Pear', 'Cherry', 'Apple', 'Pear', 'Apple'], ['Height', 18, 12, 13, 14, 9, 12], ['Age', 20, 12, 14, 16, 8, 11], ['Yield', 14, 10, 9, 10, 8, 6]], 'Yield', [['Height', '>10'], ['Age', '>20']])).toBe(error.value);
    expect(database.DGET([['Tree', 'Apple', 'Pear', 'Cherry', 'Apple', 'Pear', 'Apple'], ['Height', 18, 12, 13, 14, 9, 12], ['Age', 20, 12, 14, 16, 8, 11], ['Yield', 14, 10, 9, 10, 8, 6]], undefined, [['Height', '>10'], ['Age', '>16']])).toBe(error.value);
    expect(database.DGET([['Tree', 'Apple', 'Pear', 'Cherry', 'Apple', 'Pear', 'Apple'], ['Height', 18, 12, 13, 14, 9, 12], ['Age', 20, 12, 14, 16, 8, 11], ['Yield', 14, 10, 9, 10, 8, 6]], 3, [['Height', '>10'], ['Age', '>16']])).toBe(14);
  });

  test('DMAX', () => {
    expect(database.DMAX([['Tree', 'Apple', 'Pear', 'Cherry', 'Apple', 'Pear', 'Apple'], ['Height', 18, 12, 13, 14, 9, 12], ['Age', 20, 12, 14, 16, 8, 11], ['Yield', 14, 10, 9, 10, 8, 6]], 'Yield', [['Height', '>10'], ['Age', '>14']])).toBe(14);
    expect(database.DMAX([['Tree', 'Apple', 'Pear', 'Cherry', 'Apple', 'Pear', 'Apple'], ['Height', 18, 12, 13, 14, 9, 12], ['Age', 20, 12, 14, 16, 8, 11], ['Yield', 10, 10, 9, 14, 8, 6]], 'Yield', [['Height', '>10'], ['Age', '>14']])).toBe(14);
    expect(database.DMAX([['Tree', 'Apple', 'Pear', 'Cherry', 'Apple', 'Pear', 'Apple'], ['Height', 18, 12, 13, 14, 9, 12], ['Age', 20, 12, 14, 16, 8, 11], ['Yield', 14, 10, 9, 10, 8, 6]], 'Yield', [['Height'], ['Age', '>14']])).toBe(14);
    expect(database.DMAX([['Tree', 'Apple', 'Pear', 'Cherry', 'Apple', 'Pear', 'Apple'], ['Height', 18, 12, 13, 14, 9, 12], ['Age', 20, 12, 14, 16, 8, 11], ['Yield', 14, 10, 9, 10, 8, 6]], undefined, [['Height', '>10'], ['Age', '>14']])).toBe(error.value);
    expect(database.DMAX([['Tree', 'Apple', 'Pear', 'Cherry', 'Apple', 'Pear', 'Apple'], ['Height', 18, 12, 13, 14, 9, 12], ['Age', 20, 12, 14, 16, 8, 11], ['Yield', 14, 10, 9, 10, 8, 6]], 3, [['Height', '>10'], ['Age', '>14']])).toBe(14);
  });

  test('DMIN', () => {
    expect(database.DMIN([['Tree', 'Apple', 'Pear', 'Cherry', 'Apple', 'Pear', 'Apple'], ['Height', 18, 12, 13, 14, 9, 12], ['Age', 20, 12, 14, 16, 8, 11], ['Yield', 14, 10, 9, 10, 8, 6]], 'Yield', [['Height', '>10'], ['Age', '>14']])).toBe(10);
    expect(database.DMIN([['Tree', 'Apple', 'Pear', 'Cherry', 'Apple', 'Pear', 'Apple'], ['Height', 18, 12, 13, 14, 9, 12], ['Age', 20, 12, 14, 16, 8, 11], ['Yield', 14, 10, 9, 10, 8, 6]], undefined, [['Height', '>10'], ['Age', '>14']])).toBe(error.value);
    expect(database.DMIN([['Tree', 'Apple', 'Pear', 'Cherry', 'Apple', 'Pear', 'Apple'], ['Height', 18, 12, 13, 14, 9, 12], ['Age', 20, 12, 14, 16, 8, 11], ['Yield', 14, 10, 9, 10, 8, 6]], 3, [['Height', '>10'], ['Age', '>14']])).toBe(10);
  });

  test('DPRODUCT', () => {
    expect(database.DPRODUCT([['Tree', 'Apple', 'Pear', 'Cherry', 'Apple', 'Pear', 'Apple'], ['Height', 18, 12, 13, 14, 9, 12], ['Age', 20, 12, 14, 16, 8, 11], ['Yield', 14, 10, 9, 10, 8, 6]], 'Yield', [['Height', '>10'], ['Age', '>14']])).toBe(140);
    expect(database.DPRODUCT([['Tree', 'Apple', 'Pear', 'Cherry', 'Apple', 'Pear', 'Apple'], ['Height', 18, 12, 13, 14, 9, 12], ['Age', 20, 12, 14, 16, 8, 11], ['Yield', 14, 10, 9, 10, 8, 6]], undefined, [['Height', '>10'], ['Age', '>14']])).toBe(error.value);
    expect(database.DPRODUCT([['Tree', 'Apple', 'Pear', 'Cherry', 'Apple', 'Pear', 'Apple'], ['Height', 18, 12, 13, 14, 9, 12], ['Age', 20, 12, 14, 16, 8, 11], ['Yield', 14, 10, 9, 10, 8, 6]], 3, [['Height', '>10'], ['Age', '>14']])).toBe(140);
  });

  test('DSTDEV', () => {
    expect(database.DSTDEV([['Tree', 'Apple', 'Pear', 'Cherry', 'Apple', 'Pear', 'Apple'], ['Height', 18, 12, 13, 14, 9, 12], ['Age', 20, 12, 14, 16, 8, 11], ['Yield', 14, 10, 9, 10, 8, 6]], 'Yield', [['Height', '>10']])).toBe(2.8635642126552705);
    expect(database.DSTDEV([['Tree', 'Apple', 'Pear', 'Cherry', 'Apple', 'Pear', 'Apple'], ['Height', 18, 12, 13, 14, 9, 12], ['Age', 20, 12, 14, 16, 8, 11], ['Yield', 14, 10, 9, 10, 8, 6]], undefined, [['Height', '>10']])).toBe(error.value);
    expect(database.DSTDEV([['Tree', 'Apple', 'Pear', 'Cherry', 'Apple', 'Pear', 'Apple'], ['Height', 18, 12, 13, 14, 9, 12], ['Age', 20, 12, 14, 16, 8, 11], ['Yield', 14, 10, 9, 10, 8, 6]], 3, [['Height', '>10']])).toBe(2.8635642126552705);
  });

  test('DSTDEVP', () => {
    expect(database.DSTDEVP([['Tree', 'Apple', 'Pear', 'Cherry', 'Apple', 'Pear', 'Apple'], ['Height', 18, 12, 13, 14, 9, 12], ['Age', 20, 12, 14, 16, 8, 11], ['Yield', 14, 10, 9, 10, 8, 6]], 'Yield', [['Height', '>10']])).toBe(2.5612496949731396);
    expect(database.DSTDEVP([['Tree', 'Apple', 'Pear', 'Cherry', 'Apple', 'Pear', 'Apple'], ['Height', 18, 12, 13, 14, 9, 12], ['Age', 20, 12, 14, 16, 8, 11], ['Yield', 14, 10, 9, 10, 8, 6]], undefined, [['Height', '>10']])).toBe(error.value);
    expect(database.DSTDEVP([['Tree', 'Apple', 'Pear', 'Cherry', 'Apple', 'Pear', 'Apple'], ['Height', 18, 12, 13, 14, 9, 12], ['Age', 20, 12, 14, 16, 8, 11], ['Yield', 14, 10, 9, 10, 8, 6]], 3, [['Height', '>10']])).toBe(2.5612496949731396);
  });

  test('DSUM', () => {
    expect(database.DSUM([['Tree', 'Apple', 'Pear', 'Cherry', 'Apple', 'Pear', 'Apple'], ['Height', 18, 12, 13, 14, 9, 12], ['Age', 20, 12, 14, 16, 8, 11], ['Yield', 14, 10, 9, 10, 8, 6]], 'Yield', [['Height', '>10'], ['Age', '>14']])).toBe(24);
    expect(database.DSUM([['Tree', 'Apple', 'Pear', 'Cherry', 'Apple', 'Pear', 'Apple'], ['Height', 18, 12, 13, 14, 9, 12], ['Age', 20, 12, 14, 16, 8, 11], ['Yield', 14, 10, 9, 10, 8, 6]], undefined, [['Height', '>10'], ['Age', '>14']])).toBe(error.value);
    expect(database.DSUM([['Tree', 'Apple', 'Pear', 'Cherry', 'Apple', 'Pear', 'Apple'], ['Height', 18, 12, 13, 14, 9, 12], ['Age', 20, 12, 14, 16, 8, 11], ['Yield', 14, 10, 9, 10, 8, 6]], 3, [['Height', '>10'], ['Age', '>14']])).toBe(24);
  });

  test('DVAR', () => {
    expect(database.DVAR([['Tree', 'Apple', 'Pear', 'Cherry', 'Apple', 'Pear', 'Apple'], ['Height', 18, 12, 13, 14, 9, 12], ['Age', 20, 12, 14, 16, 8, 11], ['Yield', 14, 10, 9, 10, 8, 6]], 'Yield', [['Height', '>10'], ['Age', '>14']])).toBe(8);
    expect(database.DVAR([['Tree', 'Apple', 'Pear', 'Cherry', 'Apple', 'Pear', 'Apple'], ['Height', 18, 12, 13, 14, 9, 12], ['Age', 20, 12, 14, 16, 8, 11], ['Yield', 14, 10, 9, 10, 8, 6]], undefined, [['Height', '>10'], ['Age', '>14']])).toBe(error.value);
    expect(database.DVAR([['Tree', 'Apple', 'Pear', 'Cherry', 'Apple', 'Pear', 'Apple'], ['Height', 18, 12, 13, 14, 9, 12], ['Age', 20, 12, 14, 16, 8, 11], ['Yield', 14, 10, 9, 10, 8, 6]], 3, [['Height', '>10'], ['Age', '>14']])).toBe(8);
  });

  test('DVARP', () => {
    expect(database.DVARP([['Tree', 'Apple', 'Pear', 'Cherry', 'Apple', 'Pear', 'Apple'], ['Height', 18, 12, 13, 14, 9, 12], ['Age', 20, 12, 14, 16, 8, 11], ['Yield', 14, 10, 9, 10, 8, 6]], 'Yield', [['Height', '>10'], ['Age', '>14']])).toBe(4);
    expect(database.DVARP([['Tree', 'Apple', 'Pear', 'Cherry', 'Apple', 'Pear', 'Apple'], ['Height', 18, 12, 13, 14, 9, 12], ['Age', 20, 12, 14, 16, 8, 11], ['Yield', 14, 10, 9, 10, 8, 6]], undefined, [['Height', '>10'], ['Age', '>14']])).toBe(error.value);
    expect(database.DVARP([['Tree', 'Apple', 'Pear', 'Cherry', 'Apple', 'Pear', 'Apple'], ['Height', 18, 12, 13, 14, 9, 12], ['Age', 20, 12, 14, 16, 8, 11], ['Yield', 14, 10, 9, 10, 8, 6]], 3, [['Height', '>10'], ['Age', '>14']])).toBe(4);
  });
});
