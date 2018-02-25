
import financial from '../lib/financial';

import error from '../lib/error';

describe('Financial', () => {
  test('ACCRINT', () => {
    expect(financial.ACCRINT('2/2/2012', '3/30/2012', '12/4/2013', 0.1, 1000, 1, 0, true)).to.approximately(183.88888888888889, 1e-9, 1e-9);
    expect(financial.ACCRINT('2/2/2012', '3/30/2012', '12/4/2013', 0.1, 1000, 1, 0, true)).to.approximately(183.88888888888889, 1e-9);
    expect(financial.ACCRINT('2/2/2012', '3/30/2012', '12/4/2013', 0.1, 1000, 2, 0, true)).to.approximately(183.88888888888889, 1e-9);
    expect(financial.ACCRINT('2/2/2012', '3/30/2012', '12/4/2013', 0.1, 1000, 4, 0, true)).to.approximately(183.88888888888889, 1e-9);
    expect(financial.ACCRINT('2/2/2012', '3/30/2012', '12/4/2013', 0.1, 1000, 1, 1, true)).to.approximately(183.58413132694938, 1e-9);
    expect(financial.ACCRINT('2/2/2012', '3/30/2012', '12/4/2013', 0.1, 1000, 2, 1, true)).to.approximately(183.58413132694938, 1e-9);
    expect(financial.ACCRINT('2/2/2012', '3/30/2012', '12/4/2013', 0.1, 1000, 4, 1, true)).to.approximately(183.58413132694938, 1e-9);
    expect(financial.ACCRINT('2/2/2012', '3/30/2012', '12/4/2013', 0.1, 1000, 1, 2, true)).to.approximately(186.38888888888889, 1e-9);
    expect(financial.ACCRINT('2/2/2012', '3/30/2012', '12/4/2013', 0.1, 1000, 2, 2, true)).to.approximately(186.38888888888889, 1e-9);
    expect(financial.ACCRINT('2/2/2012', '3/30/2012', '12/4/2013', 0.1, 1000, 4, 2, true)).to.approximately(186.38888888888889, 1e-9);
    expect(financial.ACCRINT('2/2/2012', '3/30/2012', '12/4/2013', 0.1, 1000, 1, 3, true)).to.approximately(183.83561643835617, 1e-9);
    expect(financial.ACCRINT('2/2/2012', '3/30/2012', '12/4/2013', 0.1, 1000, 2, 3, true)).to.approximately(183.83561643835617, 1e-9);
    expect(financial.ACCRINT('2/2/2012', '3/30/2012', '12/4/2013', 0.1, 1000, 4, 3, true)).to.approximately(183.83561643835617, 1e-9);
    expect(financial.ACCRINT('2/2/2012', '3/30/2012', '12/4/2013', 0.1, 1000, 1, 4, true)).to.approximately(183.88888888888889, 1e-9);
    expect(financial.ACCRINT('2/2/2012', '3/30/2012', '12/4/2013', 0.1, 1000, 2, 4, true)).to.approximately(183.88888888888889, 1e-9);
    expect(financial.ACCRINT('2/2/2012', '3/30/2012', '12/4/2013', 0.1, 1000, 4, 4, true)).to.approximately(183.88888888888889, 1e-9);
    expect(financial.ACCRINT('2/2/2012', '3/30/2012', '12/4/2013', 0.1, 1000, 1, 0, false)).to.approximately(183.88888888888889, 1e-9);
    expect(financial.ACCRINT('2/2/2012', '3/30/2012', '12/4/2013', 0.1, 1000, 2, 0, false)).to.approximately(183.88888888888889, 1e-9);
    expect(financial.ACCRINT('2/2/2012', '3/30/2012', '12/4/2013', 0.1, 1000, 4, 0, false)).to.approximately(183.88888888888889, 1e-9);
    expect(financial.ACCRINT('2/2/2012', '3/30/2012', '12/4/2013', 0.1, 1000, 1, 1, false)).to.approximately(183.58413132694938, 1e-9);
    expect(financial.ACCRINT('2/2/2012', '3/30/2012', '12/4/2013', 0.1, 1000, 2, 1, false)).to.approximately(183.58413132694938, 1e-9);
    expect(financial.ACCRINT('2/2/2012', '3/30/2012', '12/4/2013', 0.1, 1000, 4, 1, false)).to.approximately(183.58413132694938, 1e-9);
    expect(financial.ACCRINT('2/2/2012', '3/30/2012', '12/4/2013', 0.1, 1000, 1, 2, false)).to.approximately(186.38888888888889, 1e-9);
    expect(financial.ACCRINT('2/2/2012', '3/30/2012', '12/4/2013', 0.1, 1000, 2, 2, false)).to.approximately(186.38888888888889, 1e-9);
    expect(financial.ACCRINT('2/2/2012', '3/30/2012', '12/4/2013', 0.1, 1000, 4, 2, false)).to.approximately(186.38888888888889, 1e-9);
    expect(financial.ACCRINT('2/2/2012', '3/30/2012', '12/4/2013', 0.1, 1000, 1, 3, false)).to.approximately(183.83561643835617, 1e-9);
    expect(financial.ACCRINT('2/2/2012', '3/30/2012', '12/4/2013', 0.1, 1000, 2, 3, false)).to.approximately(183.83561643835617, 1e-9);
    expect(financial.ACCRINT('2/2/2012', '3/30/2012', '12/4/2013', 0.1, 1000, 4, 3, false)).to.approximately(183.83561643835617, 1e-9);
    expect(financial.ACCRINT('2/2/2012', '3/30/2012', '12/4/2013', 0.1, 1000, 1, 4, false)).to.approximately(183.88888888888889, 1e-9);
    expect(financial.ACCRINT('2/2/2012', '3/30/2012', '12/4/2013', 0.1, 1000, 2, 4, false)).to.approximately(183.88888888888889, 1e-9);
    expect(financial.ACCRINT('2/2/2012', '3/30/2012', '12/4/2013', 0.1, 1000, 4, 4, false)).to.approximately(183.88888888888889, 1e-9);
    expect(financial.ACCRINT('2/2/2012', '12/4/2013', '3/30/2012', 0.1, 1000, 1, 0, true)).to.approximately(16.11111111111111, 1e-9);
    expect(financial.ACCRINT('2/2/2012', '12/4/2013', '3/30/2012', 0.1, 1000, 2, 0, true)).to.approximately(16.11111111111111, 1e-9);
    expect(financial.ACCRINT('2/2/2012', '12/4/2013', '3/30/2012', 0.1, 1000, 4, 0, true)).to.approximately(16.11111111111111, 1e-9);
    expect(financial.ACCRINT('2/2/2012', '12/4/2013', '3/30/2012', 0.1, 1000, 1, 1, true)).to.approximately(15.573770491803279, 1e-9);// TODO :1e-9);
    expect(financial.ACCRINT('2/2/2012', '12/4/2013', '3/30/2012', 0.1, 1000, 2, 1, true)).to.approximately(15.573770491803279, 1e-9);
    expect(financial.ACCRINT('2/2/2012', '12/4/2013', '3/30/2012', 0.1, 1000, 4, 1, true)).to.approximately(15.573770491803279, 1e-9);
    expect(financial.ACCRINT('2/2/2012', '12/4/2013', '3/30/2012', 0.1, 1000, 1, 2, true)).to.approximately(15.833333333333332, 1e-9);
    expect(financial.ACCRINT('2/2/2012', '12/4/2013', '3/30/2012', 0.1, 1000, 2, 2, true)).to.approximately(15.833333333333332, 1e-9);
    expect(financial.ACCRINT('2/2/2012', '12/4/2013', '3/30/2012', 0.1, 1000, 4, 2, true)).to.approximately(15.833333333333332, 1e-9);
    expect(financial.ACCRINT('2/2/2012', '12/4/2013', '3/30/2012', 0.1, 1000, 1, 3, true)).to.approximately(15.616438356164384, 1e-9);
    expect(financial.ACCRINT('2/2/2012', '12/4/2013', '3/30/2012', 0.1, 1000, 2, 3, true)).to.approximately(15.616438356164384, 1e-9);
    expect(financial.ACCRINT('2/2/2012', '12/4/2013', '3/30/2012', 0.1, 1000, 4, 3, true)).to.approximately(15.616438356164384, 1e-9);
    expect(financial.ACCRINT('2/2/2012', '12/4/2013', '3/30/2012', 0.1, 1000, 1, 4, true)).to.approximately(16.11111111111111, 1e-9);
    expect(financial.ACCRINT('2/2/2012', '12/4/2013', '3/30/2012', 0.1, 1000, 2, 4, true)).to.approximately(16.11111111111111, 1e-9);
    expect(financial.ACCRINT('2/2/2012', '12/4/2013', '3/30/2012', 0.1, 1000, 4, 4, true)).to.approximately(16.11111111111111, 1e-9);
    expect(financial.ACCRINT('2/2/2012', '12/4/2013', '3/30/2012', 0.1, 1000, 1, 0, false)).to.approximately(16.11111111111111, 1e-9);
    expect(financial.ACCRINT('2/2/2012', '12/4/2013', '3/30/2012', 0.1, 1000, 2, 0, false)).to.approximately(16.11111111111111, 1e-9);
    expect(financial.ACCRINT('2/2/2012', '12/4/2013', '3/30/2012', 0.1, 1000, 4, 0, false)).to.approximately(16.11111111111111, 1e-9);
    expect(financial.ACCRINT('2/2/2012', '12/4/2013', '3/30/2012', 0.1, 1000, 1, 1, false)).to.approximately(15.573770491803279, 1e-9);
    expect(financial.ACCRINT('2/2/2012', '12/4/2013', '3/30/2012', 0.1, 1000, 2, 1, false)).to.approximately(15.573770491803279, 1e-9);
    expect(financial.ACCRINT('2/2/2012', '12/4/2013', '3/30/2012', 0.1, 1000, 4, 1, false)).to.approximately(15.573770491803279, 1e-9);
    expect(financial.ACCRINT('2/2/2012', '12/4/2013', '3/30/2012', 0.1, 1000, 1, 2, false)).to.approximately(15.833333333333332, 1e-9);
    expect(financial.ACCRINT('2/2/2012', '12/4/2013', '3/30/2012', 0.1, 1000, 2, 2, false)).to.approximately(15.833333333333332, 1e-9);
    expect(financial.ACCRINT('2/2/2012', '12/4/2013', '3/30/2012', 0.1, 1000, 4, 2, false)).to.approximately(15.833333333333332, 1e-9);
    expect(financial.ACCRINT('2/2/2012', '12/4/2013', '3/30/2012', 0.1, 1000, 1, 3, false)).to.approximately(15.616438356164384, 1e-9);
    expect(financial.ACCRINT('2/2/2012', '12/4/2013', '3/30/2012', 0.1, 1000, 2, 3, false)).to.approximately(15.616438356164384, 1e-9);
    expect(financial.ACCRINT('2/2/2012', '12/4/2013', '3/30/2012', 0.1, 1000, 4, 3, false)).to.approximately(15.616438356164384, 1e-9);
    expect(financial.ACCRINT('2/2/2012', '12/4/2013', '3/30/2012', 0.1, 1000, 1, 4, false)).to.approximately(16.11111111111111, 1e-9);
    expect(financial.ACCRINT('2/2/2012', '12/4/2013', '3/30/2012', 0.1, 1000, 2, 4, false)).to.approximately(16.11111111111111, 1e-9);
    expect(financial.ACCRINT('2/2/2012', '12/4/2013', '3/30/2012', 0.1, 1000, 4, 4, false)).to.approximately(16.11111111111111, 1e-9);
    expect(financial.ACCRINT('2/2/2012', '12/4/2013', '2/1/2012', 0.1, 1000, 4, 4, false)).toBe('#NUM!');
    expect(financial.ACCRINT('Hello World!', '3/30/2012', '12/4/2013', 0.1, 1000, 2, 0)).toBe('#VALUE!');
    expect(financial.ACCRINT('2/2/2012', 'Hello World!', '12/4/2013', 0.1, 1000, 2, 0)).toBe('#VALUE!');
    expect(financial.ACCRINT('2/2/2012', '3/30/2012', 'Hello World!', 0.1, 1000, 2, 0)).toBe('#VALUE!');
    expect(financial.ACCRINT('2/2/2012', '3/30/2012', '12/4/2013', 0, 1000, 2, 0)).toBe('#NUM!');
    expect(financial.ACCRINT('2/2/2012', '3/30/2012', '12/4/2013', -0.1, 1000, 2, 0)).toBe('#NUM!');
    expect(financial.ACCRINT('2/2/2012', '3/30/2012', '12/4/2013', 0.1, 0, 2, 0)).toBe('#NUM!');
    expect(financial.ACCRINT('2/2/2012', '3/30/2012', '12/4/2013', 0.1, -1000, 2, 0)).toBe('#NUM!');
    expect(financial.ACCRINT('2/2/2012', '3/30/2012', '12/4/2013', 0.1, 1000, 3, 0)).toBe('#NUM!');
    expect(financial.ACCRINT('2/2/2012', '3/30/2012', '12/4/2013', 0.1, 1000, 2, 5)).toBe('#NUM!');
  });

  // TODO: implement
  test('ACCRINTM', () => {
    expect(financial.ACCRINTM).toThrowError('ACCRINTM is not implemented');
  });

  // TODO: implement
  test('AMORDEGRC', () => {
    expect(financial.AMORDEGRC).toThrowError('AMORDEGRC is not implemented');
  });

  // TODO: implement
  test('AMORLINC', () => {
    expect(financial.AMORLINC).toThrowError('AMORLINC is not implemented');
  });

  // TODO: implement
  test('COUPDAYBS', () => {
    expect(financial.COUPDAYBS).toThrowError('COUPDAYBS is not implemented');
  });

  // TODO: implement
  test('COUPDAYS', () => {
    expect(financial.COUPDAYS).toThrowError('COUPDAYS is not implemented');
  });

  // TODO: implement
  test('COUPDAYSNC', () => {
    expect(financial.COUPDAYSNC).toThrowError('COUPDAYSNC is not implemented');
  });

  // TODO: implement
  test('COUPNCD', () => {
    expect(financial.COUPNCD).toThrowError('COUPNCD is not implemented');
  });

  // TODO: implement
  test('COUPNUM', () => {
    expect(financial.COUPNUM).toThrowError('COUPNUM is not implemented');
  });

  // TODO: implement
  test('COUPPCD', () => {
    expect(financial.COUPPCD).toThrowError('COUPPCD is not implemented');
  });

  test('CUMIPMT', () => {
    expect(financial.CUMIPMT(0.1 / 12, 30 * 12, 100000, 13, 24, 0)).to.approximately(-9916.77251395708, 1e-9);
    expect(financial.CUMIPMT(0.1 / 12, 30 * 12, 100000, 13, 24, 1)).to.approximately(-9834.815716321069, 1e-9);
    expect(financial.CUMIPMT(-0.1 / 12, 30 * 12, 100000, 13, 24, 0)).toBe(error.num);
    expect(financial.CUMIPMT(0.1 / 12, -30 * 12, 100000, 13, 24, 0)).toBe(error.num);
    expect(financial.CUMIPMT(0.1 / 12, 30 * 12, -100000, 13, 24, 0)).toBe(error.num);
    expect(financial.CUMIPMT(0.1 / 12, 30 * 12, 100000, 0, 24, 0)).toBe(error.num);
    expect(financial.CUMIPMT(0.1 / 12, 30 * 12, 100000, 13, 0, 0)).toBe(error.num);
    expect(financial.CUMIPMT(0.1 / 12, 30 * 12, 100000, 24, 13, 0)).toBe(error.num);
    expect(financial.CUMIPMT(0.1 / 12, 30 * 12, 100000, 13, 24, 2)).toBe(error.num);
    expect(financial.CUMIPMT(0.1 / 12, 30 * 12, 100000, 1, 24, 0)).to.approximately(-19891.752778759568, 1e-9);
    expect(financial.CUMIPMT('invalid', 30 * 12, 100000, 13, 24, 0)).toBe(error.value);
  });

  test('CUMPRINC', () => {
    expect(financial.CUMPRINC(0.1 / 12, 30 * 12, 100000, 13, 24, 0)).to.approximately(-614.0863271085149, 1e-9);
    expect(financial.CUMPRINC(0.1 / 12, 30 * 12, 100000, 13, 24, 1)).to.approximately(-609.0112334960476, 1e-9);
    expect(financial.CUMPRINC(-0.1 / 12, 30 * 12, 100000, 13, 24, 0)).toBe(error.num);
    expect(financial.CUMPRINC(0.1 / 12, -30 * 12, 100000, 13, 24, 0)).toBe(error.num);
    expect(financial.CUMPRINC(0.1 / 12, 30 * 12, -100000, 13, 24, 0)).toBe(error.num);
    expect(financial.CUMPRINC(0.1 / 12, 30 * 12, 100000, 0, 24, 0)).toBe(error.num);
    expect(financial.CUMPRINC(0.1 / 12, 30 * 12, 100000, 13, 0, 0)).toBe(error.num);
    expect(financial.CUMPRINC(0.1 / 12, 30 * 12, 100000, 24, 13, 0)).toBe(error.num);
    expect(financial.CUMPRINC(0.1 / 12, 30 * 12, 100000, 13, 24, 2)).toBe(error.num);
    expect(financial.CUMPRINC(0.1 / 12, 30 * 12, 100000, 1, 24, 0)).to.approximately(-1169.9649033716187, 1e-9);
    expect(financial.CUMPRINC(0.1 / 12, 30 * 12, 100000, 1, 24, 1)).to.approximately(-1986.7420529305305, 1e-9);
    expect(financial.CUMPRINC('invalid', 30 * 12, 100000, 1, 24, 1)).toBe(error.value);
  });

  test('DB', () => {
    expect(financial.DB(1000000, 100000, 6, 1)).toBe(319000);
    expect(financial.DB(1000000, 100000, 6, 2)).toBe(217239);
    expect(financial.DB(1000000, 100000, 6, 3)).to.approximately(147939.759, 1e-9);
    expect(financial.DB(1000000, 100000, 6, 4)).to.approximately(100746.97587900002, 1e-9);
    expect(financial.DB(1000000, 100000, 6, 5)).to.approximately(68608.690573599, 1e-9);
    expect(financial.DB(1000000, 100000, 6, 6)).to.approximately(46722.518280620934, 1e-9);
    expect(financial.DB(1000000, 100000, 6, 1, 6)).toBe(159500);
    expect(financial.DB(1000000, 100000, 6, 2, 6)).to.approximately(268119.5, 1e-9);
    expect(financial.DB(1000000, 100000, 6, 3, 6)).to.approximately(182589.3795, 1e-9);
    expect(financial.DB(1000000, 100000, 6, 4, 6)).to.approximately(124343.36743949998, 1e-9);
    expect(financial.DB(1000000, 100000, 6, 5, 6)).to.approximately(84677.83322629951, 1e-9);
    expect(financial.DB(1000000, 100000, 6, 6, 6)).to.approximately(57665.60442710997, 1e-9);
    expect(financial.DB(1000000, 100000, 6, 1, 9)).toBe(239250);
    expect(financial.DB(1000000, 100000, 6, 2, 9)).to.approximately(242679.25, 1e-9);
    expect(financial.DB(1000000, 100000, 6, 3, 9)).to.approximately(165264.56925, 1e-9);
    expect(financial.DB(1000000, 100000, 6, 4, 9)).to.approximately(112545.17165925002, 1e-9);
    expect(financial.DB(1000000, 100000, 6, 5, 9)).to.approximately(76643.26189994926, 1e-9);
    expect(financial.DB(1000000, 100000, 6, 6, 9)).to.approximately(52194.061353865436, 1e-9);
    expect(financial.DB('Hello World!', 100000, 6, 1, 6)).toBe(error.value);
    expect(financial.DB(1000000, 'Hello World!', 6, 1, 6)).toBe(error.value);
    expect(financial.DB(1000000, 100000, 'Hello World!', 1, 6)).toBe(error.value);
    expect(financial.DB(1000000, 100000, 6, 'Hello World!', 6)).toBe(error.value);
    expect(financial.DB(1000000, 100000, 6, 1, 'Hello World!')).toBe(error.value);
    expect(financial.DB(-1000000, 100000, 6, 1, 6)).toBe(error.num);
    expect(financial.DB(1000000, -100000, 6, 1, 6)).toBe(error.num);
    expect(financial.DB(1000000, 100000, -6, 1, 6)).toBe(error.num);
    expect(financial.DB(1000000, 100000, 6, -1, 6)).toBe(error.num);
    expect(financial.DB(1000000, 100000, 6, 1, -1)).toBe(error.num);
    expect(financial.DB(1000000, 100000, 6, 1, 13)).toBe(error.num);
    expect(financial.DB(1000000, 100000, 6, 7, 6)).toBe(error.num);
    expect(financial.DB(1000000, 1000000, 6, 1, 6)).toBe(0);
    expect(financial.DB(100000, 1000000, 6, 1, 6)).toBe(0);
  });

  test('DDB', () => {
    expect(financial.DDB(1000000, 100000, 6, 1)).to.approximately(333333.3333333333, 1e-9);
    expect(financial.DDB(1000000, 100000, 6, 2)).to.approximately(222222.22222222225, 1e-9);
    expect(financial.DDB(1000000, 100000, 6, 3)).to.approximately(148148.14814814815, 1e-9);
    expect(financial.DDB(1000000, 100000, 6, 4)).to.approximately(98765.43209876546, 1e-9);
    expect(financial.DDB(1000000, 100000, 6, 5)).to.approximately(65843.62139917696, 1e-9);
    expect(financial.DDB(1000000, 100000, 6, 6)).to.approximately(31687.242798353895, 1e-9);
    expect(financial.DDB(1000000, 100000, 6, 1, 1.5)).toBe(250000);
    expect(financial.DDB(1000000, 100000, 6, 2, 1.5)).toBe(187500);
    expect(financial.DDB(1000000, 100000, 6, 3, 1.5)).toBe(140625);
    expect(financial.DDB(1000000, 100000, 6, 4, 1.5)).to.approximately(105468.75, 1e-9);
    expect(financial.DDB(1000000, 100000, 6, 5, 1.5)).to.approximately(79101.5625, 1e-9);
    expect(financial.DDB(1000000, 100000, 6, 6, 1.5)).to.approximately(59326.171875, 1e-9);
    expect(financial.DDB('Hello World!', 100000, 6, 6, 1.5)).toBe(error.value);
    expect(financial.DDB(1000000, 'Hello World!', 6, 6, 1.5)).toBe(error.value);
    expect(financial.DDB(1000000, 100000, 'Hello World!', 6, 1.5)).toBe(error.value);
    expect(financial.DDB(1000000, 100000, 6, 'Hello World!', 1.5)).toBe(error.value);
    expect(financial.DDB(1000000, 100000, 6, 6, 'Hello World!')).toBe(error.value);
    expect(financial.DDB(-1000000, 100000, 6, 1, 1.5)).toBe(error.num);
    expect(financial.DDB(1000000, -100000, 6, 1, 1.5)).toBe(error.num);
    expect(financial.DDB(1000000, 100000, -6, 1, 1.5)).toBe(error.num);
    expect(financial.DDB(1000000, 100000, 6, -1, 1.5)).toBe(error.num);
    expect(financial.DDB(1000000, 100000, 6, 1, -1.5)).toBe(error.num);
    expect(financial.DDB(1000000, 100000, 6, 1, 0)).toBe(error.num);
    expect(financial.DDB(1000000, 100000, 6, 7, 1.5)).toBe(error.num);
    expect(financial.DDB(1000000, 1000000, 6, 1, 1.5)).toBe(0);
    expect(financial.DDB(100000, 1000000, 6, 1, 1.5)).toBe(0);
  });

  // TODO: implement
  test('DISC', () => {
    expect(financial.DISC).toThrowError('DISC is not implemented');
  });

  test('DOLLARDE', () => {
    expect(financial.DOLLARDE(1.1, 1)).to.approximately(1.1, 1e-9);
    expect(financial.DOLLARDE(1.1, 2)).to.approximately(1.5, 1e-9);
    expect(financial.DOLLARDE(1.1, 4)).to.approximately(1.25, 1e-9);
    expect(financial.DOLLARDE(1.1, 8)).to.approximately(1.125, 1e-9);
    expect(financial.DOLLARDE(1.1, 16)).to.approximately(1.625, 1e-9);
    expect(financial.DOLLARDE(1.1, 32)).to.approximately(1.3125, 1e-9);
    expect(financial.DOLLARDE(-1.1, 1)).to.approximately(-1.1, 1e-9);
    expect(financial.DOLLARDE(-1.1, 2)).to.approximately(-1.5, 1e-9);
    expect(financial.DOLLARDE(-1.1, 4)).to.approximately(-1.25, 1e-9);
    expect(financial.DOLLARDE(-1.1, 8)).to.approximately(-1.125, 1e-9);
    expect(financial.DOLLARDE(-1.1, 16)).to.approximately(-1.625, 1e-9);
    expect(financial.DOLLARDE(-1.1, 32)).to.approximately(-1.3125, 1e-9);
    expect(financial.DOLLARDE(1.1, 1.5)).to.approximately(1.1, 1e-9);
    expect(financial.DOLLARDE('Hello World!', 1)).toBe(error.value);
    expect(financial.DOLLARDE(1.1, 'Hello World!')).toBe(error.value);
    expect(financial.DOLLARDE(1.1, -1)).toBe(error.num);
    expect(financial.DOLLARDE(1.1, 0.5)).toBe(error.div0);
  });

  test('DOLLARFR', () => {
    expect(financial.DOLLARFR(1.1, 1)).to.approximately(1.1, 1e-9);
    expect(financial.DOLLARFR(1.5, 2)).to.approximately(1.1, 1e-9);
    expect(financial.DOLLARFR(1.25, 4)).to.approximately(1.1, 1e-9);
    expect(financial.DOLLARFR(1.125, 8)).to.approximately(1.1, 1e-9);
    expect(financial.DOLLARFR(1.625, 16)).to.approximately(1.1, 1e-9);
    expect(financial.DOLLARFR(1.3125, 32)).to.approximately(1.1, 1e-9);
    expect(financial.DOLLARFR(-1.1, 1)).to.approximately(-1.1, 1e-9);
    expect(financial.DOLLARFR(-1.5, 2)).to.approximately(-1.1, 1e-9);
    expect(financial.DOLLARFR(-1.25, 4)).to.approximately(-1.1, 1e-9);
    expect(financial.DOLLARFR(-1.125, 8)).to.approximately(-1.1, 1e-9);
    expect(financial.DOLLARFR(-1.625, 16)).to.approximately(-1.1, 1e-9);
    expect(financial.DOLLARFR(-1.3125, 32)).to.approximately(-1.1, 1e-9);
    expect(financial.DOLLARFR(-1.1, 1.5)).to.approximately(-1.1, 1e-9);
    expect(financial.DOLLARFR('Hello World!', 1)).toBe(error.value);
    expect(financial.DOLLARFR(1.5, 'Hello World!')).toBe(error.value);
    expect(financial.DOLLARFR(1.5, -1)).toBe(error.num);
    expect(financial.DOLLARFR(1.5, 0.5)).toBe(error.div0);
  });

  // TODO: implement
  test('DURATION', () => {
    expect(financial.DURATION).toThrowError('DURATION is not implemented');
  });

  test('EFFECT', () => {
    expect(financial.EFFECT(0.1, 4)).to.approximately(0.10381289062499977, 1e-9);
    expect(financial.EFFECT(0.1, 4.5)).to.approximately(0.10381289062499977, 1e-9);
    expect(financial.EFFECT('Hello', 4)).toBe(error.value);
    expect(financial.EFFECT(0.1, 'World')).toBe(error.value);
    expect(financial.EFFECT(-0.1, 4)).toBe(error.num);
    expect(financial.EFFECT(0.1, 0.5)).toBe(error.num);
  });

  test('FV', () => {
    expect(financial.FV(0.06 / 12, 10, -200, -500, 1)).to.approximately(2581.4033740601185, 1e-9);
    expect(financial.FV(0.12 / 12, 12, -1000)).to.approximately(12682.503013196976, 1e-9);
    expect(financial.FV(0.11 / 12, 35, -2000, undefined, 1)).to.approximately(82846.24637190053, 1e-9);
    expect(financial.FV(0.06 / 12, 12, -100, -1000, 1)).to.approximately(2301.4018303408993, 1e-9);
    expect(financial.FV(0, 12, -100, -1000, 1)).toBe(2200);
    expect(financial.FV('invalid', 12, -100, -1000, 1)).toBe(error.value);
  });

  test('FVSCHEDULE', () => {
    expect(financial.FVSCHEDULE(100, [0.09, 0.1, 0.11])).to.approximately(133.08900000000003, 1e-9);
    expect(financial.FVSCHEDULE(100, ['Hello World!', 0.1, 0.11])).toBe(error.value);
  });

  // TODO: implement
  test('INTRATE', () => {
    expect(financial.INTRATE).toThrowError('INTRATE is not implemented');
  });

  test('IPMT', () => {
    expect(financial.IPMT(0.1 / 12, 6, 2 * 12, 100000, 1000000, 0)).to.approximately(928.8235718400465, 1e-9);
    expect(financial.IPMT(0.1 / 12, 6, 2 * 12, 100000, 1000000, 1)).to.approximately(921.1473439736042, 1e-9);
    expect(financial.IPMT(0.1 / 12, 1, 2 * 12, 100000, 1000000, 1)).toBe(0);
    expect(financial.IPMT(0.1 / 12, 1, 2 * 12, 100000, 1000000, 0)).to.approximately(-833.3333333333334, 1e-9);
    expect(financial.IPMT('invalid', 1, 2 * 12, 100000, 1000000, 1)).toBe(error.value);
  });

  test('IRR', () => {
    expect(financial.IRR([-75000, 12000, 15000, 18000, 21000, 24000])).to.approximately(0.05715142887178467, 1e-9);
    expect(financial.IRR([
      [-75000, 12000],
      [15000, 18000],
      [21000, 24000]
    ])).to.approximately(0.05715142887178467, 1e-9);
    expect(financial.IRR([-75000, 12000, 15000, 18000, 21000, 24000], 0.1)).to.approximately(0.05715142887178467, 1e-9);
    expect(financial.IRR([-75000, 12000, 15000, 18000, 21000, 24000], 0.075)).to.approximately(0.05715142887178447, 1e-9);
    expect(financial.IRR([-75000, 12000, 15000, 18000, 21000, 24000], 0.05)).to.approximately(0.05715142887178453, 1e-9);
    expect(financial.IRR([12000, 15000, 18000, 21000, 24000])).toBe(error.num);
    expect(financial.IRR([-12000, -15000, -18000, -21000, -24000])).toBe(error.num);
    expect(financial.IRR([-12000, -15000, -18000, -21000, -24000], 'invalid')).toBe(error.value);
  });

  test('ISPMT', () => {
    expect(financial.ISPMT(0.1 / 12, 6, 2 * 12, 100000)).toBe(-625);
    expect(financial.ISPMT('invalid', 6, 2 * 12, 100000)).toBe(error.value);
  });

  // TODO: implement
  test('MDURATION', () => {
    expect(financial.MDURATION).toThrowError('MDURATION is not implemented');
  });

  test('MIRR', () => {
    expect(financial.MIRR([-75000, 12000, 15000, 18000, 21000, 24000], 0.1, 0.12)).to.approximately(0.07971710360838036, 1e-9);
    expect(financial.MIRR([-75000, 12000, 15000, 18000, 21000, 24000], 'invalid', 0.12)).toBe(error.value);
  });

  test('NOMINAL', () => {
    expect(financial.NOMINAL(0.1, 4)).to.approximately(0.09645475633778045, 1e-9);
    expect(financial.NOMINAL(0.1, 4.5)).to.approximately(0.09645475633778045, 1e-9);
    expect(financial.NOMINAL('Hello', 4)).toBe(error.value);
    expect(financial.NOMINAL(0.1, 'World')).toBe(error.value);
    expect(financial.NOMINAL(-0.1, 4)).toBe(error.num);
    expect(financial.NOMINAL(0.1, 0.5)).toBe(error.num);
  });

  test('NPER', () => {
    expect(financial.NPER(0.1 / 12, -100, -1000, 10000, 0)).to.approximately(63.39385422740764, 1e-9);
    expect(financial.NPER(0.1 / 12, -100, -1000, 10000, 1)).to.approximately(63.016966422019685, 1e-9);
    expect(financial.NPER(0.1 / 12, -100, -1000, 10000)).to.approximately(63.39385422740764, 1e-9);
    expect(financial.NPER(0.1 / 12, -100, -1000)).to.approximately(-9.645090919837394, 1e-9);
    expect(financial.NPER('invalid', -100, -1000)).toBe(error.value);
  });

  test('NPV', () => {
    expect(financial.NPV(0.1, -10000, 2000, 4000, 8000)).to.approximately(1031.3503176012546, 1e-9);
    expect(financial.NPV(0.1, [-10000, 2000, 4000, 8000])).to.approximately(1031.3503176012546, 1e-9);
    expect(financial.NPV(0.1, [-75000])).to.approximately(-68181.81818181818, 1e-9);
    expect(financial.NPV(0.12, [12000, 15000, 18000, 21000, 24000])).to.approximately(62448.362521940246, 1e-9);
    expect(financial.NPV('invalid', [12000, 15000, 18000, 21000, 24000])).toBe(error.value);
  });

  // TODO: implement
  test('ODDFPRICE', () => {
    expect(financial.ODDFPRICE).toThrowError('ODDFPRICE is not implemented');
  });

  // TODO: implement
  test('ODDFYIELD', () => {
    expect(financial.ODDFYIELD).toThrowError('ODDFYIELD is not implemented');
  });

  // TODO: implement
  test('ODDLPRICE', () => {
    expect(financial.ODDLPRICE).toThrowError('ODDLPRICE is not implemented');
  });

  // TODO: implement
  test('ODDLYIELD', () => {
    expect(financial.ODDLYIELD).toThrowError('ODDLYIELD is not implemented');
  });

  test('PDURATION', () => {
    expect(financial.PDURATION(0.1, 1000, 2000)).to.approximately(7.272540897341714, 1e-9);
    expect(financial.PDURATION('Hello World!', 1000, 2000)).toBe(error.value);
    expect(financial.PDURATION(0.1, 'Hello World!', 2000)).toBe(error.value);
    expect(financial.PDURATION(0.1, 1000, 'Hello World!')).toBe(error.value);
    expect(financial.PDURATION(0, 1000, 2000)).toBe(error.num);
    expect(financial.PDURATION(-0.1, 1000, 2000)).toBe(error.num);
  });

  test('PMT', () => {
    expect(financial.PMT(0.06 / 12, 18 * 12, 0, 50000)).to.approximately(-129.0811608679973, 1e-9);
    expect(financial.PMT(0.1 / 12, 2 * 12, 100000, 1000000, 1)).to.approximately(-42075.45683100995, 1e-9);
    expect(financial.PMT(0.1 / 12, 2 * 12, 100000, 1000000)).to.approximately(-42426.08563793503, 1e-9);
    expect(financial.PMT(0.1 / 12, 2 * 12, 0, 1000000)).to.approximately(-37811.59300418336, 1e-9);
    expect(financial.PMT(0.1 / 12, 2 * 12, 100000)).to.approximately(-4614.49263375167, 1e-9);
    expect(financial.PMT(0, 2 * 12, 100000)).to.approximately(-4166.666666666667, 1e-9);
    expect(financial.PMT('invalid', 2 * 12, 100000)).toBe(error.value);
  });

  test('PPMT', () => {
    expect(financial.PPMT(0.1 / 12, 1, 2 * 12, 2000)).to.approximately(-75.62318600836673, 10e-9);
    expect(financial.PPMT(0.08, 10, 10, 200000)).to.approximately(-27598.05346242135, 10e-9);
    expect(financial.PPMT(0.1 / 12, 6, 2 * 12, 100000, 1000000, 0)).to.approximately(-43354.909209775076, 1e-9);
    expect(financial.PPMT(0.1 / 12, 6, 2 * 12, 100000, 1000000, 1)).to.approximately(-42996.60417498356, 1e-9);
    expect(financial.PPMT(0.1 / 12, 6, 2 * 12, 100000, 1000000)).to.approximately(-43354.909209775076, 1e-9);
    expect(financial.PPMT(0.1 / 12, 6, 2 * 12, 0, 1000000)).to.approximately(-39413.55382706825, 1e-9);
    expect(financial.PPMT(0.1 / 12, 6, 2 * 12, 100000)).to.approximately(-3941.355382706826, 1e-9);
    expect(financial.PPMT('invalid', 6, 2 * 12, 100000)).toBe(error.value);
  });

  // TODO: implement
  test('PRICE', () => {
    expect(financial.PRICE).toThrowError('PRICE is not implemented');
  });

  // TODO: implement
  test('PRICEDISC', () => {
    expect(financial.PRICEDISC).toThrowError('PRICEDISC is not implemented');
  });

  // TODO: implement
  test('PRICEMAT', () => {
    expect(financial.PRICEMAT).toThrowError('PRICEMAT is not implemented');
  });

  test('PV', () => {
    expect(financial.PV(0.1 / 12, 2 * 12, 1000, 10000, 0)).to.approximately(-29864.950264779152, 1e-9);
    expect(financial.PV(0.1 / 12, 2 * 12, 1000, 10000, 1)).to.approximately(-30045.54072173169, 1e-9);
    expect(financial.PV(0, 2 * 12, 1000, 10000, 1)).toBe(-34000);
    expect(financial.PV('invalid', 2 * 12, 1000, 10000, 1)).toBe(error.value);
  });

  test('RATE', () => {
    expect(financial.RATE(2 * 12, -1000, -10000, 100000)).to.approximately(0.06517891177181546, 1e-9);
    expect(financial.RATE(2 * 12, -1000, -10000, 100000, 0, 0.1)).to.approximately(0.06517891177181533, 1e-9);
    expect(financial.RATE(2 * 12, -1000, -10000, 100000, 0, 0.75)).to.approximately(0.0651789117718154, 1e-9);
    expect(financial.RATE(2 * 12, -1000, -10000, 100000, 0, 0.065)).to.approximately(0.06517891177181524, 1e-9);
    expect(financial.RATE(2 * 12, -1000, -10000, 100000, 1, 0.1)).to.approximately(0.0632395800018064, 1e-9);
    expect(financial.RATE(2 * 12, -1000, -10000, 100000, 1, 1e-14)).to.approximately(-2.2949415145819036e-14, 1e-9);
    expect(financial.RATE('invalid', -1000, -10000, 100000, 1, 1e-11)).toBe(error.value);
  });

  // TODO: implement
  test('RECEIVED', () => {
    expect(financial.RECEIVED).toThrowError('RECEIVED is not implemented');
  });

  test('RRI', () => {
    expect(financial.RRI(8, 10000, 11000)).to.approximately(0.011985024140399592, 1e-9);
    expect(financial.RRI(NaN, 10000, 11000)).toBe(error.value);
    expect(financial.RRI(0, 10000, 11000)).toBe(error.num);
  });

  test('SLN', () => {
    expect(financial.SLN(30000, 7500, 10)).toBe(2250);
    expect(financial.SLN(NaN, 7500, 10)).toBe(error.value);
    expect(financial.SLN(30000, 7500, 0)).toBe(error.num);
  });

  test('SYD', () => {
    expect(financial.SYD(30, 7, 10, 1)).to.approximately(4.181818181818182, 1e-9);
    expect(financial.SYD(NaN, 7, 10, 1)).toBe(error.value);
    expect(financial.SYD(30, 7, 0, 1)).toBe(error.num);
    expect(financial.SYD(30, 7, 10, 11)).toBe(error.num);
  });

  test('TBILLEQ', () => {
    expect(financial.TBILLEQ('03/31/2008', '06/01/2008', 0.0914)).to.approximately(0.09412721351734614, 1e-9);
    expect(financial.TBILLEQ('invalid date', '06/01/2008', 0.0914)).toBe(error.value);
    expect(financial.TBILLEQ('03/31/2008', '06/01/2008', 0)).toBe(error.num);
    expect(financial.TBILLEQ('09/31/2008', '06/01/2008', 0.0914)).toBe(error.num);
    expect(financial.TBILLEQ('03/31/2008', '06/01/2009', 0.0914)).toBe(error.num);
  });

  test('TBILLPRICE', () => {
    expect(financial.TBILLPRICE('03/31/2008', '06/01/2008', 0.0914)).to.approximately(98.45127777777778, 1e-9);
    expect(financial.TBILLPRICE('invalid date', '06/01/2008', 0.0914)).toBe(error.value);
    expect(financial.TBILLPRICE('03/31/2008', '06/01/2008', 0)).toBe(error.num);
    expect(financial.TBILLPRICE('09/31/2008', '06/01/2008', 0.0914)).toBe(error.num);
    expect(financial.TBILLPRICE('03/31/2008', '06/01/2009', 0.0914)).toBe(error.num);
  });

  test('TBILLYIELD', () => {
    expect(financial.TBILLYIELD('03/31/2008', '06/01/2008', 98.45127777777778)).to.approximately(0.09283779963354702, 1e-9);
    expect(financial.TBILLYIELD('invalid date', '06/01/2008', 0.0914)).toBe(error.value);
    expect(financial.TBILLYIELD('03/31/2008', '06/01/2008', 0)).toBe(error.num);
    expect(financial.TBILLYIELD('09/31/2008', '06/01/2008', 0.0914)).toBe(error.num);
    expect(financial.TBILLYIELD('03/31/2008', '06/01/2009', 0.0914)).toBe(error.num);
  });

  // TODO: implement
  test('VDB', () => {
    expect(financial.VDB).toThrowError('VDB is not implemented');
  });

  test('XIRR', () => {
    const values = [-10000,
      2750,
      4250,
      3250,
      2750
    ];
    const dates = [
      '01/jan/08',
      '01/mar/08',
      '30/oct/08',
      '15/feb/09',
      '01/apr/09'
    ];
    expect(financial.XIRR(values, dates, 0.1)).to.approximately(0.373374019797564, 1e-4);

    // all positive
    values[0] = -values[0];
    expect(financial.XIRR(values, dates, 0.1)).toBe(error.num);
    expect(financial.XIRR(values, dates, 'invalid')).toBe(error.value);
  });

  test('XNPV', () => {
    const values = [-10000,
      2750,
      4250,
      3250,
      2750
    ];
    const dates = [
      '01/01/2008',
      '03/01/2008',
      '10/30/2008',
      '02/15/2009',
      '04/01/2009'
    ];
    expect(financial.XNPV(0.09, values, dates)).to.approximately(2086.6718943024616, 1e-1);
    expect(financial.XNPV('invalid', values, dates)).toBe(error.value);
  });

  // TODO: implement
  test('YIELD', () => {
    expect(financial.YIELD).toThrowError('YIELD is not implemented');
  });

  // TODO: implement
  test('YIELDDISC', () => {
    expect(financial.YIELDDISC).toThrowError('YIELDDISC is not implemented');
  });

  // TODO: implement
  test('YIELDMAT', () => {
    expect(financial.YIELDMAT).toThrowError('YIELDMAT is not implemented');
  });
});
