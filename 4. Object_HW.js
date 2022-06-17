// 1. Создать объект с полем product, равным ‘iphone’
// 2. Добавить в объект поле price, равное 1000 и поле currency, равное ‘dollar’
// 3. Добавить поле details, которое будет содержать объект с полями model и color

// Все поля добавлять по очереди, не создавать сразу готовый объект со всеми полями.

// 1. Создать объект с полем product, равным ‘iphone’
let object = {product: 'iphone'};

// 2. Добавить в объект поле price, равное 1000 и поле currency, равное ‘dollar’
object.price = 1000;
object.currency = 'dollar';

// 3. Добавить поле details, которое будет содержать объект с полями model и color
object.detalis = {model: ''};
object.detalis.color = '';
console.log(object);

for (let prop in object) {
console.log(prop, object[prop]);
};



// Напишите код, выполнив задание из каждого пункта отдельной строкой:
// Создайте пустой объект user.
// Добавьте свойство name со значением John.
// Добавьте свойство surname со значением Smith.
// Измените значение свойства name на Pete.
// Удалите свойство name из объекта.
let user = {};
user.name = 'John';
user.surname = 'Smith';
console.log(user);
user.name = 'Pete';
console.log(user);
delete user.name;
console.log(user);

// Напишите функцию isEmpty(obj), которая возвращает true, если у объекта нет свойств, иначе false.
// Должно работать так:
// let schedule = {};
// alert( isEmpty(schedule) ); // true
// schedule["8:30"] = "get up";
// alert( isEmpty(schedule) ); // false
const isEmpty = function(schedule) {
    let result = 0;
    for (let key in schedule) {
        result++;
    }
return result == 0;
};
console.log(isEmpty({}))


const isEmpty2 = function(schedule) {
    for (let key in schedule) {
        return false;
    }
    return true;
};
console.log(isEmpty2({name: 'Kirill'}))

// Можно ли изменить объект, объявленный с помощью const? Как вы думаете? - // Да, будет, нельзя менять саму переменную, а не свойства объекта
// Const user = {
//   name: "John"
// };
// это будет работать?
// user.name = "Pete";
const client = {
    name: "Vladimir"
};
console.log(client);
client.name = "Stiven";
console.log(client);


// У нас есть объект, в котором хранятся зарплаты нашей команды:
// let salaries = {
//   John: 100,
//   Ann: 160,
//   Pete: 130
// }
// Напишите код для суммирования всех зарплат и сохраните результат в переменной sum. Должно получиться 390.
// Если объект salaries пуст, то результат должен быть 0.
let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130
}
let sum = 0;
for(let key in salaries) {
    sum += salaries[key];
    console.log(sum);
}

// Создайте функцию multiplyNumeric(obj), которая умножает все числовые свойства объекта obj на 2.
// Например:
//  до вызова функции
// let menu = {
//   width: 200,
//   height: 300,
//   title: "My menu"
// };

// multiplyNumeric(menu);
// после вызова функции
// menu = {
//   width: 400,
//   height: 600,
//   title: "My menu"
// };

// Обратите внимание, что multiplyNumeric не нужно ничего возвращать. Следует напрямую изменять объект.
// P.S. Используйте typeof для проверки, что значение свойства числовое.

let menu = {
  width: 200,
  height: 300,
  title: "My menu"
};

function multiplyNumeric(obj) {
    for (let key in obj) {
        typeof(obj[key]) == 'number' ? obj[key] *= 2 : obj[key];
    }
    return obj;
}
console.log(multiplyNumeric(menu));