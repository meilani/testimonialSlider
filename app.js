const testimonial = [...document.querySelectorAll('.testimonial')];
const leftArrows = [...document.querySelectorAll('.left-button')];
const rightArrows = [...document.querySelectorAll('.right-button')];


function newSlide(e){
    
    testimonial.forEach((slide) => {
        slide.classList.toggle('hide');
    });
    
}

leftArrows.forEach((arrow) => {
    arrow.addEventListener('click', newSlide);
});
rightArrows.forEach((arrow) => {
    arrow.addEventListener('click', newSlide);
});
