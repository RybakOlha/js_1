let input = document.querySelector('#one');
let out = document.querySelector('span');

function f1(){
    let password = input.value;
    if (password.length >= 8){
        out.innerHTML = 'Ok'
    }
    else{
        out.innerHTML = 'No'
    }
    }
    

document.querySelector('button').onclick = f1;







































//
document.querySelector('button').onclick = () => {
     console.log(document.querySelector('#one').value);
     // style
     document.querySelector('button').style.backgroundColor = document.querySelector('#one').value
 }

// document.querySelector('#one').oninput = () => {
//     console.log(document.querySelector('#one').value);
//     document.querySelector('span').innerHTML = document.querySelector('#one').value
// }

//document.querySelector('#btn-1').onclick = () => {
//    console.log(document.querySelector('#i2').value);
//    let myCheckBox = document.querySelector('#i2');
//    console.log(myCheckBox.checked);
//    if (myCheckBox.checked) {
//        console.log('Натиснутий');
//    }
//    else {
//        console.log('Не натиснутий');
//    }
//}

//document.querySelector('#btn-2').onclick = (event) => {
//    event.preventDefault();
//    // let text = document.querySelector('#two');
//    // console.log(text.value);
//    // text.value = 'one';
//    let form = document.querySelector('form');
//    console.log(form);
//    console.log(form.elements.two.value);
//    console.log(form.elements.three.value);
//}