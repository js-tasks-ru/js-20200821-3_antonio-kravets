/**
 * createGetter - creates function getter which allows select value from object
 * @param {string} path - the strings path separated by dot
 * @returns {function} - function-getter which allow get value from object by set path
 */
export function createGetter(path) {
  const arr = path.split('.');
  const key = arr[arr.length - 1];

  return function (obj) {
    let res;
    iter(obj);

    function iter(obj) {
      Object.entries(obj).forEach(([k, v]) => {
        if (typeof obj[k] === 'object') {
          iter(obj[k]);
        } else {
          if (k === key) {
            res = v;
          }
        }
      });
    }
    return res;
  };
}
