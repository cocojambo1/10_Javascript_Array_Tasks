/**
 * Описание задачи: Напишите функцию, возвращает новый массив без предоставленных значений. Используйте примитивные типы.
 * Ожидаемый результат: [1, 2, 3, 1, 2] без 1, 2 => [3]
 * Сложность задачи: 2 of 5
 *
 * @param {Array} array - Массив с примитивными значениями
 * @param {?} args - лист значений для удаления
 * @returns {Array}
 */
const without = (array, ...args) => array.slice().filter(item => !args.includes(item) ? item : null);

const data = [1, 2, 3, 1, 2];
console.log(without(data, 1, 2)); // [3]