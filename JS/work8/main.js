// 1
// - Дана textarea.
// В неё вводится текст.
// Сделайте так, чтобы после захода на эту страницу через некоторое время, введенный текст остался в textarea.

const textarea1 = document.getElementById('text1');

if (localStorage.getItem('textarea1')) {
    textarea1.value = `${localStorage.getItem('textarea1')}`;
}

textarea1.onchange = () => {
    localStorage.setItem('textarea1', `${textarea1.value}`);
}

// 2
// - Дана форма с инпутами, текстареа, чекбоксами, радио кнопочками, селектами и тп.
// Пользователь вводит какие-то данные и закрывает страницу (не факт, что он заполнил всю форму).
// Сделайте так, чтобы при следующем заходе на страницу введенные им ранее данные стояли на своих местах.
// Сделайте ваш скрипт как можно более универсальным.

const form2 = document.getElementById('form2')
const textInput = document.getElementById('text2Input');
const textArea2 = document.getElementById('text2Area');
const check2 = document.getElementById('check2');
const [radio1, radio2] = form2.radio;

if (localStorage.getItem('text_input2')) {
    textInput.setAttribute('value', `${localStorage.getItem('text_input2')}`);
}

textInput.onchange = () => {
    localStorage.setItem('text_input2', `${textInput.value}`);
}

if (localStorage.getItem('text_area2')) {
    textArea2.value = `${localStorage.getItem('text_area2')}`;
}

textArea2.onchange = () => {
    localStorage.setItem('text_area2', `${textArea2.value}`);
}

if (localStorage.getItem(`check_input2`)) {
    check2.setAttribute(`checked`, `${localStorage.getItem('check_input2')}`);
}

check2.onchange = () => {
    localStorage.removeItem(`check_input2`);
    localStorage.setItem(`check_input2`, `${check2.checked}`);
}

if (localStorage.getItem(`radio_input1`)) {
    radio1.setAttribute('checked', `${localStorage.getItem('radio_input1')}`);
}

radio1.onchange = () => {
    localStorage.removeItem('radio_input1');
    localStorage.removeItem('radio_input2');
    localStorage.setItem('radio_input1', `${radio1.checked}`);
}

if (localStorage.getItem(`radio_input2`)) {
    radio2.setAttribute('checked', `${localStorage.getItem('radio_input2')}`);
}

radio2.onchange = () => {
    localStorage.removeItem('radio_input1');
    localStorage.removeItem('radio_input2');
    localStorage.setItem('radio_input2', `${radio2.checked}`);
}

// 3
// -Дан текстареа. В него можно ввести данные, нажать кнопку "сохранить" и они "фикисруются" (в хранилище),
// затем поредактировать их, затем еще поредактировать и возможно еще.....
// Требование : хранить историю своих изменений (даже после перезагрузки страницы).
// Сверху над текстареа должны появится стрелочки, с помощью которых можно перемещаться по истории
// (не забудьте!чекпоинт истории - нажатеи кнопки сохранить).

const textArea3 = document.getElementById('text3Area');
const btn3 = document.getElementById('btn3');
const btn3L = document.getElementById('btn3L');
const btn3R = document.getElementById('btn3R');
let i = localStorage.getItem(`I`) ? localStorage.getItem(`I`) : 0;
let k = i;

btn3.onclick = (ev) => {
    ev.preventDefault();
    i++;
    localStorage.setItem(`I`, `${i}`);
    localStorage.setItem(`text3_area_${i}`, `${textArea3.value}`);
    k = i;
    if (k > 1) {
        btn3L.style.visibility = 'visible';
    }
}

if (localStorage.getItem(`text3_area_${k}`)) {
    btn3L.style.visibility = 'visible';
    textArea3.value = `${localStorage.getItem(`text3_area_${k}`)}`
}

btn3L.onclick = (ev) => {
    ev.preventDefault();
    if (localStorage.getItem(`text3_area_${k}`)) {
        if (k > 1) {
            k--;
            btn3R.style.visibility = 'visible';
        }
        if (k === 1) {
            btn3L.style.visibility = 'hidden';
        }
        textArea3.value = `${localStorage.getItem(`text3_area_${k}`)}`;
    }
}

btn3R.onclick = (ev) => {
    ev.preventDefault();
    if (localStorage.getItem(`text3_area_${k}`)) {
        if (k < i) {
            k++;
            btn3L.style.visibility = 'visible';
        }
        if (k == i) {
            btn3R.style.visibility = 'hidden';
        }
        textArea3.value = `${localStorage.getItem(`text3_area_${k}`)}`;
    }
}

// 4
// - Реализуйте записную книгу, хранящую данные в локальном хранилище.
// Данные которые надо сохранять : ФИО, номер, почта, фирма, отдел, день рождения
// Данные вводить через соответсвующую форму.
// --Каждому контакту добавить кнопку для удаления контакта.
// --Каждому контакту добавить кнопку редактироваиня. При нажати на нее появляется форма,
// в которой есть все необходимые инпуты для редактирования, которые уже заполнены данными объекта.

