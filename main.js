let navbar=document.querySelector('.navbar');

document.querySelector('#menu-btn').onclick=()=>{
    navbar.classList.toggle('active');
    carIten.classList.remove('active');
    searchForm.classList.remove('active');
}

let carIten=document.querySelector('.cart-items-container');

document.querySelector('#cart-btn').onclick=()=>{
    carIten.classList.toggle('active');
    navbar.classList.remove('active');
    searchForm.classList.remove('active');
}

let searchForm=document.querySelector('.search-form');

document.querySelector('#search-btn').onclick=()=>{
    searchForm.classList.toggle('active');
    navbar.classList.remove('active');
    carIten.classList.remove('active');
}

window.onscroll=()=>{
    navbar.classList.remove('active');
    carIten.classList.remove('active');
    searchForm.classList.remove('active');
}

