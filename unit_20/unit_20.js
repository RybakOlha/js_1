
// Task 1 ============================================
/*  Даний input .i-1. Напишіть функцію t1, яка виводить на сторінку true якщо введено символ і false якщо цифра. Для визначення – використовуйте keyCode. */


function t1(event) {

}

document.querySelector('.i-1').onkeypress = t1;



// Task 2 ============================================
/*  Дано input .i-2 та блок .block-2. Додайте подію на input, при натисканні клавіш стрілка вправо і вліво стрілка збільшувати/зменшувати ширину блоку. Клавіші стрілка вгору і вниз – збільшувати/зменшувати висоту блоку. Одне натискання клавіші - 1px. */

let h = 75;
let w = 75;

function t2(event) {
    

}

document.querySelector('.i-2').onkeydown = t2;

// Task 3 ============================================
/*  Проєкт.
1. Вивчіть верстку клавіатури.
2. При введенні символу в i-3 (латиниця, нижній регістр) - клавіші з таким символом призначте клас .active. Це пофарбує клавішу помаранчевим фоном. Перед пошуком та присвоєнням active, за допомогою циклу видаліть клас active у всіх клавіш із класом keyboard.
3. Якщо все зроблено правильно, то при введенні наступного символу попередня клавіша втратить помаранчевий фон, а нова введена зафарбується.
4. Самостійно додайте всі цифри та другий ряд клавіш від a до l
5. Додайте самостійно клавішу alt, enter.
*/

function t3(event) {
    console.log(event.key);

}

document.querySelector('.i-3').onkeydown = t3;

