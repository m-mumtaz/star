var menu = document.querySelector('#menu-icon');
var navbar = document.querySelector('.navbar');

    menu.onclick = () => {
        menu.classList.toggle('bx-x'); // Toggle the menu icon style
        navbar.classList.toggle('active'); // Toggle the navbar visibility
    }

    window.onscroll = () => {
        menu.classList.remove('bx-x'); // Remove the active menu icon style
        navbar.classList.remove('active'); // Hide the navbar on scroll
    }
