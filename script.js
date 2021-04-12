// 1 часть

// forEach

// 1
const arr = [1, 2, 'Smith', true, 12, 'John'];

arr.forEach(item => {
    console.log(item);
});

// 2
arr.forEach((item, index, arr) => {
    console.log(`Элемент: ${item}, позиция: ${index}. В Массиве: ${arr}`);
});

// filter

// 1
const names = ['Vitalik', 'John', 'Alex', 'Viktor'];

const filterNames = names.filter(item => item.length > 4);
console.log(filterNames);

// 2
const workers = [{name: 'Alex', specialization: 'junior Frontend Dev', salary: 700}, 
                 {name: 'John', specialization: 'senior Frontend Dev', salary: 3000},
                 {name: 'Michel', specialization: 'middle Frontend Dev', salary: 2100}];

const newArray = workers.filter(person => person.salary > 1000);
console.log(newArray);


// Map

// 1
const numbers = [1, 4, 10, 12, 22, -2];
const resultNum = numbers.map(num => num ** 2);

console.log(resultNum);

// 2
const users = ['ViTAlik', 'ALeX', 'SashA', 'olEg'];
const correctUser = users.map(user => user.toLowerCase());
console.log(correctUser);


// Every 

// 1 

const num = [1, 2, -1, 15, 1.5, '1', 29, 11];
const flagNum = num.every(num => typeof(num) === 'number');
console.log(flagNum);

// 2 

const num1 = [22, 35, 100, 20, 11, 56];
const flag = num1.every(elem => elem > 10);
console.log(flag);

// Some 

// 1

const a = ['voadnopvdopndv', 'aasfqgqeg', 'qwfihqgqopwg'];
const b = a.some(string => string.length > 5);
console.log(b);

// 2 

const c = [1, 2, -1, 15, 1.5, 20, 29, 11];
const d = c.some(num => num === 20);
console.log(d);

// reduce 

const num4 = [1, 2, 5, 10];
                        
let res = num4.reduce((sum, current) => {
    return sum + current;
});

console.log(res);

// 2 часть 

function Person(name, age) {
    this.name = name;
    this.age = age;

    this.whoAmI = () => {
        console.log(this.name, this.age);
    };
}

const vitalik = new Person('Vitalik', 19);
const oleg = new Person('oleg', 29);

oleg.whoAmI();
vitalik.whoAmI();


function Person1(name, age) {
    this.name = name;
    this.age = age;
}

Person1.prototype.whoAmI = function() {
    console.log(this.name, this.age);
};

const sasha = new Person1('Sasha', 22);
const vadim = new Person1('vadim', 42);

sasha.whoAmI();
vadim.whoAmI();




class Slider {
    constructor (width, height, count) {
        this.width = width;
        this.height = height;
        this.count = count;
    }

    whoAmI() {
        console.log(`Слайдер имеет такие значения: ${this.width}, ${this.height}, ${this.count}`);
    }
}

const slider1 = new Slider(400, 300, 5);
const slider2 = new Slider(600, 500, 10);

slider1.whoAmI();
slider2.whoAmI();

class AutoSlider extends Slider {
    constructor(width, height, count, autoplay) {
        super(width, height, count);
        this.autoplay = autoplay;
    }

    play() {
        console.log(`AutoPlay: ${this.autoplay}`);
    }
}   

const autoPlaySlider = new AutoSlider('300', '300', 3, true);
autoPlaySlider.play();
autoPlaySlider.whoAmI();