// Записать в виде switch case следующее условие:
// if (a === ‘block’) {
// 	console.log(‘block’)
// } else if (a === ‘none’) {
// 	console.log(‘none’)
// } else if (a === ‘inline’) {
// console.log(‘inline’)
// } else {
// 	console.log(‘other’)
// }
// Записать условие, используя конструктор switch. В консоли должно отразиться только одно значение.

let a = 'love';
switch(a) {
    case 'block':
        console.log('block');
        break;
    case 'none':
        console.log('none');
        break;
    case 'inline':
        console.log('inline');
        break;
    default:
        console.log('other');
}


// Из задач по условному оператору if else выполнить задачи 1 и 2 в виде тернарного оператора.

/*
let ask = prompt('Какое «официальное» название JavaScript?');
if (ask == 'ECMAScript') {
    alert('Верно!');
} else {
    alert('Не знаете? ECMAScript!');
}
*/


/*
let ask = prompt('Какое «официальное» название JavaScript?');
ask == 'ECMAScript' ? alert('ECMAScript') : alert('Не знаете? ECMAScript!');
*/


// Используя конструкцию if..else, напишите код, который получает число через prompt, а затем выводит в alert:
// 1, если значение больше нуля,
// -1, если значение меньше нуля,
// 0, если значение равно нулю.
// Предполагается, что пользователь вводит только числа.

/*
let number = +prompt('Введите число');
number > 0 ? alert(1) : number < 0 ? alert(-1) : alert(0);
*/