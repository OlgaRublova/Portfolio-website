import animateBackground from './index.js';

const header = document.getElementById('header');
const about = document.getElementById('about');
const scrollLinks = document.querySelectorAll(".scroll-link");


function scrollSmoothly() {

    scrollLinks.forEach(link => {
        link.addEventListener('click', e => {
            e.preventDefault();

            //navigating to a specific spot
            const id = e.currentTarget.getAttribute("href").slice(1);         //'slice' to remove a "#"
            const element = document.getElementById(id);

            //calculate the height
            // Element.getBoundingClientRect() method returns the size of an element and its position relative to the viewport.
            const headerHeight = header.getBoundingClientRect().height;
            const aboutHeight = about.getBoundingClientRect().height;
            let position = element.offsetTop - headerHeight;

            if(position === aboutHeight){
                animateBackground()
            }

            window.scrollTo({
                left: 0,
                top: position,
            })
        })
    })
}

export default scrollSmoothly;