document.querySelector('#menu').addEventListener('click', (e)=>{
    e.preventDefault()
})
document.querySelector('.links').addEventListener('click', (e)=>{
    e.preventDefault()
})
let card1_click = document.querySelector('.card1 img')
card1_click.addEventListener('click', ()=>{
    document.querySelector('.p1').classList.toggle('opacity')
    document.querySelector('.card1 img').classList.toggle('opacity-img')
})
let card2_click = document.querySelector('.card2 img')
card2_click.addEventListener('click', ()=>{
    document.querySelector('.p2').classList.toggle('opacity')
    document.querySelector('.card2 img').classList.toggle('opacity-img')
})
let card3_click = document.querySelector('.card3 img')
card3_click.addEventListener('click', ()=>{
    document.querySelector('.p3').classList.toggle('opacity')
    document.querySelector('.card3 img').classList.toggle('opacity-img')
})

let card4_click = document.querySelector('.card4 img')
card4_click.addEventListener('click', ()=>{
    document.querySelector('.p4').classList.toggle('opacity')
    document.querySelector('.card4 img').classList.toggle('opacity-img')
})

let menu = document.querySelector('#menu')
menu.addEventListener('click', ()=>{
    document.querySelector('header').classList.toggle('remove-bg')
    document.querySelector('.nav-menu').classList.toggle('nav-menu-event')
    document.querySelector('.nav-menu a').classList.toggle('nav-menu-a-event')
    document.querySelector('.a1').classList.toggle('nav-animation')
    document.querySelector('.a2').classList.toggle('nav-animation')
    document.querySelector('.a3').classList.toggle('nav-animation')
    document.querySelector('.a4').classList.toggle('nav-animation')
    document.querySelector('.a5').classList.toggle('nav-animation')
    document.querySelector('.a6').classList.toggle('nav-animation')
})

let navMenu = document.querySelector('.nav-menu')
navMenu.addEventListener('click', ()=>{
    document.querySelector('.nav-menu').classList.remove('nav-menu-event')
})



let card1_enter = document.querySelector('.card1 img')
card1_enter.addEventListener('mouseenter', ()=>{
    document.querySelector('.p1').classList.add('opacity2')
    document.querySelector('.card1 img').classList.add('opacity-img2')
})

let card1_out = document.querySelector('.card1 img')
card1_out.addEventListener('mouseout', ()=>{
    document.querySelector('.p1').classList.remove('opacity2')
    document.querySelector('.card1 img').classList.remove('opacity-img2')
})

let card2_enter = document.querySelector('.card2 img')
card2_enter.addEventListener('mouseenter', ()=>{
    document.querySelector('.p2').classList.add('opacity2')
    document.querySelector('.card2 img').classList.add('opacity-img2')
})

let card2_out = document.querySelector('.card2 img')
card2_out.addEventListener('mouseout', ()=>{
    document.querySelector('.p2').classList.remove('opacity2')
    document.querySelector('.card2 img').classList.remove('opacity-img2')
})
let card3_enter = document.querySelector('.card3 img')
card3_enter.addEventListener('mouseenter', ()=>{
    document.querySelector('.p3').classList.add('opacity2')
    document.querySelector('.card3 img').classList.add('opacity-img2')
})

let card3_out = document.querySelector('.card3 img')
card3_out.addEventListener('mouseout', ()=>{
    document.querySelector('.p3').classList.remove('opacity2')
    document.querySelector('.card3 img').classList.remove('opacity-img2')
})

let card4_enter = document.querySelector('.card4 img')
card4_enter.addEventListener('mouseenter', ()=>{
    document.querySelector('.p4').classList.add('opacity2')
    document.querySelector('.card4 img').classList.add('opacity-img2')
})

let card4_out = document.querySelector('.card4 img')
card4_out.addEventListener('mouseout', ()=>{
    document.querySelector('.p4').classList.remove('opacity2')
    document.querySelector('.card4 img').classList.remove('opacity-img2')
})

