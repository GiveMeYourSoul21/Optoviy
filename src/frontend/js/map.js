
// Sector Data Configuration
const sectorData = {
    'sector1': { title: 'Адміністрація', link: 'pages/administration.html' },
    'sector2': { title: 'Сектор 2: М\'ясо та ковбаси', link: '/map?shop_id=1' },
    'sector3': { title: 'Сектор 3: Молочна продукція', link: '#' },
    'sector4': { title: 'Сектор 4: Риба та морепродукти', link: '#' },
    'sector5': { title: 'Сектор 5: Бакалія', link: '#' },
    'sector6': { title: 'Сектор 6: Кондитерські вироби', link: '#' },
    'sector7': { title: 'Сектор 7: Овочі та фрукти', link: '#' },
    'sector8': { title: 'Сектор 8: М\'ясо та ковбаси', link: '#' },
    'sector9': { title: 'Сектор 9: Молочна продукція', link: '#' },
    'sector10': { title: 'Сектор 10: Риба та морепродукти', link: '#' },
    'sector11': { title: 'Сектор 11: Бакалія', link: '#' },
    'sector12': { title: 'Сектор 12: Кондитерські вироби', link: '#' },
    'sector13': { title: 'Сектор 13: Овочі та фрукти', link: '#' },
    'sector14': { title: 'Сектор 14: М\'ясо та ковбаси', link: '#' },
    'sector15': { title: 'Сектор 15: Молочна продукція', link: '#' },
    'sector16': { title: 'Сектор 16: Риба та морепродукти', link: '#' },
    'sector17': { title: 'Сектор 17: Бакалія', link: '#' },
    'sector18': { title: 'Сектор 18: Кондитерські вироби', link: '#' },
    'sector19': { title: 'Сектор 19: Овочі та фрукти', link: '#' },
    'sector20': { title: 'Сектор 20: М\'ясо та ковбаси', link: '#' },
    'sector21': { title: 'Сектор 21: Молочна продукція', link: '#' },
    'sector22': { title: 'Сектор 22: Риба та морепродукти', link: '#' },
    'sector23': { title: 'Сектор 23: Бакалія', link: '#' },
    'sector24': { title: 'Сектор 24: Кондитерські вироби', link: '#' },
    'sector25': { title: 'Сектор 25: Овочі та фрукти', link: '#' },
    'sector26': { title: 'Сектор 26: М\'ясо та ковбаси', link: '#' },
    'sector27': { title: 'Сектор 27: Молочна продукція', link: '#' },
    'sector28': { title: 'Сектор 28: Риба та морепродукти', link: '#' },
    'sector29': { title: 'Сектор 29: Бакалія', link: '#' },
    'sector30': { title: 'Сектор 30: Кондитерські вироби', link: '#' },
    'sector31': { title: 'Сектор 31: Овочі та фрукти', link: '#' },
    'sector32': { title: 'Сектор 32: М\'ясо та ковбаси', link: '#' },
    'sector33': { title: 'Сектор 33: Молочна продукція', link: '#' },

    'sector-park1': { title: 'Автостоянка "Космос"', link: 'pages/parking.html' },
    'sector-park2': { title: 'Дворники', link: '#' }

};

document.addEventListener('DOMContentLoaded', () => {
    const sectors = document.querySelectorAll('.sector'); // SVG paths should have class="sector"
    const tooltip = document.getElementById('map-tooltip');
    const tooltipTitle = document.getElementById('tooltip-title');
    const tooltipLink = document.getElementById('tooltip-link');

    if (!tooltip || !sectors.length) return;

    // Helper to hide tooltip
    const hideTooltip = () => {
        tooltip.style.display = 'none';
        tooltip.style.opacity = '0';
    };

    // Helper to show tooltip
    const showTooltip = (x, y, data) => {
        tooltipTitle.textContent = data.title || 'Сектор ринку';
        tooltipLink.href = data.link || '#';

        tooltip.style.display = 'block';
        // Small delay to allow display:block to apply before opacity transition
        requestAnimationFrame(() => {
            tooltip.style.opacity = '1';
        });

        // Position tooltip
        // Adjust coordinates to center above the click or element
        const tooltipRect = tooltip.getBoundingClientRect();
        let top = y - tooltipRect.height - 10;
        let left = x - (tooltipRect.width / 2);

        // Boundary checks (keep within viewport)
        if (left < 10) left = 10;
        if (left + tooltipRect.width > window.innerWidth - 10) {
            left = window.innerWidth - tooltipRect.width - 10;
        }
        if (top < 10) {
            top = y + 20; // Show below if not enough space above
        }

        tooltip.style.top = `${top + window.scrollY}px`;
        tooltip.style.left = `${left + window.scrollX}px`;
    };

    sectors.forEach(sector => {
        sector.style.cursor = 'pointer'; // Ensure cursor indicates interactivity

        sector.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation(); // Prevent document click from closing immediately

            const sectorId = sector.id;
            const data = sectorData[sectorId] || { title: `Сектор ${sectorId.replace('sector', '')}`, link: '#' };

            // Get click coordinates relative to the viewport
            const clickX = e.clientX;
            const clickY = e.clientY;

            showTooltip(clickX, clickY, data);
        });
    });

    // Close tooltip when clicking outside
    document.addEventListener('click', (e) => {
        if (!tooltip.contains(e.target) && !e.target.classList.contains('sector')) {
            hideTooltip();
        }
    });

    // Close on scroll to prevent floating tooltip
    window.addEventListener('scroll', () => {
        hideTooltip();
    }, { passive: true });
});

