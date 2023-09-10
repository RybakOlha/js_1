// Task 1
//Створіть масив ar1, що містить рядки, числа, булеві значення. Виведіть його в .out-1. Вивід - натискання кнопки b-1.

// let ar1 = // змінну оголошуємо тут!!!!
let out1 = document.querySelector('.out-1');
function f1() {
   //ваш_елемент.innerHTML = ar1; 
}

document.querySelector('.b-1').onclick = f1;

// Task 2
//Створіть масив ar2, що містить рядки, числа, булеві значення. Виведіть його до div.out-2. Використовуйте шаблон виведення з коду JS. Вивід - натискання кнопки b-2.

let ar2 = ['Olha', 78, true];
let out = document.querySelector('.out-2');

function f2() {
   let val2 = '';
   for(let i = 0; i < ar2.length; i++){
      val2 += ar2[i] + ' ';
   }
   out.innerHTML = val2;
}

document.querySelector('.b-2').onclick = f2;

// Task 3
//Створіть масив ar3, заповніть його будь-якими значеннями. Виведіть довжину масиву.



function f3() {
    
}

document.querySelector('.b-3').onclick = f3;

// Task 4
//Створіть масив ar4. Виведіть нульовий, третій, восьмий елемент масиву в out-4 через пропуск.



function f4() {
    
}

document.querySelector('.b-4').onclick = f4;

// Task 5
//Створіть масив ar5 довжина якого більша за 5. Виведіть суму нульового, другого та третього елементів масиву (нуль, другий - і третій це індекси 0, 2, 3)



function f5() {
    
}

document.querySelector('.b-5').onclick = f5;

// Task 6
//Створіть масив ar6, який містить ваше ім'я, знак зодіаку, день народження та місяць народження. Виведіть масив на сторінку div-6. Розділювач - пробіл.



function f6() {
    
}

document.querySelector('.b-6').onclick = f6;

// Task 7
// Додайте до масиву ar7 значення 'vietnam' з індексом 7 , 'turkey' з індексом 6, 'italy' з індексом 5. Додавання елементів зробіть у f7. Виведіть масив на сторінку .out-7. Розділювач - пробіл. Звертаю вашу увагу! Це програмування. Тому - ніяких великих літер тощо!!!!

let ar7 = ['china', 'india', 'brazil', 'japan', 'egypt'];
let out7 = document.querySelector('.out-7');

function f7() {
   let val = '';
   ar7[5] = 'italy';
   ar7[6] = 'turkey';
   ar7[7] = 'vietnam';
   for(let i = 0; i < ar7.length; i++){
      val += ar7[i] + ' ';
   }
   out7.innerHTML = val;
    
}

document.querySelector('.b-7').onclick = f7;

// Task 8
// Додайте до масиву ar8 третій (індекс 3) елемент рівний 3.14, 4 (індекс 4) елемент рівний 17, 6 елемент (індекс 6) рівний 5. Виведіть масив у .out-8. Розділювач – дефіс. У .out-8-1 виведіть довжину масиву ar8.



function f8() {
    
}

document.querySelector('.b-8').onclick = f8;

// Task 9
// Виведіть останній елемент масиву ar9. Виведення останнього елемента – реалізуйте за індексом. Щоб розрахувати індекс останнього елемента – використовуйте на довжину масиву.

let ar9 = [100, 200, 300, 400, 700, 121];

function f9() {
}

document.querySelector('.b-9').onclick = f9;

// Task 10
// Виведіть суму першого (індекс 1) та останнього масиву ar10 у блок out-10. Індекс останнього елемента масиву не вказуйте безпосередньо, а обчислюйте через довжину масиву.

let ar10 = [100, 200, 300, 400, 700, 121];

function f10() {
}

document.querySelector('.b-10').onclick = f10;


// Task 11
// Напишіть функцію, яка змінює місцями другий (індекс 2) та четвертий (індекс 4) елемент масиву ar11 і виводить його в out-11. Розділювач - пробіл.

let ar11 = [2, 3, 4, 5, 6, 7];

function f11() {

}

document.querySelector('.b-11').onclick = f11;


// Task 12
// Напишіть функцію f12, яка змінює місцями нульовий та останній елемент масиву ar12 та виводить його в out-12. Розділювач - пробіл. Останній елемент обчислюватиме через довжину масиву.

let ar12 = ['test', 'west', 'list', 'class', 'best'];

function f12() {

}

document.querySelector('.b-12').onclick = f12;

// Task 13
// Виведіть масив ar13 в out-13 у форматі індекс пробіл значення пробіл.


let ar13 = ['test', 'west', 'list', 'class', 'best'];
let out13 = document.querySelector('.out-13');

function f13() {
   let val = '';
   for (let i = 0; i < ar13.length; i++){
      val += i + ' ' + ar13[i] + ' ';
   }
   out13.innerHTML = val;
}

document.querySelector('.b-13').onclick = f13;


// Task 14
// Використовуючи цикл, виведіть на сторінку масив ar14 у зворотному порядку. Розділювач - пробіл.

let ar14 = [1, 2, 3, 'hello', 66];

function f14() {

}

document.querySelector('.b-14').onclick = f14;

// Task 15
// Використовуючи цикл, виведіть на сторінку елементи масиву ar15, які більше нуля. Розділювач - пробіл.

let ar15 = [0, 2, 5, -4, 6, 22, -9, -12, 8, 12, 13, 78];

function f15() {

}

document.querySelector('.b-15').onclick = f15;

// Task 16
// Виконайте перебір масиву ar16. Парні елементи додайте масив ar16_even, непарні в ar16_odd. Додавання до масиву - за індексом, а не +=!!!!!. Протестуйте завдання повторного запуску! Виведіть ar16_odd у div.out-16-odd, а ar16_even у div.out-16-even. Розділювач - пробіл.

let ar16 = [0, 2, 5, -4, 6, 22, -9, -12, 8, 12, 13, 78];
let ar16_odd = [];
let ar16_even = [];

function f16() {

}

document.querySelector('.b-16').onclick = f16;

// Task 17
// Використовуючи цикл, виведіть у .out-17 кількість елементів ar17, значення яких більше 3. Для розрахунку використовуйте цикл і змінну лічильник.

let ar17 = [3, 0, 2, 6, 0, 1, 3, 1, 9, 0, 2, 0];

function f17() {

}

document.querySelector('.b-17').onclick = f17;


// Task 18
// Використовуючи цикл, виведіть в .out-18 максимальний елемент масиву ar18.

let ar18 = [15, 24, 13, 78, 21, 4, 45, 67];

function f18() {

}

document.querySelector('.b-18').onclick = f18;


// Task 19
// Виведіть у .out-19 індекс мінімального елемента в масиві ar19

let ar19 = [15, 424, 313, 78, 241, 4, 45, 67];

function f19() {

}

document.querySelector('.b-19').onclick = f19;

// Task 20
// Виведіть у .out-20 суму елементів у масиві ar20.

let ar20 = [4, 5, 6, 7, 8, 9, 10];

function f20() {

}

document.querySelector('.b-20').onclick = f20;