function User(fullName) {
  this.fullName = fullName;
}

var vasya = new User("Василий Попкин");

//   Имя и фамилия всегда разделяются пробелом.
//   Сделайте, чтобы были доступны свойства firstName и lastName, причём не только на чтение, но и на запись
//   Важно: в этой задаче fullName должно остаться свойством, а firstName/lastName – реализованы через get/set. Лишнее дублирование здесь ни к чему.
Object.defineProperty(vasya, "firstName", {
  get: function () {
    return this.fullName.split(" ")[0];
  },

  set: function (newFirstName) {
    this.fullName = this.newFirstName + " " + this.lastName;
  },
});
console.log(vasya.firstName);

Object.defineProperty(vasya, "lastName", {
  get: function () {
    return this.fullName.split(" ")[1];
  },

  set: function (newLastName) {
    this.fullName = this.newFirstName + " " + this.lastName;
  },
});
console.log(vasya.lastName);

vasya.fullName = "Alone Tonight";

console.log(vasya.lastName);
