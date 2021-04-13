// 1) Створити масив з 20 чисел та:

let numbers = [1, 20, 2, 19, 3, 18, 4, 17, 5, 16, 6, 15, 7, 14, 8, 13, 9, 12, 10, 11];

//  a) відсортувати його від меншого до більшого.

let numsSort1 = numbers.sort((a, b) => a - b);

//  b) відсортувати його від більшого до меншого.

let numsSort2 = numbers.sort((a, b) => b - a);

//  c) Відфілтрувати числа які є кратними 3.

let numsFilter1 = numbers.filter((number) => number % 3 === 0);

//  d) Відфілтрувати числа які є більшими за 10.

let numsFilter2 = numbers.filter((number) => number > 10);

//  e) Проітерувати його forEach та вивести кожеш елмент за допомогою document.write.

numbers.forEach((number) => document.write(number + '<br>'));

//  f) За допомогою map збільшити кожен елемент в масиві в три рази.

let numsMap = numbers.map((number) => number * 3);

//  g) Порахувати загальну суму всіх елментів у масиві (reduce).

let sum = numbers.reduce((previousValue, currentValue) => previousValue + currentValue);

// 2) Створити масив з 20 стрічок та:

let strings = ['lorem', 'ipsum', 'dolor', 'sit', 'amet', 'consectetur', 'adipisicing', 'elit', 'commodi', 'consequatur',
    'consequn', 'debitis', 'eaque', 'impedit', 'optio', 'pariatur', 'placeat', 'quidem', 'repudiandae', 'voluptates'];

//  a) Відсортувати його в алфавітному порядку.

let strsSort1 = strings.sort();

//  b) Відсортувати в зворотньому порядку

let strsSort2 = strings.sort(((a, b) => {
    if (a < b) return 1;
    return -1;
}));

//  c) Отримати в новому масиві тільки ті слова, довжина яких більша за 4 букви (filter)

let strsFilter = strings.filter((word) => word.length > 4)

//  d) Змінити кожне слово в масиві додавши на початок 'Sam says *ваше слово*'

let strsMap = strings.map(word => `Sam says ${word}`);

// 3) Все робити тільки за допомогою методів масивів!
// Дано масив :

const users = [
    {name: 'vasya', age: 31, isMarried: false},
    {name: 'petya', age: 30, isMarried: true},
    {name: 'kolya', age: 29, isMarried: true},
    {name: 'olya', age: 28, isMarried: false},
    {name: 'max', age: 30, isMarried: true},
    {name: 'anya', age: 31, isMarried: false},
    {name: 'oleg', age: 28, isMarried: false},
    {name: 'andrey', age: 29, isMarried: true},
    {name: 'masha', age: 30, isMarried: true},
    {name: 'olya', age: 31, isMarried: false},
    {name: 'max', age: 31, isMarried: true}
];

// a) Відсортувати його за віком (зростання, а потім окремо спадання).

/*
let usersSortAge1 = users.sort((a, b) => a.age - b.age);
let usersSortAge2 = users.sort((a, b) => b.age - a.age);
*/

// b) Відсортувати його за кількістю знаків в імені  (зростання , а потім окремо спадання).

/*
let usersSortLetter1 = users.sort((a, b) => a.name.length - b.name.length);
let usersSortLetter2 = users.sort((a, b) => b.name.length - a.name.length);
*/

// c) Пройтись по ньому та додати кожному юзеру поле id - яке характеризує унікальний індентифікатор (По якому
// принципу його створювати - ваше рішення), та зберегти це в новий масив (первинний масив залишиться без змін).

let usersAddId = users.map((user, i) => {
    user.id = i;
    return user;
});

// d) Відсортувати його за індентифікатором.

let usersAddIdSort = usersAddId.sort((a, b) => b.id - a.id);

// e) Всі хто одружений мають попасти у новий масив та отрмати квартиру (reduce).

let arr = [];
let married = users.reduce((previousValue, currentValue) => {
    if (previousValue.isMarried) {
        previousValue.flat = true;
        arr.push(previousValue);
    }
    if (currentValue.isMarried) {
        currentValue.flat = true;
        arr.push(currentValue);
    }
    return arr;
});

console.log(married);