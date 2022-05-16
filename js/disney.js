
/* BACKGROUND PARALLAX Tipo Disney, QUEPD */

let estrellas = document.getElementById('estrellas');
let luna = document.getElementById('luna');
let nubes = document.getElementById('nubes');
let titulo = document.getElementById('titulo');
let btn = document.getElementById('btn');
let front = document.getElementById('front');


window.addEventListener('scroll', function(){
    let value = window.scrollY;
    estrellas.style.left = value * 0.30 + 'px';
    luna.style.top = value * 0.8 + 'px';
    nubes.style.top = value * 0.3 + 'px';

}) 