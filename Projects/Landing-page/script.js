const hamburger = document.getElementById('hamburger');
const hamLinks = document.getElementById('hamLinks');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    hamLinks.classList.toggle('show');
});



const slider = document.querySelector('.slider');
const slides = document.querySelectorAll('.slide');
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');

let index = 0;

// Clone first and last slides for looping
const firstClone = slides[0].cloneNode(true);
const lastClone = slides[slides.length - 1].cloneNode(true);

slider.appendChild(firstClone);
slider.insertBefore(lastClone, slides[0]);

let currentIndex = 1;
const totalSlides = document.querySelectorAll('.slide');
slider.style.transform = `translateX(-${100 * currentIndex}%)`;

next.addEventListener('click', () => {
  if (currentIndex >= totalSlides.length - 1) return;
  currentIndex++;
  slider.style.transition = 'transform 0.5s ease';
  slider.style.transform = `translateX(-${100 * currentIndex}%)`;

  slider.addEventListener(
    'transitionend',
    () => {
      if (currentIndex === totalSlides.length - 1) {
        slider.style.transition = 'none';
        currentIndex = 1;
        slider.style.transform = `translateX(-${100 * currentIndex}%)`;
      }
    },
    { once: true }
  );
});

prev.addEventListener('click', () => {
  if (currentIndex <= 0) return;
  currentIndex--;
  slider.style.transition = 'transform 0.5s ease';
  slider.style.transform = `translateX(-${100 * currentIndex}%)`;

  slider.addEventListener(
    'transitionend',
    () => {
      if (currentIndex === 0) {
        slider.style.transition = 'none';
        currentIndex = totalSlides.length - 2;
        slider.style.transform = `translateX(-${100 * currentIndex}%)`;
      }
    },
    { once: true }
  );
});
