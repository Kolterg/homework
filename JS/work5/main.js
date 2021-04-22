// Реалізовуємо свій компютерний магазин.

// 1
// Необхідно реалізувати базовий клас комютера. Який має лише параметри:
// Оперативна память.
// Потужність процесора. (цифра від 0 до 1000)
// Назва.
// В кожного компютера має бути метод включання.

class main {
    constructor(RAM, CP, name) {
        this.RAM = RAM;
        this.CP = CP;
        this.name = name;
    }

    turnOn() {
        console.log('Включить компьютер');
    }
}

// let myPc = new computer(16, 1000, 'myPC');

// 2
// Від базового компютрера треба реалізувати ноутбук.
// Він має нову властивість дюймаж монітора.
// У нього зявляється нова змінна роботи батареї. Ця змінна визначається як потужність / (дюйми * оперативку).

class notebook extends main {
    constructor(RAM, CP, name, monitor) {
        super(RAM, CP, name);
        this.monitor = monitor;
        this.batary = CP / (monitor * RAM);
    }
}

let myNotebook = new notebook(8, 600, 'myNote', 17);

// 3
// Від ноутбука потрібно зробити ультрабук.
// Він має нову змінну ваги.
// При включенні ультрабуку має видаватися помилка, якшо вага більша за 2кг та батарея тримаж менше ніж 4 години.

class ultrabook extends notebook {
    constructor(RAM, CP, name, monitor, kg) {
        super(RAM, CP, name, monitor);
        this.kg = kg;
    }

    turnOn() {
        if ((this.kg > 2) && (this.batary < 4)) {
            console.log('Hi I`m Error');
        } else {
            console.log('Включить компьютер');
        }
    }
}

let myUltrabook = new ultrabook(8, 400, 'myUltra', 15, 5);

// myUltrabook.turnOn();
//
// console.log(myUltrabook);

// 4
// Від базвого класу потрібно створити базовий ПК.
// В нього має бути новий метод запуску ігор.
// Кількість FPS визначається як потужність / опервтивку.
// Example: `You are playing *GAME_NAME* with *FPS_COUNT* FSP`.
//
// Компютер можна апгрейдити.
// Потужність процесора можна збільшувати максимум на 10%. Зменшувати її не можна.
// Оперативку можна збільшити лише в 2 рази. Зменшувати її не можна.
// Для зміни характеритик мають бути свої методи. Міняти змінну "в лоб" заборонено.

class mainPC extends main {
    constructor(RAM, CP, name, game) {
        super(RAM, CP, name);
        this.game = game;
        this.FPS = CP / RAM;
    }

    onGame() {
        document.write(`You are playing ${this.game} with ${this.FPS} FSP`);
    }

    upgradeCP(value) {
        if (value > 0 && value <= 10) {
            this.CP = (100 + value) / 100 * this.CP;
        } else {
            console.log(`збільшити потужність на ${value}% неможливо`)
        }
    }

    upgradeRAM() {
        this.RAM = this.RAM * 2;
    }
}

let mainComputer = new mainPC(16, 1000, 'gameComputer', 'CS');

// mainComputer.upgradeCP(11);
// mainComputer.upgradeRAM();
//
// console.log(mainComputer);

// 5
// Від базового ПК необхідно зробити ігровий ПК.
// Кількість ФПС має бути рівно в 2 рази більший ніж в звичайного ПК.
// При запуску однієї гри потужніть процесора має падати на 10%.
// Якшо потужність процесора менша ніж 500. І оперативка менша за 8 потрібно видати помилку, (алерт, або консоль)
// що на цьому відрі ігри не запускаються.

class gamePC extends mainPC {
    constructor(RAM, CP, name, game, FPS) {
        super(RAM, CP, name, game, FPS);
        this.FPS *= 2
    }
    onGame() {
        this.CP = this.CP - (this.CP / 100 * 10)
        if (this.CP < 500 || this.RAM < 8) {
            this.game = null
            this.FPS = null
            console.log('На цьому відрі ігри не запускаються');
        }
    }
}

let gameComputer = new gamePC(16, 1000, 'gameComputer', 'CS');


gameComputer.upgradeCP(11);
gameComputer.upgradeRAM();
gameComputer.onGame();
gameComputer.onGame();
gameComputer.onGame();
gameComputer.onGame();
gameComputer.onGame();
gameComputer.onGame();
gameComputer.onGame();
gameComputer.onGame();
gameComputer.onGame();


console.log(gameComputer);
