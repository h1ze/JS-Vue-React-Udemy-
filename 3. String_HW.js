// ВРУЧНУЮ НИЧЕГО НЕ СЧИТАТЬ

// 1. Получить первую и последнюю буквы строки
// 2. Сделать первую и последнюю буквы в верхнем регистре
// 3. Найти положение слова ‘string’ в строке
// 4. Найти положение второго пробела (“вручную” ничего не считать)
// 5. Получить строку с 5-го символа длиной 4 буквы
// 6. Получить строку с 5-го по 9-й символы
// 7. Получить новую строку из исходной путем удаления последних 6-и символов
// (то есть исходная строка без последних 6и символов)
// 8. Из двух переменных a=20 и b=16 получить переменную string, в которой будет
// содержаться текст “2016”


let string = `some test string`;

// 1. Получить первую и последнюю буквы строки
let first = string[0];
let last = string[string.length -1];
console.log( first, last)

// 2. Сделать первую и последнюю буквы в верхнем регистре
string = string.replace(string[0], string[0].toUpperCase())
string = string.replace(string[string.length-1], string[string.length-1].toUpperCase())
console.log(string)

// 3. Найти положение слова ‘string’ в строке
let stringPos = string.indexOf('strinG');
console.log(stringPos);

// 4. Найти положение второго пробела (“вручную” ничего не считать)
let secondSpacePos = string.indexOf(' ');
console.log(secondSpacePos)

// 5. Получить строку с 5-го символа длиной 4 буквы
let fivePunkt = string.substr(4, 4);
console.log(fivePunkt);

// 6. Получить строку с 5-го по 9-й символы
let sixPunkt = string.slice(4, 9);
console.log(sixPunkt);

// 7. Получить новую строку из исходной путем удаления последних 6-и символов
// (то есть исходная строка без последних 6и символов)
let newString = string.slice(0, -6);
console.log(newString);

// 8. Из двух переменных a=20 и b=16 получить переменную string, в которой будет
// содержаться текст “2016”
let a = 20; let b = 16;
let stringTwo = 20 + "" + 16;
console.log(stringTwo);


// Сделать первый символ заглавным
// Напишите функцию ucFirst(str), возвращающую строку str с заглавным первым символом. Например:
// ucFirst("вася") == "Вася";
function ucFirst(str) {
    return str.length ? str.replace(str[0], str[0].toUpperCase()) : '';
};
console.log(ucFirst('alone'));

function ucFirst2(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
};
console.log(ucFirst2(''));


// Проверка на спам
// Напишите функцию checkSpam(str), возвращающую true, если str содержит 'viagra' или 'XXX', а иначе false.
// Функция должна быть нечувствительна к регистру:
function checkSpam(str) {
    let lowerStr = str.toLowerCase();
    return lowerStr.includes('viagra') || lowerStr.includes('xxx');
  };
console.log(checkSpam("free xxxxxx"));

// Усечение строки
// Создайте функцию truncate(str, maxlength), которая проверяет длину строки str и, если она превосходит maxlength, заменяет конец str на "…", так, чтобы её длина стала равна maxlength.
// Результатом функции должна быть та же строка, если усечение не требуется, либо, если необходимо, усечённая строка.
// Например:
// truncate("Вот, что мне хотелось бы сказать на эту тему:", 20) = "Вот, что мне хотело…"
// truncate("Всем привет!", 20) = "Всем привет!"

function truncate(str, maxlength) {
    return (str.length > maxlength) ? str.slice(0, maxlength - 1) + '…' : str;
  };
console.log(truncate('follow', 2));

// Выделить число
// Есть стоимость в виде строки "$120". То есть сначала идёт знак валюты, а затем – число.
// Создайте функцю extractCurrencyValue(str), которая будет из такой строки выделять числовое значение и возвращать его.

const extractCurrencyValue = function (str) {
  return parseInt(str.slice(1));
};

console.log(extractCurrencyValue('$120'));