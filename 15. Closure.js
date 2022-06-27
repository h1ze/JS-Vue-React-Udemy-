// Создайте функцию которая бы умела делать:
// minus(10)(6); // 4
// minus(5)(6); // -1
// minus(10)(); // 10
// minus()(6); // -6
// minus()(); // 0
// Подсказка, функция minus должна возвращать другую функцию.
function minus(num) {
  return function (num2) {
    return num - num2;
  };
}

console.log(minus(5)(6));

// Реализовать функцию, которая умножает и умеет запоминать возвращаемый результат между вызовами:
// function multiplyMaker ...
// const multiply = multiplyMaker(2);
// multiply(2); // 4 (2 * 2)
// multiply(1); // 4 (4 * 1)
// multiply(3); // 12 (4 * 3)
// multiply(10); // 120 (12 * 10)

function multiplyMaker(num) {
  return function (num2) {
    return (num *= num2);
  };
}

const multiply = multiplyMaker(2);

console.log(multiply(2));
console.log(multiply(1));
console.log(multiply(3));
console.log(multiply(10));

// Реализовать модуль, который работает со строкой и имеет методы:
// a. установить строку
// i. если передано пустое значение, то установить пустую строку
// ii. если передано число, число привести к строке
// b. получить строку
// c. получить длину строки
// d. получить строку-перевертыш
// Пример:
// модуль.установитьСтроку(‘abcde’);
// модуль.получитьСтроку(); // ‘abcde’
// модуль.получитьДлину(); // 5

const counter = (function () {
  let string = "",
    length = 0,
    reverseStr = "";

  function setStr(str) {
    string = str;
    if (!string) {
      string = "";
    }
    if (typeof string === "number") {
      string = string.toString();
    }
  }

  function getStr() {
    return string;
  }

  function getStrLength() {
    return (length = string.length);
  }

  function getReverseStr() {
    return (reverseStr = string.split("").reverse().join(""));
  }
  return {
    setStr: setStr,
    getStr: getStr,
    getStrLength: getStrLength,
    getReverseStr: getReverseStr,
  };
})();

counter.setStr("love");
console.log(counter.getStr());
console.log(counter.getStrLength());
console.log(counter.getReverseStr());

// Создайте модуль “калькулятор”, который умеет складывать, умножать, вычитать, делить и возводить в степень. Конечное значение округлить до двух знаков после точки (значение должно храниться в обычной переменной, не в this).

// модуль.установитьЗначение(10); // значение = 10
// модуль.прибавить(5); // значение += 5
// модуль.умножить(2); // значение *= 2
// модуль.узнатьЗначение(); // вывести в консоль 30 (здесь надо округлить)

// Также можно вызывать методы цепочкой:
// модуль.установитьЗначение(10).вСтепень(2).узнатьЗначение(); // 100

const calc = (function () {
  let number = 0;

  function setNumber(value) {
    number = value;
    return this;
  }

  function getPlus(value) {
    number += value;
    return this;
  }

  function getMultiply(value) {
    number *= value;
    return this;
  }

  function getMinus(value) {
    number -= value;
    return this;
  }

  function getPow(value) {
    number = Math.pow(number, value);
    return this;
  }

  function getNumber() {
    return (number = number.toFixed(2));
  }

  return {
    setNumber: setNumber,
    getPlus: getPlus,
    getMinus: getMinus,
    getMultiply: getMultiply,
    getNumber: getNumber,
    getPow: getPow,
  };
})();

calc.setNumber(10).getPow(2).getPlus(3);

console.log(calc.getNumber());
