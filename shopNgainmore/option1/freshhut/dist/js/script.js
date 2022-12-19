// Preloader Start Here
window.addEventListener('load', (event) => {
    let preloader = document.querySelector('.preloader')
    setTimeout(() => {
        preloader.classList.add('transition-all')
        preloader.classList.add('duration-300')
        preloader.classList.add('invisible')
        preloader.classList.add('!opacity-0')
    }, 500)
});



// Preloader End Here 

// Mobile Menu Start Here
let menuArea = document.querySelector('.menu-area')
let menuContent = document.querySelector('.menu-content')
let menuClose = document.querySelector('#menu-close')
let menuOpen = document.querySelectorAll('.menu-open')

function openMenu(){
    menuArea.classList.add('!opacity-100')
    menuArea.classList.add('!visible')
    menuContent.classList.add('!left-0')
}

function closeMenu(){
    menuArea.classList.remove('!opacity-100')
    menuArea.classList.remove('!visible')
    menuContent.classList.remove('!left-0')
}


for (open of menuOpen){
    open.addEventListener('click', openMenu)
}

menuClose.addEventListener('click', closeMenu)

// Mobile Menu End Here
