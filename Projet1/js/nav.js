let menu=document.querySelector('#menu-icone');
let navbar=document.querySelector('.navbar');

menu.onclick = () =>{
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('open');
}