// 5 > 4 true
console.log(5 > 4);

// "ананас" > "яблоко" // false, буквы в слове "яблоко" по юникоду имеют большее значение. (Используется посимвольное сравнение, поэтому false. "а" меньше, чем "я".)
let testWordOne = 'ананас';
let testWordTwo = 'яблоко';
console.log(testWordOne.charCodeAt([0]), testWordTwo.charCodeAt([0]), testWordOne > testWordTwo);

// "2" > "12" true, строки сравниваются посимвольно, при сравнении приводится к чимслам, 2 > 1, поэтому "2" > "12"
console.log('2' > '12');

// undefined == null true, по спецификации эти два типа равны только друг другу
console.log(undefined == null);

// undefined === null false, так как это все же два разных типа, а при строгом сравнении тип играет роль
console.log(undefined === null);

// null == "\n0\n" false, так как null равен только undefined;
console.log(null == "\n0\n", 0 );

// null === +"\n0\n" false по аналогичным причинам
console.log(null === +"\n0\n");


// Выведется ли console.log? Да, так как строка не пустая, условие будет true
if ("0") {
    console.log( 'Привет' );
  }

//   Используя конструкцию if..else, напишите код, который будет спрашивать: „Какое «официальное» название JavaScript?“
//   Если пользователь вводит «ECMAScript», то показать: «Верно!», в противном случае – отобразить: «Не знаете? ECMAScript!»
/*
let ask = prompt('Какое «официальное» название JavaScript?');
if (ask == 'ECMAScript') {
    alert('Верно!');
} else {
    alert('Не знаете? ECMAScript!');
}
*/

// Используя конструкцию if..else, напишите код, который получает число через prompt, а затем выводит в alert:
// 1, если значение больше нуля,
// -1, если значение меньше нуля,
// 0, если значение равно нулю.
// Предполагается, что пользователь вводит только числа.
/*
let number = prompt('Введите число:');
if (number > 0) {
    alert(1);
} else if (number < 0) {
    alert(-1);
} else {
    alert(0);
}
*/

// Перепишите конструкцию if с использованием условного оператора '?':
// let result;
// if (a + b < 4) {
//   result = 'Мало';
// } else {
//   result = 'Много';
// }
/*
let result;
a + b < 4 ? result = 'Мало' : result = 'Много';
*/

// Перепишите if..else с использованием нескольких операторов '?'.
// Для читаемости рекомендуется разбить код на несколько строк.
// let message;
// if (login == 'Сотрудник') {
//   message = 'Привет';
// } else if (login == 'Директор') {
//   message = 'Здравствуйте';
// } else if (login == '') {
//   message = 'Нет логина';
// } else {
//   message = '';
// }
/*
let message;
login = prompt('Введите логин:');
login == 'Сотрудник' ? message = 'Привет' :
login == 'Директор' ? message = 'Здравствуйте' :
login == '' ? message = 'Нет логина' :
message = '';
alert(message);
*/

// Чему равно а, почему?

// let v = 0 || 'string'; // отобразится 'string', так как 0 вернет false
// let v = 1 && 'string'; // отобразится string, вернется условие, которое последним возвращает true
// let v = null || 25; // отобразится 25, так как null вернет false
// let v = null && 25; // oтобразится null, логический оператор && приводит значение к булеву, но возвращает исходное
// let v = null || 0 || 35; // отобразится 35, null и 0 буду false
// let v = null && 0 && 35; // отобразится null


// Что отобразится в консоли. Почему?

// let v = 12 + 14 + '12'; // '2612', сначала суммируются 26 и 14, затем происходит конкатенация с строкой.
// let v = 3 + 2 - '1'; // отобразится 4, - '1' приведется к числу
// let v = '3' + 2 - '1';  // 31, '3' + 2 будет 32, -1 приведет к числу
// let v = true + 2; // будет 3, true = 1;
// let v =  +'10' + 1; // будет 11
// let v = undefined + 2; // будет NaN
// let v =  null + 5; // 5
// let v = true + undefined; //будет NaN

let hidvis = 'visible';
hidvis = (hidvis == 'hidden') ? 'visible' : 'hidden';
console.log(hidvis);

let x = 0;
if (x == 0) {
    x = 1;
} else if (x < 0) {
    x = 'less then zero';
} else {
    x *= 10;
}

let car = { name: 'Lexus',
 age: 10, 
 create: 2008, 
 needRepair: false }

 if (car.age > 5) {
     console.log('Need Repar');
     car.needRepair = true;
     console.log(car);
 } else {
     car.needRepair = false;
 }


 let item = { name: 'Intel core i7',
 price: '100$',
 discount: '15%' }
 let price = !isNaN(parseInt(item.discount));
 let discount = !isNaN(parseInt(item.price));
 console.log(item,price,discount);
 if (price && discount ) {
     item.priceWithDiscount = parseInt(item.price) - (parseInt(item.price) /100 * parseInt(item.discount));
     console.log(item,price,discount);
 } else if(!item.discount) {
     console.log(item.price);
 }

// Дан следующий код:
let product = {
    name: 'Яблоко',
    price: '10$'
};

let min = 10; // минимальная цена
let max = 20; // максимальная цена

// Написать условие если цена товара больше или равна минимальной цене и меньше или равна максимальной цене то вывести в консоль название этого товара, иначе вывести в консоль что товаров не найдено.

parseInt(product.price) >= min && parseInt(product.price) <= max ? console.log(product.name) : console.log('Товаров не найдено');