// Створюємо масив

let dinisaurs = [
    'T-Rex',
    'Velociraptor',
    'Stegosaurus',
    'Triceratops',
    'Brachiosaurus',
    'Pteranodon',
    'Apatosaurus',
    'Diplodocus',
    'Compsognathus'
];

// Видобовуємо елементи із масиву

console.log(dinisaurs[2]);

// Встановлюємо та змінюємо елементи у масиві

dinisaurs[0] = 'Tyrannosaurus Rex';

console.log(dinisaurs);

// Міксуємо типи даних у масиві

let dinisaursAndNumbers = [3, 'dinisaurs', ['Triceratops', 'Stegosaurus', 3627.5], 10];

console.log(dinisaursAndNumbers[2][1]);

// Працюємо із масивами
// Дізнаємось довжину масиву
let maniacs = ['Yakko', 'Wakko', 'Dot'];
console.log(maniacs.length);

// Додаємо елементи до масиву

let animals = [];

animals.push('Cat');
animals.push('Dog');
animals.push('Llama');

console.log(animals);

// Видаляємо елементи з масиву

let lastAnimals = animals.pop();

console.log(lastAnimals);

console.log(animals.unshift(lastAnimals));

// Знаходимо індекс елемента у масиві

let colors = ['red', 'green', 'blue'];
console.log(colors.indexOf('blue'));

// Об'єднуємо масиви

let furryAnimals = ['Alpaca', 'Ring-tailed Lemur', 'Yeti'];
let scalyAnimals = ['Boa Constrictor', 'Godzilla'];
let furryAndScalyAnimals = furryAnimals.concat(scalyAnimals);
console.log(furryAndScalyAnimals);

// Завдання: Створіть масив чисел від 1 до 10 і виведіть його у консоль.
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(numbers);

// Завдання: Додайте елемент "hello" до масиву з назвами кольорів.

let name = ['red', 'yellow', 'blue'];
name.push('hello');
console.log(name);

// Завдання: Видаліть перший елемент з масиву і виведіть його у консоль.

let delet = name.shift()

console.log(delet);

// Завдання: Виведіть останній елемент масиву.

let animals1 = ['cat', 'dog', 'bird'];
let lastAnimals1 = animals1[animals1.length - 1];

console.log(lastAnimals1);

// Завдання: Об'єднайте два масиви в один і виведіть результат у консоль.

let arr1 = [1, 2, 3];
let arr2 = [5, 6, 7];
let result = arr1.concat(arr2);

console.log(result);

// Завдання: Знайдіть індекс елемента "banana" в масиві.

let fructs = ['apple', 'banane', 'grapes'];
let index = fructs.indexOf('banane');
console.log(index);
