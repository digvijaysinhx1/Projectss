const hamburger = document.getElementById('hamburger');
const hamLinks = document.getElementById('hamLinks');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    hamLinks.classList.toggle('show');
});