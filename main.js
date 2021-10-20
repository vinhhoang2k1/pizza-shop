const menuBtn = document.querySelector('.menu-icon');
const menu = document.querySelector('.menu');

menuBtn.onclick = () => {
    menu.classList.toggle('active');
    menuBtn.classList.toggle('fa-times')
};
window.onscroll = () => {
    menu.classList.remove('active');
    menuBtn.classList.remove('fa-times')
    if (window.scrollY > 60) {
        document.querySelector('.btn-exit').classList.add('active');
    }
    else {
        document.querySelector('.btn-exit').classList.remove('active');

    }
}

function loader() {
    document.querySelector('.loader').classList.add('active');
}
function fade() {
    setInterval(loader, 3000);
}
window.onload = fade();