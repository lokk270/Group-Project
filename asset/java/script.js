let currentIndex = 0;
const carousel = document.getElementById('carousel');
const totalImages = 5;

function moveCarousel(direction) {
    currentIndex = (currentIndex + direction + totalImages) % totalImages;
    carousel.style.transform = `translateX(-${currentIndex * 100}%)`;
}

// 自动轮播
setInterval(() => {
    moveCarousel(1);
}, 5000);