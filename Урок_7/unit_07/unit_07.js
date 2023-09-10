// Task 1


let a1 = 8;

function t1() {

}

document.querySelector('.b-1').onclick = t1;


// Task 2.



let a2 = 8;
function t2() {

    //return
}

document.querySelector('.b-2').onclick = function () {
    document.querySelector('.out-2').textContent = t2();
    // для чого? Дивіться:
    console.log(5 + t2()); // тут виведе 13
    console.log(6 * t2()); // тут 48
    console.log(t2() * t2() * t2()); // 512
}

// Task 3.


function t3(a, b) {

}

document.querySelector('.b-3-1').onclick = function () {
    document.querySelector('.out-3-1').textContent = t3(3, 4);
    // всередину можна увести будь які числа, функція поверне їхній добуток. 
    document.querySelector('.b-3-2').onclick = function () {
        document.querySelector('.out-3-2').textContent = t3(5, 6);
    }

}

    // Task 4


    function t4(year) {
       return 2023 - year;
    }

    document.querySelector('.b-4').onclick = function () {
        document.querySelector('.out-4').textContent = t4(2007);
    }


    // Task 5


    function t5(yourName) {
        return yourName.length;
    }

    document.querySelector('.b-5').onclick = function () {
        document.querySelector('.out-5').textContent = t5('Alex');
    }



    // Task 6

    function t6(a, b) {
        return Math.floor(Math.random() * (b - a + 1) + a)
    }

    document.querySelector('.b-6').onclick = function () {
        document.querySelector('.out-6').textContent = t6(100, 107);
    }


    // Task 7

    function t7() {
        // Нам необхідно 
        // отримати такий рядок
        // rgb(33,123,255) - числа можуть бути довільні від 0 до 255
        // без пропусків, через коми 33,123,255
        // у вас є функція t6, яка вміє генерувати випадкові числа у заданому діапазоні. 
        // скористайтесь нею. Просто викличте її три рази, за зразком поданим нижче
        //return `rgb(${t6(0,255)}....допишіть самостійно
        return `rgb(${t6(0,255)},${t6(0,255)},${t6(0,255)})`;
    }

    document.querySelector('.b-7').onclick = function () {
        document.querySelector('.out-7').style.background = t7();
    }


    // Task 8


    function t8(str) {

    }

    document.querySelector('.b-8').onclick = function () {
        let s = "            Hello                ";
        console.log(s);
        console.log(t8(s));
    }


    // Task 9


    function t9(num) {

    }

    document.querySelector('.b-9').onclick = function () {
        document.querySelector('.out-9').textContent = t9(15);
    }


    // Task 10

    function t10(x, y) {

    }

    document.querySelector('.b-10').onclick = function () {
        document.querySelector('.out-10').textContent = t10(3, 9);
    }
