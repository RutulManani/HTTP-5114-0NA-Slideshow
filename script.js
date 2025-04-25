// script.js

var slideIn = 0;

function slideshow() {
    var slides = document.querySelectorAll('.slide');
    
    slides.forEach(function(slide) {
        slide.style.display = 'none';
    });
    
    slideIn++;
    if (slideIn > slides.length) {
        slideIn = 1;
    }
    
    slides[slideIn - 1].style.display = 'block';
    setTimeout(slideshow, 3000);
}

slideshow();