/**
 * trimSymbols - removes consecutive identical symbols if they quantity bigger that size
 * @param {string} string - the initial string
 * @param {number} size - the allowed size of consecutive identical symbols
 * @returns {string} - the new string without extra symbols according passed size
 */
export function trimSymbols(string, size) {

  const arr = string.split('');
  let newArr = [];
  let idx = 0;
  const res = [];
  Object.entries(arr).forEach(([key, value]) => {
    if (value !== string.charAt(+key + 1)) {
      newArr = arr.slice(idx, +key + 1);
      if (size === undefined) {
        newArr.length;
      } else {
        newArr.length = size;
      }
      idx = +key + 1;
      newArr.forEach(e => res.push(e));
    }
  });
  return res.join('');

}
