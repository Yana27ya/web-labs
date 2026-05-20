document.addEventListener("DOMContentLoaded", () => {
    
    // =====================================================
    // 1. ПЕРЕМИКАЧ ТЕМ: СИНХРОНІЗАЦІЯ З iOS CHECKBOX
    // =====================================================
    const themeCheckbox = document.getElementById('theme-checkbox');
    const body = document.body;

    // Зчитуємо збережену тему при завантаженні сторінки
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark-theme') {
        body.classList.add('dark-theme');
        body.classList.remove('light-theme');
        if (themeCheckbox) themeCheckbox.checked = true;
    } else {
        body.classList.add('light-theme');
        body.classList.remove('dark-theme');
        if (themeCheckbox) themeCheckbox.checked = false;
    }

    if (themeCheckbox) {
        themeCheckbox.addEventListener('change', () => {
            if (themeCheckbox.checked) {
                body.classList.replace('light-theme', 'dark-theme');
                localStorage.setItem('theme', 'dark-theme');
            } else {
                body.classList.replace('dark-theme', 'light-theme');
                localStorage.setItem('theme', 'light-theme');
            }
        });
    }

    // =====================================================
    // 2. ІНТЕРАКТИВНЕ СЛАЙД-ШОУ (3 РІЗНІ ЗОБРАЖЕННЯ)
    // =====================================================
    const slideImages = [
        "img/zzzz.jpg",       // Фото 1
        "img/qqqq.jpg",        // Фото 2
        "img/wwww.jpg"    // Фото 3
    ];

    let currentSlideIndex = 0;
    const sliderImgElement = document.getElementById('slider-img');
    const prevBtn = document.getElementById('go-prev');
    const nextBtn = document.getElementById('go-next');

    function updateSlide() {
        if (sliderImgElement) {
            sliderImgElement.style.opacity = 0; // Ефект плавного згасання
            setTimeout(() => {
                sliderImgElement.src = slideImages[currentSlideIndex];
                sliderImgElement.style.opacity = 1;
            }, 200);
        }
    }

    if (nextBtn) {
        nextBtn.addEventListener('click', () => {
            currentSlideIndex = (currentSlideIndex + 1) % slideImages.length;
            updateSlide();
        });
    }

    if (prevBtn) {
        prevBtn.addEventListener('click', () => {
            currentSlideIndex = (currentSlideIndex - 1 + slideImages.length) % slideImages.length;
            updateSlide();
        });
    }
});