/**
 * createGetter - creates function getter which allows select value from object
 * @param {string} path - the strings path separated by dot
 * @returns {function} - function-getter which allow get value from object by set path
 */
export function createGetter(path) {
  const arr = path.split('.');
  const lastElement = arr[arr.length - 1];

  return function (obj) {
    let res;
    findObjectProperties(obj);

    function findObjectProperties(obj) {
      Object.entries(obj).forEach(([k, v]) => {

        if (k === lastElement) {
          res = v;
          return;
        }
        if (typeof obj[k] === 'object') {
          findObjectProperties(obj[k]);
        }
      });
    }
    return res;
  };
}
