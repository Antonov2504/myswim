const anchorToTop = document.querySelector("#toTop");

anchorToTop.addEventListener('click', (evt) => {
    evt.preventDefault();
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth',
    });
});

// Show Anchor
window.addEventListener('scroll', () => {
    if (window.scrollY >= 1000) {
        anchorToTop.classList.remove('anchor_hidden');
    } else {
        anchorToTop.classList.add('anchor_hidden');
    }
});
