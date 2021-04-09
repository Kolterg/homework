// 1
// Створити функцію яка приймає масив та виводить його.

function funcShowArr() {
    console.log(arguments);
}

let arr = [142, 433, 21, 123, 432, 2331, 312, 213];

// funcShowArr(arr);

// 2
// Створити функцію яка заповнює масив рандомними числами та виводить його. Для виведення використати попередню функцію.

function funcRandomArr(arr) {
    for (let i = 0; i < arr.length; i++) {
        arr[i] = Math.random();

    }
    funcShowArr(arr);
}

// funcRandomArr(arr);

// 3
// Створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!).

function funcMinNum() {
    let minNum = arguments[0];
    for (let i = 0; i < arguments.length; i++) {
        if (arguments[i] < minNum) {
            minNum = arguments[i];
        }
    }
    console.log(minNum);
}

// funcMinNum(7, 9, 6);

// 4
// Створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!).

function funcMaxNum() {
    let maxNum = arguments[0];
    for (let i = 0; i < arguments.length; i++) {
        if (arguments[i] > maxNum) {
            maxNum = arguments[i];
        }
    }
    console.log(maxNum);
}

// funcMaxNum(3, 4, 5);

// 5
// Створити функцію яка повертає найбільше число з масиву.

function funcMaxNumFromArr(arr) {
    let maxNum = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > maxNum) {
            maxNum = arr[i];
        }
    }
    return maxNum;
}

// console.log(funcMaxNumFromArr(arr));

// 6
// Створити функцію яка повертає найменьше число з масиву.

function funcMinNumFromArr(arr) {
    let minNum = arr[0];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < minNum) {
            minNum = arr[i];
        }
    }
    return minNum;
}

// console.log(funcMinNumFromArr(arr));

// 7
// Створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його.

function funcSumOfArr(arr) {
    let sum = 0;
    for (const arrElement of arr) {
        sum += arrElement;
    }
    return sum;
}

// console.log(funcSumOfArr(arr));

// 8
// Створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.

function funcMidSum(arr) {
    let sum = 0;
    let midSum;
    for (const arrElement of arr) {
        sum += arrElement;
    }
    midSum = sum / arr.length;
    return midSum;
}

// console.log(funcMidSum(arr));

// 9
// Створити функцію яка приймає масив будь яких объектів, та повертає масив ключів всіх обєктів.

let arr1 = [{name: 'Dima', age: 13}, {model: 'Camry'}]; // ===> [ name, age, model ]

function funcGetKeys(arr1) {
    let keys = [];
    for (let i = 0; i < arr1.length; i++) {
        const arrEl = arr1[i];
        let keyArr = Object.keys(arrEl);
        for (let j = 0; j < keyArr.length; j++) {
            const keyArrElement = keyArr[j];
            keys.push(keyArrElement);
        }
    }
    return keys;
}

// console.log(funcGetKeys(arr1));

// 10
// Створити функцію яка приймає масив будь яких объектів, та повертає масив значень всіх обєктів.

let arr2 = [{name: 'Dima', age: 13}, {model: 'Camry'}]; // ===> [ Dima, 13, Camry ]

function funcGetValues(arr2) {
    let values = [];
    for (let i = 0; i < arr2.length; i++) {
        const value = arr2[i];
        let valueArr = Object.values(value);
        for (let j = 0; j < valueArr.length; j++) {
            const valueArrElement = valueArr[j];
            values.push(valueArrElement);
        }
    }
    return values;
}

// console.log(funcGetValues(arr2));

// 11
// Створити функцію яка скаладає значення елементів з однаковими індексами  та повертає новий результуючий масив.

let numArr1 = [1,2,3,4];
let numArr2 = [2,3,4,5]; // результат [3,5,7,9]

function SumOfArr (numArr1, numArr2) {
    let sumArr = [];
    for (let i = 0; i < numArr1.length; i++) {
        sumArr[i] = numArr1[i] + numArr2[i];
    }
    return sumArr;
}

console.log(SumOfArr(numArr1, numArr2));


