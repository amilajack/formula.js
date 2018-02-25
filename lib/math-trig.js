import numeric from 'numeric';
import utils from './utils';
import error from './error';
import statistical from './statistical';
import information from './information';

export const ABS = (number) => {
  number = utils.parseNumber(number);
  if (number instanceof Error) {
    return number;
  }
  return Math.abs(utils.parseNumber(number));
};

export const ACOS = (number) => {
  number = utils.parseNumber(number);
  if (number instanceof Error) {
    return number;
  }
  return Math.acos(number);
};

export const ACOSH = (number) => {
  number = utils.parseNumber(number);
  if (number instanceof Error) {
    return number;
  }
  return Math.log(number + Math.sqrt(number * number - 1));
};

export const ACOT = (number) => {
  number = utils.parseNumber(number);
  if (number instanceof Error) {
    return number;
  }
  return Math.atan(1 / number);
};

export const ACOTH = (number) => {
  number = utils.parseNumber(number);
  if (number instanceof Error) {
    return number;
  }
  return 0.5 * Math.log((number + 1) / (number - 1));
};

// TODO: use options
export const AGGREGATE = (function_num, options, ref1, ref2) => {
  function_num = utils.parseNumber(function_num);
  options = utils.parseNumber(function_num);
  if (utils.anyIsError(function_num, options)) {
    return error.value;
  }
  switch (function_num) {
    case 1:
      return statistical.AVERAGE(ref1);
    case 2:
      return statistical.COUNT(ref1);
    case 3:
      return statistical.COUNTA(ref1);
    case 4:
      return statistical.MAX(ref1);
    case 5:
      return statistical.MIN(ref1);
    case 6:
      return PRODUCT(ref1);
    case 7:
      return statistical.STDEV.S(ref1);
    case 8:
      return statistical.STDEV.P(ref1);
    case 9:
      return SUM(ref1);
    case 10:
      return statistical.VAR.S(ref1);
    case 11:
      return statistical.VAR.P(ref1);
    case 12:
      return statistical.MEDIAN(ref1);
    case 13:
      return statistical.MODE.SNGL(ref1);
    case 14:
      return statistical.LARGE(ref1, ref2);
    case 15:
      return statistical.SMALL(ref1, ref2);
    case 16:
      return statistical.PERCENTILE.INC(ref1, ref2);
    case 17:
      return statistical.QUARTILE.INC(ref1, ref2);
    case 18:
      return statistical.PERCENTILE.EXC(ref1, ref2);
    case 19:
      return statistical.QUARTILE.EXC(ref1, ref2);
  }
};

export const ARABIC = (text) => {
  // Credits: Rafa? Kukawski
  if (!/^M*(?:D?C{0,3}|C[MD])(?:L?X{0,3}|X[CL])(?:V?I{0,3}|I[XV])$/.test(text)) {
    return error.value;
  }
  let r = 0;
  text.replace(/[MDLV]|C[MD]?|X[CL]?|I[XV]?/g, (i) => {
    r += {
      M: 1000,
      CM: 900,
      D: 500,
      CD: 400,
      C: 100,
      XC: 90,
      L: 50,
      XL: 40,
      X: 10,
      IX: 9,
      V: 5,
      IV: 4,
      I: 1
    }[i];
  });
  return r;
};

export const ASIN = (number) => {
  number = utils.parseNumber(number);
  if (number instanceof Error) {
    return number;
  }
  return Math.asin(number);
};

export const ASINH = (number) => {
  number = utils.parseNumber(number);
  if (number instanceof Error) {
    return number;
  }
  return Math.log(number + Math.sqrt(number * number + 1));
};

export const ATAN = (number) => {
  number = utils.parseNumber(number);
  if (number instanceof Error) {
    return number;
  }
  return Math.atan(number);
};

export const ATAN2 = (number_x, number_y) => {
  number_x = utils.parseNumber(number_x);
  number_y = utils.parseNumber(number_y);
  if (utils.anyIsError(number_x, number_y)) {
    return error.value;
  }
  return Math.atan2(number_x, number_y);
};

export const ATANH = (number) => {
  number = utils.parseNumber(number);
  if (number instanceof Error) {
    return number;
  }
  return Math.log((1 + number) / (1 - number)) / 2;
};

export const BASE = (number, radix, min_length) => {
  min_length = min_length || 0;

  number = utils.parseNumber(number);
  radix = utils.parseNumber(radix);
  min_length = utils.parseNumber(min_length);
  if (utils.anyIsError(number, radix, min_length)) {
    return error.value;
  }
  min_length = (min_length === undefined) ? 0 : min_length;
  const result = number.toString(radix);
  return new Array(Math.max(min_length + 1 - result.length, 0)).join('0') + result;
};

export const CEILING = (number, significance, mode) => {
  significance = (significance === undefined) ? 1 : Math.abs(significance);
  mode = mode || 0;

  number = utils.parseNumber(number);
  significance = utils.parseNumber(significance);
  mode = utils.parseNumber(mode);
  if (utils.anyIsError(number, significance, mode)) {
    return error.value;
  }
  if (significance === 0) {
    return 0;
  }
  const precision = -Math.floor(Math.log(significance) / Math.log(10));
  if (number >= 0) {
    return ROUND(Math.ceil(number / significance) * significance, precision);
  }
  if (mode === 0) {
    return -ROUND(Math.floor(Math.abs(number) / significance) * significance, precision);
  }
  return -ROUND(Math.ceil(Math.abs(number) / significance) * significance, precision);
};

exports.CEILING.MATH = exports.CEILING;

exports.CEILING.PRECISE = exports.CEILING;

export const COMBIN = (number, number_chosen) => {
  number = utils.parseNumber(number);
  number_chosen = utils.parseNumber(number_chosen);
  if (utils.anyIsError(number, number_chosen)) {
    return error.value;
  }
  return FACT(number) / (FACT(number_chosen) * FACT(number - number_chosen));
};

export const COMBINA = (number, number_chosen) => {
  number = utils.parseNumber(number);
  number_chosen = utils.parseNumber(number_chosen);
  if (utils.anyIsError(number, number_chosen)) {
    return error.value;
  }
  return (number === 0 && number_chosen === 0) ? 1 : COMBIN(number + number_chosen - 1, number - 1);
};

export const COS = (number) => {
  number = utils.parseNumber(number);
  if (number instanceof Error) {
    return number;
  }
  return Math.cos(number);
};

export const COSH = (number) => {
  number = utils.parseNumber(number);
  if (number instanceof Error) {
    return number;
  }
  return (Math.exp(number) + Math.exp(-number)) / 2;
};

export const COT = (number) => {
  number = utils.parseNumber(number);
  if (number instanceof Error) {
    return number;
  }
  return 1 / Math.tan(number);
};

export const COTH = (number) => {
  number = utils.parseNumber(number);
  if (number instanceof Error) {
    return number;
  }
  const e2 = Math.exp(2 * number);
  return (e2 + 1) / (e2 - 1);
};

export const CSC = (number) => {
  number = utils.parseNumber(number);
  if (number instanceof Error) {
    return number;
  }
  return 1 / Math.sin(number);
};

export const CSCH = (number) => {
  number = utils.parseNumber(number);
  if (number instanceof Error) {
    return number;
  }
  return 2 / (Math.exp(number) - Math.exp(-number));
};

export const DECIMAL = function (number, radix) {
  if (arguments.length < 1) {
    return error.value;
  }


  return parseInt(number, radix);
};

export const DEGREES = (number) => {
  number = utils.parseNumber(number);
  if (number instanceof Error) {
    return number;
  }
  return number * 180 / Math.PI;
};

export const EVEN = (number) => {
  number = utils.parseNumber(number);
  if (number instanceof Error) {
    return number;
  }
  return CEILING(number, -2, -1);
};

export const EXP = Math.exp;

const MEMOIZED_FACT = [];

export const FACT = (number) => {
  number = utils.parseNumber(number);
  if (number instanceof Error) {
    return number;
  }
  const n = Math.floor(number);
  if (n === 0 || n === 1) {
    return 1;
  } else if (MEMOIZED_FACT[n] > 0) {
    return MEMOIZED_FACT[n];
  }
  MEMOIZED_FACT[n] = FACT(n - 1) * n;
  return MEMOIZED_FACT[n];
};

export const FACTDOUBLE = (number) => {
  number = utils.parseNumber(number);
  if (number instanceof Error) {
    return number;
  }
  const n = Math.floor(number);
  if (n <= 0) {
    return 1;
  }
  return n * FACTDOUBLE(n - 2);
};

export const FLOOR = (number, significance) => {
  number = utils.parseNumber(number);
  significance = utils.parseNumber(significance);
  if (utils.anyIsError(number, significance)) {
    return error.value;
  }
  if (significance === 0) {
    return 0;
  }

  if (!(number > 0 && significance > 0) && !(number < 0 && significance < 0)) {
    return error.num;
  }

  significance = Math.abs(significance);
  const precision = -Math.floor(Math.log(significance) / Math.log(10));
  if (number >= 0) {
    return ROUND(Math.floor(number / significance) * significance, precision);
  }
  return -ROUND(Math.ceil(Math.abs(number) / significance), precision);
};

// TODO: Verify
exports.FLOOR.MATH = (number, significance, mode) => {
  significance = (significance === undefined) ? 1 : significance;
  mode = (mode === undefined) ? 0 : mode;

  number = utils.parseNumber(number);
  significance = utils.parseNumber(significance);
  mode = utils.parseNumber(mode);
  if (utils.anyIsError(number, significance, mode)) {
    return error.value;
  }
  if (significance === 0) {
    return 0;
  }

  significance = significance ? Math.abs(significance) : 1;
  const precision = -Math.floor(Math.log(significance) / Math.log(10));
  if (number >= 0) {
    return ROUND(Math.floor(number / significance) * significance, precision);
  } else if (mode === 0 || mode === undefined) {
    return -ROUND(Math.ceil(Math.abs(number) / significance) * significance, precision);
  }
  return -ROUND(Math.floor(Math.abs(number) / significance) * significance, precision);
};

// Deprecated
exports.FLOOR.PRECISE = exports.FLOOR.MATH;

// adapted http://rosettacode.org/wiki/Greatest_common_divisor#JavaScript
export const GCD = function () {
  const range = utils.parseNumberArray(utils.flatten(arguments));
  if (range instanceof Error) {
    return range;
  }
  const n = range.length;
  const r0 = range[0];
  let x = r0 < 0 ? -r0 : r0;
  for (let i = 1; i < n; i++) {
    const ri = range[i];
    let y = ri < 0 ? -ri : ri;
    while (x && y) {
      if (x > y) {
        x %= y;
      } else {
        y %= x;
      }
    }
    x += y;
  }
  return x;
};

export const INT = (number) => {
  number = utils.parseNumber(number);
  if (number instanceof Error) {
    return number;
  }
  return Math.floor(number);
};

// TODO: verify
export const ISO = {
  CEILING: exports.CEILING
};

export const LCM = function () {
  // Credits: Jonas Raoni Soares Silva
  const o = utils.parseNumberArray(utils.flatten(arguments));
  if (o instanceof Error) {
    return o;
  }
  for (var i, j, n, d, r = 1;
    (n = o.pop()) !== undefined;) {
    while (n > 1) {
      if (n % 2) {
        for (i = 3, j = Math.floor(Math.sqrt(n)); i <= j && n % i; i += 2) {
          // empty
        }
        d = (i <= j) ? i : n;
      } else {
        d = 2;
      }
      for (n /= d, r *= d, i = o.length; i;
        (o[--i] % d) === 0 && (o[i] /= d) === 1 && o.splice(i, 1)) {
        // empty
      }
    }
  }
  return r;
};

export const LN = (number) => {
  number = utils.parseNumber(number);
  if (number instanceof Error) {
    return number;
  }
  return Math.log(number);
};

export const LOG = (number, base) => {
  number = utils.parseNumber(number);
  base = (base === undefined) ? 10 : utils.parseNumber(base);

  if (utils.anyIsError(number, base)) {
    return error.value;
  }

  return Math.log(number) / Math.log(base);
};

export const LOG10 = (number) => {
  number = utils.parseNumber(number);
  if (number instanceof Error) {
    return number;
  }
  return Math.log(number) / Math.log(10);
};

export const MDETERM = (matrix) => {
  matrix = utils.parseMatrix(matrix);
  if (matrix instanceof Error) {
    return matrix;
  }
  return numeric.det(matrix);
};

export const MINVERSE = (matrix) => {
  matrix = utils.parseMatrix(matrix);
  if (matrix instanceof Error) {
    return matrix;
  }
  return numeric.inv(matrix);
};

export const MMULT = (matrix1, matrix2) => {
  matrix1 = utils.parseMatrix(matrix1);
  matrix2 = utils.parseMatrix(matrix2);
  if (utils.anyIsError(matrix1, matrix2)) {
    return error.value;
  }
  return numeric.dot(matrix1, matrix2);
};

export const MOD = (dividend, divisor) => {
  dividend = utils.parseNumber(dividend);
  divisor = utils.parseNumber(divisor);
  if (utils.anyIsError(dividend, divisor)) {
    return error.value;
  }
  if (divisor === 0) {
    return error.div0;
  }
  const modulus = Math.abs(dividend % divisor);
  return (divisor > 0) ? modulus : -modulus;
};

export const MROUND = (number, multiple) => {
  number = utils.parseNumber(number);
  multiple = utils.parseNumber(multiple);
  if (utils.anyIsError(number, multiple)) {
    return error.value;
  }
  if (number * multiple < 0) {
    return error.num;
  }

  return Math.round(number / multiple) * multiple;
};

export const MULTINOMIAL = function () {
  const args = utils.parseNumberArray(utils.flatten(arguments));
  if (args instanceof Error) {
    return args;
  }
  let sum = 0;
  let divisor = 1;
  for (let i = 0; i < args.length; i++) {
    sum += args[i];
    divisor *= FACT(args[i]);
  }
  return FACT(sum) / divisor;
};

export const MUNIT = (dimension) => {
  dimension = utils.parseNumber(dimension);
  if (dimension instanceof Error) {
    return dimension;
  }
  return numeric.identity(dimension);
};

export const ODD = (number) => {
  number = utils.parseNumber(number);
  if (number instanceof Error) {
    return number;
  }
  let temp = Math.ceil(Math.abs(number));
  temp = (temp & 1) ? temp : temp + 1;
  return (number > 0) ? temp : -temp;
};

export const PI = () => Math.PI;

export const POWER = (number, power) => {
  number = utils.parseNumber(number);
  power = utils.parseNumber(power);
  if (utils.anyIsError(number, power)) {
    return error.value;
  }
  const result = number ** power;
  if (isNaN(result)) {
    return error.num;
  }

  return result;
};

export const PRODUCT = function () {
  const args = utils.parseNumberArray(utils.flatten(arguments));
  if (args instanceof Error) {
    return args;
  }
  let result = 1;
  for (let i = 0; i < args.length; i++) {
    result *= args[i];
  }
  return result;
};

export const QUOTIENT = (numerator, denominator) => {
  numerator = utils.parseNumber(numerator);
  denominator = utils.parseNumber(denominator);
  if (utils.anyIsError(numerator, denominator)) {
    return error.value;
  }
  return parseInt(numerator / denominator, 10);
};

export const RADIANS = (number) => {
  number = utils.parseNumber(number);
  if (number instanceof Error) {
    return number;
  }
  return number * Math.PI / 180;
};

export const RAND = () => Math.random();

export const RANDBETWEEN = (bottom, top) => {
  bottom = utils.parseNumber(bottom);
  top = utils.parseNumber(top);
  if (utils.anyIsError(bottom, top)) {
    return error.value;
  }
  // Creative Commons Attribution 3.0 License
  // Copyright (c) 2012 eqcode
  return bottom + Math.ceil((top - bottom + 1) * Math.random()) - 1;
};

// TODO
export const ROMAN = (number) => {
  number = utils.parseNumber(number);
  if (number instanceof Error) {
    return number;
  }
  // The MIT License
  // Copyright (c) 2008 Steven Levithan
  const digits = String(number).split('');
  const key = ['', 'C', 'CC', 'CCC', 'CD', 'D', 'DC', 'DCC', 'DCCC', 'CM', '', 'X', 'XX', 'XXX', 'XL', 'L', 'LX', 'LXX', 'LXXX', 'XC', '', 'I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX'];
  let roman = '';
  let i = 3;
  while (i--) {
    roman = (key[+digits.pop() + (i * 10)] || '') + roman;
  }
  return new Array(+digits.join('') + 1).join('M') + roman;
};

export const ROUND = (number, digits) => {
  number = utils.parseNumber(number);
  digits = utils.parseNumber(digits);
  if (utils.anyIsError(number, digits)) {
    return error.value;
  }
  return Math.round(number * (10 ** digits)) / (10 ** digits);
};

export const ROUNDDOWN = (number, digits) => {
  number = utils.parseNumber(number);
  digits = utils.parseNumber(digits);
  if (utils.anyIsError(number, digits)) {
    return error.value;
  }
  const sign = (number > 0) ? 1 : -1;
  return sign * (Math.floor(Math.abs(number) * (10 ** digits))) / (10 ** digits);
};

export const ROUNDUP = (number, digits) => {
  number = utils.parseNumber(number);
  digits = utils.parseNumber(digits);
  if (utils.anyIsError(number, digits)) {
    return error.value;
  }
  const sign = (number > 0) ? 1 : -1;
  return sign * (Math.ceil(Math.abs(number) * (10 ** digits))) / (10 ** digits);
};

export const SEC = (number) => {
  number = utils.parseNumber(number);
  if (number instanceof Error) {
    return number;
  }
  return 1 / Math.cos(number);
};

export const SECH = (number) => {
  number = utils.parseNumber(number);
  if (number instanceof Error) {
    return number;
  }
  return 2 / (Math.exp(number) + Math.exp(-number));
};

export const SERIESSUM = (x, n, m, coefficients) => {
  x = utils.parseNumber(x);
  n = utils.parseNumber(n);
  m = utils.parseNumber(m);
  coefficients = utils.parseNumberArray(coefficients);
  if (utils.anyIsError(x, n, m, coefficients)) {
    return error.value;
  }
  let result = coefficients[0] * (x ** n);
  for (let i = 1; i < coefficients.length; i++) {
    result += coefficients[i] * (x ** (n + i * m));
  }
  return result;
};

export const SIGN = (number) => {
  number = utils.parseNumber(number);
  if (number instanceof Error) {
    return number;
  }
  if (number < 0) {
    return -1;
  } else if (number === 0) {
    return 0;
  }
  return 1;
};

export const SIN = (number) => {
  number = utils.parseNumber(number);
  if (number instanceof Error) {
    return number;
  }
  return Math.sin(number);
};

export const SINH = (number) => {
  number = utils.parseNumber(number);
  if (number instanceof Error) {
    return number;
  }
  return (Math.exp(number) - Math.exp(-number)) / 2;
};

export const SQRT = (number) => {
  number = utils.parseNumber(number);
  if (number instanceof Error) {
    return number;
  }
  if (number < 0) {
    return error.num;
  }
  return Math.sqrt(number);
};

export const SQRTPI = (number) => {
  number = utils.parseNumber(number);
  if (number instanceof Error) {
    return number;
  }
  return Math.sqrt(number * Math.PI);
};

export const SUBTOTAL = (function_code, ref1) => {
  function_code = utils.parseNumber(function_code);
  if (function_code instanceof Error) {
    return function_code;
  }
  switch (function_code) {
    case 1:
      return statistical.AVERAGE(ref1);
    case 2:
      return statistical.COUNT(ref1);
    case 3:
      return statistical.COUNTA(ref1);
    case 4:
      return statistical.MAX(ref1);
    case 5:
      return statistical.MIN(ref1);
    case 6:
      return PRODUCT(ref1);
    case 7:
      return statistical.STDEV.S(ref1);
    case 8:
      return statistical.STDEV.P(ref1);
    case 9:
      return SUM(ref1);
    case 10:
      return statistical.VAR.S(ref1);
    case 11:
      return statistical.VAR.P(ref1);
      // no hidden values for us
    case 101:
      return statistical.AVERAGE(ref1);
    case 102:
      return statistical.COUNT(ref1);
    case 103:
      return statistical.COUNTA(ref1);
    case 104:
      return statistical.MAX(ref1);
    case 105:
      return statistical.MIN(ref1);
    case 106:
      return PRODUCT(ref1);
    case 107:
      return statistical.STDEV.S(ref1);
    case 108:
      return statistical.STDEV.P(ref1);
    case 109:
      return SUM(ref1);
    case 110:
      return statistical.VAR.S(ref1);
    case 111:
      return statistical.VAR.P(ref1);
  }
};

export const ADD = function (num1, num2) {
  if (arguments.length !== 2) {
    return error.na;
  }

  num1 = utils.parseNumber(num1);
  num2 = utils.parseNumber(num2);
  if (utils.anyIsError(num1, num2)) {
    return error.value;
  }

  return num1 + num2;
};

export const MINUS = function (num1, num2) {
  if (arguments.length !== 2) {
    return error.na;
  }

  num1 = utils.parseNumber(num1);
  num2 = utils.parseNumber(num2);
  if (utils.anyIsError(num1, num2)) {
    return error.value;
  }

  return num1 - num2;
};

export const DIVIDE = function (dividend, divisor) {
  if (arguments.length !== 2) {
    return error.na;
  }

  dividend = utils.parseNumber(dividend);
  divisor = utils.parseNumber(divisor);
  if (utils.anyIsError(dividend, divisor)) {
    return error.value;
  }

  if (divisor === 0) {
    return error.div0;
  }

  return dividend / divisor;
};

export const MULTIPLY = function (factor1, factor2) {
  if (arguments.length !== 2) {
    return error.na;
  }

  factor1 = utils.parseNumber(factor1);
  factor2 = utils.parseNumber(factor2);
  if (utils.anyIsError(factor1, factor2)) {
    return error.value;
  }

  return factor1 * factor2;
};

export const GTE = function (num1, num2) {
  if (arguments.length !== 2) {
    return error.na;
  }

  num1 = utils.parseNumber(num1);
  num2 = utils.parseNumber(num2);
  if (utils.anyIsError(num1, num2)) {
    return error.error;
  }

  return num1 >= num2;
};

export const LT = function (num1, num2) {
  if (arguments.length !== 2) {
    return error.na;
  }

  num1 = utils.parseNumber(num1);
  num2 = utils.parseNumber(num2);
  if (utils.anyIsError(num1, num2)) {
    return error.error;
  }

  return num1 < num2;
};

export const LTE = function (num1, num2) {
  if (arguments.length !== 2) {
    return error.na;
  }

  num1 = utils.parseNumber(num1);
  num2 = utils.parseNumber(num2);
  if (utils.anyIsError(num1, num2)) {
    return error.error;
  }

  return num1 <= num2;
};

export const EQ = function (value1, value2) {
  if (arguments.length !== 2) {
    return error.na;
  }

  return value1 === value2;
};

export const NE = function (value1, value2) {
  if (arguments.length !== 2) {
    return error.na;
  }

  return value1 !== value2;
};

export const POW = function (base, exponent) {
  if (arguments.length !== 2) {
    return error.na;
  }

  base = utils.parseNumber(base);
  exponent = utils.parseNumber(exponent);
  if (utils.anyIsError(base, exponent)) {
    return error.error;
  }

  return POWER(base, exponent);
};

export const SUM = function () {
  let result = 0;
  const argsKeys = Object.keys(arguments);
  for (let i = 0; i < argsKeys.length; ++i) {
    const elt = arguments[argsKeys[i]];
    if (typeof elt === 'number') {
      result += elt;
    } else if (typeof elt === 'string') {
      const parsed = parseFloat(elt);
      !isNaN(parsed) && (result += parsed);
    } else if (Array.isArray(elt)) {
      result += exports.SUM.apply(null, elt);
    }
  }
  return result;
};

export const SUMIF = (range, criteria) => {
  range = utils.parseNumberArray(utils.flatten(range));
  if (range instanceof Error) {
    return range;
  }
  let result = 0;
  for (let i = 0; i < range.length; i++) {
    result += (eval(range[i] + criteria)) ? range[i] : 0; // jshint ignore:line
  }
  return result;
};

export const SUMIFS = function () {
  const args = utils.argsToArray(arguments);
  const range = utils.parseNumberArray(utils.flatten(args.shift()));
  if (range instanceof Error) {
    return range;
  }
  const criteria = args;

  const n_range_elements = range.length;
  const n_criterias = criteria.length;

  let result = 0;
  for (let i = 0; i < n_range_elements; i++) {
    const el = range[i];
    let condition = '';
    for (let c = 0; c < n_criterias; c++) {
      condition += el + criteria[c];
      if (c !== n_criterias - 1) {
        condition += '&&';
      }
    }
    if (eval(condition)) { // jshint ignore:line
      result += el;
    }
  }
  return result;
};

export const SUMPRODUCT = function () {
  if (!arguments || arguments.length === 0) {
    return error.value;
  }
  const arrays = arguments.length + 1;
  let result = 0;
  let product;
  let k;
  let _i;
  let _ij;
  for (let i = 0; i < arguments[0].length; i++) {
    if (!(arguments[0][i] instanceof Array)) {
      product = 1;
      for (k = 1; k < arrays; k++) {
        _i = utils.parseNumber(arguments[k - 1][i]);
        if (_i instanceof Error) {
          return _i;
        }
        product *= _i;
      }
      result += product;
    } else {
      for (let j = 0; j < arguments[0][i].length; j++) {
        product = 1;
        for (k = 1; k < arrays; k++) {
          _ij = utils.parseNumber(arguments[k - 1][i][j]);
          if (_ij instanceof Error) {
            return _ij;
          }
          product *= _ij;
        }
        result += product;
      }
    }
  }
  return result;
};

export const SUMSQ = function () {
  const numbers = utils.parseNumberArray(utils.flatten(arguments));
  if (numbers instanceof Error) {
    return numbers;
  }
  let result = 0;
  const length = numbers.length;
  for (let i = 0; i < length; i++) {
    result += (information.ISNUMBER(numbers[i])) ? numbers[i] * numbers[i] : 0;
  }
  return result;
};

export const SUMX2MY2 = (array_x, array_y) => {
  array_x = utils.parseNumberArray(utils.flatten(array_x));
  array_y = utils.parseNumberArray(utils.flatten(array_y));
  if (utils.anyIsError(array_x, array_y)) {
    return error.value;
  }
  let result = 0;
  for (let i = 0; i < array_x.length; i++) {
    result += array_x[i] * array_x[i] - array_y[i] * array_y[i];
  }
  return result;
};

export const SUMX2PY2 = (array_x, array_y) => {
  array_x = utils.parseNumberArray(utils.flatten(array_x));
  array_y = utils.parseNumberArray(utils.flatten(array_y));
  if (utils.anyIsError(array_x, array_y)) {
    return error.value;
  }
  let result = 0;
  array_x = utils.parseNumberArray(utils.flatten(array_x));
  array_y = utils.parseNumberArray(utils.flatten(array_y));
  for (let i = 0; i < array_x.length; i++) {
    result += array_x[i] * array_x[i] + array_y[i] * array_y[i];
  }
  return result;
};

export const SUMXMY2 = (array_x, array_y) => {
  array_x = utils.parseNumberArray(utils.flatten(array_x));
  array_y = utils.parseNumberArray(utils.flatten(array_y));
  if (utils.anyIsError(array_x, array_y)) {
    return error.value;
  }
  let result = 0;
  array_x = utils.flatten(array_x);
  array_y = utils.flatten(array_y);
  for (let i = 0; i < array_x.length; i++) {
    result += (array_x[i] - array_y[i]) ** 2;
  }
  return result;
};

export const TAN = (number) => {
  number = utils.parseNumber(number);
  if (number instanceof Error) {
    return number;
  }
  return Math.tan(number);
};

export const TANH = (number) => {
  number = utils.parseNumber(number);
  if (number instanceof Error) {
    return number;
  }
  const e2 = Math.exp(2 * number);
  return (e2 - 1) / (e2 + 1);
};

export const TRUNC = (number, digits) => {
  digits = (digits === undefined) ? 0 : digits;
  number = utils.parseNumber(number);
  digits = utils.parseNumber(digits);
  if (utils.anyIsError(number, digits)) {
    return error.value;
  }
  const sign = (number > 0) ? 1 : -1;
  return sign * (Math.floor(Math.abs(number) * (10 ** digits))) / (10 ** digits);
};
