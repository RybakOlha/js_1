//  Task 1


function f1() {

}

document.querySelector('.b-1').onclick = f1;

//  Task 2

function f2() {
    let out = document.querySelector('.out-2');
    out.classList.add('bg-orange');
}

document.querySelector('.b-2').onclick = f2;


//  Task 3


function f3() {

}

document.querySelector('.b-3').onclick = f3;

//  Task 4


function f4() {

}

document.querySelector('.b-4').onclick = f4;


//  Task 5

function f5() {

}

document.querySelector('.b-5').onclick = f5;


//  Task 6

function f6() {
    let paragr = document.querySelectorAll('.p-6');
    let count = paragr.length;
    let out = document.querySelector('.out-6');
    out.textContent = count;

}

document.querySelector('.b-6').onclick = f6;


//  Task 7

let blocks7 = document.querySelectorAll('.out-7');

function f7() {
    //всередині циклу blocks7[i].classList....
}

document.querySelector('.b-7').onclick = f7;


//  Task 8

let blocks8 = document.querySelectorAll('.out-8');

function f8() {
    for(let i = 0; i < blocks8.length; i++){
        blocks8[i].classList.toggle('bg-orange');  
}
}

document.querySelector('.b-8').onclick = f8;


//  Task 9
function f9() {
    //this.classList...  // весь розвʼязок - один рядок
}

let div9 = document.querySelectorAll('.out-9');

for (let i = 0; i < div9.length; i++) {
    div9[i].onclick = f9;
}


//  Task 10

//let div10 = отримуємо всі out-10

function f10() {

}

// цикл, подібний до циклу у попередньому завданні



//  Task 11

function f11() {

}

document.querySelector('.b-11').onclick = f11;

//  Task 12

function f12() {

}

document.querySelector('.b-12').onclick = f12;

//  Task 13

function f13() {

}

function f13_1() {
    document.querySelector('.out-13-1').innerHTML += this.innerHTML;
}


document.querySelector('.b-13').onclick = f13;

//  Task 14


function f14() {

}

document.querySelector('.b-14').onclick = f14;

//  Task 15

function f15() {

}

document.querySelector('.b-15').onclick = f15;

//  Task 16

function f16() {

}

document.querySelector('.b-16').onclick = f16;

//  Task 17

function f17() {

}

document.querySelector('.b-17').onclick = f17;

//  Task 18

function f18() {

}

document.querySelector('.b-18').onclick = f18;

//  Task 19
const paragr19 = document.querySelectorAll('.p-19');
function f19() {
    let value = '';
    paragr19.forEach(function(element){
        value += element.getAttribute('data-b') + ' ';
    })
    let out = document.querySelector('.out-19');
    out.textContent = value;


}

document.querySelector('.b-19').onclick = f19;

//  Task 20

function f20() {

}

document.querySelector('.b-20').onclick = f20;