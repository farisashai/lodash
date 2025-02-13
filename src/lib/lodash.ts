/**
 * Chunk array into subarrays of size `size`
 * @param array Input array
 * @param size Maximum chunk size
 * @returns Chunked array of subarrays
 */
export const chunk = (array: any[], size: number = 1) =>
  array.reduce((acc: any[][], curr: any) => {
    if (acc.length === 0) {
      return [[curr]];
    }

    const lastItem = acc.at(-1);

    if (!lastItem) {
      return acc;
    }

    if (lastItem?.length >= size) {
      return [...acc, [curr]];
    }

    return [...acc.slice(0, -1), [...lastItem, curr]];
  }, []);

export const compat = (array: any[]) => array.filter(value => Boolean(value));

const restArgsFlat = (rest: any[]) =>
  rest.reduce((acc, value) => {
    if (Array.isArray(value)) {
      return [...acc, ...value];
    }
    return [...acc, value];
  }, []);

export const concat = (array: any[], ...values: any[]) => {
  const valueArray: any[] = restArgsFlat(values);

  return [...array, ...valueArray];
};

// O(n^2)
export const difference = (array: any[], ...values: any[]) => {
  const valueArray: any[] = restArgsFlat(values); // O(n)
  const set = new Set(valueArray); // O(n)

  return array.filter(value => !set.has(value)); // O(n)
};

export const differenceWith = (
  array: any[],
  values: any[],
  // eslint-disable-next-line no-unused-vars
  comparator: (a: any, b: any) => boolean
) => {
  const valueArray: any[] = values.reduce((acc, value) => {
    if (Array.isArray(value)) {
      return [...acc, ...value];
    }
    return [...acc, value];
  }, []);

  return array.filter(value => valueArray.some(element => !comparator(value, element)));
};

export const drop = (array: any[], n: number = 1) => array.slice(n);

export const dropRight = (array: any[], n: number = 1) => array.slice(0, -n);

// eslint-disable-next-line no-unused-vars
export const dropWhile = (array: any[], predicate: (a: any) => boolean) =>
  array.reduce((acc, curr) => {
    if (predicate(curr)) return acc;
    return [...acc, curr];
  }, []);

// eslint-disable-next-line no-unused-vars
export const dropWhileRight = (array: any[], predicate: (a: any) => boolean) =>
  array
    .reduceRight<any[]>((acc, curr) => {
      if (predicate(curr)) return acc;
      return [...acc, curr];
    }, [])
    .reverse();

export const fill = (array: any[], value: any, start: number = 0, end: number = array.length) => {
  const beforeArr = array.slice(0, start);
  const fillArr = array.slice(start, end).map(() => value);
  const afterArr = array.slice(end);

  return [...beforeArr, ...fillArr, ...afterArr];
};

// eslint-disable-next-line no-unused-vars
export const findIndex = (array: any[], predicate: (a: any) => boolean) =>
  array.findIndex(predicate);

export const flattenDepth = (array: any[], depth: number = 1): any[] => {
  return array.reduce<any[]>((acc: any[], curr: any) => {
    if (Array.isArray(curr)) {
      if (depth === 1) {
        return [...acc, ...curr];
      }
      return [...acc, ...flattenDepth(curr, depth - 1)];
    }
    return [...acc, curr];
  }, []);
};

export const flatten = (array: any[]): any[] => flattenDepth(array, 1);
export const flattenDeep = (array: any[]): any[] => flattenDepth(array, -1);

export const fromPairs = (array: [string | number | boolean, any][]) =>
  array.reduce((acc, curr) => {
    const [key, value] = curr;
    acc[key] = value;
    return acc;
  }, {});

export const head = (array: any[]) => {
  if (!array?.length) return undefined;
  return array.at(0);
};

export const indexOf = <T>(array: T[], value: T, fromIndex: number = 0) => {
  const index = findIndex(array.slice(fromIndex), a => a === value);

  if (index === -1) return -1;

  return index + fromIndex;
};

export const initial = (array: any[]) => array.slice(0, -1);

const intersect = <T>(a: T[], b: T[]) => {
  const set = new Set(b);
  return a.filter(value => set.has(value));
};

export const intersection = (...arrays: any[][]) => {
  return arrays.reduce<any[]>((acc, curr) => intersect(acc, curr), arrays.at(0) || []);
};

// TODO:
export const intersectionBy = (...arrays: any[][]) => {};

export const join = (array: any[], separator: string = ',') =>
  array.reduce<string>((acc, curr) => {
    if (!acc?.length) return `${curr}`;
    return `${acc}${separator}${curr}`;
  }, '');

export const last = (array: any[]) => {
  if (!array.length) return null;
  return array.at(-1);
};

// TODO:
export const lastIndexOf = <T>(array: T[], value: T): number => {};

export const nth = (array: any[], n: number = 0) => array.at(n);

export const pull = () => {};
export const pullAll = () => {};
export const pullAllBy = () => {};
export const pullAllWith = () => {};
export const pullAt = () => {};

export const remove = () => {};
export const reverse = (array: any[]) => array.reduceRight((acc, curr) => [...acc, curr], []);
export const slice = () => {};

export const sortedIndex = () => {};
export const sortedIndexBy = () => {};
export const sortedIndexOf = () => {};
export const sortedLastIndex = () => {};
export const sortedLastIndexBy = () => {};
export const sortedLastIndexOf = () => {};

export const sortedUnique = () => {};
export const sortedUniqueBy = () => {};

export const tail = () => {};

export const take = () => {};
export const takeRight = () => {};
export const takeRightWhile = () => {};
export const takeWhile = () => {};

export const union = () => {};
export const unionBy = () => {};
export const unionWith = () => {};

export const uniq = () => {};
export const uniqBy = () => {};

export const unzip = () => {};
export const unzipWith = () => {};

export const without = () => {};

export const xor = () => {};
export const xorBy = () => {};
export const xorWith = () => {};

export const zip = () => {};
export const zipObject = () => {};
export const zipObjectDeep = () => {};
export const zipWith = () => {};

export const countBy = () => {};
export const every = () => {};
export const filter = () => {};
export const find = () => {};
export const flatMap = () => {};
export const flatMapDeep = () => {};
export const flatMapDepth = () => {};
export const forEach = () => {};
export const forEachRight = () => {};
export const groupBy = () => {};
export const includes = () => {};
export const invokeMap = () => {};
export const keyBy = () => {};
export const map = () => {};
export const orderBy = () => {};
export const partition = () => {};
export const reduce = () => {};
export const reduceRight = () => {};
export const reject = () => {};
export const sample = () => {};
export const sampleSize = () => {};
export const shuffle = () => {};
export const size = () => {};
export const some = () => {};
export const sortBy = () => {};

export const now = () => {};
