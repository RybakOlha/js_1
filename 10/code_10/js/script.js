//let name = 'Olha';
//let zodiak = 'oven';
//let date = 3;

let mas = ['Olha', 'oven', 3];

console.log(mas);

let out = document.querySelector('.out');
out.textContent = mas;
let temp = mas[0];
mas[0] = mas[mas.length - 1];
mas[mas.length - 1] = temp;

//let val = '';
//for(let i = 0; i < mas.length; i++){
//    val += mas[i] + ' ';
//}
//out.innerHTML = val;
let mas1 = [3, 567, 876, 345, 876, 754, 3];
//let max = mas1[0];

//for(let i = 1; i < mas.length; i++){
//    if (mas1[i] > max){
//        max = mas1[i];
//    }
//}
//out.innerHTML = max;

let mult = 1;
for(let i = 0; i < mas.length; i++){
    mult *= mas1[i];
}
out.innerHTML = mult;