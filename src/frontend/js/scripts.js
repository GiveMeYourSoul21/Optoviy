// JavaScript для сайту Оптовий ринок
// Тут можна додати потрібний функціонал

document.addEventListener('DOMContentLoaded', () => {
    // Ініціалізація сторінки
    console.log('Сайт Оптовий ринок завантажено');

    // Очищаємо старе збереження теми (якщо було)
    if (localStorage.getItem('theme')) {
        localStorage.removeItem('theme');
    }

    // Модальне вікно "Зворотний зв'язок"
    const feedbackBtn = document.querySelector('.feedback-btn');
    const modal = document.getElementById('feedback-modal');
    const closeTriggers = modal ? modal.querySelectorAll('[data-modal-close]') : [];

    function openModal() {
        if (!modal) return;
        modal.classList.add('is-open');
        modal.setAttribute('aria-hidden', 'false');
        // Заборона прокрутки тіла сторінки
        document.body.style.overflow = 'hidden';
    }

    function closeModal() {
        if (!modal) return;
        modal.classList.remove('is-open');
        modal.setAttribute('aria-hidden', 'true');
        document.body.style.overflow = '';
    }

    if (feedbackBtn && modal) {
        feedbackBtn.addEventListener('click', openModal);
        closeTriggers.forEach((el) => el.addEventListener('click', closeModal));

        // Закриття по Esc
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && modal.classList.contains('is-open')) {
                closeModal();
            }
        });
    }
});

// АНІМАЦІЯ ПРИ ПРОКРУТЦІ
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');

            // чтобы анимация сработала только 1 раз
            observer.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.15 // запуск когда 15% элемента видно
});

document.querySelectorAll('.fade-up').forEach(el => {
    observer.observe(el);
});