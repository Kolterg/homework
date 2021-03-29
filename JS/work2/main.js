// //1
//
// let masOfNum = [1,3,9,7,6];
// let masOfStr = ['tor','kor','ork','fork','sor'];
// let mas = [7,'hot',true,'ogo',3]
//
// console.log(masOfNum);
// console.log(masOfStr);
// console.log(mas);

// //2
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

// //3
//
// for (let i = 0; i < 10; i++) {
//     document.write('<div>Lorem ipsum dolor sit amet.</div>');
// }

// //4
//
// for (let i = 0; i < 10; i++) {
//     document.write('<div>Lorem ipsum dolor sit amet.' + i + '</div>');
// }

// //5
//
// let i = 0;
// while (i < 20) {
//     document.write('<h1>Lorem ipsum dolor.</h1>');
//     i++;
// }

// //6
//
// let i = 0;
// while (i < 20) {
//     document.write(`<h1>Lorem ipsum dolor. ${i}</h1>`);
//     i++;
// }

// //7
//
// let nums = [1,3,5,7,9,2,4,6,8,0];
//
// for (const num of nums) {
//     console.log(num)
// }

// //8
//
// let strs = ['Lorem','ipsum','dolor','sit','amet','consectetur','adipisicing','elit','Illo','iste'];
//
// for (const str of strs) {
//     console.log(str);
// }

// //9
//
// let mas = ['Lorem',3,true,'sit',12,'consectetur','adipisicing',false,9,'iste'];
//
// for (const elem of mas) {
//     console.log(elem);
// }

// //10
//
// let mas = ['Lorem',3,true,'sit',12,false,'adipisicing',true,9,'iste'];
//
// for (const elem of mas) {
//     if (typeof elem === 'boolean')
//     console.log(elem);
// }

// //11
//
// let mas = ['Lorem',3,true,'sit',12,false,'adipisicing',true,9,'iste'];
//
// for (const elem of mas) {
//     if (typeof elem === 'number')
//     console.log(elem);
// }

// //12
//
// let mas = ['Lorem',3,true,'sit',12,false,'adipisicing',true,9,'iste'];
//
// for (const elem of mas) {
//     if (typeof elem === 'string')
//     console.log(elem);
// }

// //13
//
// let mas = ['Lorem',3,true,'sit',12,false,'adipisicing',true,9,'iste'];
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

// //14
//
// for (let i = 0; i < 10; i++) {
//     console.log(i);
//     document.write(`<h2>${i}</h2>`);
// }

// //15
//
// for (let i = 0; i < 100; i++) {
//     console.log(i);
//     document.write(`<h2>${i}</h2>`);
// }

// //16
//
// for (let i = 1; i <= 100; i += 2) {
//     console.log(i);
//     document.write(`<h2>${i}</h2>`);
// }

// //17
//
// for (let i = 0; i < 100; i += 2) {
//     console.log(i);
//     document.write(`<h2>${i}</h2>`);
// }

// //???18
//
// for (let i = 0; i < 100; i++) {
//     if (i/2 >= 0)
//     console.log(i);
//     document.write(`<h2>${i}</h2>`);
// }

// //19
//
// for (let i = 1; i <= 100; i += 2) {
//     console.log(i);
//     document.write(`<h2>${i}</h2>`);
// }

// //20
//
// for (let m = 1; m >= 0; m--) {
//     for (let s = 59; s >= 0; s--) {
//         console.log(`${m}:${s}`);
//     }
// }

//21

for (let h = 1; h >= 0; h--) {
  for (let m = 59; m >= 0; m--) {
    for (let s = 59; s >= 0; s--) {
      console.log(`${h}:${m}:${s}`)
    }
  }
}