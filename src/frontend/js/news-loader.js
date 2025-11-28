
document.addEventListener('DOMContentLoaded', () => {
    const newsContainer = document.getElementById('news-container');
    const isHomePage = document.body.classList.contains('home-page') || window.location.pathname.endsWith('index.html') || window.location.pathname === '/';

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
            // Sort by date descending (assuming date format DD.MM.YYYY)
            allNews.sort((a, b) => {
                const dateA = parseDate(a.date);
                const dateB = parseDate(b.date);
                return dateB - dateA;
            });

            renderNews();
        })
        .catch(error => console.error('Error loading news:', error));

    function parseDate(dateStr) {
        const parts = dateStr.split('.');
        return new Date(parts[2], parts[1] - 1, parts[0]);
    }

    function renderNews() {
        if (!newsContainer) return;

        newsContainer.innerHTML = '';

        let newsToDisplay = [];

        if (isHomePage) {
            // On homepage, show only latest 3 items
            newsToDisplay = allNews.slice(0, 3);
        } else {
            // On news page, show items based on pagination
            // For now, let's just show all or implement simple load more if needed
            // But user asked for "pagination" style in screenshot (numbers)
            // Let's implement simple pagination
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

        // Use a placeholder if image is missing or broken
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
