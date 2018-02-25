import error from './error';

// TODO
export const CELL = () => {
  throw new Error('CELL is not implemented');
};

export const ERROR = {};
exports.ERROR.TYPE = (error_val) => {
  switch (error_val) {
    case error.nil: return 1;
    case error.div0: return 2;
    case error.value: return 3;
    case error.ref: return 4;
    case error.name: return 5;
    case error.num: return 6;
    case error.na: return 7;
    case error.data: return 8;
  }
  return error.na;
};

// TODO
export const INFO = () => {
  throw new Error('INFO is not implemented');
};

export const ISBLANK = value => value === null;

export const ISBINARY = number => (/^[01]{1,10}$/).test(number);

export const ISERR = value => ([error.value, error.ref, error.div0, error.num, error.name, error.nil]).indexOf(value) >= 0 ||
  (typeof value === 'number' && (isNaN(value) || !isFinite(value)));

export const ISERROR = value => ISERR(value) || value === error.na;

export const ISEVEN = number => !((Math.floor(Math.abs(number)) & 1));

// TODO
export const ISFORMULA = () => {
  throw new Error('ISFORMULA is not implemented');
};

export const ISLOGICAL = value => value === true || value === false;

export const ISNA = value => value === error.na;

export const ISNONTEXT = value => typeof (value) !== 'string';

export const ISNUMBER = value => typeof (value) === 'number' && !isNaN(value) && isFinite(value);

export const ISODD = number => !!((Math.floor(Math.abs(number)) & 1));

// TODO
export const ISREF = () => {
  throw new Error('ISREF is not implemented');
};

export const ISTEXT = value => typeof (value) === 'string';

export const N = function (value) {
  if (this.ISNUMBER(value)) {
    return value;
  }
  if (value instanceof Date) {
    return value.getTime();
  }
  if (value === true) {
    return 1;
  }
  if (value === false) {
    return 0;
  }
  if (this.ISERROR(value)) {
    return value;
  }
  return 0;
};

export const NA = () => error.na;

// TODO
export const SHEET = () => {
  throw new Error('SHEET is not implemented');
};

// TODO
export const SHEETS = () => {
  throw new Error('SHEETS is not implemented');
};

export const TYPE = function (value) {
  if (this.ISNUMBER(value)) {
    return 1;
  }
  if (this.ISTEXT(value)) {
    return 2;
  }
  if (this.ISLOGICAL(value)) {
    return 4;
  }
  if (this.ISERROR(value)) {
    return 16;
  }
  if (Array.isArray(value)) {
    return 64;
  }
};
