import error from './error';
import utils from './utils';
import information from './information';

export const AND = function () {
  const args = utils.flatten(arguments);
  let result = true;
  for (let i = 0; i < args.length; i++) {
    if (!args[i]) {
      result = false;
    }
  }
  return result;
};

export const CHOOSE = function () {
  if (arguments.length < 2) {
    return error.na;
  }

  const index = arguments[0];
  if (index < 1 || index > 254) {
    return error.value;
  }

  if (arguments.length < index + 1) {
    return error.value;
  }

  return arguments[index];
};

export const FALSE = () => false;

export const IF = (test, then_value, otherwise_value) => (test ? then_value : otherwise_value);

export const IFERROR = (value, valueIfError) => {
  if (information.ISERROR(value)) {
    return valueIfError;
  }
  return value;
};

export const IFNA = (value, value_if_na) => (value === error.na ? value_if_na : value);

export const NOT = logical => !logical;

export const OR = function () {
  const args = utils.flatten(arguments);
  let result = false;
  for (let i = 0; i < args.length; i++) {
    if (args[i]) {
      result = true;
    }
  }
  return result;
};

export const TRUE = () => true;

export const XOR = function () {
  const args = utils.flatten(arguments);
  let result = 0;
  for (let i = 0; i < args.length; i++) {
    if (args[i]) {
      result++;
    }
  }
  return !!((Math.floor(Math.abs(result)) & 1));
};

export const SWITCH = function () {
  let result;
  if (arguments.length > 0) {
    const targetValue = arguments[0];
    const argc = arguments.length - 1;
    const switchCount = Math.floor(argc / 2);
    let switchSatisfied = false;
    const defaultClause = argc % 2 === 0 ? null : arguments[arguments.length - 1];

    if (switchCount) {
      for (let index = 0; index < switchCount; index++) {
        if (targetValue === arguments[index * 2 + 1]) {
          result = arguments[index * 2 + 2];
          switchSatisfied = true;
          break;
        }
      }
    }

    if (!switchSatisfied && defaultClause) {
      result = defaultClause;
    }
  }

  return result;
};
