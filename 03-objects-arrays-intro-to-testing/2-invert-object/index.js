/**
 * invertObj - should swap object keys and values
 * @param {object} obj - the initial object
 * @returns {object | undefined} - returns new object or undefined if nothing did't pass
 */
export function invertObj(obj) {

  if (obj) {
    const map = new Map();
    Object.entries(obj).forEach(([k, v]) => {
      map.set(v, k);
    });
    return Object.fromEntries(map);
  } else {
    return undefined;
  }
}
