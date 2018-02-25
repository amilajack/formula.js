import mathTrig from './math-trig';
import text from './text';
import { jStat } from 'jStat';
import utils from './utils';
import error from './error';
import misc from './miscellaneous';

const SQRT2PI = 2.5066282746310002;

export const AVEDEV = function () {
  const range = utils.parseNumberArray(utils.flatten(arguments));
  if (range instanceof Error) {
    return range;
  }
  return jStat.sum(jStat(range).subtract(jStat.mean(range)).abs()[0]) / range.length;
};

export const AVERAGE = function () {
  const range = utils.numbers(utils.flatten(arguments));
  const n = range.length;
  let sum = 0;
  let count = 0;
  for (let i = 0; i < n; i++) {
    sum += range[i];
    count += 1;
  }
  return sum / count;
};

export const AVERAGEA = function () {
  const range = utils.flatten(arguments);
  const n = range.length;
  let sum = 0;
  let count = 0;
  for (let i = 0; i < n; i++) {
    const el = range[i];
    if (typeof el === 'number') {
      sum += el;
    }
    if (el === true) {
      sum++;
    }
    if (el !== null) {
      count++;
    }
  }
  return sum / count;
};

export const AVERAGEIF = (range, criteria, average_range) => {
  average_range = average_range || range;
  range = utils.flatten(range);
  average_range = utils.parseNumberArray(utils.flatten(average_range));
  if (average_range instanceof Error) {
    return average_range;
  }
  let average_count = 0;
  let result = 0;
  for (let i = 0; i < range.length; i++) {
    if (eval(range[i] + criteria)) { // jshint ignore:line
      result += average_range[i];
      average_count++;
    }
  }
  return result / average_count;
};

export const AVERAGEIFS = function () {
  // Does not work with multi dimensional ranges yet!
  // http://office.microsoft.com/en-001/excel-help/averageifs-function-HA010047493.aspx
  const args = utils.argsToArray(arguments);
  const criteria = (args.length - 1) / 2;
  const range = utils.flatten(args[0]);
  let count = 0;
  let result = 0;
  for (let i = 0; i < range.length; i++) {
    let condition = '';
    for (let j = 0; j < criteria; j++) {
      condition += args[2 * j + 1][i] + args[2 * j + 2];
      if (j !== criteria - 1) {
        condition += '&&';
      }
    }
    if (eval(condition)) { // jshint ignore:line
      result += range[i];
      count++;
    }
  }

  const average = result / count;
  if (isNaN(average)) {
    return 0;
  }
  return average;
};

export const BETA = {};

exports.BETA.DIST = function (x, alpha, beta, cumulative, A, B) {
  if (arguments.length < 4) {
    return error.value;
  }

  A = (A === undefined) ? 0 : A;
  B = (B === undefined) ? 1 : B;

  x = utils.parseNumber(x);
  alpha = utils.parseNumber(alpha);
  beta = utils.parseNumber(beta);
  A = utils.parseNumber(A);
  B = utils.parseNumber(B);
  if (utils.anyIsError(x, alpha, beta, A, B)) {
    return error.value;
  }

  x = (x - A) / (B - A);
  return (cumulative) ? jStat.beta.cdf(x, alpha, beta) : jStat.beta.pdf(x, alpha, beta);
};

exports.BETA.INV = (probability, alpha, beta, A, B) => {
  A = (A === undefined) ? 0 : A;
  B = (B === undefined) ? 1 : B;

  probability = utils.parseNumber(probability);
  alpha = utils.parseNumber(alpha);
  beta = utils.parseNumber(beta);
  A = utils.parseNumber(A);
  B = utils.parseNumber(B);
  if (utils.anyIsError(probability, alpha, beta, A, B)) {
    return error.value;
  }

  return jStat.beta.inv(probability, alpha, beta) * (B - A) + A;
};

export const BINOM = {};

exports.BINOM.DIST = (successes, trials, probability, cumulative) => {
  successes = utils.parseNumber(successes);
  trials = utils.parseNumber(trials);
  probability = utils.parseNumber(probability);
  cumulative = utils.parseNumber(cumulative);
  if (utils.anyIsError(successes, trials, probability, cumulative)) {
    return error.value;
  }
  return (cumulative) ? jStat.binomial.cdf(successes, trials, probability) : jStat.binomial.pdf(successes, trials, probability);
};

exports.BINOM.DIST.RANGE = (trials, probability, successes, successes2) => {
  successes2 = (successes2 === undefined) ? successes : successes2;

  trials = utils.parseNumber(trials);
  probability = utils.parseNumber(probability);
  successes = utils.parseNumber(successes);
  successes2 = utils.parseNumber(successes2);
  if (utils.anyIsError(trials, probability, successes, successes2)) {
    return error.value;
  }

  let result = 0;
  for (let i = successes; i <= successes2; i++) {
    result += mathTrig.COMBIN(trials, i) * (probability ** i) * ((1 - probability) ** (trials - i));
  }
  return result;
};

exports.BINOM.INV = (trials, probability, alpha) => {
  trials = utils.parseNumber(trials);
  probability = utils.parseNumber(probability);
  alpha = utils.parseNumber(alpha);
  if (utils.anyIsError(trials, probability, alpha)) {
    return error.value;
  }

  let x = 0;
  while (x <= trials) {
    if (jStat.binomial.cdf(x, trials, probability) >= alpha) {
      return x;
    }
    x++;
  }
};

export const CHISQ = {};

exports.CHISQ.DIST = (x, k, cumulative) => {
  x = utils.parseNumber(x);
  k = utils.parseNumber(k);
  if (utils.anyIsError(x, k)) {
    return error.value;
  }

  return (cumulative) ? jStat.chisquare.cdf(x, k) : jStat.chisquare.pdf(x, k);
};

exports.CHISQ.DIST.RT = (x, k) => {
  if (!x | !k) {
    return error.na;
  }

  if (x < 1 || k > 10 ** 10) {
    return error.num;
  }

  if ((typeof x !== 'number') || (typeof k !== 'number')) {
    return error.value;
  }

  return 1 - jStat.chisquare.cdf(x, k);
};

exports.CHISQ.INV = (probability, k) => {
  probability = utils.parseNumber(probability);
  k = utils.parseNumber(k);
  if (utils.anyIsError(probability, k)) {
    return error.value;
  }
  return jStat.chisquare.inv(probability, k);
};

exports.CHISQ.INV.RT = (p, k) => {
  if (!p | !k) {
    return error.na;
  }

  if (p < 0 || p > 1 || k < 1 || k > 10 ** 10) {
    return error.num;
  }

  if ((typeof p !== 'number') || (typeof k !== 'number')) {
    return error.value;
  }

  return jStat.chisquare.inv(1.0 - p, k);
};

exports.CHISQ.TEST = function (observed, expected) {
  if (arguments.length !== 2) {
    return error.na;
  }

  if ((!(observed instanceof Array)) || (!(expected instanceof Array))) {
    return error.value;
  }

  if (observed.length !== expected.length) {
    return error.value;
  }

  if (observed[0] && expected[0] &&
      observed[0].length !== expected[0].length) {
    return error.value;
  }

  const row = observed.length;
  let tmp;
  let i;
  let j;

  // Convert single-dimension array into two-dimension array
  for (i = 0; i < row; i++) {
    if (!(observed[i] instanceof Array)) {
      tmp = observed[i];
      observed[i] = [];
      observed[i].push(tmp);
    }
    if (!(expected[i] instanceof Array)) {
      tmp = expected[i];
      expected[i] = [];
      expected[i].push(tmp);
    }
  }

  const col = observed[0].length;
  const dof = (col === 1) ? row - 1 : (row - 1) * (col - 1);
  let xsqr = 0;
  const Pi = Math.PI;

  for (i = 0; i < row; i++) {
    for (j = 0; j < col; j++) {
      xsqr += (observed[i][j] - expected[i][j]) ** 2 / expected[i][j];
    }
  }

  // Get independency by X square and its degree of freedom
  function ChiSq(xsqr, dof) {
    let p = Math.exp(-0.5 * xsqr);
    if ((dof % 2) === 1) {
      p *= Math.sqrt(2 * xsqr / Pi);
    }
    let k = dof;
    while (k >= 2) {
      p = p * xsqr / k;
      k -= 2;
    }
    let t = p;
    let a = dof;
    while (t > 0.0000000001 * p) {
      a += 2;
      t = t * xsqr / a;
      p += t;
    }
    return 1 - p;
  }

  return Math.round(ChiSq(xsqr, dof) * 1000000) / 1000000;
};

export const COLUMN = function (matrix, index) {
  if (arguments.length !== 2) {
    return error.na;
  }

  if (index < 0) {
    return error.num;
  }

  if (!(matrix instanceof Array) || (typeof index !== 'number')) {
    return error.value;
  }

  if (matrix.length === 0) {
    return undefined;
  }

  return jStat.col(matrix, index);
};

export const COLUMNS = function (matrix) {
  if (arguments.length !== 1) {
    return error.na;
  }

  if (!(matrix instanceof Array)) {
    return error.value;
  }

  if (matrix.length === 0) {
    return 0;
  }

  return jStat.cols(matrix);
};

export const CONFIDENCE = {};

exports.CONFIDENCE.NORM = (alpha, sd, n) => {
  alpha = utils.parseNumber(alpha);
  sd = utils.parseNumber(sd);
  n = utils.parseNumber(n);
  if (utils.anyIsError(alpha, sd, n)) {
    return error.value;
  }
  return jStat.normalci(1, alpha, sd, n)[1] - 1;
};

exports.CONFIDENCE.T = (alpha, sd, n) => {
  alpha = utils.parseNumber(alpha);
  sd = utils.parseNumber(sd);
  n = utils.parseNumber(n);
  if (utils.anyIsError(alpha, sd, n)) {
    return error.value;
  }
  return jStat.tci(1, alpha, sd, n)[1] - 1;
};

export const CORREL = (array1, array2) => {
  array1 = utils.parseNumberArray(utils.flatten(array1));
  array2 = utils.parseNumberArray(utils.flatten(array2));
  if (utils.anyIsError(array1, array2)) {
    return error.value;
  }
  return jStat.corrcoeff(array1, array2);
};

export const COUNT = function () {
  return utils.numbers(utils.flatten(arguments)).length;
};

export const COUNTA = function () {
  const range = utils.flatten(arguments);
  return range.length - COUNTBLANK(range);
};

export const COUNTIN = (range, value) => {
  let result = 0;
  for (let i = 0; i < range.length; i++) {
    if (range[i] === value) {
      result++;
    }
  }
  return result;
};

export const COUNTBLANK = function () {
  const range = utils.flatten(arguments);
  let blanks = 0;
  let element;
  for (let i = 0; i < range.length; i++) {
    element = range[i];
    if (element === null || element === '') {
      blanks++;
    }
  }
  return blanks;
};

export const COUNTIF = (range, criteria) => {
  range = utils.flatten(range);
  if (!/[<>=!]/.test(criteria)) {
    criteria = `=="${criteria}"`;
  }
  let matches = 0;
  for (let i = 0; i < range.length; i++) {
    if (typeof range[i] !== 'string') {
      if (eval(range[i] + criteria)) { // jshint ignore:line
        matches++;
      }
    } else if (eval(`"${range[i]}"${criteria}`)) { // jshint ignore:line
      matches++;
    }
  }
  return matches;
};

export const COUNTIFS = function () {
  const args = utils.argsToArray(arguments);
  const results = new Array(utils.flatten(args[0]).length);
  for (var i = 0; i < results.length; i++) {
    results[i] = true;
  }
  for (i = 0; i < args.length; i += 2) {
    const range = utils.flatten(args[i]);
    let criteria = args[i + 1];
    if (!/[<>=!]/.test(criteria)) {
      criteria = `=="${criteria}"`;
    }
    for (let j = 0; j < range.length; j++) {
      if (typeof range[j] !== 'string') {
        results[j] = results[j] && eval(range[j] + criteria); // jshint ignore:line
      } else {
        results[j] = results[j] && eval(`"${range[j]}"${criteria}`); // jshint ignore:line
      }
    }
  }
  let result = 0;
  for (i = 0; i < results.length; i++) {
    if (results[i]) {
      result++;
    }
  }
  return result;
};

export const COUNTUNIQUE = function () {
  return misc.UNIQUE.apply(null, utils.flatten(arguments)).length;
};

export const COVARIANCE = {};

exports.COVARIANCE.P = (array1, array2) => {
  array1 = utils.parseNumberArray(utils.flatten(array1));
  array2 = utils.parseNumberArray(utils.flatten(array2));
  if (utils.anyIsError(array1, array2)) {
    return error.value;
  }
  const mean1 = jStat.mean(array1);
  const mean2 = jStat.mean(array2);
  let result = 0;
  const n = array1.length;
  for (let i = 0; i < n; i++) {
    result += (array1[i] - mean1) * (array2[i] - mean2);
  }
  return result / n;
};

exports.COVARIANCE.S = (array1, array2) => {
  array1 = utils.parseNumberArray(utils.flatten(array1));
  array2 = utils.parseNumberArray(utils.flatten(array2));
  if (utils.anyIsError(array1, array2)) {
    return error.value;
  }
  return jStat.covariance(array1, array2);
};

export const DEVSQ = function () {
  const range = utils.parseNumberArray(utils.flatten(arguments));
  if (range instanceof Error) {
    return range;
  }
  const mean = jStat.mean(range);
  let result = 0;
  for (let i = 0; i < range.length; i++) {
    result += (range[i] - mean) ** 2;
  }
  return result;
};

export const EXPON = {};

exports.EXPON.DIST = (x, lambda, cumulative) => {
  x = utils.parseNumber(x);
  lambda = utils.parseNumber(lambda);
  if (utils.anyIsError(x, lambda)) {
    return error.value;
  }
  return (cumulative) ? jStat.exponential.cdf(x, lambda) : jStat.exponential.pdf(x, lambda);
};

export const F = {};

exports.F.DIST = (x, d1, d2, cumulative) => {
  x = utils.parseNumber(x);
  d1 = utils.parseNumber(d1);
  d2 = utils.parseNumber(d2);
  if (utils.anyIsError(x, d1, d2)) {
    return error.value;
  }
  return (cumulative) ? jStat.centralF.cdf(x, d1, d2) : jStat.centralF.pdf(x, d1, d2);
};

exports.F.DIST.RT = function (x, d1, d2) {
  if (arguments.length !== 3) {
    return error.na;
  }

  if (x < 0 || d1 < 1 || d2 < 1) {
    return error.num;
  }

  if ((typeof x !== 'number') || (typeof d1 !== 'number') || (typeof d2 !== 'number')) {
    return error.value;
  }

  return 1 - jStat.centralF.cdf(x, d1, d2);
};

exports.F.INV = (probability, d1, d2) => {
  probability = utils.parseNumber(probability);
  d1 = utils.parseNumber(d1);
  d2 = utils.parseNumber(d2);
  if (utils.anyIsError(probability, d1, d2)) {
    return error.value;
  }
  if (probability <= 0.0 || probability > 1.0) {
    return error.num;
  }

  return jStat.centralF.inv(probability, d1, d2);
};

exports.F.INV.RT = function (p, d1, d2) {
  if (arguments.length !== 3) {
    return error.na;
  }

  if (p < 0 || p > 1 || d1 < 1 || d1 > 10 ** 10 || d2 < 1 || d2 > 10 ** 10) {
    return error.num;
  }

  if ((typeof p !== 'number') || (typeof d1 !== 'number') || (typeof d2 !== 'number')) {
    return error.value;
  }

  return jStat.centralF.inv(1.0 - p, d1, d2);
};

exports.F.TEST = (array1, array2) => {
  if (!array1 || !array2) {
    return error.na;
  }

  if (!(array1 instanceof Array) || !(array2 instanceof Array)) {
    return error.na;
  }

  if (array1.length < 2 || array2.length < 2) {
    return error.div0;
  }

  const sumOfSquares = (values, x1) => {
    let sum = 0;
    for (let i = 0; i < values.length; i++) {
      sum += (values[i] - x1) ** 2;
    }
    return sum;
  };

  const x1 = mathTrig.SUM(array1) / array1.length;
  const x2 = mathTrig.SUM(array2) / array2.length;
  const sum1 = sumOfSquares(array1, x1) / (array1.length - 1);
  const sum2 = sumOfSquares(array2, x2) / (array2.length - 1);

  return sum1 / sum2;
};

export const FISHER = (x) => {
  x = utils.parseNumber(x);
  if (x instanceof Error) {
    return x;
  }
  return Math.log((1 + x) / (1 - x)) / 2;
};

export const FISHERINV = (y) => {
  y = utils.parseNumber(y);
  if (y instanceof Error) {
    return y;
  }
  const e2y = Math.exp(2 * y);
  return (e2y - 1) / (e2y + 1);
};

export const FORECAST = (x, data_y, data_x) => {
  x = utils.parseNumber(x);
  data_y = utils.parseNumberArray(utils.flatten(data_y));
  data_x = utils.parseNumberArray(utils.flatten(data_x));
  if (utils.anyIsError(x, data_y, data_x)) {
    return error.value;
  }
  const xmean = jStat.mean(data_x);
  const ymean = jStat.mean(data_y);
  const n = data_x.length;
  let num = 0;
  let den = 0;
  for (let i = 0; i < n; i++) {
    num += (data_x[i] - xmean) * (data_y[i] - ymean);
    den += (data_x[i] - xmean) ** 2;
  }
  const b = num / den;
  const a = ymean - b * xmean;
  return a + b * x;
};

export const FREQUENCY = (data, bins) => {
  data = utils.parseNumberArray(utils.flatten(data));
  bins = utils.parseNumberArray(utils.flatten(bins));
  if (utils.anyIsError(data, bins)) {
    return error.value;
  }
  const n = data.length;
  const b = bins.length;
  const r = [];
  for (let i = 0; i <= b; i++) {
    r[i] = 0;
    for (let j = 0; j < n; j++) {
      if (i === 0) {
        if (data[j] <= bins[0]) {
          r[0] += 1;
        }
      } else if (i < b) {
        if (data[j] > bins[i - 1] && data[j] <= bins[i]) {
          r[i] += 1;
        }
      } else if (i === b) {
        if (data[j] > bins[b - 1]) {
          r[b] += 1;
        }
      }
    }
  }
  return r;
};

export const GAMMA = (number) => {
  number = utils.parseNumber(number);
  if (number instanceof Error) {
    return number;
  }

  if (number === 0) {
    return error.num;
  }

  if (parseInt(number, 10) === number && number < 0) {
    return error.num;
  }

  return jStat.gammafn(number);
};

exports.GAMMA.DIST = function (value, alpha, beta, cumulative) {
  if (arguments.length !== 4) {
    return error.na;
  }

  if (value < 0 || alpha <= 0 || beta <= 0) {
    return error.value;
  }

  if ((typeof value !== 'number') || (typeof alpha !== 'number') || (typeof beta !== 'number')) {
    return error.value;
  }

  return cumulative ? jStat.gamma.cdf(value, alpha, beta, true) : jStat.gamma.pdf(value, alpha, beta, false);
};

exports.GAMMA.INV = function (probability, alpha, beta) {
  if (arguments.length !== 3) {
    return error.na;
  }

  if (probability < 0 || probability > 1 || alpha <= 0 || beta <= 0) {
    return error.num;
  }

  if ((typeof probability !== 'number') || (typeof alpha !== 'number') || (typeof beta !== 'number')) {
    return error.value;
  }

  return jStat.gamma.inv(probability, alpha, beta);
};

export const GAMMALN = (number) => {
  number = utils.parseNumber(number);
  if (number instanceof Error) {
    return number;
  }
  return jStat.gammaln(number);
};

exports.GAMMALN.PRECISE = function (x) {
  if (arguments.length !== 1) {
    return error.na;
  }

  if (x <= 0) {
    return error.num;
  }

  if (typeof x !== 'number') {
    return error.value;
  }

  return jStat.gammaln(x);
};

export const GAUSS = (z) => {
  z = utils.parseNumber(z);
  if (z instanceof Error) {
    return z;
  }
  return jStat.normal.cdf(z, 0, 1) - 0.5;
};

export const GEOMEAN = function () {
  const args = utils.parseNumberArray(utils.flatten(arguments));
  if (args instanceof Error) {
    return args;
  }
  return jStat.geomean(args);
};

export const GROWTH = (known_y, known_x, new_x, use_const) => {
  // Credits: Ilmari Karonen (http://stackoverflow.com/questions/14161990/how-to-implement-growth-function-in-javascript)

  known_y = utils.parseNumberArray(known_y);
  if (known_y instanceof Error) {
    return known_y;
  }

  // Default values for optional parameters:
  let i;
  if (known_x === undefined) {
    known_x = [];
    for (i = 1; i <= known_y.length; i++) {
      known_x.push(i);
    }
  }
  if (new_x === undefined) {
    new_x = [];
    for (i = 1; i <= known_y.length; i++) {
      new_x.push(i);
    }
  }

  known_x = utils.parseNumberArray(known_x);
  new_x = utils.parseNumberArray(new_x);
  if (utils.anyIsError(known_x, new_x)) {
    return error.value;
  }


  if (use_const === undefined) {
    use_const = true;
  }

  // Calculate sums over the data:
  const n = known_y.length;
  let avg_x = 0;
  let avg_y = 0;
  let avg_xy = 0;
  let avg_xx = 0;
  for (i = 0; i < n; i++) {
    const x = known_x[i];
    const y = Math.log(known_y[i]);
    avg_x += x;
    avg_y += y;
    avg_xy += x * y;
    avg_xx += x * x;
  }
  avg_x /= n;
  avg_y /= n;
  avg_xy /= n;
  avg_xx /= n;

  // Compute linear regression coefficients:
  let beta;
  let alpha;
  if (use_const) {
    beta = (avg_xy - avg_x * avg_y) / (avg_xx - avg_x * avg_x);
    alpha = avg_y - beta * avg_x;
  } else {
    beta = avg_xy / avg_xx;
    alpha = 0;
  }

  // Compute and return result array:
  const new_y = [];
  for (i = 0; i < new_x.length; i++) {
    new_y.push(Math.exp(alpha + beta * new_x[i]));
  }
  return new_y;
};

export const HARMEAN = function () {
  const range = utils.parseNumberArray(utils.flatten(arguments));
  if (range instanceof Error) {
    return range;
  }
  const n = range.length;
  let den = 0;
  for (let i = 0; i < n; i++) {
    den += 1 / range[i];
  }
  return n / den;
};

export const HYPGEOM = {};

exports.HYPGEOM.DIST = (x, n, M, N, cumulative) => {
  x = utils.parseNumber(x);
  n = utils.parseNumber(n);
  M = utils.parseNumber(M);
  N = utils.parseNumber(N);
  if (utils.anyIsError(x, n, M, N)) {
    return error.value;
  }

  function pdf(x, n, M, N) {
    return mathTrig.COMBIN(M, x) * mathTrig.COMBIN(N - M, n - x) / mathTrig.COMBIN(N, n);
  }

  function cdf(x, n, M, N) {
    let result = 0;
    for (let i = 0; i <= x; i++) {
      result += pdf(i, n, M, N);
    }
    return result;
  }

  return (cumulative) ? cdf(x, n, M, N) : pdf(x, n, M, N);
};

export const INTERCEPT = (known_y, known_x) => {
  known_y = utils.parseNumberArray(known_y);
  known_x = utils.parseNumberArray(known_x);
  if (utils.anyIsError(known_y, known_x)) {
    return error.value;
  }
  if (known_y.length !== known_x.length) {
    return error.na;
  }
  return FORECAST(0, known_y, known_x);
};

export const KURT = function () {
  const range = utils.parseNumberArray(utils.flatten(arguments));
  if (range instanceof Error) {
    return range;
  }
  const mean = jStat.mean(range);
  const n = range.length;
  let sigma = 0;
  for (let i = 0; i < n; i++) {
    sigma += (range[i] - mean) ** 4;
  }
  sigma /= jStat.stdev(range, true) ** 4;
  return ((n * (n + 1)) / ((n - 1) * (n - 2) * (n - 3))) * sigma - 3 * (n - 1) * (n - 1) / ((n - 2) * (n - 3));
};

export const LARGE = (range, k) => {
  range = utils.parseNumberArray(utils.flatten(range));
  k = utils.parseNumber(k);
  if (utils.anyIsError(range, k)) {
    return range;
  }
  return range.sort((a, b) => b - a)[k - 1];
};

export const LINEST = (data_y, data_x) => {
  data_y = utils.parseNumberArray(utils.flatten(data_y));
  data_x = utils.parseNumberArray(utils.flatten(data_x));
  if (utils.anyIsError(data_y, data_x)) {
    return error.value;
  }
  const ymean = jStat.mean(data_y);
  const xmean = jStat.mean(data_x);
  const n = data_x.length;
  let num = 0;
  let den = 0;
  for (let i = 0; i < n; i++) {
    num += (data_x[i] - xmean) * (data_y[i] - ymean);
    den += (data_x[i] - xmean) ** 2;
  }
  const m = num / den;
  const b = ymean - m * xmean;
  return [m, b];
};

// According to Microsoft:
// http://office.microsoft.com/en-us/starter-help/logest-function-HP010342665.aspx
// LOGEST returns are based on the following linear model:
// ln y = x1 ln m1 + ... + xn ln mn + ln b
export const LOGEST = (data_y, data_x) => {
  data_y = utils.parseNumberArray(utils.flatten(data_y));
  data_x = utils.parseNumberArray(utils.flatten(data_x));
  if (utils.anyIsError(data_y, data_x)) {
    return error.value;
  }
  for (let i = 0; i < data_y.length; i++) {
    data_y[i] = Math.log(data_y[i]);
  }

  const result = LINEST(data_y, data_x);
  result[0] = Math.round(Math.exp(result[0]) * 1000000) / 1000000;
  result[1] = Math.round(Math.exp(result[1]) * 1000000) / 1000000;
  return result;
};

export const LOGNORM = {};

exports.LOGNORM.DIST = (x, mean, sd, cumulative) => {
  x = utils.parseNumber(x);
  mean = utils.parseNumber(mean);
  sd = utils.parseNumber(sd);
  if (utils.anyIsError(x, mean, sd)) {
    return error.value;
  }
  return (cumulative) ? jStat.lognormal.cdf(x, mean, sd) : jStat.lognormal.pdf(x, mean, sd);
};

exports.LOGNORM.INV = (probability, mean, sd) => {
  probability = utils.parseNumber(probability);
  mean = utils.parseNumber(mean);
  sd = utils.parseNumber(sd);
  if (utils.anyIsError(probability, mean, sd)) {
    return error.value;
  }
  return jStat.lognormal.inv(probability, mean, sd);
};

export const MAX = function () {
  const range = utils.numbers(utils.flatten(arguments));
  return (range.length === 0) ? 0 : Math.max(...range);
};

export const MAXA = function () {
  const range = utils.arrayValuesToNumbers(utils.flatten(arguments));
  return (range.length === 0) ? 0 : Math.max(...range);
};

export const MEDIAN = function () {
  const range = utils.arrayValuesToNumbers(utils.flatten(arguments));
  return jStat.median(range);
};

export const MIN = function () {
  const range = utils.numbers(utils.flatten(arguments));
  return (range.length === 0) ? 0 : Math.min(...range);
};

export const MINA = function () {
  const range = utils.arrayValuesToNumbers(utils.flatten(arguments));
  return (range.length === 0) ? 0 : Math.min(...range);
};

export const MODE = {};

exports.MODE.MULT = function () {
  // Credits: Roönaän
  const range = utils.parseNumberArray(utils.flatten(arguments));
  if (range instanceof Error) {
    return range;
  }
  const n = range.length;
  const count = {};
  let maxItems = [];
  let max = 0;
  let currentItem;

  for (let i = 0; i < n; i++) {
    currentItem = range[i];
    count[currentItem] = count[currentItem] ? count[currentItem] + 1 : 1;
    if (count[currentItem] > max) {
      max = count[currentItem];
      maxItems = [];
    }
    if (count[currentItem] === max) {
      maxItems[maxItems.length] = currentItem;
    }
  }
  return maxItems;
};

exports.MODE.SNGL = function () {
  const range = utils.parseNumberArray(utils.flatten(arguments));
  if (range instanceof Error) {
    return range;
  }
  return exports.MODE.MULT(range).sort((a, b) => a - b)[0];
};

export const NEGBINOM = {};

exports.NEGBINOM.DIST = (k, r, p, cumulative) => {
  k = utils.parseNumber(k);
  r = utils.parseNumber(r);
  p = utils.parseNumber(p);
  if (utils.anyIsError(k, r, p)) {
    return error.value;
  }
  return (cumulative) ? jStat.negbin.cdf(k, r, p) : jStat.negbin.pdf(k, r, p);
};

export const NORM = {};

exports.NORM.DIST = (x, mean, sd, cumulative) => {
  x = utils.parseNumber(x);
  mean = utils.parseNumber(mean);
  sd = utils.parseNumber(sd);
  if (utils.anyIsError(x, mean, sd)) {
    return error.value;
  }
  if (sd <= 0) {
    return error.num;
  }

  // Return normal distribution computed by jStat [http://jstat.org]
  return (cumulative) ? jStat.normal.cdf(x, mean, sd) : jStat.normal.pdf(x, mean, sd);
};

exports.NORM.INV = (probability, mean, sd) => {
  probability = utils.parseNumber(probability);
  mean = utils.parseNumber(mean);
  sd = utils.parseNumber(sd);
  if (utils.anyIsError(probability, mean, sd)) {
    return error.value;
  }
  return jStat.normal.inv(probability, mean, sd);
};

exports.NORM.S = {};

exports.NORM.S.DIST = (z, cumulative) => {
  z = utils.parseNumber(z);
  if (z instanceof Error) {
    return error.value;
  }
  return (cumulative) ? jStat.normal.cdf(z, 0, 1) : jStat.normal.pdf(z, 0, 1);
};

exports.NORM.S.INV = (probability) => {
  probability = utils.parseNumber(probability);
  if (probability instanceof Error) {
    return error.value;
  }
  return jStat.normal.inv(probability, 0, 1);
};

export const PEARSON = (data_x, data_y) => {
  data_y = utils.parseNumberArray(utils.flatten(data_y));
  data_x = utils.parseNumberArray(utils.flatten(data_x));
  if (utils.anyIsError(data_y, data_x)) {
    return error.value;
  }
  const xmean = jStat.mean(data_x);
  const ymean = jStat.mean(data_y);
  const n = data_x.length;
  let num = 0;
  let den1 = 0;
  let den2 = 0;
  for (let i = 0; i < n; i++) {
    num += (data_x[i] - xmean) * (data_y[i] - ymean);
    den1 += (data_x[i] - xmean) ** 2;
    den2 += (data_y[i] - ymean) ** 2;
  }
  return num / Math.sqrt(den1 * den2);
};

export const PERCENTILE = {};

exports.PERCENTILE.EXC = (array, k) => {
  array = utils.parseNumberArray(utils.flatten(array));
  k = utils.parseNumber(k);
  if (utils.anyIsError(array, k)) {
    return error.value;
  }
  array = array.sort((a, b) => {
    {
      return a - b;
    }
  });
  const n = array.length;
  if (k < 1 / (n + 1) || k > 1 - 1 / (n + 1)) {
    return error.num;
  }
  const l = k * (n + 1) - 1;
  const fl = Math.floor(l);
  return utils.cleanFloat((l === fl) ? array[l] : array[fl] + (l - fl) * (array[fl + 1] - array[fl]));
};

exports.PERCENTILE.INC = (array, k) => {
  array = utils.parseNumberArray(utils.flatten(array));
  k = utils.parseNumber(k);
  if (utils.anyIsError(array, k)) {
    return error.value;
  }
  array = array.sort((a, b) => a - b);
  const n = array.length;
  const l = k * (n - 1);
  const fl = Math.floor(l);
  return utils.cleanFloat((l === fl) ? array[l] : array[fl] + (l - fl) * (array[fl + 1] - array[fl]));
};

export const PERCENTRANK = {};

exports.PERCENTRANK.EXC = (array, x, significance) => {
  significance = (significance === undefined) ? 3 : significance;
  array = utils.parseNumberArray(utils.flatten(array));
  x = utils.parseNumber(x);
  significance = utils.parseNumber(significance);
  if (utils.anyIsError(array, x, significance)) {
    return error.value;
  }
  array = array.sort((a, b) => a - b);
  const uniques = misc.UNIQUE.apply(null, array);
  const n = array.length;
  const m = uniques.length;
  const power = 10 ** significance;
  let result = 0;
  let match = false;
  let i = 0;
  while (!match && i < m) {
    if (x === uniques[i]) {
      result = (array.indexOf(uniques[i]) + 1) / (n + 1);
      match = true;
    } else if (x >= uniques[i] && (x < uniques[i + 1] || i === m - 1)) {
      result = (array.indexOf(uniques[i]) + 1 + (x - uniques[i]) / (uniques[i + 1] - uniques[i])) / (n + 1);
      match = true;
    }
    i++;
  }
  return Math.floor(result * power) / power;
};

exports.PERCENTRANK.INC = (array, x, significance) => {
  significance = (significance === undefined) ? 3 : significance;
  array = utils.parseNumberArray(utils.flatten(array));
  x = utils.parseNumber(x);
  significance = utils.parseNumber(significance);
  if (utils.anyIsError(array, x, significance)) {
    return error.value;
  }
  array = array.sort((a, b) => a - b);
  const uniques = misc.UNIQUE.apply(null, array);
  const n = array.length;
  const m = uniques.length;
  const power = 10 ** significance;
  let result = 0;
  let match = false;
  let i = 0;
  while (!match && i < m) {
    if (x === uniques[i]) {
      result = array.indexOf(uniques[i]) / (n - 1);
      match = true;
    } else if (x >= uniques[i] && (x < uniques[i + 1] || i === m - 1)) {
      result = (array.indexOf(uniques[i]) + (x - uniques[i]) / (uniques[i + 1] - uniques[i])) / (n - 1);
      match = true;
    }
    i++;
  }
  return Math.floor(result * power) / power;
};

export const PERMUT = (number, number_chosen) => {
  number = utils.parseNumber(number);
  number_chosen = utils.parseNumber(number_chosen);
  if (utils.anyIsError(number, number_chosen)) {
    return error.value;
  }
  return mathTrig.FACT(number) / mathTrig.FACT(number - number_chosen);
};

export const PERMUTATIONA = (number, number_chosen) => {
  number = utils.parseNumber(number);
  number_chosen = utils.parseNumber(number_chosen);
  if (utils.anyIsError(number, number_chosen)) {
    return error.value;
  }
  return number ** number_chosen;
};

export const PHI = (x) => {
  x = utils.parseNumber(x);
  if (x instanceof Error) {
    return error.value;
  }
  return Math.exp(-0.5 * x * x) / SQRT2PI;
};

export const POISSON = {};

exports.POISSON.DIST = (x, mean, cumulative) => {
  x = utils.parseNumber(x);
  mean = utils.parseNumber(mean);
  if (utils.anyIsError(x, mean)) {
    return error.value;
  }
  return (cumulative) ? jStat.poisson.cdf(x, mean) : jStat.poisson.pdf(x, mean);
};

export const PROB = (range, probability, lower, upper) => {
  if (lower === undefined) {
    return 0;
  }
  upper = (upper === undefined) ? lower : upper;

  range = utils.parseNumberArray(utils.flatten(range));
  probability = utils.parseNumberArray(utils.flatten(probability));
  lower = utils.parseNumber(lower);
  upper = utils.parseNumber(upper);
  if (utils.anyIsError(range, probability, lower, upper)) {
    return error.value;
  }

  if (lower === upper) {
    return (range.indexOf(lower) >= 0) ? probability[range.indexOf(lower)] : 0;
  }

  const sorted = range.sort((a, b) => a - b);
  const n = sorted.length;
  let result = 0;
  for (let i = 0; i < n; i++) {
    if (sorted[i] >= lower && sorted[i] <= upper) {
      result += probability[range.indexOf(sorted[i])];
    }
  }
  return result;
};

export const QUARTILE = {};

exports.QUARTILE.EXC = (range, quart) => {
  range = utils.parseNumberArray(utils.flatten(range));
  quart = utils.parseNumber(quart);
  if (utils.anyIsError(range, quart)) {
    return error.value;
  }
  switch (quart) {
    case 1:
      return exports.PERCENTILE.EXC(range, 0.25);
    case 2:
      return exports.PERCENTILE.EXC(range, 0.5);
    case 3:
      return exports.PERCENTILE.EXC(range, 0.75);
    default:
      return error.num;
  }
};

exports.QUARTILE.INC = (range, quart) => {
  range = utils.parseNumberArray(utils.flatten(range));
  quart = utils.parseNumber(quart);
  if (utils.anyIsError(range, quart)) {
    return error.value;
  }
  switch (quart) {
    case 1:
      return exports.PERCENTILE.INC(range, 0.25);
    case 2:
      return exports.PERCENTILE.INC(range, 0.5);
    case 3:
      return exports.PERCENTILE.INC(range, 0.75);
    default:
      return error.num;
  }
};

export const RANK = {};

exports.RANK.AVG = (number, range, order) => {
  number = utils.parseNumber(number);
  range = utils.parseNumberArray(utils.flatten(range));
  if (utils.anyIsError(number, range)) {
    return error.value;
  }
  range = utils.flatten(range);
  order = order || false;
  const sort = (order) ? (a, b) => a - b : (a, b) => b - a;
  range = range.sort(sort);

  const length = range.length;
  let count = 0;
  for (let i = 0; i < length; i++) {
    if (range[i] === number) {
      count++;
    }
  }

  return (count > 1) ? (2 * range.indexOf(number) + count + 1) / 2 : range.indexOf(number) + 1;
};

exports.RANK.EQ = (number, range, order) => {
  number = utils.parseNumber(number);
  range = utils.parseNumberArray(utils.flatten(range));
  if (utils.anyIsError(number, range)) {
    return error.value;
  }
  order = order || false;
  const sort = (order) ? (a, b) => a - b : (a, b) => b - a;
  range = range.sort(sort);
  return range.indexOf(number) + 1;
};

export const ROW = function (matrix, index) {
  if (arguments.length !== 2) {
    return error.na;
  }

  if (index < 0) {
    return error.num;
  }

  if (!(matrix instanceof Array) || (typeof index !== 'number')) {
    return error.value;
  }

  if (matrix.length === 0) {
    return undefined;
  }

  return jStat.row(matrix, index);
};

export const ROWS = function (matrix) {
  if (arguments.length !== 1) {
    return error.na;
  }

  if (!(matrix instanceof Array)) {
    return error.value;
  }

  if (matrix.length === 0) {
    return 0;
  }

  return jStat.rows(matrix);
};

export const RSQ = (data_x, data_y) => { // no need to flatten here, PEARSON will take care of that
  data_x = utils.parseNumberArray(utils.flatten(data_x));
  data_y = utils.parseNumberArray(utils.flatten(data_y));
  if (utils.anyIsError(data_x, data_y)) {
    return error.value;
  }
  return PEARSON(data_x, data_y) ** 2;
};

export const SKEW = function () {
  const range = utils.parseNumberArray(utils.flatten(arguments));
  if (range instanceof Error) {
    return range;
  }
  const mean = jStat.mean(range);
  const n = range.length;
  let sigma = 0;
  for (let i = 0; i < n; i++) {
    sigma += (range[i] - mean) ** 3;
  }
  return n * sigma / ((n - 1) * (n - 2) * (jStat.stdev(range, true) ** 3));
};

exports.SKEW.P = function () {
  const range = utils.parseNumberArray(utils.flatten(arguments));
  if (range instanceof Error) {
    return range;
  }
  const mean = jStat.mean(range);
  const n = range.length;
  let m2 = 0;
  let m3 = 0;
  for (let i = 0; i < n; i++) {
    m3 += (range[i] - mean) ** 3;
    m2 += (range[i] - mean) ** 2;
  }
  m3 /= n;
  m2 /= n;
  return m3 / (m2 ** (3 / 2));
};

export const SLOPE = (data_y, data_x) => {
  data_y = utils.parseNumberArray(utils.flatten(data_y));
  data_x = utils.parseNumberArray(utils.flatten(data_x));
  if (utils.anyIsError(data_y, data_x)) {
    return error.value;
  }
  const xmean = jStat.mean(data_x);
  const ymean = jStat.mean(data_y);
  const n = data_x.length;
  let num = 0;
  let den = 0;
  for (let i = 0; i < n; i++) {
    num += (data_x[i] - xmean) * (data_y[i] - ymean);
    den += (data_x[i] - xmean) ** 2;
  }
  return num / den;
};

export const SMALL = (range, k) => {
  range = utils.parseNumberArray(utils.flatten(range));
  k = utils.parseNumber(k);
  if (utils.anyIsError(range, k)) {
    return range;
  }
  return range.sort((a, b) => a - b)[k - 1];
};

export const STANDARDIZE = (x, mean, sd) => {
  x = utils.parseNumber(x);
  mean = utils.parseNumber(mean);
  sd = utils.parseNumber(sd);
  if (utils.anyIsError(x, mean, sd)) {
    return error.value;
  }
  return (x - mean) / sd;
};

export const STDEV = {};

exports.STDEV.P = function () {
  const v = exports.VAR.P.apply(this, arguments);
  return Math.sqrt(v);
};

exports.STDEV.S = function () {
  const v = exports.VAR.S.apply(this, arguments);
  return Math.sqrt(v);
};

export const STDEVA = function () {
  const v = exports.VARA.apply(this, arguments);
  return Math.sqrt(v);
};

export const STDEVPA = function () {
  const v = exports.VARPA.apply(this, arguments);
  return Math.sqrt(v);
};

export const STEYX = (data_y, data_x) => {
  data_y = utils.parseNumberArray(utils.flatten(data_y));
  data_x = utils.parseNumberArray(utils.flatten(data_x));
  if (utils.anyIsError(data_y, data_x)) {
    return error.value;
  }
  const xmean = jStat.mean(data_x);
  const ymean = jStat.mean(data_y);
  const n = data_x.length;
  let lft = 0;
  let num = 0;
  let den = 0;
  for (let i = 0; i < n; i++) {
    lft += (data_y[i] - ymean) ** 2;
    num += (data_x[i] - xmean) * (data_y[i] - ymean);
    den += (data_x[i] - xmean) ** 2;
  }
  return Math.sqrt((lft - num * num / den) / (n - 2));
};

export const TRANSPOSE = (matrix) => {
  if (!matrix) {
    return error.na;
  }
  return jStat.transpose(matrix);
};

export const T = text.T;

exports.T.DIST = (x, df, cumulative) => {
  x = utils.parseNumber(x);
  df = utils.parseNumber(df);
  if (utils.anyIsError(x, df)) {
    return error.value;
  }
  return (cumulative) ? jStat.studentt.cdf(x, df) : jStat.studentt.pdf(x, df);
};

exports.T.DIST['2T'] = function (x, df) {
  if (arguments.length !== 2) {
    return error.na;
  }

  if (x < 0 || df < 1) {
    return error.num;
  }

  if ((typeof x !== 'number') || (typeof df !== 'number')) {
    return error.value;
  }

  return (1 - jStat.studentt.cdf(x, df)) * 2;
};

exports.T.DIST.RT = function (x, df) {
  if (arguments.length !== 2) {
    return error.na;
  }

  if (x < 0 || df < 1) {
    return error.num;
  }

  if ((typeof x !== 'number') || (typeof df !== 'number')) {
    return error.value;
  }

  return 1 - jStat.studentt.cdf(x, df);
};

exports.T.INV = (probability, df) => {
  probability = utils.parseNumber(probability);
  df = utils.parseNumber(df);
  if (utils.anyIsError(probability, df)) {
    return error.value;
  }
  return jStat.studentt.inv(probability, df);
};

exports.T.INV['2T'] = (probability, df) => {
  probability = utils.parseNumber(probability);
  df = utils.parseNumber(df);
  if (probability <= 0 || probability > 1 || df < 1) {
    return error.num;
  }
  if (utils.anyIsError(probability, df)) {
    return error.value;
  }
  return Math.abs(jStat.studentt.inv(probability / 2, df));
};

// The algorithm can be found here:
// http://www.chem.uoa.gr/applets/AppletTtest/Appl_Ttest2.html
exports.T.TEST = (data_x, data_y) => {
  data_x = utils.parseNumberArray(utils.flatten(data_x));
  data_y = utils.parseNumberArray(utils.flatten(data_y));
  if (utils.anyIsError(data_x, data_y)) {
    return error.value;
  }

  const mean_x = jStat.mean(data_x);
  const mean_y = jStat.mean(data_y);
  let s_x = 0;
  let s_y = 0;
  let i;

  for (i = 0; i < data_x.length; i++) {
    s_x += (data_x[i] - mean_x) ** 2;
  }
  for (i = 0; i < data_y.length; i++) {
    s_y += (data_y[i] - mean_y) ** 2;
  }

  s_x /= (data_x.length - 1);
  s_y /= (data_y.length - 1);

  const t = Math.abs(mean_x - mean_y) / Math.sqrt(s_x / data_x.length + s_y / data_y.length);

  return exports.T.DIST['2T'](t, data_x.length + data_y.length - 2);
};

export const TREND = (data_y, data_x, new_data_x) => {
  data_y = utils.parseNumberArray(utils.flatten(data_y));
  data_x = utils.parseNumberArray(utils.flatten(data_x));
  new_data_x = utils.parseNumberArray(utils.flatten(new_data_x));
  if (utils.anyIsError(data_y, data_x, new_data_x)) {
    return error.value;
  }
  const linest = LINEST(data_y, data_x);
  const m = linest[0];
  const b = linest[1];
  const result = [];

  new_data_x.forEach((x) => {
    result.push(m * x + b);
  });

  return result;
};

export const TRIMMEAN = (range, percent) => {
  range = utils.parseNumberArray(utils.flatten(range));
  percent = utils.parseNumber(percent);
  if (utils.anyIsError(range, percent)) {
    return error.value;
  }
  const trim = mathTrig.FLOOR(range.length * percent, 2) / 2;
  return jStat.mean(utils.initial(utils.rest(range.sort((a, b) => a - b), trim), trim));
};

export const VAR = {};

exports.VAR.P = function () {
  const range = utils.numbers(utils.flatten(arguments));
  const n = range.length;
  let sigma = 0;
  const mean = AVERAGE(range);
  for (let i = 0; i < n; i++) {
    sigma += (range[i] - mean) ** 2;
  }
  return sigma / n;
};

exports.VAR.S = function () {
  const range = utils.numbers(utils.flatten(arguments));
  const n = range.length;
  let sigma = 0;
  const mean = AVERAGE(range);
  for (let i = 0; i < n; i++) {
    sigma += (range[i] - mean) ** 2;
  }
  return sigma / (n - 1);
};

export const VARA = function () {
  const range = utils.flatten(arguments);
  const n = range.length;
  let sigma = 0;
  let count = 0;
  const mean = AVERAGEA(range);
  for (let i = 0; i < n; i++) {
    const el = range[i];
    if (typeof el === 'number') {
      sigma += (el - mean) ** 2;
    } else if (el === true) {
      sigma += (1 - mean) ** 2;
    } else {
      sigma += (0 - mean) ** 2;
    }

    if (el !== null) {
      count++;
    }
  }
  return sigma / (count - 1);
};

export const VARPA = function () {
  const range = utils.flatten(arguments);
  const n = range.length;
  let sigma = 0;
  let count = 0;
  const mean = AVERAGEA(range);
  for (let i = 0; i < n; i++) {
    const el = range[i];
    if (typeof el === 'number') {
      sigma += (el - mean) ** 2;
    } else if (el === true) {
      sigma += (1 - mean) ** 2;
    } else {
      sigma += (0 - mean) ** 2;
    }

    if (el !== null) {
      count++;
    }
  }
  return sigma / count;
};

export const WEIBULL = {};

exports.WEIBULL.DIST = (x, alpha, beta, cumulative) => {
  x = utils.parseNumber(x);
  alpha = utils.parseNumber(alpha);
  beta = utils.parseNumber(beta);
  if (utils.anyIsError(x, alpha, beta)) {
    return error.value;
  }
  return (cumulative) ? 1 - Math.exp(-(x / beta ** alpha)) : x ** (alpha - 1) * Math.exp(-(x / beta ** alpha)) * alpha / (beta ** alpha);
};

export const Z = {};

exports.Z.TEST = (range, x, sd) => {
  range = utils.parseNumberArray(utils.flatten(range));
  x = utils.parseNumber(x);
  if (utils.anyIsError(range, x)) {
    return error.value;
  }

  sd = sd || exports.STDEV.S(range);
  const n = range.length;
  return 1 - exports.NORM.S.DIST((AVERAGE(range) - x) / (sd / Math.sqrt(n)), true);
};
