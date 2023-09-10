const one = document.querySelector('.one');


//one.style.width = '150px';
//one.style.paddingBottom = '40px';

//console.log(one.style);

















//one.classList.add('two', 'three');
//one.classList.remove('two');











//const toggle = document.querySelector('.toggle');

//toggle.onclick = function () {
//    this.classList.toggle('three');
//}













//// атрибути data
//console.log(one.getAttribute('data'));
//console.log(document.querySelectorAll('link')[1].getAttribute('href'));

//one.setAttribute('data-num', 6);














//let gas = document.querySelectorAll('.gas');
//for (let i = 0; i < gas.length; i++) {
//    gas[i].onclick = function () {
//        let gallons = document.querySelector('.gallons').value;
//        let amount = this.getAttribute('data');
//        console.log(gallons * amount);
//    }
//}












//let a = document.createElement('div');
//a.innerHTML = 'Hello!';
//a.classList.add('one');
//a.onclick = function () {
//    alert('hello');
//}

//document.querySelector('.test').appendChild(a);



//console.log(a);












const base = document.querySelector('.base');

//append
let div = document.createElement('div');
div.textContent = 'append';
div.classList.add('append');

base.append(div);

////prepand
let div1 = document.createElement('div');
div1.textContent = 'prepend';
div1.classList.add('prepend');

base.prepend(div1);

////before
let div2 = document.createElement('div');
div2.textContent = 'before';
div2.classList.add('before');

base.before(div2);

////after
let div3 = document.createElement('div');
div3.textContent = 'after';
div3.classList.add('after');

base.after(div3);

////replaceWith
let div4 = document.createElement('div');
div4.textContent = 'replaceWith';
div4.classList.add('replaceWith');

//base.replaceWith(div4);

div.remove();
div2.remove();





