async function loadComponent(id, file) {
    const element = document.getElementById(id);

    const response = await fetch(file);
    const content = await response.text();

    element.innerHTML = content;
}

async function init() {

    await loadComponent('marquee', 'components/marquee.html');
    await loadComponent('navbar', 'components/navbar.html');
    await loadComponent('footer', 'components/footer.html');
    await loadComponent('modal', 'components/modal.html');
    if (document.getElementById('error')) { await loadComponent('error', 'components/error.html'); }

    const menuBtn = document.getElementById('menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');

    menuBtn.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
    });
}

init();