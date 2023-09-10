let out = document.querySelector('.out');
//console.log(out);

//for(let t = 0; t <= 5; t++){

//    for(let r = 0; r <= 7; r++){
//        console.log(r);
//    }
//    console.log('*');
//}




// for (let i = 0; i < 5; i++) {
    
//     for (let k = 0; k < 10; k++) {
       
//         out.innerHTML += '*';
//     }
//     out.innerHTML += '<br>';
// }

for (let i = 1; i < 10; i++) {
    for (let k = 1; k < 10; k++) {
        //out.innerHTML += i + ' * ' + k + ' = ' + i * k + '<br>';
        out.innerHTML += `${i}*${k}=${k * i}<br>`;
    }
    out.innerHTML += '<hr>';
}