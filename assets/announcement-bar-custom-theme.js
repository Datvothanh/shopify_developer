const slider = document.querySelector('.slider');
const slides = document.querySelectorAll('.slide');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');

let index = 0;
let autoSlideInterval;
let isDragging = false;
let startX = 0;
let currentTranslate = 0;
let prevTranslate = 0;
let animationID;

function showSlide(i) {
    index = (i + slides.length) % slides.length; 
    slider.style.transform = `translateX(${-index * 100}%)`;
}

function nextSlide() {
    showSlide(index + 1);
}

function prevSlide() {
    showSlide(index - 1);
}

function startAutoSlide() {
    autoSlideInterval = setInterval(nextSlide, 3000);
}

function resetAutoSlide() {
    clearInterval(autoSlideInterval);  
    startAutoSlide();  
}

nextBtn.addEventListener('click', () => {
    nextSlide();
    resetAutoSlide();
});

prevBtn.addEventListener('click', () => {
    prevSlide();
    resetAutoSlide();
});

function updateSlidePosition() {
    currentTranslate = -index * 100;
    slider.style.transition = "transform 0.3s ease-out";
    slider.style.transform = `translateX(${currentTranslate}%)`;
}



startAutoSlide(); 