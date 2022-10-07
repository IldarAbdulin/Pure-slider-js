let offset = 0;
const sliderine = document.querySelector('.slider-line');

document.querySelector('.slider-next').addEventListener('click' , function() {
    offset = offset + 1100;
    if(offset > 3300){
        offset = 0;
    }
    sliderine.style.left = -offset + 'px';
});

document.querySelector('.slider-prev').addEventListener('click' , function() {
    offset = offset - 1100;
    if(offset < 0){
        offset = 3300;
    }
    sliderine.style.left = -offset + 'px';
});