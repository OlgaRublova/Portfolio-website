const sections = document.querySelectorAll("section"),
    navLi = document.querySelectorAll("#navbar ul li");

window.addEventListener("scroll", () => {
    let current = "";
    sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;


        if (pageYOffset >= sectionTop - sectionHeight/3) {
            current = section.getAttribute("id");
            console.log(current);
        }
    });

    navLi.forEach((li) => {
        li.classList.remove("active-bg");
        if (li.classList.contains(current)) {
            li.classList.add("active-bg");
        }
    });
});
window.addEventListener('load', animateBackground);
function animateBackground() {
    let banner = document.getElementsByClassName('banner')[0],
        blocks = document.getElementsByClassName('blocks');
    for (let i = 1; i < 400; i++) {
        banner.innerHTML += "<div class='blocks'></div>";
        blocks[i].style.animationDelay = `${i * 0.02}s`;
    }
}
