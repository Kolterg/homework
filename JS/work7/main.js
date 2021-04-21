// 1
// Створити довільний елемент с id = text. використовуючи JavaScript,
// зробіть так, щоб при кліку на кнопку зникавл елемент с id="text".

const form1 = document.createElement('form');
form1.setAttribute('id', 'form1');
document.body.appendChild(form1);

const button1 = document.createElement('button');
button1.innerHTML = 'Invisibility';
form1.appendChild(button1);

const text = document.createElement("div");
text.setAttribute('id', 'text');
text.innerHTML = 'Hi, I can become invisible';
text.style.backgroundColor = '#65ec6f';
text.style.margin = '10px 0';
document.body.appendChild(text);

button1.onclick = (ev) => {
    ev.preventDefault();
    text.style.visibility === 'visible' ? text.style.visibility = 'hidden' : text.style.visibility = 'visible';
}

// 2
// - Створіть кнопку, при кліку на яку, вона буде приховувати сама себе.

const form2 = document.createElement('form');
document.body.appendChild(form2);

const button2 = document.createElement('button');
button2.innerHTML = 'Hide button';
form2.appendChild(button2);

button2.onclick = (ev) => {
    ev.preventDefault();
    button2.style.visibility = 'hidden';
}

// 3
// - Створити інпут який приймає вік людини та кнопку яка підтверджує дію.
//   При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік чи менше він ніж 18,
//   та повідомити про це користувача

const form3 = document.createElement('form');
document.body.appendChild(form3);

const inputAge = document.createElement('input');
inputAge.setAttribute('type', 'text');
inputAge.setAttribute('name', 'setAge');
form3.appendChild(inputAge)

const buttonAge = document.createElement('button');
buttonAge.innerHTML = 'Set Age';
form3.appendChild(buttonAge);

buttonAge.onclick = (ev) => {
    ev.preventDefault();
    form3.setAge.value < 18 ? alert('You are too young') : alert('Come on to new horizons');
}

// 4
// - Створіть меню, яке розгортається/згортається при клику

const menu = document.createElement('div');
menu.innerHTML = 'Menu';
menu.style.backgroundColor = '#ffe20d';
menu.style.width = '40px';
menu.style.height = '40px';
document.body.appendChild(menu);

let deploy = true;

menu.onclick = () => {
    if (deploy) {
        menu.style.width = '200px';
        menu.style.height = '200px';
        deploy = false;
        return 0;
    }
    menu.style.width = '40px';
    menu.style.height = '40px';
    deploy = true;
}

// 5 ???
// - Створіть список коментарів, приклад об'єкту коментаря - {title : 'lorem', body:'lorem ipsum dolo sit ameti'}.
//   Вивести список коментарів в документ, кожний в своєму блоці.
//   Додайте кожному коментарю по кнопці для згортання його body.

let comments = [
    {title: 'Some text', body: 'Hello world!!!'},
    {title: 'Expressing one\'s opinion', body: 'I\'m alive, help me get out of here!!!'},
    {title: 'Error', body: 'Warning!!! error crash_report_000x0003...'},
    {title: 'Hello', body: 'Hello world and others!'},
    {title: 'Store', body: 'Potato, apple, radish, onion'}
]

const listComments = document.createElement('ol');
document.body.appendChild(listComments);

for (let i = 0; i < comments.length; i++) {
    const comment = document.createElement('li')
}




/*for (let i = 0; i < comments.length; i++) {
    const comment = document.createElement('li');
    listComments.appendChild(comment);

    const commentTitle = document.createElement('h3');
    commentTitle.innerHTML = comments[i].title;
    comment.appendChild(commentTitle);

    const buttonHideCom = document.createElement('button');
    buttonHideCom.setAttribute('id', `butHideCom${i}`);
    buttonHideCom.innerHTML = 'Hide Comment';
    comment.appendChild(buttonHideCom);

    const commentBody = document.createElement('p');
    commentBody.setAttribute('id', `comBody${i}`);
    commentBody.innerHTML = comments[i].body;
    comment.appendChild(commentBody);
}

const buttonHideCom = document.getElementById('butHideCom0')

const commentBody0 = document.getElementById('comBody0');

console.log(commentBody0);
buttonHideCom.onclick = (ev) => {
    ev.preventDefault();
    commentBody0.style.visibility === 'visible' ? commentBody0.style.visibility = 'hidden' : commentBody0.style.visibility = 'visible';
}*/

// 6
// - Створити 2 форми по 2 інпути в кожній. створити кнопку при кліку на яку зчитується
//   та виводиться на консоль інформація з цих 2х форм.
//   Кнопка повинна лежати за межами форм (Щоб уникнути  перезавантаження сторінки).
//   Доступ до інпутів через Forms API. Отже дайте формі та інпутам всі необхідні атрибути.

const form61 = document.createElement('form');
const form62 = document.createElement('form');
form61.setAttribute('name', 'form61');
form62.setAttribute('name', 'form62');
document.body.appendChild(form61);
document.body.appendChild(form62);

const input611 = document.createElement('input');
const input612 = document.createElement('input');
input611.setAttribute('name', 'input611');
input612.setAttribute('name', 'input612');
form61.appendChild(input611);
form61.appendChild(input612);
const input621 = document.createElement('input');
const input622 = document.createElement('input');
input621.setAttribute('name', 'input621');
input622.setAttribute('name', 'input622');
form62.appendChild(input621);
form62.appendChild(input622);

const button6 = document.createElement('button');
button6.innerText = 'Button';
document.body.appendChild(button6);

button6.onclick = (ev) => {
    ev.preventDefault();
    console.log(document.forms.form61.input611.value);
    console.log(document.forms.form61.input612.value);
    console.log(document.forms.form62.input621.value);
    console.log(document.forms.form62.input622.value);
}

// 7
// - Створити функцію, яка генерує таблицю.
//     Перший аргумент визначає кількість строк.
//     Другий параметр визначає кількість ячейок в кожній строці.
//     Третій параметр визначає елемент в який потрібно таблицю додати.

let tableConstructor = (line, cell, target) => {
    const table = document.createElement('table');
    target.appendChild(table);

    for (let i = 0; i < line; i++) {
        const tr = document.createElement('tr');
        table.appendChild(tr);

        for (let j = 0; j < cell; j++) {
            const th = document.createElement('th');
            th.innerText = 'Hello';
            tr.appendChild(th);
        }
    }
}

// tableConstructor(4, 3, document.body);

// 8
// - Напишіть «Карусель» – стрічку зображень, яку можна гортати вліво-вправо нажаттям на стрілочки.

const carousel = document.createElement('form');
carousel.setAttribute('name', 'carousel');
document.body.appendChild(carousel);

const buttonLeft = document.createElement('button');
buttonLeft.innerText = '<';
buttonLeft.style.height = '40px';
carousel.appendChild(buttonLeft);

const imgCarousel1 = document.createElement('img');
imgCarousel1.setAttribute('src', 'img/930533-carousel.jpg');
imgCarousel1.setAttribute('height', '196');
imgCarousel1.setAttribute('width', '200');
carousel.appendChild(imgCarousel1);

const imgCarousel2 = document.createElement('img');
imgCarousel2.setAttribute('src', 'img/9638438-carousel.jpg');
imgCarousel2.setAttribute('height', '133');
imgCarousel2.setAttribute('width', '200');
carousel.appendChild(imgCarousel2);

const imgCarousel3 = document.createElement('img');
imgCarousel3.setAttribute('src', 'img/84514054-carousel-in.jpg');
imgCarousel3.setAttribute('height', '133');
imgCarousel3.setAttribute('width', '200');
carousel.appendChild(imgCarousel3);

const imgCarousel4 = document.createElement('img');
imgCarousel4.setAttribute('src', 'img/Beston-Attraktsion-karusel.jpg');
imgCarousel4.setAttribute('height', '120');
imgCarousel4.setAttribute('width', '160');
carousel.appendChild(imgCarousel4);

const imgCarousel5 = document.createElement('img');
imgCarousel5.setAttribute('src', 'img/carousel-002.jpg');
imgCarousel5.setAttribute('height', '150');
imgCarousel5.setAttribute('width', '200');
carousel.appendChild(imgCarousel5);

const buttonRight = document.createElement('button');
buttonRight.innerText = '>';
buttonRight.style.height = '40px';
carousel.appendChild(buttonRight);
