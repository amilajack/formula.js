
import mathTrig from '../lib/math-trig';

import error from '../lib/error';

describe('Math & Trig', () => {
  test('ABS', () => {
    expect(mathTrig.ABS(-1)).toBe(1);
    expect(mathTrig.ABS('invalid')).toBe(error.value);
  });

  test('ACOS', () => {
    expect(mathTrig.ACOS(1)).toBe(0);
    expect(mathTrig.ACOS('invalid')).toBe(error.value);
  });

  test('ACOSH', () => {
    expect(mathTrig.ACOSH(1)).toBe(0);
    expect(mathTrig.ACOSH('invalid')).toBe(error.value);
  });

  test('ACOT', () => {
    expect(mathTrig.ACOT(1)).to.approximately(0.7853981633974483, 1e-9);
    expect(mathTrig.ACOT('invalid')).toBe(error.value);
  });

  test('ACOTH', () => {
    expect(mathTrig.ACOTH(1)).toBe(Infinity);
    expect(mathTrig.ACOTH('invalid')).toBe(error.value);
  });

  test('ADD', () => {
    expect(mathTrig.ADD(10, 4)).toBe(14);
    expect(mathTrig.ADD(1.2, 4)).toBe(5.2);
    expect(mathTrig.ADD()).toBe(error.na);
    expect(mathTrig.ADD(1)).toBe(error.na);
    expect(mathTrig.ADD(1, 'string')).toBe(error.value);
  });


  // TODO: more edge cases, explore the second argument (options)
  test('AGGREGATE', () => {
    expect(mathTrig.AGGREGATE(1, 4, [1, 2, 3])).toBe(2);
    expect(mathTrig.AGGREGATE(2, 4, [1, 2, 3, 'does not count'])).toBe(3);
    expect(mathTrig.AGGREGATE(3, 4, [1, 2, 3, 'counts'])).toBe(4);
    expect(mathTrig.AGGREGATE(4, 4, [1, 2, 3])).toBe(3);
    expect(mathTrig.AGGREGATE(5, 4, [1, 2, 3])).toBe(1);
    expect(mathTrig.AGGREGATE(6, 4, [1, 2, 3])).toBe(6);
    expect(mathTrig.AGGREGATE(7, 4, [1, 2, 3])).toBe(1);
    expect(mathTrig.AGGREGATE(8, 4, [1, 2, 3])).to.approximately(0.816496580927726, 1e-9);
    expect(mathTrig.AGGREGATE(9, 4, [1, 2, 3])).toBe(6);
    expect(mathTrig.AGGREGATE(10, 4, [1, 2, 3])).toBe(1);
    expect(mathTrig.AGGREGATE(11, 4, [1, 2, 3])).to.approximately(0.6666666666666666, 1e-9);
    expect(mathTrig.AGGREGATE(12, 4, [1, 2, 3])).toBe(2);
    expect(mathTrig.AGGREGATE(13, 4, [1, 2, 3])).toBe(1);
    expect(mathTrig.AGGREGATE(14, 4, [1, 2, 3], 2)).toBe(2);
    expect(mathTrig.AGGREGATE(15, 4, [1, 2, 3], 2)).toBe(2);
    expect(mathTrig.AGGREGATE(16, 4, [1, 2, 3], 0.4)).to.approximately(1.8, 1e-9);
    expect(mathTrig.AGGREGATE(17, 4, [1, 2, 3], 2)).toBe(2);
    expect(mathTrig.AGGREGATE(18, 4, [1, 2, 3], 0.4)).to.approximately(1.6, 1e-9);
    expect(mathTrig.AGGREGATE(19, 4, [1, 2, 3], 2)).toBe(2);
    expect(mathTrig.AGGREGATE('invalid', 4, [1, 2, 3], 2)).toBe(error.value);
  });

  test('ARABIC', () => {
    expect(mathTrig.ARABIC('X')).toBe(10);
    expect(mathTrig.ARABIC('ABC')).toBe(error.value);
  });

  test('ASIN', () => {
    expect(mathTrig.ASIN(0.5)).to.approximately(0.5235987755982989, 1e-9);
    expect(mathTrig.ASIN('invalid')).toBe(error.value);
  });

  test('ASINH', () => {
    expect(mathTrig.ASINH(0.5)).to.approximately(0.48121182505960347, 1e-9);
    expect(mathTrig.ASINH('invalid')).toBe(error.value);
  });

  test('ATAN', () => {
    expect(mathTrig.ATAN(1)).to.approximately(0.7853981633974483, 1e-9);
    expect(mathTrig.ATAN('invalid')).toBe(error.value);
  });

  test('ATAN2', () => {
    expect(mathTrig.ATAN2(1, 1)).to.approximately(0.7853981633974483, 1e-9);
    expect(mathTrig.ATAN2(1, 'invalid')).toBe(error.value);
  });

  test('ATANH', () => {
    expect(mathTrig.ATANH(1)).toBe(Infinity);
    expect(mathTrig.ATANH('invalid')).toBe(error.value);
  });

  test('BASE', () => {
    expect(mathTrig.BASE(7, 2)).toBe('111');
    expect(mathTrig.BASE(400, 10, 10)).toBe('0000000400');
    expect(mathTrig.BASE('invalid', 10, 10)).toBe(error.value);
  });

  test('CEILING', () => {
    expect(mathTrig.CEILING(4.1)).toBe(5);
    expect(mathTrig.CEILING(4.9)).toBe(5);
    expect(mathTrig.CEILING(-4.1)).toBe(-4);
    expect(mathTrig.CEILING(-4.9)).toBe(-4);
    expect(mathTrig.CEILING(4.1, 0)).toBe(0);
    expect(mathTrig.CEILING(4.1, 1)).toBe(5);
    expect(mathTrig.CEILING(4.1, 2)).toBe(6);
    expect(mathTrig.CEILING(-4.1, 2)).toBe(-4);
    expect(mathTrig.CEILING(-4.1, -2)).toBe(-4);
    expect(mathTrig.CEILING(1.234, 0.1)).to.approximately(1.3, 1e-9);
    expect(mathTrig.CEILING(-1.234, 0.1)).to.approximately(-1.2, 1e-9);
    expect(mathTrig.CEILING(-1.234, -0.1)).to.approximately(-1.2, 1e-9);
    expect(mathTrig.CEILING(-1.234, -0.01)).to.approximately(-1.23, 1e-9);
    expect(mathTrig.CEILING(-1.234, -0.001)).to.approximately(-1.234, 1e-9);
    expect(mathTrig.CEILING(-4.1, 2, 0)).toBe(-4);
    expect(mathTrig.CEILING(-4.1, 2, -1)).toBe(-6);
    expect(mathTrig.CEILING(-4.1, -2, 0)).toBe(-4);
    expect(mathTrig.CEILING(-4.1, -2, -1)).toBe(-6);
    expect(mathTrig.CEILING(-4.1, -2, 'invalid')).toBe(error.value);
  });

  test('CEILING.MATH', () => {
    expect(mathTrig.CEILING.MATH(24.3, 5)).toBe(25);
    expect(mathTrig.CEILING.MATH(6.7)).toBe(7);
    expect(mathTrig.CEILING.MATH(-8.1, 2)).toBe(-8);
    expect(mathTrig.CEILING.MATH(-5.5, 2, -1)).toBe(-6);
    expect(mathTrig.CEILING.MATH(-5.5, 2, 'invalid')).toBe(error.value);
  });

  test('CEILING.PRECISE', () => {
    expect(mathTrig.CEILING.PRECISE(4.3)).toBe(5);
    expect(mathTrig.CEILING.PRECISE(-4.3)).toBe(-4);
    expect(mathTrig.CEILING.PRECISE(4.3, 2)).toBe(6);
    expect(mathTrig.CEILING.PRECISE(4.3, -2)).toBe(6);
    expect(mathTrig.CEILING.PRECISE(-4.3, 2)).toBe(-4);
    expect(mathTrig.CEILING.PRECISE(-4.3, -2)).toBe(-4);
    expect(mathTrig.CEILING.PRECISE(-4.3, 'invalid')).toBe(error.value);
  });

  test('COMBIN', () => {
    expect(mathTrig.COMBIN(0, 0)).toBe(1);
    expect(mathTrig.COMBIN(1, 0)).toBe(1);
    expect(mathTrig.COMBIN(1, 1)).toBe(1);
    expect(mathTrig.COMBIN(2, 1)).toBe(2);
    expect(mathTrig.COMBIN(2, 2)).toBe(1);
    expect(mathTrig.COMBIN(3, 1)).toBe(3);
    expect(mathTrig.COMBIN(3, 2)).toBe(3);
    expect(mathTrig.COMBIN(3, 3)).toBe(1);
    expect(mathTrig.COMBIN(10, 3)).toBe(120);
    expect(mathTrig.COMBIN(10, 'invalid')).toBe(error.value);
  });

  test('COMBINA', () => {
    expect(mathTrig.COMBINA(0, 0)).toBe(1);
    expect(mathTrig.COMBINA(1, 0)).toBe(1);
    expect(mathTrig.COMBINA(1, 1)).toBe(1);
    expect(mathTrig.COMBINA(2, 1)).toBe(2);
    expect(mathTrig.COMBINA(2, 2)).toBe(3);
    expect(mathTrig.COMBINA(3, 1)).toBe(3);
    expect(mathTrig.COMBINA(3, 2)).toBe(6);
    expect(mathTrig.COMBINA(3, 3)).toBe(10);
    expect(mathTrig.COMBINA(10, 3)).toBe(220);
    expect(mathTrig.COMBINA(10, 'invalid')).toBe(error.value);
  });

  test('COS', () => {
    expect(mathTrig.COS(0)).toBe(1);
    expect(mathTrig.COS('invalid')).toBe(error.value);
  });

  test('COSH', () => {
    expect(mathTrig.COSH(0)).toBe(1);
    expect(mathTrig.COSH('invalid')).toBe(error.value);
  });

  test('COT', () => {
    expect(mathTrig.COT(1)).to.approximately(0.6420926159343306, 1e-9);
    expect(mathTrig.COT('invalid')).toBe(error.value);
  });

  test('COTH', () => {
    expect(mathTrig.COTH(1)).to.approximately(1.3130352854993312, 1e-9);
    expect(mathTrig.COTH('invalid')).toBe(error.value);
  });

  test('CSC', () => {
    expect(mathTrig.CSC(0)).toBe(Infinity);
    expect(mathTrig.CSC('invalid')).toBe(error.value);
  });

  test('CSCH', () => {
    expect(mathTrig.CSCH(0)).toBe(Infinity);
    expect(mathTrig.CSCH('invalid')).toBe(error.value);
  });

  test('DECIMAL', () => {
    expect(mathTrig.DECIMAL()).toBe(error.value);
    expect(mathTrig.DECIMAL(10.5)).toBe(10);
    expect(mathTrig.DECIMAL('0', 2)).toBe(0);
    expect(mathTrig.DECIMAL('1', 2)).toBe(1);
    expect(mathTrig.DECIMAL('10', 2)).toBe(2);
    expect(mathTrig.DECIMAL('10', 10)).toBe(10);
    expect(mathTrig.DECIMAL('FF', 16)).toBe(255);
    expect(mathTrig.DECIMAL('ZZ', 36)).toBe(1295);
    expect(mathTrig.DECIMAL('invalid')).toBeNaN();
  });

  test('DEGREES', () => {
    expect(mathTrig.DEGREES(Math.PI)).toBe(180);
    expect(mathTrig.DEGREES('invalid')).toBe(error.value);
  });

  test('DIVIDE', () => {
    expect(mathTrig.DIVIDE(10, 4)).toBe(2.5);
    expect(mathTrig.DIVIDE(12, -6)).toBe(-2);
    expect(mathTrig.DIVIDE(0, 0)).toBe(error.div0);
    expect(mathTrig.DIVIDE(1, 0)).toBe(error.div0);
    expect(mathTrig.DIVIDE(0, 1)).toBe(0);
    expect(mathTrig.DIVIDE()).toBe(error.na);
    expect(mathTrig.DIVIDE(1)).toBe(error.na);
    expect(mathTrig.DIVIDE(1, 'string')).toBe(error.value);
  });

  test('EVEN', () => {
    expect(mathTrig.EVEN(3)).toBe(4);
    expect(mathTrig.EVEN('invalid')).toBe(error.value);
  });

  test('EQ', () => {
    expect(mathTrig.EQ(10, 10)).toBe(true);
    expect(mathTrig.EQ(1.2, 1.2)).toBe(true);
    expect(mathTrig.EQ('hello', 'jim')).toBe(false);
    expect(mathTrig.EQ('hello', 'hello')).toBe(true);
    expect(mathTrig.EQ(123, 'hello')).toBe(false);
    expect(mathTrig.EQ(true, true)).toBe(true);
    expect(mathTrig.EQ(false, false)).toBe(true);
    expect(mathTrig.EQ(false, 0)).toBe(false);
    expect(mathTrig.EQ()).toBe(error.na);
    expect(mathTrig.EQ(1)).toBe(error.na);
    expect(mathTrig.EQ(1, 'string')).toBe(false);
  });

  test('FACT', () => {
    expect(mathTrig.FACT(6)).toBe(720);
    expect(mathTrig.FACT('invalid')).toBe(error.value);
  });

  test('FACTDOUBLE', () => {
    expect(mathTrig.FACTDOUBLE(10)).toBe(3840);
    expect(mathTrig.FACTDOUBLE('invalid')).toBe(error.value);
  });

  test('FLOOR', () => {
    expect(mathTrig.FLOOR(3.7, 2)).toBe(2);
    expect(mathTrig.FLOOR(-2.5, -2)).toBe(-2);
    expect(mathTrig.FLOOR(2.5, -2)).toBe(error.num);
    expect(mathTrig.FLOOR(1.58, 0.1)).to.approximately(1.5, 1e-9);
    expect(mathTrig.FLOOR(0.234, 0.01)).to.approximately(0.23, 1e-9);
    expect(mathTrig.FLOOR(0.234, 0)).toBe(0);
    expect(mathTrig.FLOOR('invalid', 0)).toBe(error.value);
  });

  test('FLOOR.PRECISE', () => {
    expect(mathTrig.FLOOR.PRECISE(2014.6, 0.2)).toBe(2014.4);
    expect(mathTrig.FLOOR.PRECISE(-3.2, -1)).toBe(-4);
    expect(mathTrig.FLOOR.PRECISE(3.2, 1)).toBe(3);
    expect(mathTrig.FLOOR.PRECISE(-3.2, 1)).toBe(-4);
    expect(mathTrig.FLOOR.PRECISE(3.2, -1)).toBe(3);
    expect(mathTrig.FLOOR.PRECISE(3.2)).toBe(3);
  });

  test('FLOOR.MATH', () => {
    expect(mathTrig.FLOOR.MATH(24.3, 5)).toBe(20);
    expect(mathTrig.FLOOR.MATH(6.7)).toBe(6);
    expect(mathTrig.FLOOR.MATH(-8.1, 2)).toBe(-10);
    expect(mathTrig.FLOOR.MATH(-8.1, 0)).toBe(0);
    expect(mathTrig.FLOOR.MATH(-5.5, 2, -1)).toBe(-4);
    expect(mathTrig.FLOOR.MATH('invalid', 0)).toBe(error.value);

    expect(mathTrig.FLOOR.MATH(-3.2, -1)).toBe(-4);
    expect(mathTrig.FLOOR.MATH(3.2, 1)).toBe(3);
    expect(mathTrig.FLOOR.MATH(-3.2, 1)).toBe(-4);
    expect(mathTrig.FLOOR.MATH(3.2, -1)).toBe(3);
    expect(mathTrig.FLOOR.MATH(3.2)).toBe(3);
    expect(mathTrig.FLOOR.MATH(3.2, 0)).toBe(0);
    expect(mathTrig.FLOOR.MATH(3.2, 'invalid')).toBe(error.value);
  });

  test('GCD', () => {
    expect(mathTrig.GCD(5, 2)).toBe(1);
    expect(mathTrig.GCD(24, 36)).toBe(12);
    expect(mathTrig.GCD(7, 1)).toBe(1);
    expect(mathTrig.GCD(5, 0)).toBe(5);
    expect(mathTrig.GCD(5, 'invalid')).toBe(error.value);
  });

  test('GTE', () => {
    expect(mathTrig.GTE(10, 4)).toBe(true);
    expect(mathTrig.GTE(10, 10)).toBe(true);
    expect(mathTrig.GTE(10, 12)).toBe(false);
    expect(mathTrig.GTE()).toBe(error.na);
    expect(mathTrig.GTE(1)).toBe(error.na);
    expect(mathTrig.GTE(1, 'string')).toBe(error.error);
    expect(mathTrig.GTE('string', 2)).toBe(error.error);
  });

  test('INT', () => {
    expect(mathTrig.INT(5.5)).toBe(5);
    expect(mathTrig.INT('invalid')).toBe(error.value);
  });

  test('ISO.CEILING', () => {
    expect(mathTrig.ISO.CEILING(4.3)).toBe(5);
    expect(mathTrig.ISO.CEILING(-4.3)).toBe(-4);
    expect(mathTrig.ISO.CEILING(4.3, 2)).toBe(6);
    expect(mathTrig.ISO.CEILING(4.3, -2)).toBe(6);
    expect(mathTrig.ISO.CEILING(-4.3, 2)).toBe(-4);
    expect(mathTrig.ISO.CEILING(-4.3, -2)).toBe(-4);
    expect(mathTrig.ISO.CEILING(-4.3, 'invalid')).toBe(error.value);
  });

  test('LCM', () => {
    expect(mathTrig.LCM(5, 2)).toBe(10);
    expect(mathTrig.LCM(24, 36)).toBe(72);
    expect(mathTrig.LCM(24, 'invalid')).toBe(error.value);
  });


  test('LN', () => {
    expect(mathTrig.LN(Math.E)).toBe(1);
    expect(mathTrig.LN('invalid')).toBe(error.value);
  });

  test('LOG', () => {
    expect(mathTrig.LOG(10)).toBe(1);
    expect(mathTrig.LOG(10, 10)).toBe(1);
    expect(mathTrig.LOG(10, 'invalid')).toBe(error.value);
  });

  test('LOG10', () => {
    expect(mathTrig.LOG10(10)).toBe(1);
    expect(mathTrig.LOG10('invalid')).toBe(error.value);
  });

  test('LT', () => {
    expect(mathTrig.LT(10, 4)).toBe(false);
    expect(mathTrig.LT(10, 10)).toBe(false);
    expect(mathTrig.LT(10, 12)).toBe(true);
    expect(mathTrig.LT()).toBe(error.na);
    expect(mathTrig.LT(1)).toBe(error.na);
    expect(mathTrig.LT(1, 'string')).toBe(error.error);
    expect(mathTrig.LT('string', 2)).toBe(error.error);
  });

  test('LTE', () => {
    expect(mathTrig.LTE(10, 4)).toBe(false);
    expect(mathTrig.LTE(10, 10)).toBe(true);
    expect(mathTrig.LTE(10, 12)).toBe(true);
    expect(mathTrig.LTE()).toBe(error.na);
    expect(mathTrig.LTE(1)).toBe(error.na);
    expect(mathTrig.LTE(1, 'string')).toBe(error.error);
    expect(mathTrig.LTE('string', 2)).toBe(error.error);
  });

  test('MDETERM', () => {
    expect(mathTrig.MDETERM([
      [1, 2],
      [3, 4]
    ])).toBe(-2);
    expect(mathTrig.MDETERM([
      [1, 'invalid'],
      [3, 4]
    ])).toBe(error.value);
  });

  test('MINUS', () => {
    expect(mathTrig.MINUS(10, 4)).toBe(6);
    expect(mathTrig.MINUS(1.2, 4)).toBe(-2.8);
    expect(mathTrig.MINUS()).toBe(error.na);
    expect(mathTrig.MINUS(1)).toBe(error.na);
    expect(mathTrig.MINUS(1, 'string')).toBe(error.value);
  });

  test('MINVERSE', () => {
    expect(mathTrig.MINVERSE([
      [1, 2],
      [3, 4]
    ])).deepEqual([
      [-1.9999999999999996, 0.9999999999999998],
      [1.4999999999999998, -0.49999999999999994]
    ]);
    expect(mathTrig.MINVERSE([
      [1, 'invalid'],
      [3, 4]
    ])).toBe(error.value);
  });

  test('MMULT', () => {
    expect(mathTrig.MMULT([
      [1, 2],
      [3, 4]
    ], [
      [1, 2],
      [3, 4]
    ])).deepEqual([
      [7, 10],
      [15, 22]
    ]);
    expect(mathTrig.MMULT([
      [1, 2],
      [3, 'invalid']
    ], [
      [1, 2],
      [3, 4]
    ])).toBe(error.value);
  });

  test('MOD', () => {
    expect(mathTrig.MOD(3, 2)).toBe(1);
    expect(mathTrig.MOD(-3, 2)).toBe(1);
    expect(mathTrig.MOD(3, -2)).toBe(-1);
    expect(mathTrig.MOD(3, 0)).toBe(error.div0);
    expect(mathTrig.MOD(3, 'invalid')).toBe(error.value);
  });

  test('MROUND', () => {
    expect(mathTrig.MROUND(10, 3)).toBe(9);
    expect(mathTrig.MROUND(-10, -3)).toBe(-9);
    expect(mathTrig.MROUND(1.3, 0.2)).to.approximately(1.4000000000000001, 1e-9);
    expect(mathTrig.MROUND(5, -2)).toBe(error.num);
    expect(mathTrig.MROUND(5, 'invalid')).toBe(error.value);
  });

  test('MULTINOMIAL', () => {
    expect(mathTrig.MULTINOMIAL(2, 3, 4)).toBe(1260);
    expect(mathTrig.MULTINOMIAL([2, 3, 4])).toBe(1260);
    expect(mathTrig.MULTINOMIAL([2, 'invalid', 4])).toBe(error.value);
  });

  test('MULTIPLY', () => {
    expect(mathTrig.MULTIPLY(10, 4)).toBe(40);
    expect(mathTrig.MULTIPLY(12, -6)).toBe(-72);
    expect(mathTrig.MULTIPLY(0, 0)).toBe(0);
    expect(mathTrig.MULTIPLY(1, 0)).toBe(0);
    expect(mathTrig.MULTIPLY(0, 1)).toBe(0);
    expect(mathTrig.MULTIPLY()).toBe(error.na);
    expect(mathTrig.MULTIPLY(1)).toBe(error.na);
    expect(mathTrig.MULTIPLY(1, 'string')).toBe(error.value);
  });

  test('MUNIT', () => {
    expect(mathTrig.MUNIT(3)).deepEqual([
      [1, 0, 0],
      [0, 1, 0],
      [0, 0, 1]
    ]);
    expect(mathTrig.MUNIT('invalid')).toBe(error.value);
  });

  test('NE', () => {
    expect(mathTrig.NE(10, 10)).toBe(false);
    expect(mathTrig.NE(1.2, 1.2)).toBe(false);
    expect(mathTrig.NE('hello', 'jim')).toBe(true);
    expect(mathTrig.NE('hello', 'hello')).toBe(false);
    expect(mathTrig.NE(123, 'hello')).toBe(true);
    expect(mathTrig.NE(true, true)).toBe(false);
    expect(mathTrig.NE(false, false)).toBe(false);
    expect(mathTrig.NE(false, 0)).toBe(true);
    expect(mathTrig.NE()).toBe(error.na);
    expect(mathTrig.NE(1)).toBe(error.na);
    expect(mathTrig.NE(1, 'string')).toBe(true);
  });

  test('ODD', () => {
    expect(mathTrig.ODD(3)).toBe(3);
    expect(mathTrig.ODD(2)).toBe(3);
    expect(mathTrig.ODD(-1)).toBe(-1);
    expect(mathTrig.ODD(-2)).toBe(-3);
    expect(mathTrig.ODD('invalid')).toBe(error.value);
  });

  test('PI', () => {
    expect(mathTrig.PI()).toBe(Math.PI);
  });

  test('POWER', () => {
    expect(mathTrig.POWER(5, 2)).toBe(25);
    expect(mathTrig.POWER(98.6, 3.2)).to.approximately(2401077.2220695773, 1e-9);
    expect(mathTrig.POWER(4, 5 / 4)).to.approximately(5.656854249492381, 1e-9);
    expect(mathTrig.POWER(-1, 0.5)).toBe(error.num);
    expect(mathTrig.POWER(-1, 'invalid')).toBe(error.value);
  });

  test('POW', () => {
    expect(mathTrig.POW(5)).toBe(error.na);
    expect(mathTrig.POW(5, 2)).toBe(25);
    expect(mathTrig.POW(98.6, 3.2)).to.approximately(2401077.2220695773, 1e-9);
    expect(mathTrig.POW(4, 5 / 4)).to.approximately(5.656854249492381, 1e-9);
    expect(mathTrig.POW(-1, 0.5)).toBe(error.num);
    expect(mathTrig.POW(-1, 'invalid')).toBe(error.error);
  });

  test('PRODUCT', () => {
    expect(mathTrig.PRODUCT([5, 15, 30])).toBe(2250);
    expect(mathTrig.PRODUCT([5, 'invalid', 30])).toBe(error.value);
  });

  test('QUOTIENT', () => {
    expect(mathTrig.QUOTIENT(5, 2)).toBe(2);
    expect(mathTrig.QUOTIENT(4.5, 3.1)).toBe(1);
    expect(mathTrig.QUOTIENT(-10, 3)).toBe(-3);
    expect(mathTrig.QUOTIENT(-10, 'invalid')).toBe(error.value);
  });

  test('RADIANS', () => {
    expect(mathTrig.RADIANS(180)).toBe(Math.PI);
    expect(mathTrig.RADIANS('invalid')).toBe(error.value);
  });

  test('RAND', () => {
    let sum = 0;
    const n = 10;
    let i = n;
    while (i--) {
      sum += mathTrig.RAND();
    }

    const average = sum / n;
    expect(Number(parseInt(average), 10)).toBe(0);
  });

  test('RANDBETWEEN', () => {
    const bottom = 5;
    const top = 10;
    let sum = 0;
    const n = 100;
    let i = n;
    while (i--) {
      sum += mathTrig.RANDBETWEEN(bottom, top);
    }

    const average = sum / n;
    expect(Number(parseInt(average, 10))).toBe(7);
    expect(mathTrig.RANDBETWEEN(bottom, 'invalid')).toBe(error.value);
  });

  test('ROMAN', () => {
    expect(mathTrig.ROMAN(10)).toBe('X');
    expect(mathTrig.ROMAN(103)).toBe('CIII');
    expect(mathTrig.ROMAN('invalid')).toBe(error.value);
  });

  test('ROUND', () => {
    expect(mathTrig.ROUND(2.15, 1)).to.approximately(2.2, 1e-9);
    expect(mathTrig.ROUND(2.149, 1)).to.approximately(2.1, 1e-9);
    expect(mathTrig.ROUND(-1.475, 2)).to.approximately(-1.47, 1e-9); // TODO: check if -1.48 would be the correct result or a precision error
    expect(mathTrig.ROUND(21.5, -1)).toBe(20);
    expect(mathTrig.ROUND(626.3, -3)).toBe(1000);
    expect(mathTrig.ROUND(1.98, -1)).toBe(0);
    expect(mathTrig.ROUND(-50.55, -2)).toBe(-100);
    expect(mathTrig.ROUND(-50.55, 'invalid')).toBe(error.value);
  });

  test('ROUNDDOWN', () => {
    expect(mathTrig.ROUNDDOWN(3.2, 0)).toBe(3);
    expect(mathTrig.ROUNDDOWN(76.9, 0)).toBe(76);
    expect(mathTrig.ROUNDDOWN(3.14159, 3)).to.approximately(3.141, 1e-9);
    expect(mathTrig.ROUNDDOWN(-3.14159, 1)).to.approximately(-3.1, 1e-9);
    expect(mathTrig.ROUNDDOWN(31415.92654, -2)).toBe(31400);
    expect(mathTrig.ROUNDDOWN(31415.92654, 'invalid')).toBe(error.value);
  });

  test('ROUNDUP', () => {
    expect(mathTrig.ROUNDUP(3.2, 0)).toBe(4);
    expect(mathTrig.ROUNDUP(76.9, 0)).toBe(77);
    expect(mathTrig.ROUNDUP(3.14159, 3)).to.approximately(3.142, 1e-9);
    expect(mathTrig.ROUNDUP(-3.14159, 1)).to.approximately(-3.2, 1e-9);
    expect(mathTrig.ROUNDUP(31415.92654, -2)).toBe(31500);
    expect(mathTrig.ROUNDUP(31415.92654, 'invalid')).toBe(error.value);
  });

  test('SEC', () => {
    expect(mathTrig.SEC(45)).to.approximately(1.9035944074044246, 1e-9);
    expect(mathTrig.SEC(30)).to.approximately(6.482921234962678, 1e-9);
    expect(mathTrig.SEC('invalid')).toBe(error.value);
  });

  test('SECH', () => {
    expect(mathTrig.SECH(45)).to.approximately(5.725037161098787e-20, 1e-9);
    expect(mathTrig.SECH(30)).to.approximately(1.8715245937680347e-13, 1e-9);
    expect(mathTrig.SECH('invalid')).toBe(error.value);
  });

  test('SERIESSUM', () => {
    expect(mathTrig.SERIESSUM(mathTrig.PI() / 4, 0, 2, [
      1, -1 / mathTrig.FACT(2),
      1 / mathTrig.FACT(4), -1 / mathTrig.FACT(6)
    ])).to.approximately(0.7071032148228457, 1e-9);
    expect(mathTrig.SERIESSUM(1, 2, 3, 'invalid')).toBe(error.value);
  });

  test('SIGN', () => {
    expect(mathTrig.SIGN(0)).toBe(0);
    expect(mathTrig.SIGN(-5)).toBe(-1);
    expect(mathTrig.SIGN(5)).toBe(1);
    expect(mathTrig.SIGN('invalid')).toBe(error.value);
  });

  test('SIN', () => {
    expect(mathTrig.SIN(Math.PI / 2)).toBe(1);
    expect(mathTrig.SIN('invalid')).toBe(error.value);
  });

  test('SINH', () => {
    expect(mathTrig.SINH(1)).to.approximately(1.1752011936438014, 1e-9); // the golden ratio: http://mathworld.wolfram.com/HyperbolicSine.html
    expect(mathTrig.SINH('invalid')).toBe(error.value);
  });

  test('SQRT', () => {
    expect(mathTrig.SQRT(4)).toBe(2);
    expect(mathTrig.SQRT(-1)).toBe(error.num);
    expect(mathTrig.SQRT('invalid')).toBe(error.value);
  });

  test('SQRTPI', () => {
    expect(mathTrig.SQRTPI(3)).to.approximately(3.0699801238394655, 1e-9);
    expect(mathTrig.SQRTPI('invalid')).toBe(error.value);
  });

  test('SUBTOTAL', () => {
    expect(mathTrig.SUBTOTAL(1, [1, 2, 3])).toBe(2);
    expect(mathTrig.SUBTOTAL(2, [1, 2, 3, 'does not count'])).toBe(3);
    expect(mathTrig.SUBTOTAL(3, [1, 2, 3, 'counts'])).toBe(4);
    expect(mathTrig.SUBTOTAL(4, [1, 2, 3])).toBe(3);
    expect(mathTrig.SUBTOTAL(5, [1, 2, 3])).toBe(1);
    expect(mathTrig.SUBTOTAL(6, [1, 2, 3])).toBe(6);
    expect(mathTrig.SUBTOTAL(7, [1, 2, 3])).toBe(1);
    expect(mathTrig.SUBTOTAL(8, [1, 2, 3])).to.approximately(0.816496580927726, 1e-9);
    expect(mathTrig.SUBTOTAL(9, [1, 2, 3])).toBe(6);
    expect(mathTrig.SUBTOTAL(10, [1, 2, 3])).toBe(1);
    expect(mathTrig.SUBTOTAL(11, [1, 2, 3])).to.approximately(0.6666666666666666, 1e-9);
    expect(mathTrig.SUBTOTAL(101, [1, 2, 3])).toBe(2);
    expect(mathTrig.SUBTOTAL(102, [1, 2, 3, 'does not count'])).toBe(3);
    expect(mathTrig.SUBTOTAL(103, [1, 2, 3, 'counts'])).toBe(4);
    expect(mathTrig.SUBTOTAL(104, [1, 2, 3])).toBe(3);
    expect(mathTrig.SUBTOTAL(105, [1, 2, 3])).toBe(1);
    expect(mathTrig.SUBTOTAL(106, [1, 2, 3])).toBe(6);
    expect(mathTrig.SUBTOTAL(107, [1, 2, 3])).toBe(1);
    expect(mathTrig.SUBTOTAL(108, [1, 2, 3])).to.approximately(0.816496580927726, 1e-9);
    expect(mathTrig.SUBTOTAL(109, [1, 2, 3])).toBe(6);
    expect(mathTrig.SUBTOTAL(110, [1, 2, 3])).toBe(1);
    expect(mathTrig.SUBTOTAL(111, [1, 2, 3])).to.approximately(0.6666666666666666, 1e-9);
    expect(mathTrig.SUBTOTAL('invalid', [1, 2, 3])).toBe(error.value);
  });

  test('SUM', () => {
    expect(mathTrig.SUM(1, 2, 3)).toBe(6);
    expect(mathTrig.SUM([1, 2, 3])).toBe(6);
    expect(mathTrig.SUM([1, 2, 3], 1, 2)).toBe(9);
    expect(mathTrig.SUM([1, 2, 3], [1, 2])).toBe(9);
    expect(mathTrig.SUM([
      [1, 1],
      [2, 2],
      [3, 3]
    ])).toBe(12);
    expect(mathTrig.SUM([
      [1, 1],
      [2, 2],
      [3, 3]
    ], 1, 2)).toBe(15);
    expect(mathTrig.SUM([
      [1, 1],
      [2, 2],
      [3, 3]
    ], 1, 2)).toBe(15);
    expect(mathTrig.SUM([
      [1, 1],
      [2, 2],
      [3, 3]
    ], [
      [1, 1],
      [2, 2],
      [3, 3]
    ])).toBe(24);
    expect(mathTrig.SUM(1, 'invalid')).toBe(1);
  });

  test('SUMIF', () => {
    expect(mathTrig.SUMIF([1, 2, 3], '>2')).toBe(3);
    expect(mathTrig.SUMIF([
      [1, 1],
      [2, 2],
      [3, 3]
    ], '>2')).toBe(6);
    expect(mathTrig.SUMIF([1, 'invalid', 3], '>2')).toBe(error.value);
  });

  test('SUMIFS', () => {
    expect(mathTrig.SUMIFS([1, 2, 3], '>1', '<3')).toBe(2);
    expect(mathTrig.SUMIFS([
      [1, 1],
      [2, 2],
      [3, 3]
    ], '>1', '<3')).toBe(4);
    expect(mathTrig.SUMIFS([1, 'invalid', 3], '>1', '<3')).toBe(error.value);
  });

  test('SUMPRODUCT', () => {
    expect(mathTrig.SUMPRODUCT([
      [3, 4],
      [8, 6],
      [1, 9]
    ], [
      [2, 7],
      [6, 7],
      [5, 3]
    ])).toBe(156);

    expect(mathTrig.SUMPRODUCT([
      [1],
      [4],
      [10]
    ], [
      [0.55],
      [0.3],
      [0.1]
    ])).to.approximately(2.75, 1e-9);

    expect(mathTrig.SUMPRODUCT([
      1,
      4,
      10
    ], [
      0.55,
      0.3,
      0.1
    ])).to.approximately(2.75, 1e-9);

    expect(mathTrig.SUMPRODUCT([
      [3, 4],
      [8, 6],
      [1, 9]
    ], [
      [2, 'invalid'],
      [6, 7],
      [5, 3]
    ])).toBe(error.value);

    expect(mathTrig.SUMPRODUCT([8, 'invalid'], [5, 3])).toBe(error.value);
    expect(mathTrig.SUMPRODUCT()).toBe(error.value);
  });

  test('SUMSQ', () => {
    expect(mathTrig.SUMSQ(1, 2, 3)).toBe(14);
    expect(mathTrig.SUMSQ([1, 2, 3])).toBe(14);
    expect(mathTrig.SUMSQ([
      [1, 1],
      [2, 2],
      [3, 3]
    ])).toBe(28);
    expect(mathTrig.SUMSQ(1, 'invalid', 3)).toBe(error.value);
  });

  test('SUMX2MY2', () => {
    expect(mathTrig.SUMX2MY2([1, 2, 3], [4, 5, 6])).toBe(-63);
    expect(mathTrig.SUMX2MY2([1, 2, 3, 4, 5, 6], [7, 8, 9, 10, 11, 12, 13, 14, 15, 16])).toBe(-468);
    expect(mathTrig.SUMX2MY2([1, 2, 3], [4, 'invalid', 6])).toBe(error.value);
  });

  test('SUMX2PY2', () => {
    expect(mathTrig.SUMX2PY2([1, 2, 3], [4, 5, 6])).toBe(91);
    expect(mathTrig.SUMX2PY2([1, 2, 3, 4, 5, 6], [7, 8, 9, 10, 11, 12, 13, 14, 15, 16])).toBe(650);
    expect(mathTrig.SUMX2PY2([1, 2, 'invalid'], [4, 5, 6])).toBe(error.value);
  });

  test('SUMXMY2', () => {
    expect(mathTrig.SUMXMY2([1, 2, 3], [4, 5, 6])).toBe(27);
    expect(mathTrig.SUMXMY2([1, 2, 3, 4, 5, 6], [7, 8, 9, 10, 11, 12, 13, 14, 15, 16])).toBe(216);
    expect(mathTrig.SUMXMY2([1, 2, 'invalid'], [4, 5, 6])).toBe(error.value);
  });

  test('TAN', () => {
    expect(mathTrig.TAN(mathTrig.RADIANS(45))).to.approximately(1, 1e-9);
    expect(mathTrig.TAN('invalid')).toBe(error.value);
  });

  test('TANH', () => {
    expect(mathTrig.TANH(0.5)).to.approximately(0.46211715726000974, 1e-9);
    expect(mathTrig.TANH('invalid')).toBe(error.value);
  });

  test('TRUNC', () => {
    expect(mathTrig.TRUNC(8.9)).toBe(8);
    expect(mathTrig.TRUNC(-8.9)).toBe(-8);
    expect(mathTrig.TRUNC(0.45)).toBe(0);
    expect(mathTrig.TRUNC('invalid')).toBe(error.value);
  });
});
