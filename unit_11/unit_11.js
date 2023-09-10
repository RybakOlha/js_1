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
    /**
     * ваш код 
     */
    showArr('.out-1', d1);
}

document.querySelector('.b-1').onclick = f1;

// Task 2

function f2() {

    showArr('.out-2', d1);
}

document.querySelector('.b-2').onclick = f2;

// Task 3

function f3() {

    showArr('.out-3', d1);
}

document.querySelector('.b-3').onclick = f3;

// Task 4


function f4() {

    showArr('.out-4', d1);
}

document.querySelector('.b-4').onclick = f4;

// Task 5

function f5() {

    showArr('.out-5', d1);
}

document.querySelector('.b-5').onclick = f5;

// Task 6

let d6 = ['test', 5, 12];

function f6() {

    showArr('.out-6', d6);
}

document.querySelector('.b-6').onclick = f6;

// Task 7

let d7 = ['china', 'india', 'brazil', 'japan', 'egypt'];

function f7() {

    showArr('.out-7', d7);
}

document.querySelector('.b-7').onclick = f7;

// Task 8

let d8 = [2, '4', 12, 67, 'hello'];

function f8() {

    showArr('.out-8', d8);
}

document.querySelector('.b-8').onclick = f8;

// Task 9

let d9 = [100, 200, 300, 400, 700, 121];

function f9() {

    showArr('.out-9', d9);
}

document.querySelector('.b-9').onclick = f9;

// Task 10

let d10 = [3, 14, 15, 92, 6];

function f10() {

    showArr('.out-10', d10);
}

document.querySelector('.b-10').onclick = f10;


// Task 11

let d11 = [2, 3, 4, 5, 6, 7];

function f11() {

}

document.querySelector('.b-11').onclick = f11;


// Task 12

let d12 = [6, 62, 60, 70, 1, 5];

function f12() {

}

document.querySelector('.b-12').onclick = f12;

// Task 13


let d13 = [6, 0, 22, 1, 4, 76];

function f13() {

    showArr('.out-13', d13);
}

document.querySelector('.b-13').onclick = f13;


// Task 14

let d14 = [];

function f14() {

    showArr('.out-14', d14);
}

document.querySelector('.b-14').onclick = f14;

// Task 15

let d15 = [0, 2, 5, -4, 6, 22, -9, -12, 8, 12, 13, 78];

function f15() {


    showArr('.out-15', d15);
}

document.querySelector('.b-15').onclick = f15;

// Task 16

let d16 = [];
let d161 = [5, 6, 7, 8, 9];
let d162 = [23, 24, 56, 87];

function f16() {

    showArr('.out-16', d16);
}

document.querySelector('.b-16').onclick = f16;

// Task 17

let d17 = [];
let d171 = ['a', 'b', 'c', 'd'];
let d172 = [1, 2, 3, 4, 5];

function f17() {

    showArr('.out-17', d17);
}

document.querySelector('.b-17').onclick = f17;


// Task 18

let d18 = ['b', 'c', '45', 'e', 'z', 'y'];

function f18() {

}

document.querySelector('.b-18').onclick = f18;


// Task 19

let d19 = ['Your', 'payment', 'method', 'will', 'automatically', 'be', 'charged', 'in', 'advance', 'every'];
let maxString = '';

function f19() {

}

document.querySelector('.b-19').onclick = f19;

// Task 20

let d20 = [4, 5, 6, 7, 8, 9, 10];

function f20() {

}

document.querySelector('.b-20').onclick = f20;