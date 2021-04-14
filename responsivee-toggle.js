function toggleNav() {
    const header = document.getElementById('header'),
        toggle = document.getElementById('toggle'),
        navbar = document.getElementById('navbar');


//navigation bar toggling
    document.onclick = function (e) {
        if (e.target.id !== 'header' && e.target.id !== 'toggle' && e.target.id !== 'navbar') {
            toggle.classList.remove('active');
            navbar.classList.remove('active');
        }
    }
    toggle.onclick = function () {
        toggle.classList.toggle('active');
        navbar.classList.toggle('active');

    }

}


export default toggleNav();

