/* Show Menu */
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

/* Menu Show */
if (navToggle) {
    navToggle.addEventListener('click', ()=>{
        navMenu.classList.add('show-menu')
    })
}
/* Menu Hidden */
if (navClose) {
    navClose.addEventListener('click', ()=>{
        navMenu.classList.remove('show-menu')
    })
}

/* Remove Menu Mobile */
const navLink = document.querySelectorAll('.nav_link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/* Home Swiper */
var homeSwiper = new Swiper(".home-swiper", {
    spaceBetween: 30,
    loop: 'true',

    pagination: {
      el: ".swiper-pagination",
      clickable: true
    },
  });
/* Change Background Header */
function scrollHeader(){
    const header = document.getElementById('header')
    if (this.scrollY >= 50) {
        header.classList.add('scroll-header')
    }else{
        header.classList.remove('scroll-header')
    }
}
window.addEventListener('scroll',scrollHeader)
/* New Swiper */
var newSwiper = new Swiper(".new-swiper", {
    centeredSlides: true,
    slidesPerView: 'auto',
    spaceBetween: 16,
    loop: 'true',

});

/* Scroll Sections Active Link */
const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        let sectionId = current.getAttribute('id')

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelector('.nav_menu a[href*=' + sectionId + ']').classList.add('active-link')
        }else{
            document.querySelector('.nav_menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)
/* Show Scroll Up */

function scrollUp(){
    const scrollUp = document.getElementById('scroll-up')
    if (this.scrollY >= 460) {
        scrollUp.classList.add('show-scroll');
    }else{
        scrollUp.classList.remove('show-scroll');
    }
}
window.addEventListener('scroll',scrollUp)
/* Scroll Reveal Animation */
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 400,
    // reset: true
})
sr.reveal('.home-swiper, .new-swiper, .newsletter_container')
sr.reveal('.category_data, .trick_content, .footer_content', {interval: 100})
sr.reveal('.about_data, .discount_img', {origin: 'left'})
sr.reveal('.about_img, .discount_data', {origin: 'right'})