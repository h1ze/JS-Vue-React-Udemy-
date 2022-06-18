// 1. Создать две функции и дать им осмысленные названия:
// - первая функция принимает массив и колбэк (одна для всех вызовов)
// - вторая функция (колбэк) обрабатывает каждый элемент массива (для каждого вызова свой callback)

// Первая функция возвращает строку “New value: ” и результат обработки:

// firstFunc([‘my’, ‘name’, ‘is’, ‘Trinity’], handler1) → “New value: MyNameIsTrinity”
// firstFunc([10, 20, 30], handler2) → “New value: 100, 200, 300,”
// firstFunc([{age: 45, name: ‘Jhon’}, {age: 20, name: ‘Aaron’}], handler3) →
// “New value: Jhon is 45, Aaron is 20,”
// firstFunc([‘abc’, ‘123’], handler4) → “New value: cba, 321,” // строки инвертируются

// Подсказка: secondFunc должна быть представлена функцией, которая принимает
// один аргумент (каждый элемент массива) и возвращает результат его обработки

function arrMap(arr, fn) {
  let result = " ";
  for (let i = 0; i < arr.length; i++) {
    result += fn(arr[i]);
  }
  return `New value: ${result}`;
}

function mapper(el) {
  return el[0].toUpperCase() + el.slice(1);
}

function mapper2(el) {
  return el * 10 + ", ";
}

function mapper3(el) {
  return `${el.name} is ${el.age}, `;
}

function mapper4(el) {
  return el.split("").reverse().join("") + ", ";
}

let array1 = ["my", "name", "is", "Trinity"];
let array2 = [10, 20, 30];
let array3 = [
  { age: 45, name: "Jhon" },
  { age: 20, name: "Aaron" },
];
let array4 = ["abc", "123"];

console.log(arrMap(array1, mapper));
console.log(arrMap(array2, mapper2));
console.log(arrMap(array3, mapper3));
console.log(arrMap(array4, mapper4));

// Написать аналог метода every. Создайте функцию every, она должна принимать первым аргументом массив чисел (обязательно проверьте что передан массив) вторым аргументом callback (обязательно проверьте что передана функция)
// функция должна возвращать true или false в зависимости от результата вызова callback (проверить число больше 5). Callback  должен принимать один элемент массива, его индекс в массиве и весь массив.

function analogEvery(array, foo) {
  if (!Array.isArray(array)) {
    return new Error("Первый аргумент должен быть валидный массив чисел!");
  }
  if (!foo || typeof foo !== "function") {
    return new Error("Второй аргумент должен быть функцией!");
  }
  for (let i = 0; i < array.length; i++) {
    if (!foo(array[i], i, array)) {
      return false;
    }
  }
  return true;
}

console.log(
  analogEvery([1, 2], function (el) {
    return typeof el === "number";
  })
);
