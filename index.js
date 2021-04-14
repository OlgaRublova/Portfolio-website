import scrollSmoothly from './scroll.js';
import toggleNav from './responsivee-toggle.js';


//for smooth and correct scrolling among the sections
window.addEventListener('load', scrollSmoothly);

//animation
window.addEventListener('load', animateBackground);


window.addEventListener('load', toggleNav);

function animateBackground() {
    let banner = document.getElementsByClassName('banner')[0],
        blocks = document.getElementsByClassName('blocks');
    for (let i = 1; i < 200; i++) {
        banner.innerHTML += "<div class='blocks'></div>";
        blocks[i].style.animationDelay = `${i * 0.01}s`;
    }
}


//color change on nav item click

const scrollLinks = document.querySelectorAll(".scroll-link");
    for (let i = 0; i < scrollLinks.length; i++) {
        scrollLinks[i].addEventListener("click", function() {
            let current = document.getElementsByClassName("active-bg");
            current[0].className = current[0].className.replace(" active-bg", "");
            this.className += " active-bg";
        });
    }



export default animateBackground;