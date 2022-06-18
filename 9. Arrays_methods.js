// Переведите текст вида border-left-width в borderLeftWidth
// Напишите функцию camelize(str), которая преобразует строки вида «my-short-string» в «myShortString».
// То есть дефисы удаляются, а все слова после них получают заглавную букву.
// Примеры:
// camelize("background-color") == 'backgroundColor';
// camelize("list-style-image") == 'listStyleImage';
// camelize("-webkit-transition") == 'WebkitTransition';
// P.S. Подсказка: используйте split, чтобы разбить строку на массив символов, потом переделайте всё как нужно и методом join соедините обратно.

function camelize(str) {
  let arrayStr = str.split("-");
  let camelizeArray = arrayStr.map((a, index) =>
    index === 0 ? a : a.charAt(0).toUpperCase() + a.slice(1)
  );
  let resultStr = camelizeArray.join("");
  return resultStr;
}
console.log(camelize("love-you-forever"));

function camelize2(str) {
  let arrayStr = str.split("-");
  let camelizeStr = arrayStr.reduce(
    (a, b) => a + b.charAt(0).toUpperCase() + b.slice(1)
  );
  return camelizeStr;
}

console.log(camelize2("list-style-image"));

// Создать функцию, которая принимает число n и возвращает массив, заполненный числами от 1 до n: getArray(10); // [1,2,3,4,5,6,7,8,9,10]
function createArrayNum(num) {
  let array = [];
  for (let i = 0; i <= num; i++) {
    array.push(i);
  }
  return array;
}
console.log(createArrayNum(5));

// Создать функцию, которая принимает массив, а возвращает новый массив с дублированными элементами входного массива.
function doubleArray(arr) {
  return arr.concat(arr);
}
console.log(doubleArray(createArrayNum(2)));

// Создать функцию, которая принимает произвольное (любое) число массивов и удаляет из каждого массива первый элемент, а возвращает массив из оставшихся значений. Данное задание выполните после того как познакомитесь с методами массивов:
// changeCollection([1,2,3], [‘a’, ’b’, ‘c’]) → [ [2,3], [‘b’, ‘c’] ], changeCollection([1,2,3]) → [ [2,3] ] и т.д.

function changeCollection() {
  let result = [];
  if (arguments.length) {
    for (let i = 0; i < arguments.length; i++) {
      if (Array.isArray(arguments[i])) {
        const el = arguments[i].slice();
        el.shift();
        result.push(el);
      }
    }
  } else {
    console.log("Введите данные!");
  }
  return result;
}
console.log(changeCollection([1, 2, 3], ["a", "b", "c"]));

// Создать функцию которая принимает массив пользователей, поле на которое хочу проверить и значение на которое хочу проверять. Проверять что все аргументы переданы. Возвращать новый массив с пользователями соответсвующие указанным параметрам.
// Данное задание выполните после того как познакомитесь с методами массивов
// funcGetUsers(users, “gender”, “male”); // [ {name: “Denis”, age: “29”, gender: “male”} , {name: “Ivan”, age: “20”, gender: “male”} ]

const users = [
  {
    _id: "5e36b779dc76fe3db02adc32",
    balance: "$1,955.65",
    picture: "http://placehold.it/32x32",
    age: 33,
    name: "Berg Zimmerman",
    gender: "male",
  },
  {
    _id: "5e36b779d117774176f90e0b",
    balance: "$3,776.14",
    picture: "http://placehold.it/32x32",
    age: 37,
    name: "Deann Winters",
    gender: "female",
  },
  {
    _id: "5e36b779daf6e455ec54cf45",
    balance: "$3,424.84",
    picture: "http://placehold.it/32x32",
    age: 36,
    name: "Kari Waters",
    gender: "female",
  },
];

function funcGetUsers(database, key, value) {
  if (!Array.isArray(database)) {
    return new Error("Введите массив с данными!");
  }
  if (typeof key !== "string" || key === "") {
    return new Error("Ключ должен быть валидной строкой.");
  }
  if (value === undefined || value === null) {
    return new Error("Значение должно быть валиднымю");
  }
  let result = [];
  for (let i = 0; i < database.length; i++) {
    if (database[i][key] === value) {
      result.push(database[i]);
    }
  }
  return result;
}
console.log(funcGetUsers(users, "age", 33));

// Фильтрация по диапазону
// Напишите функцию filterRange(arr, a, b), которая принимает массив arr, ищет в нём элементы между a и b и отдаёт массив этих элементов.
// Функция должна возвращать новый массив и не изменять исходный.
// Например:

// let arr = [5, 3, 8, 1];
// let filtered = filterRange(arr, 1, 4);
// alert( filtered ); // 3,1 (совпадающие значения)
// alert( arr ); // 5,3,8,1 (без изменений)
