const hambBtn = document.getElementById('hamb-btn');
const mobileMenu = document.getElementById('mobile-menu');
const mobileMenuXBtn = document.getElementById('xBtn');

const mobileMenuLinks = mobileMenu.getElementsByTagName('a');

function openMenu() {
    mobileMenu.classList.add('active')
    // document.body.classList.add('lock');
}

function closeMenu() {
    mobileMenu.classList.remove('active')
    // setTimeout(() => {
    //     document.body.classList.remove('lock');
    // }, 400)
}

function handleEsc(e) {
    (e.key === 'Escape') && closeMenu();
}

function main() {
    hambBtn.addEventListener('click', openMenu);
    mobileMenuXBtn.addEventListener('click', closeMenu);
    window.addEventListener('keydown', handleEsc);
    [...mobileMenuLinks].forEach((item) => {
        item.addEventListener('click', closeMenu)
    })
}

main();