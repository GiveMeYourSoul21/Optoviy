// Mobile Menu Functionality

document.addEventListener('DOMContentLoaded', () => {
    const burgerBtn = document.querySelector('.burger-menu-btn');
    const mobileMenu = document.querySelector('.mobile-menu');
    const mobileMenuClose = document.querySelector('.mobile-menu-close');
    const mobileOverlay = document.querySelector('.mobile-menu-overlay');
    const mobileNavLinks = document.querySelectorAll('.mobile-nav-menu a');
    const mobileFeedbackBtn = document.querySelector('.mobile-feedback-btn');
    const body = document.body;

    // Функція відкриття меню
    function openMobileMenu() {
        mobileMenu.classList.add('active');
        mobileOverlay.classList.add('active');
        body.classList.add('mobile-menu-open');
    }

    // Функція закриття меню
    function closeMobileMenu() {
        mobileMenu.classList.remove('active');
        mobileOverlay.classList.remove('active');
        body.classList.remove('mobile-menu-open');
    }

    // Відкриття меню при кліку на бургер
    if (burgerBtn) {
        burgerBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            openMobileMenu();
        });
    }

    // Закриття меню при кліку на кнопку закриття
    if (mobileMenuClose) {
        mobileMenuClose.addEventListener('click', (e) => {
            e.stopPropagation();
            closeMobileMenu();
        });
    }

    // Закриття меню при кліку на оверлей
    if (mobileOverlay) {
        mobileOverlay.addEventListener('click', () => {
            closeMobileMenu();
        });
    }

    // Закриття меню при кліку на посилання
    mobileNavLinks.forEach(link => {
        link.addEventListener('click', () => {
            closeMobileMenu();
        });
    });

    // Обробка кнопки зворотного зв'язку в мобільному меню
    if (mobileFeedbackBtn) {
        mobileFeedbackBtn.addEventListener('click', () => {
            closeMobileMenu();
            // Відкриваємо модальне вікно (функція з scripts.js)
            const modal = document.getElementById('feedback-modal');
            if (modal) {
                setTimeout(() => {
                    modal.classList.add('is-open');
                    modal.setAttribute('aria-hidden', 'false');
                    document.body.style.overflow = 'hidden';
                }, 300); // Невелика затримка для плавності
            }
        });
    }

    // Закриття меню при натисканні Escape
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && mobileMenu.classList.contains('active')) {
            closeMobileMenu();
        }
    });

    // Закриття меню при зміні розміру вікна (якщо стає > 1030px)
    window.addEventListener('resize', () => {
        if (window.innerWidth > 1029 && mobileMenu.classList.contains('active')) {
            closeMobileMenu();
        }
    });
});
