// Task 1
// При натисканні на b-1 виконуєте функцію f1. Функція повинна вивести в out-1 значення 55 масиву a1. Поверніть це значення.

function f1() {
    let a1 = [12, [45, 87], [55, 13]];
    document.querySelector('.out-1').innerHTML = a1[2][0];
    return a1[2][0];
}

document.querySelector('.b-1').onclick = f1;


// Task 2
// При натисканні b-2 виконуєте функцію f2. Функція повинна вивести в out-2 значення hi масиву a2. Поверніть це значення.


function f2() {
    let a2 = [[12, 'hi'], [45, 87], [55, 13]];

    // return
}

document.querySelector('.b-2').onclick = f2;


// Task 3
// При натисканні на b-3 виконуєте функцію f3. Функція має вивести в out-3 значення my з масиву a3. Поверніть це значення.


function f3() {
    let a3 = [[1, 2, 3], [3, 4, 5], [6, [7, 'my']]];

    // return
}

document.querySelector('.b-3').onclick = f3;


// Task 4
// При натисканні b-4 виконуєте функцію f4. Функція повинна вивести out-4 значення go з масиву a4. Поверніть це значення.


function f4() {
    let a4 = [[1, 2, 3], 'go', [3, 4, 5], [6, [7, 'my']]];

    // return
}

document.querySelector('.b-4').onclick = f4;

// Task 5
// При натисканні на b-5 виконуєте функцію f5. Функція повинна вивести на out-5 парні значення з масиву a5. Для перебору використовуємо цикл.


function f5() {
    let out = '';
    let a5 = [[1, 2], [3, 4], [5, 6], [21, 34], [44, 56]];
    for (let i = 0; i < a5.length; i++) {
        if (a5[i][0] % 2 == 0) out += a5[i][0] + ' ';
        if (a5[i][1] % 2 == 0) out += a5[i][1] + ' ';
    }
    document.querySelector('.out-5').innerHTML = out;
}

document.querySelector('.b-5').onclick = f5;


// Task 6
// При натисканні b-6 виконуєте функцію f6. Функція повинна вивести в out-6 непарні значення масиву a6. Для перебору використовуємо цикл. Робимо за образом попереднього завдання.

function f6() {
    let out = '';
    let a6 = [[1, 2], [3, 4], [5, 6], [21, 34], [44, 56]];

}

document.querySelector('.b-6').onclick = f6;

// Task 7
// При натисканні b-5 Під час натискання b-7 виконуйте функцію f7. Функція повинна вивести в out-7 парні значення масиву a7. Як бачите, вкладені масиви мають різну довжину, отже, попередній варіант не працює. Використовуємо цикл. Висновок - через пропуск. функцію f5. Функція повинна вивести на out-5 парні значення з масиву a5. Під час натискання b-7 виконуєте функцію f7. Функція повинна вивести в out-7 парні значення масиву a7. Як бачите, вкладені масиви мають різну довжину, отже, попередній варіант не працює. Використовуємо цикл. Висновок - через пропуск. перебору використовуємо цикл.

function f7() {
    let out = '';
    let a7 = [
        [1, 2, 3, 9],
        [3, 4, 7],
        [5, 6, 8, 32],
        [21, 34, 43],
        [44, 56]
    ];
    for (let i = 0; i < a7.length; i++) {
        for (let k = 0; k < a7[i].length; k++) {
            if (a7[i][k] % 2 == 0) out += a7[i][k] + ' ';
        }
    }
    document.querySelector('.out-7').innerHTML = out;

}

document.querySelector('.b-7').onclick = f7;

// Task 8
// Під час натискання b-8 виконуєте функцію f8. Функція повинна вивести в out-8 непарні значення масиву a8. Як бачите, вкладені масиви мають різну довжину, отже, попередній варіант не працює. Використовуємо цикл. Висновок - через пропуск.

function f8() {
    let out = '';
    let a8 = [
        [1, 2, 3, 9],
        [3, 4, 7],
        [5, 6, 8, 32],
        [21, 34, 43],
        [44, 56]
    ];


}

document.querySelector('.b-8').onclick = f8;

// Task 9
// Під час натискання b-9 виконуйте функцію f9. Функція повинна вивести в out-9 значення масиву a9, які більше нуля. Використовуємо цикл. Висновок - через пропуск.

function f9() {
    let out = '';
    let a9 = [
        [-2, 7, -3],
        [3, 4, -7],
        [-5, 6, -8, 32],
        [21, -34, -43],
        [44, -56]
    ];


}

document.querySelector('.b-9').onclick = f9;

// Task 10
// Під час натискання b-10 виконуєте функцію f10. Функція повинна вивести в out-10 значення масиву a10, які є рядком. Використовуємо цикл. Висновок - через пропуск.

function f10() {
    let out = '';
    let a10 = [
        [-2, '7', -3],
        [3, 4, -7],
        [-5, 6, -8, 32, 'a'],
        ['st', 21, -34, -43],
        [44, -56, 'task']
    ];
}

document.querySelector('.b-10').onclick = f10;


// Task 11
// При натисканні b-11 виконуєте функцію f11. Функція повинна вивести в out-11 значення масиву a11, причому кожен вкладений масив повинен йти у зворотному порядку. Виведення через пропуск. Тобто. ви повинні отримати в out-10 рядок виду 6 5 4 8 7 13 12 11 10 9. Розв'язуємо задачу двома циклами, без reverse.

let a11 = [
    [4, 5, 6],
    [7, 8],
    [9, 10, 11, 12, 13]
];

function f11() {
    let out = '';
}

document.querySelector('.b-11').onclick = f11;

// Task 12
// Даний масив a12 який моделює шахівницю. Використовуючи цикл, виведіть в out-12 одиниці з цього масиву. Усі дії функції f12. Функція запускається під час натискання на b12. Виведення через пропуск.

function f12() {
    let a12 = [
        [0,1,0,1,0,1,0,1],
        [1,0,1,0,1,0,1,0],
        [0,1,0,1,0,1,0,1],
        [1,0,1,0,1,0,1,0],
        [0,1,0,1,0,1,0,1],
        [1,0,1,0,1,0,1,0],
        [0,1,0,1,0,1,0,1],
        [1,0,1,0,1,0,1,0],
    ];
}

document.querySelector('.b-12').onclick = f12;

// Task 13
// При натисканні b-13 виконуєте функцію f13. Функція повинна привласнити змінної a13 масив емулюючий шахівницю. Причому масив має створюватися за допомогою циклів. Для перевірки – виведіть масив у консоль.

let a13 = [];

function f13() {

}

document.querySelector('.b-13').onclick = f13;

// Task 14
// При натисканні b-14 виконуєте функцію f14. Функція повинна вивести out-14 довжини вкладених в a14 масивів. Через пропуск.


let a14 = [
    [],
    [1,0],
    [1,0,0,0],
    [3,4,5,6,7,8],
    [1,2]
];

function f14() {

}

document.querySelector('.b-14').onclick = f14;

// Task 15
// При натисканні на b-15 виконуєте функцію f15. Функція повинна вивести в out-15 довжину найбільшого вкладеного масиву a15.
// очікуємо  6

let a15 = [
    [],
    [1,0],
    [1,0,0,0],
    [3,4,5,6,7,8],
    [1,2]
];

function f15() {

}

document.querySelector('.b-15').onclick = f15;

// Task 16
// Впишіть в змінну масив a16, який відповідає всім умовам наведеним нижче ( всі console.log повинні дати true;
// Відповідь у цій задачі прописанa відразу. Тобто ви руками просто пишіть масив такий, щоб умови виконувалися.

let a16 = [
    [0,7,0,6],
    0,
    0,
    8
];

console.group('Task 16 ================');
console.log(a16[3] == 8);
console.log(a16[0][1] == 7);
console.log(a16[0][3] == 6);

console.groupEnd();


// Task 17
// Впишіть в змінну масив a17, який відповідає всім умовам наведеним нижче ( всі console.log повинні дати true;
//  Тобто ви руками просто пишіть масив такий, щоб умови виконувалися.

let a17 = [

];

console.group('Task 17 ================');
// console.log(a17[3][2] == 8);
// console.log(a17[1][1] == 7);
// console.log(a17[0][2] == 6);

console.groupEnd();

// Task 18
// Впишіть в змінну масив a18, який відповідає всім умовам наведеним нижче ( всі console.log повинні дати true;
//  Тобто ви руками просто пишіть масив такий, щоб умови виконувалися.

let a18 = [

];

console.group('Task 18 ================');
// console.log(a18[0] == 3);
// console.log(a18[4][0] == 8);
// console.log(a18[2][1] == 12);

console.groupEnd();

// Task 19
// Впишіть в змінну масив a19, який відповідає всім умовам наведеним нижче (всі console.log повинні дати true)
//  Тобто ви руками просто пишіть масив такий, щоб умови виконувалися.

let a19 = [

];

console.group('Task 19 ================');
// console.log(a19[0][0][1] == 3);
// console.log(a19[1][0][2] == 8);
// console.log(a19[2][1][0] == 12);

console.groupEnd();

// Task 20
// Впишіть в змінну a20 масив, який відповідає всім умовам, наведеним нижче ( всі console.log повинні дати true)
//  Тобто ви руками просто пишіть масив такий, щоб умови виконувалися.

let a20 = [

];

console.group('Task 20 ================');
// console.log(a20[1][1][1] == 9);
// console.log(a20[2][2] == 18);
// console.log(a20[3]== 12);

console.groupEnd();