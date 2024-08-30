import { camelCase, isArray, isObject, snakeCase, transform } from 'lodash';

/* eslint-disable @typescript-eslint/no-explicit-any */
export const camelize = (obj: any): any => {
  if (typeof obj === 'undefined' || obj == null) {
    return obj;
  }

  if (typeof obj !== 'object') {
    return camelCase(obj);
  }

  return transform(obj, (acc: any, value, key, target) => {
    const camelKey = isArray(target) ? key : camelCase(key.toString());
    acc[camelKey] = isObject(value) ? camelize(value) : value;
  });
};

export const decamelize = (obj: any): any => {
  if (typeof obj === 'undefined' || obj == null) {
    return obj;
  }

  if (typeof obj !== 'object') {
    return snakeCase(obj);
  }

  return transform(obj, (acc: any, value, key, target) => {
    const camelKey = isArray(target) ? key : snakeCase(key.toString());
    acc[camelKey] = isObject(value) ? decamelize(value) : value;
  });
};
