const { cons, first, rest, isEmpty, append } = require("functional-light");

/**
 * Retorna la suma de los valores de una lista numérica
 * @param {array} list
 * @return {Number}
 * @example sumList([ 1, 2, 3, 4, 5, 6, 7]); // => 28
 * @example sumList([ 7, 6, 5, 4, 3, 2, 1]); // => 28
 * @example sumList([-5, -3, -2, 3]); // => -7
 */

const sumList = (list) => {
  if (isEmpty(list)) {
    return 0;
  } else {
    return first(list) + sumList(rest(list));
  }
};

/**
 * Retorna true si el elemento está en la lista, caso contrario false
 * @param {Number} element
 * @param {Array} list
 * @returns {Boolean}
 * @example exist(0, [1, 2, 3, 4, 5]); // False
 * @example exist(1, [1, 2, 3, 4, 5]); // True
 */

const exist = (element, list) => {
  if (isEmpty(list)) {
    return false;
  } else {
    if (first(list) == element) {
      return true;
    }
    return exist(element, rest(list));
  }
};

/**
 * buscar un elemento en una lista desordenada y retorna el elemento indicado,
 de lo contrario retorna false.
 * @param {*} element
 * @param {Array} lista
 * @returns {*} must be Number, Boolean, String
 * @example findElement(2, [3, 4, 5, 2, 6]) // => 2
 * @example findElement(7, [3, 4, 5, 2, 6]) // => false
  */
const findElement = (element, list) => {
  if (exist(element, list)) {
    return element;
  } else {
    return false;
  }
};

/**
 * Retorna una lista, con el orden invertido
 * @param {array} list
 * @return {array}
 * @example reverseList([ 1, 2, 3]); // => [3, 2, 1]
 * @example reverseList([ 'a', 2, 4]); // => [4, 2, 'a']
 * @example reverseList([10 , 4]); // => [4, 10]
 */

function reverseList(list) {
  if (isEmpty(list)) {
    return [];
  } else {
    return append(reverseList(rest(list)), [first(list)]);
  }
}

module.exports = { sumList, findElement, reverseList };
