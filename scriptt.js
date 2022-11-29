'use strict'

const burgerMenu = document.querySelector('.burger_menu');

if(burgerMenu){
 const headerMenu = document.querySelector('.header_menu');
 
 burgerMenu.addEventListener('click', function(e){

 document.body.classList.toggle('_lock')

 headerMenu.classList.toggle('_active');

 burgerMenu.classList.toggle('_active');
 })
}

