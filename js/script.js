'use strict';

/* 
Теоретичні питання
1. Опишіть своїми словами як працює метод forEach.

	Метод forEach перебирає кожен елемент масиву і виконує для кожного елементу callBack-функцію.

2. Які методи для роботи з масивом мутують існуючий масив, а які повертають новий масив? Наведіть приклади.

	splice, split, sort, reverse - мутують вихідний масив
	slice, concat, filter, map - не змінюють вихідний масив і повертають новий масив

3. Як можна перевірити, що та чи інша змінна є масивом?

	За допомогою методу Array.isArray(). Якщо змінна є масивом, то отримуємо логічне підтвердження - true, в протилежному випадку - false.

4. В яких випадках краще використовувати метод map(), а в яких forEach()?

	Для переребору масиву краще використовувати метод forEach(). Метод map() використовується, якщо потрібно повернути новий масив з результатом роботи callBack-функції.
*/

/* 
Практичні завдання
1. Створіть масив з рядків "travel", "hello", "eat", "ski", "lift" та обчисліть кількість рядків з довжиною більше за 3 символи. Вивести це число в консоль.
*/

const arr = ["travel", "hello", "eat", "ski", "lift"];

let res = 0;
arr.forEach(el => el.length > 3 ? res++ : res += 0);
console.log(res);

// const isFilteredElement = arr.filter((el) => el.length > 3 ? true : false);
// console.log(isFilteredElement.length);

/* 
2. Створіть масив із 4 об'єктів, які містять інформацію про людей: {name: "Іван", age: 25, sex: "чоловіча"}.
Наповніть різними даними. Відфільтруйте його, щоб отримати тільки об'єкти зі sex "чоловіча".
Відфільтрований масив виведіть в консоль.
*/

const users = [
	{name: "Іван", age: 25,	sex: "чоловіча",},
	{name: "Інна",	age: 27,	sex: "жіноча",},
	{name: "Валентина", age: 35, sex: "жіноча",},
	{name: "Петро", age: 40, sex: "чоловіча",}
];

const usersFiltered = users.filter((obj) => {
	if (obj.sex === "чоловіча") {
		return true;
	} 
return false;
})

console.log(usersFiltered);

// const getFilteredUsers = (arr, value) => {
// 	return arr.filter((obj) => {
// 		for (const key in obj) {
// 			if (obj[key] === value) {
// 				return true;
// 			}
// 		}
// 		return false;
// 	});
// }

// console.log(getFilteredUsers(users, "чоловіча"));

/* 
3. Реалізувати функцію фільтру масиву за вказаним типом даних. (Опціональне завдання)
Технічні вимоги:
- Написати функцію filterBy(), яка прийматиме 2 аргументи. Перший аргумент - масив, який міститиме будь-які дані, другий аргумент - тип даних.
- Функція повинна повернути новий масив, який міститиме всі дані, які були передані в аргумент, за винятком тих, тип яких був переданий другим аргументом. Тобто якщо передати масив ['hello', 'world', 23, '23', null], і другим аргументом передати 'string', то функція поверне масив [23, null].
*/

const array = ['hello', 'world', 23, '23', null];

const filterBy = (arr, type) => {
	return arr.filter((element) => {
		if (typeof element === type) {
			return false;
		}
		return true;
	}
)}

console.log(filterBy(array, 'string'));
console.log(array);
