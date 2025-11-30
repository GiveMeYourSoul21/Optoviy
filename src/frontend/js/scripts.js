// JavaScript для сайту СОЮЗ
// Тут можна додати потрібний функціонал

document.addEventListener('DOMContentLoaded', () => {
    // Ініціалізація сторінки
    console.log('Сайт СОЮЗ завантажено');

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
