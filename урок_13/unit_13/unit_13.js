// Task 1
// При натисканні на b-1 виконуєте функцію f1. Функція повинна вивести в out-1 збережене значення під ключем two
//із масиву a1. Поверніть це значення.
// Приклад

function f1() {
    let a1 = {
        "one": 15,
        "two": 16,
        "five": 20
    };
    document.querySelector('.out-1').innerHTML = a1.two;
    //return ...
}

document.querySelector('.b-1').onclick = f1;


// Task 2
// При натисканні b-2 виконуєте функцію f2. Функція повинна вивести в out-2 значення hi масиву a2. Поверніть це значення.



function f2() {
    let a2 = {
        "one": "hello",
        "two": "mahai",
        "five": "hi"
    };

    // return
}

document.querySelector('.b-2').onclick = () => {
    document.querySelector('.out-2').innerHTML = f2();
}


// Task 3
// При натисканні на b-3 виконуєте функцію f3. Функція повинна вивести в out-3 значення hi масиву a3. Поверніть результуючий рядок. Виведення - через пропуск.


function f3() {
    let a3 = {
        "one": "hello",
        "two": "mahai",
        "five": "hi",
        "test": 21,
        "odd": "hi",
        "mix": "mix"
    };
    // return
}

document.querySelector('.b-3').onclick = () => {
    document.querySelector('.out-3').innerHTML = f3();
}


// Task 4
// Давайте напишемо функцію f4, яка виводитиме масив a4 в out-4 при натисканні кнопки b-4. Формат виведення - ключ + пропуск + значення + '<br>'. Функція повинна повертати рядок у вказаному форматі виводу.
// Зверніть увагу на пропуск перед br!!!!!!!!!


let a4 = {
    "one": "hello",
    "two": "mahai",
    "five": "hi",
    "test": 21,
    "odd": "hi",
    "mix": "mix"
};
function f4() {

    // return out;
}

document.querySelector('.b-4').onclick = () => {
    document.querySelector('.out-4').innerHTML = f4();
}

// Task 5
// Функція f4 жорстко прив'язана до масиву a4. Це не зручно. Давайте напишемо функцію f5, яка приймає
//масив як параметр і виводить його у форматі вказаному у функції у вказаний блок (як другий параметр).


function f5(arr, block) {
    let out = '';
    // цикл
    // формат виведення `${key} : ${arr[key]} <br>`;
    //
    // виведення у блок block
}

// протестуємо f5

document.querySelector('.b-5').onclick = () => {
    let a5 = {
        "one": 1,
        "two": 2
    }
    f5(a5, '.out-5');
}


// Task 6
// Додайте input .i-61 та i-62. При натисканні b-6 виконуєте функцію f6. Функція повинна отримувати з i-61 ключ, а з i-62 значення і додавати відповідний елемент до масиву a6. Після цього, за допомогою функції f5 виводьте масив a6 в out-6.

let a6 = {
    "b": 17,
    "e": 22
};

function f6() {

}

document.querySelector('.b-6').onclick = f6;

// Task 7
// Додати input .i-7. Під час натискання b-7 виконуєте функцію f7. Функція повинна отримувати із i-7 ключ. Якщо
//такий ключ є в a7, то виводити 1 в out-7, якщо ні - 0.

let a7 = {
    "b": 17,
    "e": 22
};


function f7() {

}

document.querySelector('.b-7').onclick = f7;

// Task 8
// Додати input .i-8. Під час натискання b-8 виконуєте функцію f8. Функція повинна виводити значення out-8, якщо ключ введений в i-8 є в масиві, якщо ні - 0.

let a8 = {
    "b": 17,
    "e": 22
};

function f8() {

}

document.querySelector('.b-8').onclick = f8;

// Task 9
// Додати input .i-9. Під час натискання b-9 виконуйте функцію f9. Функція повинна вивести у out-9 усі ключі
//масиву a9, які містять значення, що дорівнює значенню input.i-9. Виведення через пропуск. Якщо значень -
//немає то виводити порожній рядок.

let a9 = {
    "b": 17,
    "e": 22,
    "j": 17,
    "k": 22,
    "d": 54
};

function f9() {

}

document.querySelector('.b-9').onclick = f9;

// Task 10
// Давайте напишемо корисну функцію f10, яка перевіряє чи є значення в асоціативному масиві. Фукнція повинна повертати true, якщо є, і false, якщо ні. Масив і значення передавати функції як параметри.

function f10(arr, val) {

    //return true;
    //return false;
}

document.querySelector('.b-10').onclick = () => {
    let a10 = {
        "k": 22,
        "d": 54,
        "m": 22,
    }
    document.querySelector('.out-10').innerHTML = f10(a10, 22);
};


// Task 11
// При натисканні b-11 виконуєте функцію f11. Функція повинна отримати ключ з i-11 та видалити запис із масиву
//a11 з таким ключем. Після цього вивести масив у out-11. Використовуйте функцію f5 для виведення.

let a11 = {
    "b": 17,
    "e": 22,
    "j": 17,
    "k": 22,
    "d": 54
};

function f11() {
}

document.querySelector('.b-11').onclick = f11;

// Task 12
//  При натисканні b-12 виконуєте функцію f12. Функція повинна отримати значення i-12 і видалити запис з масиву a12 з таким значенням. Після цього вивести масив у out-12. Використовуйте функцію f5 для виведення.

let a12 = {
    "b": 17,
    "e": 22,
    "j": 17,
    "k": 22,
    "d": 17,
};

function f12() {

}

document.querySelector('.b-12').onclick = f12;

// Task 13
// При натисканні b-13 виконуєте функцію f13. Функція повинна у out-13 виводити суму значень масиву a13
//(тільки числа).

let a13 = {
    'prim': 'hello',
    'one': 4,
    'testt': 'vodoley',
    'ivan': 6
};

function f13() {

}

document.querySelector('.b-13').onclick = f13;

// Task 14
// При натисканні b-14 виконуєте функцію f14. Функція повинна в out-14 виводити нульові (за індексом) елементи
//вкладених масивів в a14. Виведення через пропуск.
// Очікуємо - 1 3 6 9

let a14 = {
    'prim': [1, 2, 23],
    'one': [3, 4, 5],
    'testt': [6, 7, 8],
    'ivan': [9, 10]
};

function f14() {

}

document.querySelector('.b-14').onclick = f14;

// Task 15
// При натисканні на b-15 виконуєте функцію f15. Функція повинна out-15 виводити елементи вкладених масивів в a15. Виведення через пропуск.

// Очікуємо 1 2 23 3 5 6 7 8 9 10

let a15 = {
    'prim': [1, 2, 23],
    'one': [3, 5],
    'testt': [6, 7, 8],
    'ivan': [9, 10]
};

function f15() {

}

document.querySelector('.b-15').onclick = f15;

// Task 16
// Під час натискання b-16 виконуєте функцію f16. Функція повинна в out-16 виводити елементи вкладених name
//масивів в a16. Виведення через пропуск.

let a16 = {
    "iis8sj": {
        "name": "Ivan",
        "age": 27,
    },
    "iiss7j": {
        "name": "Petr",
        "age": 26,
    },
    "s3s8sj": {
        "name": "Serg",
        "age": 47,
    },
}

function f16() {

}

document.querySelector('.b-16').onclick = f16;


// Task 17
// При натисканні b-17 виконується функція f17. Функція повинна в out-17 виводити елементи name вкладених масивів в a17 
//для якого age > 30. Виведення через пропуск. f16. Функція повинна в out-16 виводити елементи вкладених name
//масивів в a16. Виведення через пропуск.

let a17 = {
    "iis8sj": {
        "name": "Ivan",
        "age": 27,
    },
    "iiss7j": {
        "name": "Petr",
        "age": 26,
    },
    "s3s8sj": {
        "name": "Serg",
        "age": 47,
    },
}

function f17() {

}

document.querySelector('.b-17').onclick = f17;

// Task 18
// При натисканні на b-18 виконуєте функцію f18. Функція повинна в out-18 вивести станції метро з масиву a18 тієї
//гілки, яку користувач ввів у i-18. Виведення станцій - через пропуск. Якщо гілка не знайдена виводьте
//порожній рядок.

let a18 = {
    "red": ['Akademmistechko', 'Nyvky', 'Universytet', 'Lisova'],
    "blue": ['Minska', 'Obolon', 'Pochaina', 'Holosiivska'],
    "green": ['Syrets', 'Zoloti Vorota', 'Klovska', 'Vidubichi']
}

function f18() {

}

// Task 19
// При натисканні b-19 виконуєте функцію f19. Функція повинна в out-19 вивести колір гілки станції, 
//яку користувач ввів в i-19. Користувач може вводити текст як з великої, так і маленької літери. 
//Якщо гілка не знайдена – виводьте порожній рядок.
// Користувач ввів Lisova – висновок red, ввів Obolon – висновок blue.

let a19 = {
    "red": ['Akademmistechko', 'Nyvky', 'Universytet', 'Lisova'],
    "blue": ['Minska', 'Obolon', 'Pochaina', 'Holosiivska'],
    "green": ['Syrets', 'Zoloti Vorota', 'Klovska', 'Vidubichi']
}

function f19() {

}

document.querySelector('.b-19').onclick = f19;

// Task 20
// При натисканні b-20 виконуєте функцію f20. Функція повинна в out-20 вивести назву станції які
//містять перехід в іншу гілку. Такі станції маркуються 2. Виведення через пропуск.

let a20 = {
    "red": [['Akademmistechko', 1], ['Nyvky', 0], ['Universytet', 3], ['Lisova', 1]],
    "blue": [['Minska', 1], ['Obolon', 0], ['Pochaina', 2], ['Holosiivska', 0]],
    "green": [['Syrets', 1], ['Zoloti Vorota', 2], ['Klovska', 0], ['Vidubichi', 1]],
}

function f20() {

}

document.querySelector('.b-20').onclick = f20
