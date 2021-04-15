import scrollSmoothly from './scroll.js';
import toggleNav from './responsivee-toggle.js';


//for smooth and correct scrolling among the sections
window.addEventListener('load', scrollSmoothly);

//animation
window.addEventListener('load', animateBackground);


window.addEventListener('load', toggleNav);


//color change on nav item click
const links = document.querySelector('.links');
const scrollLinks = document.querySelectorAll(".scroll-link");


links.addEventListener('click', e => {
    const id = e.target.getAttribute('href').slice(1);
    if(id){
        scrollLinks.forEach(link => {
            link.classList.remove('active-bg');
            e.target.classList.add('active-bg'); //the element you clicked = e.target
        })
    }
})





function animateBackground() {
    let banner = document.getElementsByClassName('banner')[0],
        blocks = document.getElementsByClassName('blocks');
    for (let i = 1; i < 200; i++) {
        banner.innerHTML += "<div class='blocks'></div>";
        blocks[i].style.animationDelay = `${i * 0.01}s`;
    }
}


export default animateBackground;