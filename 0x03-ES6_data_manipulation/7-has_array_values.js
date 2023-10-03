i/**
 * Checks if a set contains each element in an array.
 * @param {Set} set - The collection of unique items.
 * @param {*} array - The array of items.
 * @author kabagambe herbert <https://github.com/Khabert>
 * @returns {Boolean}
 */
const hasValuesFromArray = (set, array) => array.every((value) => set.has(value));

export default hasValuesFromArray;
