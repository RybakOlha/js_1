// Task 1

function showArr(domElem, arr) {
    let out = '';
    for (let i = 0; i < arr.length; i++) {
        out += arr[i] + ' ';
    }
    document.querySelector(domElem).innerHTML = out;
}

let d1 = [33, 'best', 66, 'best'];

function f1() {
    const inputValue = document.querySelector('.i-1').value;
    if (inputValue) {
        d1.push(inputValue);
        showArr('.out-1', d1);
        document.querySelector('.i-1').value = ''; 
    }
}

document.querySelector('.b-1').addEventListener('click', f1);

// Task 2

function f2() {
    d1.pop(); // Видаляємо останній елемент масиву
    showArr('.out-2', d1); // Виводимо змінений масив
}



document.querySelector('.b-2').onclick = f2;

// Task 3

function f3() {

    d1.shift(); // Видаляємо перший елемент масиву
    showArr('.out-3', d1); // Виводимо змінений масив
}
   

document.querySelector('.b-3').onclick = f3;

// Task 4


function f4() {
    const inputValue = document.querySelector('.i-4').value;
    if (inputValue) {
        d1.push(inputValue); // Додаємо значення до масиву
        showArr('.out-4', d1); // Виводимо змінений масив
        document.querySelector('.i-4').value = ''; // Очищення input
    }
}

document.querySelector('.b-4').onclick = f4;

// Task 5

function f5() {
    const inputValue = document.querySelector('.i-5').value;
    if (inputValue) {
        d1.unshift(inputValue); // Додаємо значення в початок масиву
        showArr('.out-5', d1); // Виводимо змінений масив
        document.querySelector('.i-5').value = ''; // Очищення input
    }
}

document.querySelector('.b-5').onclick = f5;

// Task 6

let d6 = ['test', 5, 12];

function f6() {
    const inputValue = document.querySelector('.i-6').value;
    if (inputValue) {
        const lastIndex = d6.length; // Отримуємо індекс останнього елемента
        d6[lastIndex] = inputValue; // Емулюємо метод push
        document.querySelector('.i-6').value = ''; // Очищення input
        showArr('.out-6', d6); // Виводимо змінений масив
    }
}

document.querySelector('.b-6').onclick = f6;

// Task 7

let d7 = ['china', 'india', 'brazil', 'japan', 'egypt'];

function f7() {
    if (d7.length > 0) {
        d7.length = d7.length - 1; // Емулюємо метод pop шляхом скорочення довжини масиву
        showArr('.out-7', d7); // Виводимо змінений масив
    }
}

document.querySelector('.b-7').onclick = f7;

// Task 8

let d8 = [2, '4', 12, 67, 'hello'];

function f8() {
    const inputValue = document.querySelector('.i-8').value;
    if (inputValue) {
        d8.unshift(inputValue); // Емулюємо метод unshift
        document.querySelector('.i-8').value = ''; // Очищення input
        showArr('.out-8', d8); // Виводимо змінений масив
    }
}

document.querySelector('.b-8').onclick = f8;

// Task 9

let d9 = [100, 200, 300, 400, 700, 121];

function f9() {

    if (d9.length > 0) {
        for (let i = 0; i < d9.length - 1; i++) {
            d9[i] = d9[i + 1];
        }
        d9.length = d9.length - 1; // Емулюємо метод shift
        showArr('.out-9', d9); // Виводимо змінений масив
    }
}

document.querySelector('.b-9').onclick = f9;

// Task 10

let d10 = [3, 14, 15, 92, 6];

function f10() {

   
        d10.reverse(); // Застосовуємо метод reverse
        showArr('.out-10', d10); // Виводимо отриманий масив
    
}

document.querySelector('.b-10').onclick = f10;


// Task 11

let d11 = [2, 3, 4, 5, 6, 7];

function f11() {
    
        const inputValue = parseFloat(document.querySelector('.i-11').value); // Отримуємо число з input і "кастимо" його до числа
    
        const index = d11.indexOf(inputValue); // Знаходимо індекс числа в масиві
    
        const outputElement = document.querySelector('.out-11');
    
        if (index !== -1) {
            outputElement.textContent = `Індекс числа ${inputValue} у масиві: ${index}`;
        } else {
            outputElement.textContent = -1;
        }
    
}

document.querySelector('.b-11').onclick = f11;


// Task 12

let d12 = [6, 62, 60, 70, 1, 5];

function f12() {
        const inputValue = parseFloat(document.querySelector('.i-12').value); // Отримуємо число з input і переводимо його до числа
    
        let index = -1; // Початкове значення індексу
    
        for (let i = 0; i < d12.length; i++) {
            if (d12[i] === inputValue) {
                index = i; // Якщо число знайдено, зберігаємо його індекс
                break;
            }
        }
    
        const outputElement = document.querySelector('.out-12');
    
        outputElement.textContent = index;
    
}

document.querySelector('.b-12').onclick = f12;

// Task 13


let d13 = [6, 0, 22, 1, 4, 76];

function f13() {

    const reversedArray = [];

    for (let i = d13.length - 1; i >= 0; i--) {
        reversedArray.push(d13[i]); // Додаємо елементи в новий масив у зворотньому порядку
    }

    showArr('.out-13', reversedArray); // Виводимо новий масив
}

document.querySelector('.b-13').onclick = f13;


// Task 14

let d14 = [];

function f14() {

    const inputValue = parseInt(document.querySelector('.i-14').value); // Отримуємо число з input і переводимо його до числа

    d14 = Array(inputValue).fill(1); // Заповнюємо масив довжиною inputValue, кожен елемент - 1

    showArr('.out-14', d14); // Виводимо масив
}

document.querySelector('.b-14').onclick = f14;

// Task 15

let d15 = [0, 2, 5, -4, 6, 22, -9, -12, 8, 12, 13, 78];

function f15() {


    const inputValue = parseFloat(document.querySelector('.i-15').value); // Отримуємо число з input і переводимо його до числа

    if (!isNaN(inputValue) && d15.indexOf(inputValue) === -1) {
        d15.push(inputValue); // Додаємо елемент до масиву, якщо його немає
    }

    showArr('.out-15', d15); // Виводимо масив
}

document.querySelector('.b-15').onclick = f15;

// Task 16

let d16 = [];
let d161 = [5, 6, 7, 8, 9];
let d162 = [23, 24, 56, 87];

function f16() {
    d16 = d16.concat(d161, d162); // Додаємо результат concat до масиву d16

    showArr('.out-16', d16);
}

document.querySelector('.b-16').onclick = f16;

// Task 17

let d17 = [];
let d171 = ['a', 'b', 'c', 'd'];
let d172 = [1, 2, 3, 4, 5];

function f17() {

    d17 = []; // Очищаємо масив d17 перед об'єднанням

    for (let i = 0; i < d171.length; i++) {
        d17.push(d171[i]); // Додаємо елементи з d171 до d17
    }

    for (let i = 0; i < d172.length; i++) {
        d17.push(d172[i]); // Додаємо елементи з d172 до d17
    }

    showArr('.out-17', d17); // Виводимо масив d17
}

document.querySelector('.b-17').onclick = f17;


// Task 18

let d18 = ['b', 'c', '45', 'e', 'z', 'y'];

function f18() {
    const inputValue = document.querySelector('.i-18').value; // Отримуємо число з input і переводимо його до числа

    const result = d18.includes(inputValue); // Перевіряємо, чи є значення в масиві

    document.querySelector('.out-18').textContent = result;
}

document.querySelector('.b-18').onclick = f18;


// Task 19

let d19 = ['Your', 'payment', 'method', 'will', 'automatically', 'be', 'charged', 'in', 'advance', 'every'];
let maxString = '';

function f19() {
    let maxString = '';

    for (let i = 0; i < d19.length; i++) {
        if (d19[i].length > maxString.length) {
            maxString = d19[i];
        }
    }
    document.querySelector('.out-19').textContent = maxString;
}

document.querySelector('.b-19').onclick = f19;

// Task 20

let d20 = [4, 5, 6, 7, 8, 9, 10];

function f20() {
    const result = d20.join(''); // Використовуємо метод join для з'єднання елементів без пропуску

    document.querySelector('.out-20').textContent = result;
}

document.querySelector('.b-20').onclick = f20;