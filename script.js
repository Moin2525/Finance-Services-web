burger= document.querySelector('.burger')
Header=document.getElementById('#header')
ul=document.querySelector('.ul')

burger.addEventListener('click',()=>{
    ul.classList.toggle('ul');
    header.classList.toggle('header');
})