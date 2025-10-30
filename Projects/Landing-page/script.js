const hamburger = document.getElementById('hamburger');
const hamLinks = document.getElementById('hamLinks');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    hamLinks.classList.toggle('show');
});



// function hide() {
//     const img = document.getElementsByClassName('octa-sec-img2')
    
//     if(window.innerWidth <=766){
//         img.style.display = 'none'
//     }
//     else{
//         img.style.display = 'flex'
//     }

// }

// hide();

// window.addEventListener('resize', hide)