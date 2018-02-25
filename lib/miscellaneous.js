import utils from './utils';
import numeral from 'numeral';

export const UNIQUE = function () {
  const result = [];
  for (let i = 0; i < arguments.length; ++i) {
    let hasElement = false;
    const element = arguments[i];

    // Check if we've already seen this element.
    for (let j = 0; j < result.length; ++j) {
      hasElement = result[j] === element;
      if (hasElement) { break; }
    }

    // If we did not find it, add it to the result.
    if (!hasElement) {
      result.push(element);
    }
  }
  return result;
};

export const FLATTEN = utils.flatten;

export const ARGS2ARRAY = function () {
  return Array.prototype.slice.call(arguments, 0);
};

export const REFERENCE = (context, reference) => {
  try {
    const path = reference.split('.');
    let result = context;

    for (const step of path) {
      if (step[step.length - 1] === ']') {
        const opening = step.indexOf('[');
        const index = step.substring(opening + 1, step.length - 1);
        result = result[step.substring(0, opening)][index];
      } else {
        result = result[step];
      }
    }

    return result;
  } catch (error) {}
};

export const JOIN = (array, separator) => array.join(separator);

export const NUMBERS = function () {
  const possibleNumbers = utils.flatten(arguments);
  return possibleNumbers.filter(el => typeof el === 'number');
};

export const NUMERAL = (number, format) => numeral(number).format(format);
