import utils from './utils';
import error from './error';
import numeral from 'numeral';

// TODO
export const ASC = () => {
  throw new Error('ASC is not implemented');
};

// TODO
export const BAHTTEXT = () => {
  throw new Error('BAHTTEXT is not implemented');
};

export const CHAR = (number) => {
  number = utils.parseNumber(number);
  if (number instanceof Error) {
    return number;
  }
  return String.fromCharCode(number);
};

export const CLEAN = (text) => {
  text = text || '';
  const re = /[\0-\x1F]/g;
  return text.replace(re, '');
};

export const CODE = (text) => {
  text = text || '';
  return text.charCodeAt(0);
};

export const CONCATENATE = function () {
  const args = utils.flatten(arguments);

  let trueFound = 0;
  while ((trueFound = args.indexOf(true)) > -1) {
    args[trueFound] = 'TRUE';
  }

  let falseFound = 0;
  while ((falseFound = args.indexOf(false)) > -1) {
    args[falseFound] = 'FALSE';
  }

  return args.join('');
};

// TODO
export const DBCS = () => {
  throw new Error('DBCS is not implemented');
};

export const DOLLAR = (number, decimals) => {
  decimals = (decimals === undefined) ? 2 : decimals;

  number = utils.parseNumber(number);
  decimals = utils.parseNumber(decimals);
  if (utils.anyIsError(number, decimals)) {
    return error.value;
  }
  let format = '';
  if (decimals <= 0) {
    number = Math.round(number * (10 ** decimals)) / (10 ** decimals);
    format = '($0,0)';
  } else if (decimals > 0) {
    format = `($0,0.${new Array(decimals + 1).join('0')})`;
  }
  return numeral(number).format(format);
};

export const EXACT = (text1, text2) => text1 === text2;

export const FIND = (find_text, within_text, position) => {
  position = (position === undefined) ? 0 : position;
  return within_text ? within_text.indexOf(find_text, position - 1) + 1 : null;
};

export const FIXED = (number, decimals, no_commas) => {
  decimals = (decimals === undefined) ? 2 : decimals;
  no_commas = (no_commas === undefined) ? false : no_commas;

  number = utils.parseNumber(number);
  decimals = utils.parseNumber(decimals);
  if (utils.anyIsError(number, decimals)) {
    return error.value;
  }

  let format = no_commas ? '0' : '0,0';
  if (decimals <= 0) {
    number = Math.round(number * (10 ** decimals)) / (10 ** decimals);
  } else if (decimals > 0) {
    format += `.${new Array(decimals + 1).join('0')}`;
  }
  return numeral(number).format(format);
};

export const HTML2TEXT = (value) => {
  let result = '';

  if (value) {
    if (value instanceof Array) {
      value.forEach((line) => {
        if (result !== '') {
          result += '\n';
        }
        result += (line.replace(/<(?:.|\n)*?>/gm, ''));
      });
    } else {
      result = value.replace(/<(?:.|\n)*?>/gm, '');
    }
  }

  return result;
};

export const LEFT = (text, number) => {
  number = (number === undefined) ? 1 : number;
  number = utils.parseNumber(number);
  if (number instanceof Error || typeof text !== 'string') {
    return error.value;
  }
  return text ? text.substring(0, number) : null;
};

export const LEN = function (text) {
  if (arguments.length === 0) {
    return error.error;
  }

  if (typeof text === 'string') {
    return text ? text.length : 0;
  }

  if (text.length) {
    return text.length;
  }

  return error.value;
};

export const LOWER = (text) => {
  if (typeof text !== 'string') {
    return error.value;
  }
  return text ? text.toLowerCase() : text;
};

export const MID = (text, start, number) => {
  start = utils.parseNumber(start);
  number = utils.parseNumber(number);
  if (utils.anyIsError(start, number) || typeof text !== 'string') {
    return number;
  }

  const begin = start - 1;
  const end = begin + number;

  return text.substring(begin, end);
};

// TODO
export const NUMBERVALUE = (text, decimal_separator, group_separator) => {
  decimal_separator = (typeof decimal_separator === 'undefined') ? '.' : decimal_separator;
  group_separator = (typeof group_separator === 'undefined') ? ',' : group_separator;
  return Number(text.replace(decimal_separator, '.').replace(group_separator, ''));
};

// TODO
export const PRONETIC = () => {
  throw new Error('PRONETIC is not implemented');
};

export const PROPER = (text) => {
  if (text === undefined || text.length === 0) {
    return error.value;
  }
  if (text === true) {
    text = 'TRUE';
  }
  if (text === false) {
    text = 'FALSE';
  }
  if (isNaN(text) && typeof text === 'number') {
    return error.value;
  }
  if (typeof text === 'number') {
    text = `${text}`;
  }

  return text.replace(/\w\S*/g, txt => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase());
};

export const REGEXEXTRACT = (text, regular_expression) => {
  const match = text.match(new RegExp(regular_expression));
  return match ? (match[match.length > 1 ? match.length - 1 : 0]) : null;
};

export const REGEXMATCH = (text, regular_expression, full) => {
  const match = text.match(new RegExp(regular_expression));
  return full ? match : !!match;
};

export const REGEXREPLACE = (text, regular_expression, replacement) => text.replace(new RegExp(regular_expression), replacement);

export const REPLACE = (text, position, length, new_text) => {
  position = utils.parseNumber(position);
  length = utils.parseNumber(length);
  if (utils.anyIsError(position, length) ||
    typeof text !== 'string' ||
    typeof new_text !== 'string') {
    return error.value;
  }
  return text.substr(0, position - 1) + new_text + text.substr(position - 1 + length);
};

export const REPT = (text, number) => {
  number = utils.parseNumber(number);
  if (number instanceof Error) {
    return number;
  }
  return new Array(number + 1).join(text);
};

export const RIGHT = (text, number) => {
  number = (number === undefined) ? 1 : number;
  number = utils.parseNumber(number);
  if (number instanceof Error) {
    return number;
  }
  return text ? text.substring(text.length - number) : null;
};

export const SEARCH = (find_text, within_text, position) => {
  let foundAt;
  if (typeof find_text !== 'string' || typeof within_text !== 'string') {
    return error.value;
  }
  position = (position === undefined) ? 0 : position;
  foundAt = within_text.toLowerCase().indexOf(find_text.toLowerCase(), position - 1) + 1;
  return (foundAt === 0) ? error.value : foundAt;
};

export const SPLIT = (text, separator) => text.split(separator);

export const SUBSTITUTE = (text, old_text, new_text, occurrence) => {
  if (!text || !old_text || !new_text) {
    return text;
  } else if (occurrence === undefined) {
    return text.replace(new RegExp(old_text, 'g'), new_text);
  }
  let index = 0;
  let i = 0;
  while (text.indexOf(old_text, index) > 0) {
    index = text.indexOf(old_text, index + 1);
    i++;
    if (i === occurrence) {
      return text.substring(0, index) + new_text + text.substring(index + old_text.length);
    }
  }
};

export const T = value => ((typeof value === 'string') ? value : '');

// TODO incomplete implementation
export const TEXT = (value, format) => {
  value = utils.parseNumber(value);
  if (utils.anyIsError(value)) {
    return error.na;
  }

  return numeral(value).format(format);
};

export const TRIM = (text) => {
  if (typeof text !== 'string') {
    return error.value;
  }
  return text.replace(/ +/g, ' ').trim();
};

export const UNICHAR = this.CHAR;
export const UNICODE = this.CODE;

export const UPPER = (text) => {
  if (typeof text !== 'string') {
    return error.value;
  }
  return text.toUpperCase();
};

export const VALUE = (text) => {
  if (typeof text !== 'string') {
    return error.value;
  }
  return numeral().unformat(text);
};
