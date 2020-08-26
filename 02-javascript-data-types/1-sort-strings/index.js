/**
 * sortStrings - sorts array of string by two criteria "asc" or "desc"
 * @param {string[]} arr - the array of strings
 * @param {string} [param="asc"] param - the sorting type "asc" or "desc"
 * @returns {string[]}
 */
export function sortStrings(arr, param = 'asc') {

  const sortedArr = [];

  arr.sort((i, j) => i.localeCompare(j, 'ru', { usage: 'sort', caseFirst: 'upper' }));

  if (param === 'desc') {
    arr.reverse();
  }

  arr.forEach(function (value) {
    sortedArr.push(value);
  });

  return sortedArr;
}

