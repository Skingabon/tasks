// Написать функцию, которая принимает 2 числа и возвращает результат сложения
function getCount(a, b) {
  return a + b;
}
getCount(1, 2);
console.log(getCount(1, 2));

// // Есть объект user. Необходимо перезаписать все поля этого объекта на новые
const user = {
  age: 54,
  name: "Slava",
};

user.age = 18;
user.name = "Tim";
console.log(user);

// // Есть функция, которая принимает в себя объект и возвращает его значения. Необходимо написать вызов функции
const getObj = ({ age, name }) => {
  return `${age} + ${name}`;
};

getObj({ age: 18, name: "Tim" });

console.log(getObj({ age: 18, name: "Tim" }));

// // Есть вызов функции, которая принимает в себя объект. Необходимо написать функцию с выводом этого объекта
const name = "Slava";
const age = 54;

const getObject = (obj) => {
  return obj;
};

console.log(getObject({ name, age }));

// //Нужно реализовать функцию, которая принимает в себя массив чисел, а возвращает результат сложения этих числе в массиве
function getCountFromArr(arr) {
  let result = 0;

  a.forEach((elem) => {
    result += elem;
  });
  return result;
}

getCountFromArr([1, 2, 3, 4, 5]);
