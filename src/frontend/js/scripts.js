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


// Анимация появления + подсчет
const observer2 = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {

            entry.target.classList.add('show');

            // Запуск счетчика для чисел внутри блока
            const numbers = entry.target.querySelectorAll('.card-number');
            numbers.forEach(num => {
                const target = +num.getAttribute('data-target');
                let count = 0;
                const duration = 1900; // миллисекунд до достижения числа
                const stepTime = Math.max(10, duration / target);
                const increment = target / (duration / stepTime);

                const timer = setInterval(() => {
                    count += increment;
                    if (count >= target) {
                        num.textContent = target; // точное число в конце
                        clearInterval(timer);
                    } else {
                        num.textContent = Math.floor(count);
                    }
                }, stepTime);
            });

            obs.unobserve(entry.target); // один раз
        }
    });
}, { threshold: 0.2 }); // когда 20% блока видно

// наблюдаем все fade-up элементы
document.querySelectorAll('.fade-up').forEach(el => observer2.observe(el));


// ПОШУК ПО ФІЛЬТРАХ (Search functionality for filter items)
document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.querySelector('.optovyi-search__input');
    const filterItems = document.querySelectorAll('.optovyi-options__item');

    if (searchInput && filterItems.length > 0) {
        searchInput.addEventListener('input', (e) => {
            const searchTerm = e.target.value.toLowerCase().trim();

            filterItems.forEach(item => {
                const label = item.querySelector('.optovyi-options__label');
                const text = label ? label.textContent.toLowerCase() : '';

                if (text.includes(searchTerm)) {
                    item.style.display = '';
                } else {
                    item.style.display = 'none';
                }
            });
        });
    }
});