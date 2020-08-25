/**
 * sortStrings - sorts array of string by two criteria "asc" or "desc"
 * @param {string[]} arr - the array of strings
 * @param {string} [param="asc"] param - the sorting type "asc" or "desc"
 * @returns {string[]}
 */
export function sortStrings(arr, param = 'asc') {

  let temp;
  let sortedArr = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (param === 'desc') {
        if (arr[i].localeCompare(arr[j], 'ru', { usage: 'sort', caseFirst: 'upper' }) === -1) {
          temp = arr[i];
          arr[i] = arr[j];
          arr[j] = temp;
        }
      }
      if (param === 'asc') {
        if (arr[i].localeCompare(arr[j], 'ru', { usage: 'sort', caseFirst: 'upper' }) === 1) {
          temp = arr[i];
          arr[i] = arr[j];
          arr[j] = temp;
        }
      }

    }
    sortedArr.push(arr[i]);
  }
  return sortedArr;
}
