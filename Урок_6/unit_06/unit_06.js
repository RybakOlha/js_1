//  Task 1


function t1() {

}

document.querySelector('.b-1').onclick = t1;

//  Task 2

function t2() {
    let out = document.querySelector('.out-2');
    out.innerHTML = '';
    for (let i = 1; i <= 3; i++){
        out.innerHTML += i + '<br>';
        for(let k = 1; k <= 3; k++){
            out.innerHTML += '*_';
        }
        out.innerHTML += '<br>';
    }

}

document.querySelector('.b-2').onclick = t2;


//  Task 3

function t3() {

}

document.querySelector('.b-3').onclick = t3;

//  Task 4

function t4() {

}

document.querySelector('.b-4').onclick = t4;


//  Task 5

function t5() {
    let out = document.querySelector('.out-5');
    out.innerHTML = '';
    for (let i = 1; i <= 3; i++){
        let num = '';
        for(let k = 0; k < 6; k++){
            if(k % 2 === 0){
                num += '1';
            }
            else{
                num += '0';
            }            
        }
        out.innerHTML += num + '<br>';
    }
}

document.querySelector('.b-5').onclick = t5;


//  Task 6


function t6() {

}

document.querySelector('.b-6').onclick = t6;


//  Task 7

function t7() {
    let out = document.querySelector('.out-7');
    out.innerHTML = '';
    for (let i = 1; i <= 4; i++){
        let line = '';
        for(let k = 1; k <= i; k++){
            line += '*';
        }
        out.innerHTML += line + '<br>';
    }
}

document.querySelector('.b-7').onclick = t7;


//  Task 8
// Per aspera ad astra

// *****
// ****
// ***
// **
// *

function t8() {
    
}

document.querySelector('.b-8').onclick = t8;


//  Task 9


function t9() {

}

document.querySelector('.b-9').onclick = t9;


//  Task 10

function t10() {
    let out = document.querySelector('.out-10');
    out.innerHTML = '';
    for (let i = 0; i < 5; i++){
        let len = '';
        for(let k = 1; k <= 10;  k++){
            let num = i * 10 + k;
            if (num < 10){
                len += '0' + num + '_';
            }
            else{
                len += num + '_';
            }
        }
        out.innerHTML += len + '<br>';
    }

}

document.querySelector('.b-10').onclick = t10;