import error from './error';
import stats from './statistical';
import maths from './math-trig';
import utils from './utils';

function compact(array) {
  if (!array) { return array; }
  const result = [];
  for (let i = 0; i < array.length; ++i) {
    if (!array[i]) { continue; }
    result.push(array[i]);
  }
  return result;
}

export const FINDFIELD = (database, title) => {
  let index = null;
  for (let i = 0; i < database.length; i++) {
    if (database[i][0] === title) {
      index = i;
      break;
    }
  }

  // Return error if the input field title is incorrect
  if (index == null) {
    return error.value;
  }
  return index;
};

function findResultIndex(database, criterias) {
  const matches = {};
  for (var i = 1; i < database[0].length; ++i) {
    matches[i] = true;
  }
  let maxCriteriaLength = criterias[0].length;
  for (i = 1; i < criterias.length; ++i) {
    if (criterias[i].length > maxCriteriaLength) {
      maxCriteriaLength = criterias[i].length;
    }
  }

  for (let k = 1; k < database.length; ++k) {
    for (let l = 1; l < database[k].length; ++l) {
      let currentCriteriaResult = false;
      let hasMatchingCriteria = false;

      for (const criteria of criterias) {
        if (criteria.length < maxCriteriaLength) {
          continue;
        }

        const criteriaField = criteria[0];
        if (database[k][0] !== criteriaField) {
          continue;
        }
        hasMatchingCriteria = true;
        for (let p = 1; p < criteria.length; ++p) {
          currentCriteriaResult = currentCriteriaResult || eval(database[k][l] + criteria[p]); // jshint ignore:line
        }
      }

      if (hasMatchingCriteria) {
        matches[l] = matches[l] && currentCriteriaResult;
      }
    }
  }

  const result = [];
  for (let n = 0; n < database[0].length; ++n) {
    if (matches[n]) {
      result.push(n - 1);
    }
  }
  return result;
}

// Database functions
export const DAVERAGE = (database, field, criteria) => {
  // Return error if field is not a number and not a string
  if (isNaN(field) && (typeof field !== 'string')) {
    return error.value;
  }
  const resultIndexes = findResultIndex(database, criteria);
  let targetFields = [];
  if (typeof field === 'string') {
    const index = FINDFIELD(database, field);
    targetFields = utils.rest(database[index]);
  } else {
    targetFields = utils.rest(database[field]);
  }
  let sum = 0;
  for (let i = 0; i < resultIndexes.length; i++) {
    sum += targetFields[resultIndexes[i]];
  }
  return resultIndexes.length === 0 ? error.div0 : sum / resultIndexes.length;
};

export const DCOUNT = (database, field, criteria) => {
  // Return error if field is not a number and not a string
  if (isNaN(field) && (typeof field !== 'string')) {
    return error.value;
  }
  const resultIndexes = findResultIndex(database, criteria);
  let targetFields = [];
  if (typeof field === 'string') {
    const index = FINDFIELD(database, field);
    targetFields = utils.rest(database[index]);
  } else {
    targetFields = utils.rest(database[field]);
  }
  const targetValues = [];
  for (let i = 0; i < resultIndexes.length; i++) {
    targetValues[i] = targetFields[resultIndexes[i]];
  }
  return stats.COUNT(targetValues);
};

export const DCOUNTA = (database, field, criteria) => {
  // Return error if field is not a number and not a string
  if (isNaN(field) && (typeof field !== 'string')) {
    return error.value;
  }
  const resultIndexes = findResultIndex(database, criteria);
  let targetFields = [];
  if (typeof field === 'string') {
    const index = FINDFIELD(database, field);
    targetFields = utils.rest(database[index]);
  } else {
    targetFields = utils.rest(database[field]);
  }
  const targetValues = [];
  for (let i = 0; i < resultIndexes.length; i++) {
    targetValues[i] = targetFields[resultIndexes[i]];
  }
  return stats.COUNTA(targetValues);
};

export const DGET = (database, field, criteria) => {
  // Return error if field is not a number and not a string
  if (isNaN(field) && (typeof field !== 'string')) {
    return error.value;
  }
  const resultIndexes = findResultIndex(database, criteria);
  let targetFields = [];
  if (typeof field === 'string') {
    const index = FINDFIELD(database, field);
    targetFields = utils.rest(database[index]);
  } else {
    targetFields = utils.rest(database[field]);
  }
  // Return error if no record meets the criteria
  if (resultIndexes.length === 0) {
    return error.value;
  }
  // Returns the #NUM! error value because more than one record meets the
  // criteria
  if (resultIndexes.length > 1) {
    return error.num;
  }

  return targetFields[resultIndexes[0]];
};

export const DMAX = (database, field, criteria) => {
  // Return error if field is not a number and not a string
  if (isNaN(field) && (typeof field !== 'string')) {
    return error.value;
  }
  const resultIndexes = findResultIndex(database, criteria);
  let targetFields = [];
  if (typeof field === 'string') {
    const index = FINDFIELD(database, field);
    targetFields = utils.rest(database[index]);
  } else {
    targetFields = utils.rest(database[field]);
  }
  let maxValue = targetFields[resultIndexes[0]];
  for (let i = 1; i < resultIndexes.length; i++) {
    if (maxValue < targetFields[resultIndexes[i]]) {
      maxValue = targetFields[resultIndexes[i]];
    }
  }
  return maxValue;
};

export const DMIN = (database, field, criteria) => {
  // Return error if field is not a number and not a string
  if (isNaN(field) && (typeof field !== 'string')) {
    return error.value;
  }
  const resultIndexes = findResultIndex(database, criteria);
  let targetFields = [];
  if (typeof field === 'string') {
    const index = FINDFIELD(database, field);
    targetFields = utils.rest(database[index]);
  } else {
    targetFields = utils.rest(database[field]);
  }
  let minValue = targetFields[resultIndexes[0]];
  for (let i = 1; i < resultIndexes.length; i++) {
    if (minValue > targetFields[resultIndexes[i]]) {
      minValue = targetFields[resultIndexes[i]];
    }
  }
  return minValue;
};

export const DPRODUCT = (database, field, criteria) => {
  // Return error if field is not a number and not a string
  if (isNaN(field) && (typeof field !== 'string')) {
    return error.value;
  }
  const resultIndexes = findResultIndex(database, criteria);
  let targetFields = [];
  if (typeof field === 'string') {
    const index = FINDFIELD(database, field);
    targetFields = utils.rest(database[index]);
  } else {
    targetFields = utils.rest(database[field]);
  }
  let targetValues = [];
  for (var i = 0; i < resultIndexes.length; i++) {
    targetValues[i] = targetFields[resultIndexes[i]];
  }
  targetValues = compact(targetValues);
  let result = 1;
  for (i = 0; i < targetValues.length; i++) {
    result *= targetValues[i];
  }
  return result;
};

export const DSTDEV = (database, field, criteria) => {
  // Return error if field is not a number and not a string
  if (isNaN(field) && (typeof field !== 'string')) {
    return error.value;
  }
  const resultIndexes = findResultIndex(database, criteria);
  let targetFields = [];
  if (typeof field === 'string') {
    const index = FINDFIELD(database, field);
    targetFields = utils.rest(database[index]);
  } else {
    targetFields = utils.rest(database[field]);
  }
  let targetValues = [];
  for (let i = 0; i < resultIndexes.length; i++) {
    targetValues[i] = targetFields[resultIndexes[i]];
  }
  targetValues = compact(targetValues);
  return stats.STDEV.S(targetValues);
};

export const DSTDEVP = (database, field, criteria) => {
  // Return error if field is not a number and not a string
  if (isNaN(field) && (typeof field !== 'string')) {
    return error.value;
  }
  const resultIndexes = findResultIndex(database, criteria);
  let targetFields = [];
  if (typeof field === 'string') {
    const index = FINDFIELD(database, field);
    targetFields = utils.rest(database[index]);
  } else {
    targetFields = utils.rest(database[field]);
  }
  let targetValues = [];
  for (let i = 0; i < resultIndexes.length; i++) {
    targetValues[i] = targetFields[resultIndexes[i]];
  }
  targetValues = compact(targetValues);
  return stats.STDEV.P(targetValues);
};

export const DSUM = (database, field, criteria) => {
  // Return error if field is not a number and not a string
  if (isNaN(field) && (typeof field !== 'string')) {
    return error.value;
  }
  const resultIndexes = findResultIndex(database, criteria);
  let targetFields = [];
  if (typeof field === 'string') {
    const index = FINDFIELD(database, field);
    targetFields = utils.rest(database[index]);
  } else {
    targetFields = utils.rest(database[field]);
  }
  const targetValues = [];
  for (let i = 0; i < resultIndexes.length; i++) {
    targetValues[i] = targetFields[resultIndexes[i]];
  }
  return maths.SUM(targetValues);
};

export const DVAR = (database, field, criteria) => {
  // Return error if field is not a number and not a string
  if (isNaN(field) && (typeof field !== 'string')) {
    return error.value;
  }
  const resultIndexes = findResultIndex(database, criteria);
  let targetFields = [];
  if (typeof field === 'string') {
    const index = FINDFIELD(database, field);
    targetFields = utils.rest(database[index]);
  } else {
    targetFields = utils.rest(database[field]);
  }
  const targetValues = [];
  for (let i = 0; i < resultIndexes.length; i++) {
    targetValues[i] = targetFields[resultIndexes[i]];
  }
  return stats.VAR.S(targetValues);
};

export const DVARP = (database, field, criteria) => {
  // Return error if field is not a number and not a string
  if (isNaN(field) && (typeof field !== 'string')) {
    return error.value;
  }
  const resultIndexes = findResultIndex(database, criteria);
  let targetFields = [];
  if (typeof field === 'string') {
    const index = FINDFIELD(database, field);
    targetFields = utils.rest(database[index]);
  } else {
    targetFields = utils.rest(database[field]);
  }
  const targetValues = [];
  for (let i = 0; i < resultIndexes.length; i++) {
    targetValues[i] = targetFields[resultIndexes[i]];
  }
  return stats.VAR.P(targetValues);
};
