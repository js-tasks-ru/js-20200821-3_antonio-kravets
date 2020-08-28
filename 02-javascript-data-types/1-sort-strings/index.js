/**
 * sortStrings - sorts array of string by two criteria "asc" or "desc"
 * @param {string[]} arr - the array of strings
 * @param {string} [param="asc"] param - the sorting type "asc" or "desc"
 * @returns {string[]}
 */
export function sortStrings(arr, param = 'asc') {

  let compareVal = -1;
  const retVal = -1;
  const copyArr = [...arr];

  if (param === 'desc') {
    compareVal = 1;
  }

  copyArr.sort((i, j) => {
    if (i.localeCompare(j, 'ru', { usage: 'sort', caseFirst: 'upper' }) === compareVal) {
      return retVal;
    }
  });

  return copyArr;
}

