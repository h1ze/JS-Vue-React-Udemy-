// Используя rest оператор и деструктуризацию, создать функцию, которая принимает любое количество аргументов и возвращает объект, содержащий первый аргумент и массив из остатка:

// func(‘a’, ‘b’, ‘c’, ‘d’) →
// {
//   first: ‘a’,
//   other: [‘b’, ‘c’, ‘d’]
// }

function Destructuring(first, ...others) {
  let obj = { first: first, other: [others] };
  return obj;
}

console.log(Destructuring("a", "b", "c", "d"));

// Организовать функцию getInfo, которая принимает объект вида
// { name: ...,  info: { employees: [...], partners: [ … ]  } }
// и выводит в консоль имя (если имени нет, показывать ‘Unknown’) и первые две компании из массива partners:

const organisation = {
  name: "Google",
  info: {
    employees: ["Vlad", "Olga"],
    partners: ["Microsoft", "Facebook", "Xing"],
  },
};
// getInfo(organisation); →
// Name: Google
// Partners: Microsoft Facebook

function getInfo(obj) {
  let name = "unknown";
  if (obj.name) {
    name = obj.name;
  }
  let partners = obj.info.partners;
  const [part1, part2, others] = partners;
  console.log(name, part1, part2);
}

getInfo(organisation);
