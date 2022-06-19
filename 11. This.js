// 1. Создать объект, который описывает ширину и высоту
// прямоугольника, а также может посчитать площадь фигуры:
// const rectangle = {width:..., height:..., getSquare:...};

const rectangle = {
  width: 10,
  height: 15,
  getSquare: function () {
    console.log(this.width * this.height);
    return this;
  },
};

console.log(rectangle.getSquare());

// 2. Создать объект, у которого будет цена товара и его скидка, а также
// два метода: для получения цены и для расчета цены с учетом скидки:
// const price = {
//     price: 10,
//     discount: '15%',
// ... };
// price.getPrice(); // 10
// price.getPriceWithDiscount(); // 8.5

const price = {
  price: 10,
  discount: "15%",
  getPrice: function () {
    console.log(this.price);
    return this;
  },
  getPriceWithDiscount: function () {
    console.log(this.price - (this.price / 100) * parseInt(this.discount));
    return this;
  },
};
price.getPrice();
price.getPriceWithDiscount();

// 3. Создать объект, у которого будет поле высота и метод “увеличить
// высоту на один”. Метод должен возвращать новую высоту:
// object.height = 10;
// object.inc(); // придумать свое название для метода
// object.height; // 11;

const object = {
  height: 10,
  heightUp: function () {
    console.log(++this.height);
    return this;
  },
};

object.heightUp();
console.log(object.height);

// 4. Создать объект “вычислитель”, у которого есть числовое свойство
// “значение” и методы “удвоить”, “прибавить один”, “отнять один”.
// Методы можно вызывать через точку, образуя цепочку методов:
// const numerator = {
//     value: 1,
//     double: function () {...},
//     plusOne: function () {...},
//     minusOne: function () {...},
// }
// numerator.double().plusOne().plusOne().minusOne();
// numerator.value // 3

const numerator = {
  value: 1,
  double: function () {
    console.log(this.value * 2);
    return this;
  },
  plusOne: function () {
    console.log((this.value += 1));
    return this;
  },
  minusOne: function () {
    console.log((this.value -= 1));
    return this;
  },
};

numerator.double().plusOne().plusOne().minusOne();
console.log(numerator.value);

// 5. Создать объект с розничной ценой и количеством продуктов. Этот
// объект должен содержать метод для получения общей стоимости
// всех товаров (цена * количество продуктов)

const magazine = {
  price: 10,
  productCount: 50,
  totalPrice: function () {
    return this.price * this.productCount;
  },
};

console.log(magazine.totalPrice());

// 6. Создать объект из предыдущей задачи. Создать второй объект,
// который описывает количество деталей и цену за одну деталь. Для
// второго объекта нужно узнать общую стоимость всех деталей, но
// нельзя создавать новые функции и методы. Для этого
// “позаимствуйте” метод из предыдущего объекта.

const detalis = {
  price: 5,
  productCount: 40,
};

console.log(magazine.totalPrice.call(detalis));

// 7. Даны объект и функция:
let sizes = { width: 5, height: 10 },
  getSquare = function () {
    return this.width * this.height;
  };
// Не изменяя функцию или объект, получить результат функции
// getSquare для объекта sizes

const sizesSquare = getSquare.call(sizes);

console.log(sizesSquare);

// 8.  Измените функцию getElementHeight таким образом, чтобы можно
// было вызвать getElementHeight() и получить 25.
let element = {
  height: 25,
  getHeight: function () {
    return this.height;
  },
};

let getElementHeight = element.getHeight.bind(element);
// getElementHeight(); // undefined

console.log(getElementHeight());
