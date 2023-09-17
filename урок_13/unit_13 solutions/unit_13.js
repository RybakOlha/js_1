// Task 1
// При натисканні на b-1 виконуєте функцію f1. Функція повинна вивести в out-1 збережене значення під ключeм two
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
// Вивід пишемо "ручками"


function f2() {
    let a2 = {
        "one": "hello",
        "two": "mahai",
        "five": "hi"
    };
     
    return a2["five"];
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
     return a3["odd"];
}

document.querySelector('.b-3').onclick = () => {
    document.querySelector('.out-3').innerHTML = f3();
}


// Task 4
// Давайте напишемо функцію f4, яка виводитиме масив a4 в out-4 при натисканні кнопки b-4. Формат виведення - ключ пропуск значення + '<br>'. Функція повинна повертати рядок у вказаному форматі виводу.
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
    let out = '';
    for(let key in a4){
        out += key + ' ' + a4[key] + '<br>';
    }

     return out;
}

document.querySelector('.b-4').onclick = () => {
    document.querySelector('.out-4').innerHTML = f4();
}

// Task 5
// Функція f4 жорстко прив'язана масиву a4. Це не зручно. Давайте напишемо функцію f5, яка приймає
//масив як параметр і виводить його у форматі вказаному у функції у вказаний блок (як другий параметр).


//function f5(arr, block) {
    function f5(arr, block) {
        let out = '';
    
        for (const key in arr) {
            if (arr.hasOwnProperty(key)) {
                out += `${key} : ${arr[key]} <br>`;
            }
        }
    
        document.querySelector(block).innerHTML = out;
    
        return out;
    }
    
    document.querySelector('.b-5').onclick = () => {
        let a5 = {
            "one": 1,
            "two": 2
        };
        f5(a5, '.out-5'); // Виведе у вказаний блок за селектором '.out-5'
    }

// Task 6
 let a6 = {
    "b": 17,
    "e": 22
};

function f6() {
    const keyInput = document.querySelector('.i-61').value;
    const valueInput = document.querySelector('.i-62').value;

    // Додати отримані ключ та значення до масиву a6
    a6[keyInput] = valueInput; // Перетворимо значення в число

    // Вивести оновлений масив a6 в out-6 за допомогою функції f5
    f5(a6, '.out-6');
}

document.querySelector('.b-6').onclick = f6;

// Task 7
 let a7 = {
    "b": 17,
    "e": 22
};

function f7() {
    const keyInput = document.querySelector('.i-7').value;
    const result = a7.hasOwnProperty(keyInput) ? 1 : 0;
    document.querySelector('.out-7').textContent = result;
}

document.querySelector('.b-7').onclick = f7;

// Task 8
let a8 = {
    "b": 17,
    "e": 22
};

function f8() {
    const keyInput = document.querySelector('.i-8').value;
    const result = a8.hasOwnProperty(keyInput) ? a8[keyInput] : 0;
    document.querySelector('.out-8').textContent = result;
}

document.querySelector('.b-8').onclick = f8;

// Task 9
let a9 = {
    "b": 17,
    "e": 22,
    "j": 17,
    "k": 22,
    "d": 54
};

function f9() {
    const targetValue = document.querySelector('.i-9').value;
    let outputString = "";

    for (const key in a9) {
        if (a9.hasOwnProperty(key) && a9[key] == targetValue) {
            outputString += key + " ";
        }
    }

    document.querySelector('.out-9').textContent = outputString.trim();
}

document.querySelector('.b-9').onclick = f9;

// Task 10
// Давайте напишемо корисну функцію f10, яка перевіряє чи є значення в асоціативному масиві. Фукнція повинна повертати true, якщо є, і false, якщо ні. Масив і значення передавати функції як параметри.

function f10(arr, val) {
    for (const key in arr) {
        if (arr.hasOwnProperty(key) && arr[key] === val) {
            return true;
        }
    }
    return false;
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
    const keyInput = document.querySelector('.i-11').value;

    if (a11.hasOwnProperty(keyInput)) {
        delete a11[keyInput];
        f5(a11, '.out-11');
    }
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
    const valueInput = document.querySelector('.i-12').value;

    for (const key in a12) {
        if (a12[key] == valueInput) {
            delete a12[key];
        }
    }

    f5(a12, '.out-12');
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
    let sum = 0;

    for (const key in a13) {
        if (typeof a13[key] === 'number') {
            sum += a13[key];
        }
    }

    document.querySelector('.out-13').textContent = sum;
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
    let output = '';

    for (const key in a14) {
        if (Array.isArray(a14[key]) && a14[key].length > 0) {
            output += a14[key][0] + ' ';
        }
    }

    document.querySelector('.out-14').textContent = output.trim();
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
    let output = '';

    for (const key in a15) {
        
            output += a15[key].join(' ') + ' ';
        
    }

    document.querySelector('.out-15').textContent = output.trim();
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
    let output = '';

    for (const key in a16) {
        if (a16[key].hasOwnProperty("name")) {
            output += a16[key]["name"] + ' ';
        }
    }

    document.querySelector('.out-16').textContent = output.trim();
}

document.querySelector('.b-16').onclick = f16;


// Task 17
// При натисканні b-17 виконується функція f17. Функція повинна в out-17 виводити елементи name вкладених масивів в a17 для якого age > 30. Виведення через пропуск. f16. Функція повинна в out-16 виводити елементи вкладених name
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
    let output = '';

    for (const key in a17) {
        if (a17[key].hasOwnProperty("name") && a17[key]["age"] > 30) {
            output += a17[key]["name"] + ' ';
        }
    }

    document.querySelector('.out-17').textContent = output.trim();
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
    const branchInput = document.querySelector('.i-18').value;
    let output = '';

    if (a18.hasOwnProperty(branchInput)) {
        output = a18[branchInput].join(' ');
    }

    document.querySelector('.out-18').textContent = output;
}

document.querySelector('.b-18').onclick = f18;

// Task 19
// При натисканні b-19 виконуєте функцію f19. Функція повинна в out-19 вивести колір гілки станції, яку користувач ввів в i-19. Користувач може вводити текст як з великої, так і маленької літери. Якщо гілка не знайдена – виводьте порожній рядок.
// Користувач ввів Lisova – висновок red, ввів Obolon – висновок blue.

let a19 = {
    "red": ['Akademmistechko', 'Nyvky', 'Universytet', 'Lisova'],
    "blue": ['Minska', 'Obolon', 'Pochaina', 'Holosiivska'],
    "green": ['Syrets', 'Zoloti Vorota', 'Klovska', 'Vidubichi']
}

function f19() {
    const stationInput = document.querySelector('.i-19').value
    stationInput = toLowerCase(stationInput);
    stationInput = capitalizeFirstLetter(stationInput);
    
    let output = '';

    for (const branch in a19) {
        if (a19[branch].includes(stationInput)) {
            output = branch;
            break;
        }
    }

    document.querySelector('.out-19').textContent = output;
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
    let output = '';

    for (const branch in a20) {
        
            const stations = a20[branch];

            for (const station of stations) {
                if (station[1] === 2) {
                    output += station[0] + ' ';
                }
            }
        
    }

    document.querySelector('.out-20').textContent = output.trim();
}


document.querySelector('.b-20').onclick = f20
