// // 1
// // Створити масив та вивести його в консоль:
// // - з 5 числових значень
// // - з 5 стічкових значень
// // - з 5 значень стрічкового, числового та булевого типу
//
// let masOfNum = [1,3,9,7,6];
// let masOfStr = ['tor','kor','ork','fork','sor'];
// let mas = [7,'hot',true,'ogo',3]
//
// console.log(masOfNum);
// console.log(masOfStr);
// console.log(mas);

// // 2
// // Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу. Вивести в консоль
//
// let mas = [];
//
// mas [0] = 3;
// mas [1] = 5;
// mas [2] = 1;
// mas [5] = 7;
//
// console.log(mas);
// console.log(mas[3]);

// // 3
// // За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині
//
// for (let i = 0; i < 10; i++) {
//     document.write('<div>Lorem ipsum dolor sit amet.</div>');
// }

// // 4
// // За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині
//
// for (let i = 0; i < 10; i++) {
//     document.write('<div>Lorem ipsum dolor sit amet.' + i + '</div>');
// }

// // 5
// // За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.
//
// let i = 0;
// while (i < 20) {
//     document.write('<h1>Lorem ipsum dolor.</h1>');
//     i++;
// }

// // 6
// // За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.
// let i = 0;
// while (i < 20) {
//     document.write(`<h1>Lorem ipsum dolor. ${i}</h1>`);
//     i++;
// }

// // 7
// // Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.
//
// let nums = [1,3,5,7,9,2,4,6,8,0];
//
// for (const num of nums) {
//     console.log(num)
// }

// // 8
// // Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.
//
// let strs = ['Lorem','ipsum','dolor','sit','amet','consectetur','adipisicing','elit','Illo','iste'];
//
// for (const str of strs) {
//     console.log(str);
// }

// // 9
// // Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.
//
// let mas = ['Lorem',3,true,'sit',12,'consectetur','adipisicing',false,9,'iste'];
//
// for (const elem of mas) {
//     console.log(elem);
// }

// // 10
// // Створити масив з 10 елементів числового, стірчкового і булевого типу.
// // За допомогою if та typeof вивести тільки булеві елементи.
//
// let mas = ['Lorem',3,true,'sit',12,false,'adipisicing',true,9,'iste'];
//
// for (const elem of mas) {
//     if (typeof elem === 'boolean')
//     console.log(elem);
// }

// // 11
// // Створити масив з 10 елементів числового, стірчкового і булевого типу.
// // За допомогою if та typeof вивести тільки числові елементи.
//
// let mas = ['Lorem',3,true,'sit',12,false,'adipisicing',true,9,'iste'];
//
// for (const elem of mas) {
//     if (typeof elem === 'number')
//     console.log(elem);
// }

// // 12
// // Створити масив з 10 елементів числового, стрічкового і булевого типу.
// // За допомогою if та typeof вивести тільки рядкові елементи.
//
// let mas = ['Lorem',3,true,'sit',12,false,'adipisicing',true,9,'iste'];
//
// for (const elem of mas) {
//     if (typeof elem === 'string')
//     console.log(elem);
// }

// // 13
// // Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів.
// // Вивести в консоль всі його елементи в циклі.
//
// let mas = [];
//
// mas [0] = 9;
// mas [1] = 'str';
// mas [2] = true;
// mas [3] = 7;
// mas [4] = 'urum';
// mas [5] = false;
// mas [6] = 4;
// mas [7] = true;
// mas [8] = 8;
// mas [9] = 'true';
//
// for (const elem of mas) {
//     console.log(elem);
// }

// // 14
// // Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
//
// for (let i = 0; i < 10; i++) {
//     console.log(i);
//     document.write(`<h2>${i}</h2>`);
// }

// // 15
// // Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
//
// for (let i = 0; i < 100; i++) {
//     console.log(i);
//     document.write(`<h2>${i}</h2>`);
// }

// // 16
// // Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write
//
// for (let i = 1; i <= 100; i += 2) {
//     console.log(i);
//     document.write(`<h2>${i}</h2>`);
// }

// // 17
// // Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write
//
// for (let i = 0; i < 100; i += 2) {
//     console.log(i);
//     document.write(`<h2>${i}</h2>`);
// }

// // 18
// // Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write
//
// for (let i = 0; i < 100; i++) {
//     if (i % 2 === 0)
//     console.log(i);
//     document.write(`<h2>${i}</h2>`);
// }

// // 19
// // Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write
//
// for (let i = 0; i < 100; i++) {
//     if (i % 2 > 0) {
//         console.log(i);
//         document.write(`<h2>${i}</h2>`);
//     }
// }

// // 20
// // Відтворити роботу годинника, відрахувавши 2 хвилини (2 цикли! 1й - хвилини, 2й - секунди)
//
// for (let m = 1; m >= 0; m--) {
//     for (let s = 59; s >= 0; s--) {
//         console.log(`${m}:${s}`);
//     }
// }

// // 21
// // Відтворити роботу годинника, відрахувавши  2 години  (3 цикли! 1й - години, 2й - хвилини, 3й - секунди)
//
// for (let h = 1; h >= 0; h--) {
//   for (let m = 59; m >= 0; m--) {
//     for (let s = 59; s >= 0; s--) {
//       console.log(`${h}:${m}:${s}`)
//     }
//   }
// }
