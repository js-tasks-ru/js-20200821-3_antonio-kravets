/**
 * sortStrings - sorts array of string by two criteria "asc" or "desc"
 * @param {string[]} arr - the array of strings
 * @param {string} [param="asc"] param - the sorting type "asc" or "desc"
 * @returns {string[]}
 */
export function sortStrings(arr, param = 'asc') {

  let retVal = 1;
  if (param === 'desc') {
    retVal = -1;
  }
  let temp;
  let sortedArr = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i].localeCompare(arr[j], 'ru', { usage: 'sort', caseFirst: 'upper' }) === retVal) {
        temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
      }
    }
    sortedArr.push(arr[i]);
  }
  return sortedArr;
}
