
import statistical from '../lib/statistical';

import mathTrig from '../lib/math-trig';
import error from '../lib/error';

describe('Statistical', () => {
  test('AVEDEV', () => {
    expect(statistical.AVEDEV(2, 4, 8, 16)).to.approximately(4.5, 1e-9);
    expect(statistical.AVEDEV([2, 4, 8, 16])).to.approximately(4.5, 1e-9);
    expect(statistical.AVEDEV([2, 4], [8, 16])).to.approximately(4.5, 1e-9);
    expect(statistical.AVEDEV([
      [2, 4],
      [8, 16]
    ])).to.approximately(4.5, 1e-9);
    expect(statistical.AVEDEV([2, 'invalid'], [8, 16])).toBe(error.value);
  });

  test('AVERAGE', () => {
    expect(statistical.AVERAGE(2, 4, 8, 16)).to.approximately(7.5, 1e-9);
    expect(statistical.AVERAGE([2, 4, 8, 16])).to.approximately(7.5, 1e-9);
    expect(statistical.AVERAGE([2, 4], [8, 16])).to.approximately(7.5, 1e-9);
    expect(statistical.AVERAGE([
      [2, 4],
      [8, 16]
    ])).to.approximately(7.5, 1e-9);
    expect(statistical.AVERAGE([
      [2, 4],
      [8, 16],
      [true, false]
    ])).to.approximately(7.5, 1e-9);
  });

  test('AVERAGEA', () => {
    expect(statistical.AVERAGEA(2, 4, 8, 16)).to.approximately(7.5, 1e-9);
    expect(statistical.AVERAGEA([2, 4, 8, 16])).to.approximately(7.5, 1e-9);
    expect(statistical.AVERAGEA([2, 4], [8, 16])).to.approximately(7.5, 1e-9);
    expect(statistical.AVERAGEA([2, 4], [6, 8], [true, false])).to.approximately(3.5, 1e-9);
    expect(statistical.AVERAGEA([2, 4], [6, 8], [true, false], ['a', 'b'])).to.approximately(2.625, 1e-9);
  });

  test('AVERAGEIF', () => {
    expect(statistical.AVERAGEIF([2, 4, 8, 16], '>5')).toBe(12);
    expect(statistical.AVERAGEIF([2, 4, 8, 16], '>5', [1, 2, 3, 4])).to.approximately(3.5, 1e-9);
    expect(statistical.AVERAGEIF([
      [2, 4],
      [8, 16]
    ], '>5', [
      [1, 2],
      [3, 4]
    ])).to.approximately(3.5, 1e-9);
    expect(statistical.AVERAGEIF([2, 4, 'invalid', 16], '>5')).toBe(error.value);
  });

  test('AVERAGEIFS', () => {
    expect(statistical.AVERAGEIFS([2, 4, 8, 16], [1, 2, 3, 4], '>2')).toBe(12);
    expect(statistical.AVERAGEIFS([2, 4, 8, 16], [1, 2, 3, 4], '>2', [1, 2, 3, 4], '>2')).toBe(12);
    expect(statistical.AVERAGEIFS([2, 4, 8, 16], [1, 2, 3, 4], '>2', [1, 1, 1, 1], '>2')).toBe(0);
  });

  test('BETA.DIST', () => {
    expect(statistical.BETA.DIST(2, 8, 10, true, 1, 3)).to.approximately(0.6854705810117458, 1e-9);
    expect(statistical.BETA.DIST(1 / 52, 0.4, 9.6, false)).to.approximately(9.966606842186748, 1e-9);
    expect(statistical.BETA.DIST(1 / 52, 0.4, 9.6, true)).to.approximately(0.5406016379941343, 1e-9);
    expect(statistical.BETA.DIST(2, 8, 10)).toBe(error.value);
    expect(statistical.BETA.DIST(2, 8, 'invalid', 1, 3)).toBe(error.value);
  });

  test('BETA.INV', () => {
    expect(statistical.BETA.INV(0.6854705810117458, 8, 10, 1, 3)).to.approximately(1.9999999999999998, 1e-9);
    expect(statistical.BETA.INV(0.6854705810117458, 'invalid', 10, 1, 3)).toBe(error.value);
  });

  test('BINOM.DIST', () => {
    expect(statistical.BINOM.DIST(6, 10, 0.5, false)).to.approximately(0.205078125, 1e-9);
    expect(statistical.BINOM.DIST(6, 'invalid', 0.5, false)).toBe(error.value);
  });

  test('BINOM.DIST.RANGE', () => {
    expect(statistical.BINOM.DIST.RANGE(60, 0.75, 48)).to.approximately(0.08397496742904752, 1e-9);
    expect(statistical.BINOM.DIST.RANGE(60, 0.75, 45, 50)).to.approximately(0.5236297934718873, 1e-9);
    expect(statistical.BINOM.DIST.RANGE(60, 0.75, 'invalid', 50)).toBe(error.value);
  });

  test('BINOM.INV', () => {
    expect(statistical.BINOM.INV(6, 0.5, 0.75)).toBe(4);
    expect(statistical.BINOM.INV(6, 'invalid', 0.75)).toBe(error.value);
  });

  test('CHISQ.DIST', () => {
    expect(statistical.CHISQ.DIST(0.5, 1, true)).to.approximately(0.5204998778130242, 1e-9);
    expect(statistical.CHISQ.DIST(0.5, 'invalid', true)).toBe(error.value);
  });

  test('CHISQ.DIST.RT', () => {
    expect(statistical.CHISQ.DIST.RT()).toBe(error.na);
    expect(statistical.CHISQ.DIST.RT(1)).toBe(error.na);
    expect(statistical.CHISQ.DIST.RT(-3, 4)).toBe(error.num);
    expect(statistical.CHISQ.DIST.RT(4, 1.01 * Math.pow(10, 10))).toBe(error.num);
    expect(statistical.CHISQ.DIST.RT('hello', 4)).toBe(error.value);
    expect(statistical.CHISQ.DIST.RT(3, 4)).to.approximately(0.5578254, 1e-06);
  });

  test('CHISQ.INV', () => {
    expect(statistical.CHISQ.INV(0.93, 1)).to.approximately(3.283020286473263, 1e-9);
    expect(statistical.CHISQ.INV(0.6, 2)).to.approximately(1.83258146374831, 1e-9);
    expect(statistical.CHISQ.INV(0.6, 'invalid')).toBe(error.value);
  });

  test('CHISQ.INV.RT', () => {
    expect(statistical.CHISQ.INV.RT()).toBe(error.na);
    expect(statistical.CHISQ.INV.RT(0.5)).toBe(error.na);
    expect(statistical.CHISQ.INV.RT(-1, 2)).toBe(error.num);
    expect(statistical.CHISQ.INV.RT(0.4, 0.5)).toBe(error.num);
    expect(statistical.CHISQ.INV.RT(0.5, 'hello')).toBe(error.value);
    expect(statistical.CHISQ.INV.RT(0.4, 6)).to.approximately(6.210757195, 1e-9);
  });

  test('CHISQ.TEST', () => {
    expect(statistical.CHISQ.TEST()).toBe(error.na);
    expect(statistical.CHISQ.TEST([58, 11, 10, 35, 25, 23])).toBe(error.na);
    expect(statistical.CHISQ.TEST([58, 11, 10, 35, 25, 23], 'a')).toBe(error.value);
    expect(statistical.CHISQ.TEST([58, 11, 10, 35, 25, 23], [45.35, 17.56, 16.09, 47.65, 18.44])).toBe(error.value);
    expect(statistical.CHISQ.TEST([58, 11, 10, 35, 25, 23], [45.35, 17.56, 16.09, 47.65, 18.44, 16.91])).toBe(0.006376);
    expect(statistical.CHISQ.TEST([[58, 35], [11, 25], [10, 23]], [[45.35, 47.65], [17.56, 18.44], [16.09, 16.91]])).toBe(0.000308);
    expect(statistical.CHISQ.TEST([[58, 35], [11, 25], [10, 23]], [[45.35], [17.56, 18.44], [16.09, 16.91]])).toBe(error.value);
  });

  test('COLUMN', () => {
    expect(statistical.COLUMN()).toBe(error.na);
    expect(statistical.COLUMN([[1, 2], [2, 3], [2, 4]])).toBe(error.na);
    expect(statistical.COLUMN([[1, 2], [2, 3], [2, 4]], -1)).toBe(error.num);
    expect(statistical.COLUMN('hello', 1)).toBe(error.value);
    expect(statistical.COLUMN([[1, 2], [2, 3], [2, 4]], 0)).toEqual([[1], [2], [2]]);
    expect(statistical.COLUMN([[1, 2], [2, 3], [2, 4]], 1)).toEqual([[2], [3], [4]]);
    expect(typeof statistical.COLUMN([], 0)).toBe('undefined');
  });

  test('COLUMNS', () => {
    expect(statistical.COLUMNS()).toBe(error.na);
    expect(statistical.COLUMNS(1)).toBe(error.value);
    expect(statistical.COLUMNS([])).toEqual(0);
    expect(statistical.COLUMNS([[1, 2], [2, 3], [2, 4]])).toBe(2);
    expect(statistical.COLUMNS([[1, 2]])).toBe(2);
    expect(statistical.COLUMNS([1, 2])).toBe(1);
  });

  test('CONFIDENCE.NORM', () => {
    expect(statistical.CONFIDENCE.NORM(0.05, 2.5, 50)).to.approximately(0.6929519121748391, 1e-9);
    expect(statistical.CONFIDENCE.NORM(0.05, 'invalid', 50)).toBe(error.value);
  });

  test('CONFIDENCE.T', () => {
    expect(statistical.CONFIDENCE.T(0.05, 1, 50)).to.approximately(0.28419685015290463, 1e-9);
    expect(statistical.CONFIDENCE.T(0.05, 1, 'invalid')).toBe(error.value);
  });

  test('CORREL', () => {
    expect(statistical.CORREL([3, 2, 4, 5, 6], [9, 7, 12, 15, 17])).to.approximately(0.9970544855015815, 1e-9);
    expect(statistical.CORREL([3, 2, 4, 5, 6], [9, 7, 12, 'invalid', 17])).toBe(error.value);
  });

  test('COUNT', () => {
    expect(statistical.COUNT()).toBe(0);
    expect(statistical.COUNT(1, 2, 3, 4)).toBe(4);
    expect(statistical.COUNT([1, 2, 3, 4])).toBe(4);
    expect(statistical.COUNT([1, 2], [3, 4])).toBe(4);
    expect(statistical.COUNT([
      [1, 2],
      [3, 4]
    ])).toBe(4);
    expect(statistical.COUNT([
      [1, 2],
      [3, 2],
      [null, null]
    ])).toBe(4);
    expect(statistical.COUNT([
      [1, 2],
      ['a', 'b'],
      [null, null]
    ])).toBe(2);
  });

  test('COUNTA', () => {
    expect(statistical.COUNTA()).toBe(0);
    expect(statistical.COUNTA(1, null, 3, 'a', '', 'c')).toBe(4);
    expect(statistical.COUNTA([1, null, 3, 'a', '', 'c'])).toBe(4);
    expect(statistical.COUNTA([1, null, 3], ['a', '', 'c'])).toBe(4);
    expect(statistical.COUNTA([
      [1, null, 3],
      ['a', '', 'c']
    ])).toBe(4);
  });

  test('COUNTBLANK', () => {
    expect(statistical.COUNTBLANK()).toBe(0);
    expect(statistical.COUNTBLANK(1, null, 3, 'a', '', 'c')).toBe(2);
    expect(statistical.COUNTBLANK([1, null, 3, 'a', '', 'c'])).toBe(2);
    expect(statistical.COUNTBLANK([1, null, 3], ['a', '', 'c'])).toBe(2);
    expect(statistical.COUNTBLANK([
      [1, null, 3],
      ['a', '', 'c']
    ])).toBe(2);
  });

  test('COUNTIF', () => {
    expect(statistical.COUNTIF([1, null, 3, 'a', ''], '>1')).toBe(1);
    expect(statistical.COUNTIF([1, null, 'c', 'a', ''], '>1')).toBe(0);
    expect(statistical.COUNTIF([
      [1, null, 3],
      ['a', 4, 'c']
    ], '>1')).toBe(2);
    expect(statistical.COUNTIF([
      [1, null, 'a'],
      ['a', 4, 'c']
    ], 'a')).toBe(2);
  });

  test('COUNTIFS', () => {
    expect(statistical.COUNTIFS([1, null, 3, 'a', ''], '>1')).toBe(1);
    expect(statistical.COUNTIFS([1, null, 'c', 'a', ''], '>1')).toBe(0);
    expect(statistical.COUNTIFS([
      [1, null, 3],
      ['a', 4, 'c']
    ], '>1')).toBe(2);
    expect(statistical.COUNTIFS([
      [1, null, 'a'],
      ['a', 4, 'c']
    ], 'a')).toBe(2);
    expect(statistical.COUNTIFS([1, null], '1', [2, null], '2')).toBe(1);
    expect(statistical.COUNTIFS([1, null], '1', [null, 2], '2')).toBe(0);
    expect(statistical.COUNTIFS([
      [1],
      [null]
    ], '1', [
      [2],
      [1]
    ], '2')).toBe(1);
  });

  test('COUNTIN', () => {
    expect(statistical.COUNTIN([1, 1, 2, 2, 2], 1)).toBe(2);
    expect(statistical.COUNTIN([1, 1, 2, 2, 2], 2)).toBe(3);
  });

  test('COUNTUNIQUE', () => {
    expect(statistical.COUNTUNIQUE()).toBe(0);
    expect(statistical.COUNTUNIQUE(1, 1, 2, 2, 3, 3)).toBe(3);
    expect(statistical.COUNTUNIQUE([1, 1, 2, 2, 3, 3])).toBe(3);
    expect(statistical.COUNTUNIQUE([1, 1, 2], [2, 3, 3])).toBe(3);
    expect(statistical.COUNTUNIQUE([[1, 1], [2, 5]], [[2, 3], [3, 4]])).toBe(5);
  });

  test('COVARIANCE.P', () => {
    expect(statistical.COVARIANCE.P([3, 2, 4, 5, 6], [9, 7, 12, 15, 17])).to.approximately(5.2, 1e-9);
    expect(statistical.COVARIANCE.P([3, 2, 4, 5, 6], [9, 'invalid', 12, 15, 17])).toBe(error.value);
  });

  test('COVARIANCE.S', () => {
    expect(statistical.COVARIANCE.S([2, 4, 8], [5, 11, 12])).to.approximately(9.666666666666668, 1e-9);
    expect(statistical.COVARIANCE.S([2, 4, 8], [5, 'invalid', 12])).toBe(error.value);
  });

  test('DEVSQ', () => {
    expect(statistical.DEVSQ([4, 5, 8, 7, 11, 4, 3])).toBe(48);
    expect(statistical.DEVSQ([4, 5, 8, 7, 'invalid', 4, 3])).toBe(error.value);
  });

  test('EXPON.DIST', () => {
    expect(statistical.EXPON.DIST(0.2, 10, true)).to.approximately(0.8646647167633873, 1e-9);
    expect(statistical.EXPON.DIST(0.2, 10, false)).to.approximately(1.353352832366127, 1e-9);
    expect(statistical.EXPON.DIST(0.2, 'invalid', false)).toBe(error.value);
  });

  test('F.DIST', () => {
    expect(statistical.F.DIST(15.20686486, 6, 4, false)).to.approximately(0.0012237995987608916, 1e-9);
    expect(statistical.F.DIST(15.20686486, 6, 4, true)).to.approximately(0.9899999999985833, 1e-9);
    expect(statistical.F.DIST(15.20686486, 6, 'invalid', false)).toBe(error.value);
  });

  test('F.DIST.RT', () => {
    expect(statistical.F.DIST.RT()).toBe(error.na);
    expect(statistical.F.DIST.RT(1)).toBe(error.na);
    expect(statistical.F.DIST.RT(-3, 6, 4)).toBe(error.num);
    expect(statistical.F.DIST.RT(4, -5, 4)).toBe(error.num);
    expect(statistical.F.DIST.RT('hello', 6, 4)).toBe(error.value);
    expect(statistical.F.DIST.RT(15.20686486, 6, 4)).to.approximately(0.0100, 1e-3);
  });

  test('F.INV', () => {
    expect(statistical.F.INV(0.01, 6, 4)).to.approximately(0.10930991412457851, 1e-9);
    expect(statistical.F.INV(0.0, 6, 4)).toBe(error.num);
    expect(statistical.F.INV(0.0, 'invalid', 4)).toBe(error.value);
  });

  test('F.INV.RT', () => {
    expect(statistical.F.INV.RT()).toBe(error.na);
    expect(statistical.F.INV.RT(1, 2)).toBe(error.na);
    expect(statistical.F.INV.RT(-1, 6, 4)).toBe(error.num);
    expect(statistical.F.INV.RT(1.2, -5, 4)).toBe(error.num);
    expect(statistical.F.INV.RT(0.5, 'hello', 4)).toBe(error.value);
    expect(statistical.F.INV.RT(0.01, 6, 4)).to.approximately(15.20686486, 1e-8);
  });

  test('F.TEST', () => {
    expect(statistical.F.TEST()).toBe(error.na);
    expect(statistical.F.TEST('invalid', 100)).toBe(error.na);
    expect(statistical.F.TEST([1, 3, 5, 7, 9])).toBe(error.na);
    expect(statistical.F.TEST([1, 3, 5, 7, 9], [])).toBe(error.div0);
    expect(statistical.F.TEST([1, 3, 5, 7, 9], [1])).toBe(error.div0);
    expect(statistical.F.TEST([1], [1, 3, 5, 7, 9])).toBe(error.div0);
    expect(statistical.F.TEST([1], [1])).toBe(error.div0);
    expect(statistical.F.TEST([1, 3, 5, 7, 9], [5, 9, 3, 8, 3])).to.approximately(1.282, 1e-3);
    expect(statistical.F.TEST([4, 2, 5, 1, 3], [8, 3, 9, 0, 1])).to.approximately(0.1497, 1e-4);
  });

  test('FISHER', () => {
    expect(statistical.FISHER(0.75)).to.approximately(0.9729550745276566, 1e-9);
    expect(statistical.FISHER('invalid')).toBe(error.value);
  });

  test('FISHERINV', () => {
    expect(statistical.FISHERINV(0.9729550745276566)).to.approximately(0.75, 1e-9);
    expect(statistical.FISHERINV('invalid')).toBe(error.value);
  });

  test('FORECAST', () => {
    expect(statistical.FORECAST(30, [6, 7, 9, 15, 21], [20, 28, 31, 38, 40])).to.approximately(10.607253086419755, 1e-9);
    expect(statistical.FORECAST(30, [6, 7, 'invalid', 15, 21], [20, 28, 31, 38, 40])).toBe(error.value);
  });

  test('FREQUENCY', () => {
    expect(statistical.FREQUENCY([
      79, 85, 78, 85,
      50, 81, 95, 88, 97
    ], [
      70, 79, 89
    ])).deepEqual([1, 2, 4, 2]);
    expect(statistical.FREQUENCY([
      79, 85, 78, 85,
      50, 81, 'invalid', 88, 97
    ], [
      70, 79, 89
    ])).toBe(error.value);
  });

  test('GAMMA', () => {
    expect(statistical.GAMMA(2.5)).to.approximately(1.3293403919101043, 1e-9);
    expect(statistical.GAMMA(-3.75)).to.approximately(0.26786611734776916, 1e-9);
    expect(statistical.GAMMA(0)).toBe(error.num);
    expect(statistical.GAMMA(-2)).toBe(error.num);
    expect(statistical.GAMMA('invalid')).toBe(error.value);
  });

  test('GAMMA.DIST', () => {
    expect(statistical.GAMMA.DIST(1)).toBe(error.na);
    expect(statistical.GAMMA.DIST(1, 9, 2)).toBe(error.na);
    expect(statistical.GAMMA.DIST(-1, 9, 2, true)).toBe(error.value);
    expect(statistical.GAMMA.DIST(1, -9, 2, true)).toBe(error.value);
    expect(statistical.GAMMA.DIST(1, 9, -2, true)).toBe(error.value);
    expect(statistical.GAMMA.DIST('invalid', 9, -2, true)).toBe(error.value);
    expect(statistical.GAMMA.DIST(1, 'invalid', -2, true)).toBe(error.value);
    expect(statistical.GAMMA.DIST(1, 9, 'invalid', true)).toBe(error.value);
    expect(statistical.GAMMA.DIST(10.00001131, 9, 2, true)).to.approximately(0.068094, 1e-6);
    expect(statistical.GAMMA.DIST(10.00001131, 9, 2, false)).to.approximately(0.03263913, 1e-9);
  });

  test('GAMMA.INV', () => {
    expect(statistical.GAMMA.INV(1)).toBe(error.na);
    expect(statistical.GAMMA.INV(1, 9)).toBe(error.na);
    expect(statistical.GAMMA.INV(-1, 9, 2)).toBe(error.num);
    expect(statistical.GAMMA.INV(1, -9, 2)).toBe(error.num);
    expect(statistical.GAMMA.INV(1, 9, -2)).toBe(error.num);
    expect(statistical.GAMMA.INV('hello', 9, 2)).toBe(error.value);
    expect(statistical.GAMMA.INV(0.068094, 9, 2)).to.approximately(10.000011, 1e-6);
  });

  test('GAMMALN', () => {
    expect(statistical.GAMMALN(4)).to.approximately(1.7917594692280547, 1e-9);
    expect(statistical.GAMMALN('invalid')).toBe(error.value);
  });

  test('GAMMALN.PRECISE', () => {
    expect(statistical.GAMMALN.PRECISE()).toBe(error.na);
    expect(statistical.GAMMALN.PRECISE(0)).toBe(error.num);
    expect(statistical.GAMMALN.PRECISE(-1)).toBe(error.num);
    expect(statistical.GAMMALN.PRECISE('string')).toBe(error.value);
    expect(statistical.GAMMALN.PRECISE(4.5)).to.approximately(2.453736571, 1e-6);
  });

  test('GAUSS', () => {
    expect(statistical.GAUSS(2)).to.approximately(0.4772498680518208, 1e-9);
    expect(statistical.GAUSS('invalid')).toBe(error.value);
  });

  test('GEOMEAN', () => {
    expect(statistical.GEOMEAN([4, 5, 8, 7, 11, 4, 3])).to.approximately(5.476986969656962, 1e-9);
    expect(statistical.GEOMEAN([4, 5, 8, 7, 'invalid', 4, 3])).toBe(error.value);
  });

  test('GROWTH', () => {
    const known_y = [33100, 47300, 69000, 102000, 150000, 220000];
    const known_x = [11, 12, 13, 14, 15, 16];
    const new_x = [11, 12, 13, 14, 15, 16, 17, 18, 19];

    expect(mathTrig.SUM(statistical.GROWTH(known_y, known_x, new_x))).to.approximately(mathTrig.SUM([
      32618.203773538437,
      47729.42261474665,
      69841.30085621694,
      102197.07337883314,
      149542.4867400494,
      218821.87621460424,
      320196.7183634903,
      468536.05418408214,
      685597.3889812973
    ]), 1e-6);

    expect(mathTrig.SUM(statistical.GROWTH(known_y))).to.approximately(mathTrig.SUM([
      32618.203773539713,
      47729.42261474775,
      69841.30085621744,
      102197.07337883241,
      149542.4867400457,
      218821.8762145953
    ]), 1e-6);

    expect(mathTrig.SUM(statistical.GROWTH(known_y, known_x, new_x, false))).to.approximately(mathTrig.SUM([
      9546.01078362295,
      21959.574129266384,
      50515.645421859634,
      116205.8251842928,
      267319.0393588225,
      614938.7837519756,
      1414600.7282884493,
      3254137.2789414385,
      7485793.848705778
    ]), 1e-6);

    expect(statistical.GROWTH(known_y, known_x, 'invalid', false)).toBe(error.value);
    expect(statistical.GROWTH('invalid', known_x)).toBe(error.value);
  });

  test('HARMEAN', () => {
    expect(statistical.HARMEAN([4, 5, 8, 7, 11, 4, 3])).to.approximately(5.028375962061728, 1e-9);
    expect(statistical.HARMEAN([4, 5, 8, 7, 'invalid', 4, 3])).toBe(error.value);
  });

  test('HYPGEOM.DIST', () => {
    expect(statistical.HYPGEOM.DIST(1, 4, 8, 20, true)).to.approximately(0.46542827657378744, 1e-9);
    expect(statistical.HYPGEOM.DIST(1, 4, 8, 20, false)).to.approximately(0.3632610939112487, 1e-9);
    expect(statistical.HYPGEOM.DIST(1, 'invalid', 8, 20, false)).toBe(error.value);
  });

  test('INTERCEPT', () => {
    expect(statistical.INTERCEPT([
      2, 3, 9, 1, 8
    ], [
      6, 5, 11, 7, 5
    ])).to.approximately(0.04838709677419217, 1e-9);

    expect(statistical.INTERCEPT([1, 2, 3], [1, 2, 3, 4])).toBe(error.na);
    expect(statistical.INTERCEPT([1, 2, 3], [1, 'invalid', 3, 4])).toBe(error.value);
  });

  test('KURT', () => {
    expect(statistical.KURT([
      3, 4, 5, 2, 3, 4, 5, 6, 4, 7
    ])).to.approximately(-0.15179963720841627, 1e-9);
    expect(statistical.KURT([
      3, 4, 5, 2, 'invalid', 4, 5, 6, 4, 7
    ])).toBe(error.value);
  });

  test('LARGE', () => {
    expect(statistical.LARGE([3, 5, 3, 5, 4], 3)).toBe(4);
    expect(statistical.LARGE([3, 5, 3, 'invalid', 4], 3)).toBe(error.value);
  });

  test('LINEST', () => {
    const known_y = [1, 9, 5, 7];
    const known_x = [0, 4, 2, 3];
    expect(statistical.LINEST(known_y, known_x)).deepEqual([
      2, 1
    ]);
    expect(statistical.LINEST(known_y, 'invalid')).toBe(error.value);
  });

  test('LOGEST', () => {
    const known_y = [1, 9, 5, 7];
    const known_x = [0, 4, 2, 3];
    expect(statistical.LOGEST(known_y, known_x)).deepEqual([
      1.751116, 1.194316
    ]);
    expect(statistical.LOGEST(known_y, 'invalid')).toBe(error.value);
    expect(statistical.LOGEST(known_y, 1)).toBe(error.value);
    expect(statistical.LOGEST(known_y, true)).toBe(error.value);
  });

  test('LOGNORM.DIST', () => {
    expect(statistical.LOGNORM.DIST(4, 3.5, 1.2, true)).to.approximately(0.0390835557068005, 1e-9);
    expect(statistical.LOGNORM.DIST(4, 3.5, 1.2, false)).to.approximately(0.01761759668181924, 1e-9);
    expect(statistical.LOGNORM.DIST(4, 3.5, 'invalid', false)).toBe(error.value);
  });

  test('LOGNORM.INV', () => {
    expect(statistical.LOGNORM.INV(0.0390835557068005, 3.5, 1.2)).to.approximately(4.000000000000001, 1e-9);
    expect(statistical.LOGNORM.INV(0.0390835557068005, 'invalid', 1.2)).toBe(error.value);
  });

  test('MAX', () => {
    expect(statistical.MAX()).toBe(0);
    expect(statistical.MAX([0.1, 0.2], [0.4, 0.8], [true, false])).to.approximately(0.8, 1e-9);
    expect(statistical.MAX([
      [0, 0.1, 0.2],
      [0.4, 0.8, 1],
      [true, false]
    ])).toBe(1);
  });

  test('MAXA', () => {
    expect(statistical.MAXA()).toBe(0);
    expect(statistical.MAXA([0.1, 0.2], [0.4, 0.8], [true, false])).toBe(1);
    expect(statistical.MAXA([
      [0.1, 0.2],
      [0.4, 0.8],
      [true, false]
    ])).toBe(1);
  });

  test('MEDIAN', () => {
    expect(statistical.MEDIAN(1, 2, 3, 4, 5)).toBe(3);
    expect(statistical.MEDIAN(1, 2, 3, 4, 5, 6)).to.approximately(3.5, 1e-9);
  });

  test('MIN', () => {
    expect(statistical.MIN()).toBe(0);
    expect(statistical.MIN([0.1, 0.2], [0.4, 0.8], [true, false])).to.approximately(0.1, 1e-9);
    expect(statistical.MIN([0, 0.1, 0.2], [0.4, 0.8, 1], [true, false])).toBe(0);
    expect(statistical.MIN([
      [10, 0],
      [0.1, 0.2]
    ], [
      [10, 0.4],
      [0.8, 1]
    ], [
      [10, 10],
      [true, false]
    ])).toBe(0);
  });

  test('MINA', () => {
    expect(statistical.MINA()).toBe(0);
    expect(statistical.MINA([0.1, 0.2], [0.4, 0.8], [true, false])).toBe(0);
    expect(statistical.MINA([
      [10, 0],
      [0.1, 0.2]
    ], [
      [10, 0.4],
      [0.8, 1]
    ], [
      [10, 10],
      [true, false]
    ])).toBe(0);
  });

  test('MODE.MULT', () => {
    const data = [1, 2, 3, 4, 3, 2, 1, 2, 3, 5, 6, 1];
    const modes = statistical.MODE.MULT(data);
    expect(modes).toHaveLength(3);
    expect(modes).to.containEql(1);
    expect(modes).to.containEql(2);
    expect(modes).to.containEql(3);
    expect(statistical.MODE.MULT([1, 2, 'invalid'])).toBe(error.value);
  });

  test('MODE.SNGL', () => {
    const data = [5.6, 4, 4, 3, 2, 4];
    expect(statistical.MODE.SNGL(data)).toBe(4);
    expect(statistical.MODE.SNGL([1, 2, 'invalid'])).toBe(error.value);
  });

  test('NEGBINOM.DIST', () => {
    expect(statistical.NEGBINOM.DIST(10, 5, 0.25, false)).to.approximately(0.05504866037517786, 1e-9);
    expect(statistical.NEGBINOM.DIST(10, 5, 0.25, true)).to.approximately(0.3135140584781766, 1e-9);
    expect(statistical.NEGBINOM.DIST(10, 'invalid', 0.25, true)).toBe(error.value);
  });

  test('NORM.DIST', () => {
    expect(statistical.NORM.DIST(1, 0, 1, false)).to.approximately(0.24197072451914337, 1e-9);
    expect(statistical.NORM.DIST(1, 0, 1, true)).to.approximately(0.8413447460685429, 1e-9);
    expect(statistical.NORM.DIST('Hello World!', 0, 1, false)).toBe(error.value);
    expect(statistical.NORM.DIST(0, 'Hello World!', 1, false)).toBe(error.value);
    expect(statistical.NORM.DIST(0, 0, 'Hello World!', false)).toBe(error.value);
    expect(statistical.NORM.DIST(0, 0, -1, false)).toBe(error.num);
  });

  test('NORM.INV', () => {
    expect(statistical.NORM.INV(0.908789, 40, 1.5)).to.approximately(42.00000200956616, 1e-9);
    expect(statistical.NORM.INV(0.908789, 'invalid', 1.5)).toBe(error.value);
  });

  test('NORM.S.DIST', () => {
    expect(statistical.NORM.S.DIST(1, true)).to.approximately(0.8413447460685429, 1e-9);
    expect(statistical.NORM.S.DIST(1, false)).to.approximately(0.24197072451914337, 1e-9);
    expect(statistical.NORM.S.DIST('invalid', false)).toBe(error.value);
  });

  test('NORM.S.INV', () => {
    expect(statistical.NORM.S.INV(0.908789)).to.approximately(1.3333346730441074, 1e-9);
    expect(statistical.NORM.S.INV('invalid')).toBe(error.value);
  });

  test('PEARSON', () => {
    const independentValues = [9, 7, 5, 3, 1];
    const depentendValues = [10, 6, 1, 5, 3];
    expect(statistical.PEARSON(independentValues, depentendValues)).to.approximately(0.6993786061802354, 1e-9);
    depentendValues.push('invalid');
    expect(statistical.PEARSON(independentValues, depentendValues)).toBe(error.value);
  });

  test('PERCENTILE.EXC', () => {
    expect(statistical.PERCENTILE.EXC([1, 2, 3, 4], 0)).toBe(error.num);
    expect(statistical.PERCENTILE.EXC([1, 2, 3, 4], 0.1)).toBe(error.num);
    expect(statistical.PERCENTILE.EXC([1, 2, 3, 4], 0.2)).toBe(1);
    expect(statistical.PERCENTILE.EXC([1, 2, 3, 4], 0.25)).to.approximately(1.25, 1e-9);
    expect(statistical.PERCENTILE.EXC([1, 2, 3, 4], 0.3)).to.approximately(1.5, 1e-9);
    expect(statistical.PERCENTILE.EXC([1, 2, 3, 4], 0.4)).toBe(2);
    expect(statistical.PERCENTILE.EXC([1, 2, 3, 4], 0.5)).to.approximately(2.5, 1e-9);
    expect(statistical.PERCENTILE.EXC([1, 2, 3, 4], 0.6)).toBe(3);
    expect(statistical.PERCENTILE.EXC([1, 2, 3, 4], 0.7)).to.approximately(3.5, 1e-9);
    expect(statistical.PERCENTILE.EXC([1, 2, 3, 4], 0.75)).to.approximately(3.75, 1e-9);
    expect(statistical.PERCENTILE.EXC([1, 2, 3, 4], 0.8)).toBe(4);
    expect(statistical.PERCENTILE.EXC([1, 2, 3, 4], 0.9)).toBe(error.num);
    expect(statistical.PERCENTILE.EXC([1, 2, 3, 4], 1)).toBe(error.num);
    expect(statistical.PERCENTILE.EXC([1, 'invalid', 3, 4], 1)).toBe(error.value);
  });

  test('PERCENTILE.INC', () => {
    expect(statistical.PERCENTILE.INC([1, 2, 3, 4], 0)).toBe(1);
    expect(statistical.PERCENTILE.INC([1, 2, 3, 4], 0.1)).to.approximately(1.3, 1e-9);
    expect(statistical.PERCENTILE.INC([1, 2, 3, 4], 0.2)).to.approximately(1.6, 1e-9);
    expect(statistical.PERCENTILE.INC([1, 2, 3, 4], 0.25)).to.approximately(1.75, 1e-9);
    expect(statistical.PERCENTILE.INC([1, 2, 3, 4], 0.3)).to.approximately(1.9, 1e-9);
    expect(statistical.PERCENTILE.INC([1, 2, 3, 4], 0.4)).to.approximately(2.2, 1e-9);
    expect(statistical.PERCENTILE.INC([1, 2, 3, 4], 0.5)).to.approximately(2.5, 1e-9);
    expect(statistical.PERCENTILE.INC([1, 2, 3, 4], 0.6)).to.approximately(2.8, 1e-9);
    expect(statistical.PERCENTILE.INC([1, 2, 3, 4], 0.7)).to.approximately(3.1, 1e-9);
    expect(statistical.PERCENTILE.INC([1, 2, 3, 4], 0.75)).to.approximately(3.25, 1e-9);
    expect(statistical.PERCENTILE.INC([1, 2, 3, 4], 0.8)).to.approximately(3.4, 1e-9);
    expect(statistical.PERCENTILE.INC([1, 2, 3, 4], 0.9)).to.approximately(3.7, 1e-9);
    expect(statistical.PERCENTILE.INC([1, 2, 3, 4], 1)).toBe(4);
    expect(statistical.PERCENTILE.INC([1, 2, 'invalid', 4], 1)).toBe(error.value);
  });

  test('PERCENTRANK.EXC', () => {
    expect(statistical.PERCENTRANK.EXC([1, 2, 3, 4], 1)).to.approximately(0.2, 1e-9);
    expect(statistical.PERCENTRANK.EXC([1, 2, 3, 4], 2)).to.approximately(0.4, 1e-9);
    expect(statistical.PERCENTRANK.EXC([1, 2, 3, 4], 3)).to.approximately(0.6, 1e-9);
    expect(statistical.PERCENTRANK.EXC([1, 2, 3, 4], 4)).to.approximately(0.8, 1e-9);
    expect(statistical.PERCENTRANK.EXC([1, 2, 3, 4], 1.25)).to.approximately(0.25, 1e-9);
    expect(statistical.PERCENTRANK.EXC([1, 2, 3, 4], 2.5)).to.approximately(0.5, 1e-9);
    expect(statistical.PERCENTRANK.EXC([1, 2, 3, 4], 3.75)).to.approximately(0.75, 1e-9);
    expect(statistical.PERCENTRANK.EXC([1, 2, 3, 4], 1, 2)).to.approximately(0.2, 1e-9);
    expect(statistical.PERCENTRANK.EXC([1, 2, 3, 4], 2, 2)).to.approximately(0.4, 1e-9);
    expect(statistical.PERCENTRANK.EXC([1, 2, 3, 4], 3, 2)).to.approximately(0.6, 1e-9);
    expect(statistical.PERCENTRANK.EXC([1, 2, 3, 4], 4, 2)).to.approximately(0.8, 1e-9);
    expect(statistical.PERCENTRANK.EXC([1, 2, 'invalid', 4], 4, 2)).toBe(error.value);
  });

  test('PERCENTRANK.INC', () => {
    expect(statistical.PERCENTRANK.INC([1, 2, 3, 4], 1)).toBe(0);
    expect(statistical.PERCENTRANK.INC([1, 2, 3, 4], 2)).to.approximately(0.333, 1e-9);
    expect(statistical.PERCENTRANK.INC([1, 2, 3, 4], 3)).to.approximately(0.666, 1e-9);
    expect(statistical.PERCENTRANK.INC([1, 2, 3, 4], 4)).toBe(1);
    expect(statistical.PERCENTRANK.INC([1, 2, 3, 4], 1.25)).to.approximately(0.083, 1e-9);
    expect(statistical.PERCENTRANK.INC([1, 2, 3, 4], 2.5)).to.approximately(0.5, 1e-9);
    expect(statistical.PERCENTRANK.INC([1, 2, 3, 4], 3.75)).to.approximately(0.916, 1e-9);
    expect(statistical.PERCENTRANK.INC([1, 2, 3, 4], 1, 2)).toBe(0);
    expect(statistical.PERCENTRANK.INC([1, 2, 3, 4], 2, 2)).to.approximately(0.33, 1e-9);
    expect(statistical.PERCENTRANK.INC([1, 2, 3, 4], 3, 2)).to.approximately(0.66, 1e-9);
    expect(statistical.PERCENTRANK.INC([1, 2, 3, 4], 4, 2)).toBe(1);
    expect(statistical.PERCENTRANK.INC([1, 2, 3, 4], 'invalid', 2)).toBe(error.value);
  });

  test('PERMUT', () => {
    expect(statistical.PERMUT(100, 3)).toBe(970200);
    expect(statistical.PERMUT(100, 'invalid')).toBe(error.value);
  });

  test('PERMUTATIONA', () => {
    expect(statistical.PERMUTATIONA(3, 2)).toBe(9);
    expect(statistical.PERMUTATIONA('invalid', 2)).toBe(error.value);
  });

  test('PHI', () => {
    expect(statistical.PHI(0.75)).to.approximately(0.30113743215480443, 1e-9);
    expect(statistical.PHI('invalid')).toBe(error.value);
  });

  test('POISSON.DIST', () => {
    expect(statistical.POISSON.DIST(2, 5, true)).to.approximately(0.12465201948308113, 1e-9);
    expect(statistical.POISSON.DIST(2, 5, false)).to.approximately(0.08422433748856833, 1e-9);
    expect(statistical.POISSON.DIST(2, 'invalid', false)).toBe(error.value);
  });

  test('PROB', () => {
    const x = [0, 1, 2, 3];
    const prob = [0.2, 0.3, 0.1, 0.4];
    expect(statistical.PROB(x, prob, 2)).to.approximately(0.1, 1e-9);
    expect(statistical.PROB(x, prob, 1, 3)).to.approximately(0.8, 1e-9);
    expect(statistical.PROB(x, prob)).toBe(0);
    x.push('invalid');
    expect(statistical.PROB(x, prob, 1, 3)).toBe(error.value);
  });

  test('QUARTILE.EXC', () => {
    const data = [6, 7, 15, 36, 39, 40, 41, 42, 43, 47, 49];
    expect(statistical.QUARTILE.EXC(data, 1)).toBe(15);
    expect(statistical.QUARTILE.EXC(data, 2)).toBe(40);
    expect(statistical.QUARTILE.EXC(data, 3)).toBe(43);
    expect(statistical.QUARTILE.EXC(data, 4)).toBe(error.num);
    expect(statistical.QUARTILE.EXC(data, 'invalid')).toBe(error.value);
  });

  test('QUARTILE.INC', () => {
    const data = [1, 2, 4, 7, 8, 9, 10, 12];
    expect(statistical.QUARTILE.INC(data, 1)).to.approximately(3.5, 1e-9);
    expect(statistical.QUARTILE.INC(data, 2)).to.approximately(7.5, 1e-9);
    expect(statistical.QUARTILE.INC(data, 3)).to.approximately(9.25, 1e-9);
    expect(statistical.QUARTILE.INC(data, 4)).toBe(error.num);
    expect(statistical.QUARTILE.INC(data, 'invalid')).toBe(error.value);
  });

  test('RANK.AVG', () => {
    const data = [89, 88, 92, 101, 94, 97, 95];
    expect(statistical.RANK.AVG(94, data)).toBe(4);
    expect(statistical.RANK.AVG(88, data, 1)).toBe(1);
    expect(statistical.RANK.AVG('invalid', data, 1)).toBe(error.value);
  });

  test('RANK.EQ', () => {
    const data = [7, 3.5, 3.5, 1, 2];
    expect(statistical.RANK.EQ(data[0], data, 1)).toBe(5);
    expect(statistical.RANK.EQ(data[4], data)).toBe(4);
    expect(statistical.RANK.EQ(data[1], data, 1)).toBe(3);
    expect(statistical.RANK.EQ('invalid', data, true)).toBe(error.value);
  });

  test('ROW', () => {
    expect(statistical.ROW()).toBe(error.na);
    expect(statistical.ROW([[1, 2], [2, 3], [2, 4]])).toBe(error.na);
    expect(statistical.ROW([[1, 2], [2, 3], [2, 4]], -1)).toBe(error.num);
    expect(statistical.ROW('hello', 1)).toBe(error.value);
    expect(statistical.ROW([[1, 2], [2, 3], [2, 4]], 0)).toEqual([1, 2]);
    expect(statistical.ROW([[1, 2], [2, 3], [2, 4]], 2)).toEqual([2, 4]);
    expect(statistical.ROW([[1, 2], [2, 3], [2, 4]], 3)).toBeFalsy();
    expect(statistical.ROW([], 3)).toBeFalsy();
  });

  test('ROWS', () => {
    expect(statistical.ROWS()).toBe(error.na);
    expect(statistical.ROWS(1)).toBe(error.value);
    expect(statistical.ROWS([])).toEqual(0);
    expect(statistical.ROWS([[1, 2], [2, 3], [2, 4]])).toBe(3);
    expect(statistical.ROWS([[1, 2]])).toBe(1);
    expect(statistical.ROWS([1, 2])).toBe(2);
  });

  test('RSQ', () => {
    const y = [2, 3, 9, 1, 8, 7, 5];
    const x = [6, 5, 11, 7, 5, 4, 4];
    expect(statistical.RSQ(y, x)).to.approximately(0.05795019157088122, 1e-9);
    x.push('invalid');
    expect(statistical.RSQ(y, x)).toBe(error.value);
  });

  test('SKEW', () => {
    expect(statistical.SKEW([3, 4, 5, 2, 3, 4, 5, 6, 4, 7])).to.approximately(0.3595430714067974, 1e-9);
    expect(statistical.SKEW([3, 4, 5, 2, 3, 4, 5, 6, 'invalid', 7])).toBe(error.value);
  });

  test('SKEW.P', () => {
    expect(statistical.SKEW.P([3, 4, 5, 2, 3, 4, 5, 6, 4, 7])).to.approximately(0.303193339354144, 1e-9);
    expect(statistical.SKEW.P([3, 4, 5, 'invalid', 3, 4, 5, 6, 4, 7])).toBe(error.value);
  });

  test('SLOPE', () => {
    const data_y = [2, 3, 9, 1, 8, 7, 5];
    const data_x = [6, 5, 11, 7, 5, 4, 4];
    expect(statistical.SLOPE(data_y, data_x)).to.approximately(0.3055555555555556, 1e-9);
    data_x.push('invalid');
    expect(statistical.SLOPE(data_y, data_x)).toBe(error.value);
  });

  test('SMALL', () => {
    expect(statistical.SMALL([3, 4, 5, 2, 3, 4, 6, 4, 7], 4)).toBe(4);
    expect(statistical.SMALL([3, 4, 5, 2, 'invalid', 4, 6, 4, 7], 4)).toBe(error.value);
  });

  test('STANDARDIZE', () => {
    expect(statistical.STANDARDIZE(42, 40, 1.5)).to.approximately(1.3333333333333333, 1e-9);
    expect(statistical.STANDARDIZE(10, 10, 10)).toBe(0);
    expect(statistical.STANDARDIZE(10, 10, 'invalid')).toBe(error.value);
  });

  test('STDEV.P', () => {
    const data = [1345, 1301, 1368, 1322, 1310, 1370, 1318, 1350, 1303, 1299];
    expect(statistical.STDEV.P(data)).to.approximately(26.054558142482477, 1e-9);
  });

  test('STDEV.S', () => {
    const data = [1345, 1301, 1368, 1322, 1310, 1370, 1318, 1350, 1303, 1299, true, false, 'nope'];
    expect(statistical.STDEV.S(data)).to.approximately(27.46391571984349, 1e-9);
  });

  test('STDEVA', () => {
    const data = [1345, 1301, 1368, 1322, 1310, 1370, 1318, 1350, 1303, 1299];
    expect(statistical.STDEVA(data)).to.approximately(27.46391571984349, 1e-9);
    const data2 = [2, 1, true, false, 'nope'];
    expect(statistical.STDEVA(data2)).to.approximately(0.8366600265340756, 1e-9);
  });

  test('STDEVPA', () => {
    const data = [1345, 1301, 1368, 1322, 1310, 1370, 1318, 1350, 1303, 1299];
    expect(statistical.STDEVPA(data)).to.approximately(26.054558142482477, 1e-9);
    const data2 = [2, 1, true, false, 'nope'];
    expect(statistical.STDEVPA(data2)).to.approximately(0.7483314773547883, 1e-9);
  });

  test('STEYX', () => {
    const data_y = [2, 3, 9, 1, 8, 7, 5];
    const data_x = [6, 5, 11, 7, 5, 4, 4];
    expect(statistical.STEYX(data_y, data_x)).to.approximately(3.305718950210041, 1e-9);
    data_x.push('invalid');
    expect(statistical.STEYX(data_y, data_x)).toBe(error.value);
  });

  test('TRANSPOSE', () => {
    expect(statistical.TRANSPOSE()).toBe(error.na);
    expect(statistical.TRANSPOSE([])).toEqual([]);
    expect(statistical.TRANSPOSE([1, 2, 3])).toEqual([[1], [2], [3]]);
    expect(statistical.TRANSPOSE([[1, 2], [3, 4], [5, 6]])).toEqual([[1, 3, 5], [2, 4, 6]]);
    expect(statistical.TRANSPOSE([[1, 2, 3], [4, 5, 6]])).toEqual([[1, 4], [2, 5], [3, 6]]);
  });

  test('T.DIST', () => {
    expect(statistical.T.DIST(60, 1, true)).to.approximately(0.9946953263673741, 1e-9);
    expect(statistical.T.DIST(8, 3, false)).to.approximately(0.0007369065188787021, 1e-9);
    expect(statistical.T.DIST(8, 'invalid', false)).toBe(error.value);
  });

  test('T.DIST.2T', () => {
    expect(statistical.T.DIST['2T']()).toBe(error.na);
    expect(statistical.T.DIST['2T'](1)).toBe(error.na);
    expect(statistical.T.DIST['2T'](-1, 1)).toBe(error.num);
    expect(statistical.T.DIST['2T'](1.1, 0)).toBe(error.num);
    expect(statistical.T.DIST['2T']('hello', 1)).toBe(error.value);
    expect(statistical.T.DIST['2T'](2, 6)).to.approximately(0.092426312, 1e-9);
    expect(statistical.T.DIST['2T'](20, 2)).to.approximately(0.002490664, 1e-9);
  });

  test('T.DIST.RT', () => {
    expect(statistical.T.DIST.RT()).toBe(error.na);
    expect(statistical.T.DIST.RT(1)).toBe(error.na);
    expect(statistical.T.DIST.RT(-1, 1)).toBe(error.num);
    expect(statistical.T.DIST.RT(1.1, 0)).toBe(error.num);
    expect(statistical.T.DIST.RT('hello', 1)).toBe(error.value);
    expect(statistical.T.DIST.RT(2, 60)).to.approximately(0.025016522, 1e-9);
    expect(statistical.T.DIST.RT(2, 6)).to.approximately(0.046213156, 1e-9);
  });

  test('T.INV', () => {
    expect(statistical.T.INV(0.9, 60)).to.approximately(1.2958210933417948, 1e-9);
    expect(statistical.T.INV(0.9, 'invalid')).toBe(error.value);
  });

  test('T.INV.2T', () => {
    expect(statistical.T.INV['2T'](0.9, 60)).to.approximately(0.126194364, 1e-9);
    expect(statistical.T.INV['2T'](0.9, 'invalid')).toBe(error.value);
    expect(statistical.T.INV['2T']('invalid', 60)).toBe(error.value);
    expect(statistical.T.INV['2T'](-1, 60)).toBe(error.num);
    expect(statistical.T.INV['2T'](0, 60)).toBe(error.num);
    expect(statistical.T.INV['2T'](1.1, 60)).toBe(error.num);
    expect(statistical.T.INV['2T'](0.9, 0.5)).toBe(error.num);
  });

  test('T.TEST', () => {
    let known_x = [5, 7, 5, 3, 5, 3, 3, 9];
    let known_y = [8, 1, 4, 6, 6, 4, 1, 2];
    expect(statistical.T.TEST(known_x, known_y)).to.approximately(0.41106918968115536, 1e-9);
    known_x = [3, 4, 5, 8, 9, 1, 2, 4, 5];
    known_y = [6, 9, 3, 5, 4, 4, 5, 3, 1];
    expect(statistical.T.TEST(known_x, known_y)).to.approximately(0.923919926765508, 1e-9);
    known_x = [3, 4, 5, 8, 9, 1, 2, 4, 5];
    known_y = [6, 9, 3, 5, 4, 4, 5];
    expect(statistical.T.TEST(known_x, known_y)).to.approximately(0.6141571469712601, 1e-9);
    expect(statistical.T.TEST('invalid', known_y)).toBe(error.value);
  });

  test('TREND', () => {
    const known_y = [1, 9, 5, 7];
    const known_x = [0, 4, 2, 3];
    const new_know_x = [5, 8];
    expect(statistical.TREND(known_y, known_x, new_know_x)).deepEqual([
      11, 17
    ]);
    expect(statistical.TREND(known_y, known_x, 'invalid')).toBe(error.value);
  });

  test('TRIMMEAN', () => {
    expect(statistical.TRIMMEAN([4, 5, 6, 7, 2, 3, 4, 5, 1, 2, 3], 0.2)).to.approximately(3.7777777777777777, 1e-9);
    expect(statistical.TRIMMEAN([4, 5, 6, 'invalid', 1, 2, 3], 0.2)).toBe(error.value);
  });

  test('VAR.P', () => {
    expect(statistical.VAR.P(1, 2, 3, 4, 10, 10)).to.approximately(13.333333333333334, 1e-9);
    expect(statistical.VAR.P(1, 2, 3, 4, false, true)).to.approximately(1.25, 1e-9);
    expect(statistical.VAR.P(1, 2, 3, 4, 'count as zero', false, true)).to.approximately(1.25, 1e-9);
  });

  test('VAR.S', () => {
    expect(statistical.VAR.S(1, 2, 3, 4, 10, 10)).toBe(16);
    expect(statistical.VAR.S(1, 2, 3, 4, false, true)).to.approximately(1.6666666666666667, 1e-9);
    expect(statistical.VAR.S(1, 2, 3, 4, 'count as zero', false, true)).to.approximately(1.6666666666666667, 1e-9);
  });

  test('VARA', () => {
    expect(statistical.VARA(1, 2, 3, 4, 10, 10)).toBe(16);
    expect(statistical.VARA(1, 2, 3, 4, false, true)).to.approximately(2.166666666666667, 1e-9);
    expect(statistical.VARA(1, 2, 3, 4, 'count as zero', false, true)).to.approximately(2.285714285714286, 1e-9);
  });

  test('VARPA', () => {
    expect(statistical.VARPA(1, 2, 3, 4, 10, 10)).to.approximately(13.333333333333334, 1e-9);
    expect(statistical.VARPA(1, 2, 3, 4, false, true)).to.approximately(1.8055555555555556, 1e-9);
    expect(statistical.VARPA(1, 2, 3, 4, 'count as zero', false, true)).to.approximately(1.959183673469388, 1e-9);
  });

  test('WEIBULL.DIST', () => {
    expect(statistical.WEIBULL.DIST(105, 20, 100, true)).to.approximately(0.9295813900692769, 1e-9);
    expect(statistical.WEIBULL.DIST(105, 20, 100, false)).to.approximately(0.03558886402450435, 1e-9);
    expect(statistical.WEIBULL.DIST(105, 20, 'invalid', false)).toBe(error.value);
  });


  test('Z.TEST', () => {
    const data = [3, 6, 7, 8, 6, 5, 4, 2, 1, 9];
    expect(statistical.Z.TEST(data, 4)).to.approximately(0.09057419685136381, 1e-9);
    expect(statistical.Z.TEST(data, 6)).to.approximately(0.86304338912953, 1e-9);
    expect(statistical.Z.TEST(data, 'invalid')).toBe(error.value);
  });
});
