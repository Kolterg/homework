// 1
// Напишіть код, який за допомоги document.getElementById або document.getElementsByClassName
// або document.getElementsByTagName :

// 1_a
// Отримує текст з параграфа з id "content".

const content = document.getElementById('content');

// console.log(content);

// 1_b
// Отримує текст з блоку з id "rules".

const rules = document.getElementById('rules');

// console.log(rules);

// 1_c
// Замініть текст параграфа з id 'content' на будь-який інший.

content.innerText = 'Привіт світ!!!';

// 1_d
// Замініть текст параграфа з id 'rules' на будь-який інший.

rules.innerText = 'This is new text.';

// 1_e
// Змініть кожному елементу колір фону на червоний.

content.style.backgroundColor = 'red';
rules.style.backgroundColor = 'red';

// 1_f
// Змініть кожному елементу колір тексту на синій.

content.style.color = 'blue';
rules.style.color = 'blue';

// 1_g
// Отримати весь список класів елемента з id=rules і вивести їх в console.log.

let classOfRules = rules.classList;

console.log(classOfRules);

// 1_h
// Отримати всі елементи з класом fc_rules.

let fc_rules = document.getElementsByClassName('fc_rules');

// console.log(fc_rules);

// 1_i
// Поміняти колір тексту у всіх елементів fc_rules на червоний.

for (const elem of fc_rules) {
    elem.style.color = 'red';
}

//---------------------------------------------------------------------------------------------------------------

let users = [{
    name: 'vasya',
    age: 31,
    status: false,
    address: { city: 'Lviv', country: 'Ukraine', street: 'Shevchenko', houseNumber: 1 }
}, {
    name: 'petya',
    age: 30,
    status: true,
    address: { city: 'New York', country: 'USA', street: 'East str', houseNumber: 21 }
}, {
    name: 'kolya',
    age: 29,
    status: true,
    address: { city: 'Budapest', country: 'Hungary', street: 'Kuraku', houseNumber: 78 }
}, {
    name: 'olya',
    age: 28,
    status: false,
    address: { city: 'Prague', country: 'Czech', street: 'Paster', houseNumber: 56 }
}, {
    name: 'max',
    age: 30,
    status: true,
    address: { city: 'Istanbul', country: 'Turkey', street: 'Mikar', houseNumber: 39 }
}, {
    name: 'anya',
    age: 31,
    status: false,
    address: { city: 'Rio', country: 'Brasil', street: 'Ronaldi', houseNumber: 5 }
}, {
    name: 'oleg',
    age: 28,
    status: false,
    address: { city: 'Montreal', country: 'Canada', street: 'Acusto', houseNumber: 90 }
}, {
    name: 'andrey',
    age: 29,
    status: true,
    address: { city: 'Quebeck', country: 'Canada', street: 'Binaro', houseNumber: 33 }
}, {
    name: 'masha',
    age: 30,
    status: true,
    address: { city: 'Moscow', country: 'Russia', street: 'Gogolia', houseNumber: 1 }
}, {
    name: 'olya',
    age: 31,
    status: false,
    address: { city: 'Portland', country: 'USA', street: 'Forest str', houseNumber: 4 }
}, {
    name: 'max',
    age: 31,
    status: true,
    address: { city: 'Cairo', country: 'Egypt', street: 'Seashore', houseNumber: 45 }
}];


// // 2
// // За допомоги циклу проітерувати масив users, записати кожного юзера в сівй блок за допомоги document.createElement.
// // Вставити цей блок на сторінку.
//
// for (const user of users) {
//     const userDiv = document.createElement('div');
//
//     userDiv.innerHTML = `
//     Hello my name is ${user.name} <br>
//     I am ${user.age} years old <br>
//     My status is ${user.status} <br>
//     My address: ${user.address.country}, ${user.address.city}, ${user.address.street}, ${user.address.houseNumber}`;
//
//     document.body.appendChild(userDiv);
// }

// 3
// За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement.
// Блок з адресою зробити окремим блоком, з блоками для кожної властивості.

for (const user of users) {
    const userDiv = document.createElement('div');

    userDiv.innerHTML = `
    Hello my name is ${user.name} <br>
    I am ${user.age} years old <br>
    My status is ${user.status}`;

    document.body.appendChild(userDiv);

    const userAddress = document.createElement('div');

    userAddress.style.display = 'flex';
    userAddress.style.marginBottom = '10px';

    userDiv.appendChild(userAddress);

    const countryDiv = document.createElement('div');
    const cityDiv = document.createElement('div');
    const streetDiv = document.createElement('div');
    const houseNumberDiv = document.createElement('div');

    countryDiv.style.marginRight = '5px';
    cityDiv.style.marginRight = '5px';
    streetDiv.style.marginRight = '5px';
    houseNumberDiv.style.marginRight = '5px';

    countryDiv.innerHTML = `${user.address.country}`;
    cityDiv.innerHTML = `${user.address.city}`;
    streetDiv.innerHTML = `${user.address.street}`;
    houseNumberDiv.innerHTML = `${user.address.houseNumber}`;

    userAddress.appendChild(countryDiv);
    userAddress.appendChild(cityDiv);
    userAddress.appendChild(streetDiv);
    userAddress.appendChild(houseNumberDiv);
}