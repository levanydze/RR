const carouselSlide = document.querySelector('.carousel-slide');
const carouselImages = document.querySelector('.carousel-slide Img');


//buttons
const prevBtn = document.querySelector('#prevBtn');
const nextBtn = document.querySelector('#nextBtn');

//counter
let counter = 1;
let size = carouselImages[0].clientWidth;


window.addEventListener('resize', () => {
    carouselSlide.style.transition = "none";
    size = carouselImages[0].clientWidth;
    carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
});

carouselSlide.style.transform = 'tanslateX(' + (-size * counter) + 'px)'; 

// button listener

nextBtn.addEventListener('click', ()=>{
    carouselSlide.style.transition = "transform 0.4s ese-in-out";
    console.log(counter);
});
