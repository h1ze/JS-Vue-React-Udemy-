// На основе массива [1,2,3,5,8,9,10] сформировать новый массив,
// каждый элемент которого будет хранить информацию о числе и его четности:
// [{digit: 1, odd: true}, {digit: 2, odd: false}, {digit: 3, odd: true}...]

function getEvenOdd(arr) {
  return arr.map(function (el) {
    return (el = { digit: el, odd: el % 2 !== 0 });
  });
}

console.log(getEvenOdd([1, 2, 3, 5, 8, 9, 10]));

// Проверить, содержит ли массив [12, 4, 50, 1, 0, 18, 40] элементы, равные нулю. Если да - вернуть true.
function checkZero(arr) {
  return arr.some((el) => el === 0);
}

console.log(checkZero([12, 4, 50, 1, 0, 18, 40]));

// Проверить, все элементы массива имеют длину более 3х символов ['yes', 'hello', 'no', 'easycode', 'what']. Если да - вернуть true
function checkLength(arr) {
  return arr.every((el) => el.length > 3);
}

console.log(checkLength(["yes", "hello", "no", "easycode", "what"]));

// Дан массив объектов, где каждый объект содержит информацию о букве и месте её положения в строке {буква: “a”, позиция_в_предложении: 1}:

// [{char:"a",index:12}, {char:"w",index:8}, {char:"Y",index:10}, {char:"p",index:3}, {char:"p",index:2},
// {char:"N",index:6}, {char:" ",index:5}, {char:"y",index:4}, {char:"r",index:13}, {char:"H",index:0},
// {char:"e",index:11}, {char:"a",index:1}, {char:" ",index:9}, {char:"!",index:14}, {char:"e",index:7}]

// Напишите функцию, которая из элементов массива соберет и вернёт
// строку, основываясь на index каждой буквы. Например:
// [{char:"H",index:0}, {char:"i",index: 1}, {char:"!",index:2}] → “Hi!”

function getSentence(arr) {
  let sortArr = arr.slice().sort((a, b) => a.index - b.index);
  let sentenceArr = [];
  sortArr.forEach((element) => {
    sentenceArr.push(element.char);
  });
  return sentenceArr.join("");
}

console.log(
  getSentence([
    { char: "a", index: 12 },
    { char: "w", index: 8 },
    { char: "Y", index: 10 },
    { char: "p", index: 3 },
    { char: "p", index: 2 },
    { char: "N", index: 6 },
    { char: " ", index: 5 },
    { char: "y", index: 4 },
    { char: "r", index: 13 },
    { char: "H", index: 0 },
    { char: "e", index: 11 },
    { char: "a", index: 1 },
    { char: " ", index: 9 },
    { char: "!", index: 14 },
    { char: "e", index: 7 },
  ])
);
