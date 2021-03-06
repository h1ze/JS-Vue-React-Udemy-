// 1. Получить число pi из Math и округлить его до 2-х знаков после точки
// 2. Используя Math, найти максимальное и минимальное числа из представленного ряда 15, 11, 16, 12, 51, 12, 13, 51

// 3. Работа с Math.random:
// a. Получить случайное число и округлить его до двух цифр после запятой
// b. Получить случайное целое число от 0 до X. X - любое произвольное число. 

// 4. Проверить результат вычисления 0.6 + 0.7 - как привести к нормальному виду (1.3)?
// 5. Получить число из строки ‘100$’

// 1. Получить число pi из Math и округлить его до 2-х знаков после точки
let pi = Math.PI;
let roundPi = Math.round(pi *100)/100;
console.log(roundPi, pi.toFixed(2));

// 2. Используя Math, найти максимальное и минимальное числа из представленного ряда 15, 11, 16, 12, 51, 12, 13, 51
let min = Math.min(15, 11, 16, 12, 51, 12, 13, 51);
let max = Math.max(15, 11, 16, 12, 51, 12, 13, 51);
console.log(min,max)

// 3. Работа с Math.random:
// a. Получить случайное число и округлить его до двух цифр после запятой
let randomNumber = Math.random();
let roundRandomNumber = Math.round(randomNumber * 100)/100;
console.log(randomNumber,roundRandomNumber);

// b. Получить случайное целое число от 0 до X. X - любое произвольное число. 
let randomX = Math.round(Math.random(0,11) * 10);
console.log(randomX);

// 4. Проверить результат вычисления 0.6 + 0.7 - как привести к нормальному виду (1.3)?
let sum = 0.6 + 0.7;
roundSum = ((0.6 * 10 + 0.7 *10)/10);
fixedSum = sum.toFixed(1);
console.log(sum,roundSum,fixedSum);

// 5. Получить число из строки ‘100$’
console.log(parseInt('100$'));

// Сумма пользовательских чисел
// Создайте скрипт, который запрашивает ввод двух чисел (используйте prompt) и после показывает их сумму.
// P.S. Есть «подводный камень» при работе с типами.

/*
let one = +prompt('Введите первое число:');
let two = +prompt('Введите второе число');
alert(a + b);
*/

// Методы Math.round и toFixed, согласно документации, округляют до ближайшего целого числа: 0..4 округляется в меньшую сторону, тогда как 5..9 в большую сторону.
// Например:
// alert( 1.35.toFixed(1) ); // 1.4
// Но почему в примере ниже 6.35 округляется до 6.3?
// alert( 6.35.toFixed(1) ); // 6.3
// Как правильно округлить 6.35?
console.log(Math.round(6.35*10)/10);
console.log(((6.35*10).toFixed())/10);

// Ввод числового значения
// Создайте функцию readNumber, которая будет запрашивать ввод числового значения до тех пор, пока посетитель его не введёт.
// Функция должна возвращать числовое значение.
// Также надо разрешить пользователю остановить процесс ввода, отправив пустую строку или нажав «Отмена». В этом случае функция должна вернуть null.
/*
function readNumber(number) {
    while(isNaN(number) || number === undefined) {
    number = prompt('Введите число:');
    if (number === ''|| number === null ) return null;
    }
    return +number;
};

function readNumber2(number) {
    let n = 0;
    while(n != 1) {
        number = prompt('Введите число:');
        if (typeof(+number) === 'number' && !isNaN(+number)) n = 1;
        if (number === '' || number === null) return null;
    }
    return +number;
};

alert(readNumber2());

*/

// Этот цикл – бесконечный. Он никогда не завершится, почему? // Потому что из-за проблем с потерей с точности с дробями i никогда не будет равным ровно 10.

// let i = 0;
// while (i != 10) {
//   i += 0.2;
//   console.log(i)
// }




// Случайное число от min до max
// Встроенный метод Math.random() возвращает случайное число от 0 (включительно) до 1 (но не включая 1)
// Напишите функцию random(min, max), которая генерирует случайное число с плавающей точкой от min до max (но не включая max).
// Пример работы функции:
// alert( random(1, 5) ); // 1.2345623452
// alert( random(1, 5) ); // 3.7894332423
// alert( random(1, 5) ); // 4.3435234525
// console.log(Math.random() * 10 + 1)

function random(min, max) {
    return Math.random() * (max - min) + min;
};

console.log(random(1,5));


// Случайное целое число от min до max
// Напишите функцию randomInteger(min, max), которая генерирует случайное целое (integer) число от min до max (включительно).
// Любое число из интервала min..max должно появляться с одинаковой вероятностью.
// Пример работы функции:
// alert( randomInteger(1, 5) ); // 1
// alert( randomInteger(1, 5) ); // 3
// alert( randomInteger(1, 5) ); // 5

function randomInteger(min, max) {
    return Math.floor(Math.random() * (max - min) + min + 1);
}
console.log(randomInteger(5,10));