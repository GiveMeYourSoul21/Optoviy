
document.addEventListener('DOMContentLoaded', () => {
    const newsContainer = document.getElementById('news-container');
    const isHomePage = document.body.classList.contains('home-page') ||
        window.location.pathname.endsWith('index.html') ||
        window.location.pathname === '/';

    // Отримати news_id з URL
    const urlParams = new URLSearchParams(window.location.search);
    const newsId = urlParams.get('news_id');

    // Configuration
    const NEWS_JSON_PATH = 'js/news.json';
    const ITEMS_PER_PAGE = 9;
    let currentPage = 1;
    let allNews = [];

    // Fetch news data
    fetch(NEWS_JSON_PATH)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            allNews = data;
            // Sort by date descending
            allNews.sort((a, b) => {
                const dateA = parseDate(a.date);
                const dateB = parseDate(b.date);
                return dateB - dateA;
            });

            // Перевірити чи є news_id в URL
            if (newsId) {
                // Показати детальну сторінку новини
                renderSingleNews(parseInt(newsId));
            } else {
                // Показати список новин
                renderNews();
            }
        })
        .catch(error => console.error('Error loading news:', error));

    function parseDate(dateStr) {
        const parts = dateStr.split('.');
        return new Date(parts[2], parts[1] - 1, parts[0]);
    }

    // НОВА ФУНКЦІЯ: Показати детальну сторінку однієї новини
    function renderSingleNews(id) {
        if (!newsContainer) return;

        // Знайти новину по ID
        const newsItem = allNews.find(item => item.id === id);

        if (!newsItem) {
            newsContainer.innerHTML = '<p>Новину не знайдено</p>';
            return;
        }

        // Змінити заголовок сторінки
        const pageTitle = document.querySelector('.h2');
        if (pageTitle) {
            pageTitle.textContent = newsItem.title;
        }

        // Сховати пагінацію
        const paginationContainer = document.getElementById('pagination-container');
        if (paginationContainer) {
            paginationContainer.style.display = 'none';
        }

        // Створити детальну розмітку
        newsContainer.className = 'news-detail-container';
        newsContainer.innerHTML = `
            <button class="back-button" onclick="window.location.href='news.html'">
                ← Назад до новин
            </button>
            <article class="news-detail">
        <img src="${newsItem.image}" alt="${newsItem.title}">
        
        <h1>${newsItem.title}</h1>
        <p class="author">Автор: ${newsItem.author}</p>
        <div class="tags">
            ${newsItem.tags.map(tag => `<span>${tag}</span>`).join('')}
        </div>
        
        <div class="content">
            ${newsItem.fullContent}
        </div>
        
        <div class="gallery">
            ${newsItem.gallery.map(img => `<img src="${img}">`).join('')}
        </div>
    </article>
            <article class="news-detail">
                ${newsItem.image ? `<img src="${newsItem.image}" alt="${newsItem.title}" class="news-detail-image">` : ''}
                
                <div class="news-detail-header">
                    <div class="news-date">${newsItem.date}</div>
                    <h1 class="news-detail-title">${newsItem.title}</h1>
                </div>
                
                <div class="news-detail-content">
                    <p>${newsItem.description || 'Детальна інформація про новину...'}</p>
                    <!-- Тут можна додати більше контенту -->
                </div>
            </article>
        `;
    }

    function renderNews() {
        if (!newsContainer) return;

        newsContainer.innerHTML = '';
        newsContainer.className = 'news-grid-page'; // Повернути клас для сітки

        let newsToDisplay = [];

        if (isHomePage) {
            newsToDisplay = allNews.slice(0, 3);
        } else {
            const start = (currentPage - 1) * ITEMS_PER_PAGE;
            const end = start + ITEMS_PER_PAGE;
            newsToDisplay = allNews.slice(start, end);

            renderPagination();
        }

        newsToDisplay.forEach(item => {
            const card = createNewsCard(item);
            newsContainer.appendChild(card);
        });
    }

    function createNewsCard(item) {
        const card = document.createElement('div');
        card.className = 'news-card';

        // ВАЖЛИВО: Додати курсор pointer та обробник кліку
        card.style.cursor = 'pointer';
        card.onclick = () => {
            // Перенаправити на news.html з параметром news_id
            window.location.href = `news.html?news_id=${item.id}`;
        };

        const imageUrl = item.image || '';

        card.innerHTML = `
            <div class="news-image-wrapper">
                ${imageUrl ? `<img src="${imageUrl}" alt="${item.title}" onerror="this.style.display='none'">` : ''}
            </div>
            <div class="news-content">
                <div class="news-date">${item.date}</div>
                <h3 class="news-title">${item.title}</h3>
                <p class="news-description">${item.description || ''}</p>
            </div>
        `;
        return card;
    }

    function renderPagination() {
        const paginationContainer = document.getElementById('pagination-container');
        if (!paginationContainer) return;

        paginationContainer.innerHTML = '';
        paginationContainer.style.display = 'block'; // Показати пагінацію
        const totalPages = Math.ceil(allNews.length / ITEMS_PER_PAGE);

        if (totalPages <= 1) return;

        for (let i = 1; i <= totalPages; i++) {
            const btn = document.createElement('button');
            btn.innerText = i;
            btn.className = `pagination-btn ${i === currentPage ? 'active' : ''}`;
            btn.onclick = () => {
                currentPage = i;
                renderNews();
                window.scrollTo({ top: 0, behavior: 'smooth' });
            };
            paginationContainer.appendChild(btn);
        }
    }
});
