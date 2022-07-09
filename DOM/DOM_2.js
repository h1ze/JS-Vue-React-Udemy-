// 1. Создать функцию, которая принимает два элемента. Функция проверяет, является ли первый элемент родителем для второго:

// isParent(parent, child);
// isParent(document.body.children[0], document.querySelector('mark'));
// true так как первый див является родительским элементом для mark

// isParent(document.querySelector('ul'), document.querySelector('mark'));
// false так ul НЕ является родительским элементом для mark
// Функция принимает только DOM объекты.

// 2. Получить список всех ссылок, которые не находятся внутри списка ul
// 3. Найти элемент, который находится перед и после списка ul

function isParent(parent, child) {
  while (child.parentElement) {
    if (child.parentElement === parent) {
      return true;
    } else {
      child = child.parentElement;
    }
  }
  return false;
}

console.log(
  isParent(document.body.children[0], document.querySelector("mark"))
);

console.log(
  isParent(document.querySelector("ul"), document.querySelector("mark"))
);

console.log(document.querySelector("ul"), document.querySelector("mark"));
console.log(document.body.children[0]);

// 2. Получить список всех ссылок, которые не находятся внутри списка ul

console.log(document.querySelectorAll("a"));
let hrefNodeList = document.querySelectorAll("a");
let arrHrefNodeList = Array.from(hrefNodeList);
// let hrefHtmlCollection = document.getElementsByTagName("a");
// console.log(arrHrefNodeList);
// console.log(typeof hrefNodeList, typeof arrHrefNodeList);
// console.log(hrefHtmlCollection);
// console.log(typeof hrefHtmlCollection);
// let arrHrefHtmlCollection = [...hrefHtmlCollection];
// console.log(arrHrefHtmlCollection);
let resultHrefList = arrHrefNodeList.filter((el) => {
  if (el.parentElement.nodeName !== "LI") {
    return el;
  }
});
console.log(resultHrefList);

// 3. Найти элемент, который находится перед и после списка ul
let ulList = document.querySelector("ul");
let previousEl = ulList.previousElementSibling;
let nextEl = ulList.nextElementSibling;
console.log(ulList, previousEl, nextEl);
