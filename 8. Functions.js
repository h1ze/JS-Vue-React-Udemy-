// Создать функцию multiply, которая будет принимать любое количество чисел и возвращать их произведение: multiply(1,2,3) = 6 (1*2*3)
// Если нет ни одного аргумента, вернуть ноль: multiply() // 0
function multiply() {
    let result = 1;
    if (arguments.length == 0) {
        return 0;
    } else { for (key in arguments) {
        result *= arguments[key];
    }
    }
    return result;
}
console.log(multiply(1,40));

// Создать функцию, которая принимает строку и возвращает строку-перевертыш: reverseString(‘test’) // “tset”.
function reverseString(str) {
    let newStr = '';
    for (i = str.length - 1; i >=0; i--) {
        newStr += str[i];
    }
    return newStr;
}

console.log(reverseString('test'));

// Создать функцию, которая в качестве аргумента принимает строку из букв и возвращает строку, где каждый символ разделен пробелом и заменен на юникод-значение символа: 

// getCodeStringFromText(‘hello’) // “104 101 108 108 111” 

function getCodeStringFromText(str) {
    let newStr = '';
    for (item in str) {
        newStr += str.charCodeAt(item) + ' ';
    }
    return newStr;
}

console.log(getCodeStringFromText('hello'));


// Создать функцию угадай число. Она принимает число от 1-10 (обязательно проверить что число не больше 10 и не меньше 0). Генерирует рандомное число от 1-10 и сравнивает с заданным числом если они совпали то возвращает “Вы выиграли” если нет то “Вы не угадали ваше число 8 а выпало число 5”. Числа в строке указаны как пример вы подставляете реальные числа.

const guessNum = function(num) {
    if (num < 0 || num > 10) {
        console.log('Нужно ввести число от 0 до 10!')
    }
    let randomNum = Math.floor(Math.random() * 10 + 1)
    return randomNum == num ? "Вы выиграли!" : `Вы не угадали ваше число ${num} а выпало число ${randomNum}.`
}

console.log(guessNum(5))


// Обязателен ли "else"? // Нет, поведение функции будет одинаковым в обоих случаях.
// Следующая функция возвращает true, если параметр age больше 18.

// В ином случае она запрашивает подтверждение через confirm и возвращает его результат:

// function checkAge(age) {
//   if (age > 18) {
//     return true;
//   } else {
//     // ...
//     return confirm('Родители разрешили?');
//   }
// }
// Будет ли эта функция работать как-то иначе, если убрать else?

// function checkAge(age) {
//   if (age > 18) {
//     return true;
//   }
//   // ...
//   return confirm('Родители разрешили?');
// }
// Есть ли хоть одно отличие в поведении этого варианта?



// Перепишите функцию, используя оператор '?' или '||'
// Следующая функция возвращает true, если параметр age больше 18.
// В ином случае она задаёт вопрос confirm и возвращает его результат.

// function checkAge(age) {
//   if (age > 18) {
//     return true;
//   } else {
//     return confirm('Родители разрешили?');
//   }
// }
// Перепишите функцию, чтобы она делала то же самое, но без if, в одну строку.
// Сделайте два варианта функции checkAge:
// Используя оператор ?
// Используя оператор ||

/*
function checkAge(age) {
  return age > 18 ? true : confirm('Родители разрешили?');
  }

  function checkAge2(age) {
    return age > 18 || confirm('Родители разрешили?');
    }

console.log(checkAge2(5));
*/

// Функция min(a, b)
// Напишите функцию min(a,b), которая возвращает меньшее из чисел a и b.

// Пример вызовов:
// min(2, 5) == 2
// min(3, -1) == -1
// min(1, 1) == 1

function min (a,b) {
    return Math.min(a,b);
}

console.log(min(1,-20));


// Функция pow(x,n)
// Напишите функцию pow(x,n), которая возвращает x в степени n. Иначе говоря, умножает x на себя n раз и возвращает результат.

// pow(3, 2) = 3 * 3 = 9
// pow(3, 3) = 3 * 3 * 3 = 27
// pow(1, 100) = 1 * 1 * ...* 1 = 1
// Создайте страницу, которая запрашивает x и n, а затем выводит результат pow(x,n).

// P.S. В этой задаче функция обязана поддерживать только натуральные значения n, т.е. целые от 1 и выше.

function pow (x,n) {
    return Math.pow(x,n);
}

console.log(pow(2,3))