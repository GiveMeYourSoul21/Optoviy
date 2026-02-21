
// Mapping of sectors to their detailed SVG maps
const sectorMaps = {
    'sector4': 'assets/img/Sectors-map/Sector5-4.svg',
    'sector5': 'assets/img/Sectors-map/Sector5-4.svg',
    'sector6': 'assets/img/Sectors-map/Sector6.svg',
    'sector7': 'assets/img/Sectors-map/Sector7.svg',
    'sector8': 'assets/img/Sectors-map/Sector8.svg',
    'sector9': 'assets/img/Sectors-map/Sector9.svg',
    'sector10': 'assets/img/Sectors-map/Sector10.svg',
    'sector11': 'assets/img/Sectors-map/Sector11.svg',
    'sector12': 'assets/img/Sectors-map/Sector12.svg',
    'sector13': 'assets/img/Sectors-map/Sector13.svg',
    'sector14': 'assets/img/Sectors-map/Sector14.svg',
    'sector15': 'assets/img/Sectors-map/Sector15.svg',
    'sector16': 'assets/img/Sectors-map/Sector16.svg',
    'sector17': 'assets/img/Sectors-map/Sector17.svg',
    'sector18': 'assets/img/Sectors-map/Sector18.svg',
    'sector19': 'assets/img/Sectors-map/Sector19.svg',
    'sector20': 'assets/img/Sectors-map/Sector20.svg',
    'sector21': 'assets/img/Sectors-map/Sector21.svg',
    'sector22': 'assets/img/Sectors-map/Sector22.svg',
    'sector23': 'assets/img/Sectors-map/Sector23.svg',
    'sector24': 'assets/img/Sectors-map/Sector24.svg',
    'sector25': 'assets/img/Sectors-map/Sector25.svg',
    'sector26': 'assets/img/Sectors-map/Sector26.svg',
    'sector27': 'assets/img/Sectors-map/Sector27.svg',
    'sector28': 'assets/img/Sectors-map/Sector28.svg',
    'sector29': 'assets/img/Sectors-map/Sector29.svg',
    'sector30': 'assets/img/Sectors-map/Sector30.svg',
    'sector31': 'assets/img/Sectors-map/Sector31.svg',
    'sector32': 'assets/img/Sectors-map/Sector32.svg',
    'sector33': 'assets/img/Sectors-map/Sector33.svg',
    'sector34': 'assets/img/Sectors-map/Sector34-3-2.svg',
    'sector35': 'assets/img/Sectors-map/Sector35.svg'
};

// Sector Data Configuration (for tooltip fallback)
const sectorData = {
    'sector1': { title: 'Адміністрація', link: 'pages/administration.html' },
    'sector2': { title: 'Сектор 2: М\'ясо та ковбаси', link: '#' },
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

// Legend configurations for detailed maps
const detailedLegends = {
    'sector4': [
        { color: '#FAE9C8', label: 'Павільйони' },
        { color: '#FAE9C8', label: 'Контейнери' },
        {
            icon: 'assets/svg_icons/wc.svg',
            label: 'Туалети'
        }
    ],
    'sector5': [
        { color: '#FAE9C8', label: 'Павільйони' },
        { color: '#FAE9C8', label: 'Контейнери' },
        {
            icon: 'assets/svg_icons/wc.svg',
            label: 'Туалети'
        }
    ],
    'sector6': [
        { color: '#FAE9C8', label: 'Павільйон "Марс"' }
    ],
    'sector7': [
        { color: '#FAE9C8', label: 'Павільйони"' },
        { color: '#FAE9C8', label: 'Контейнери' }
    ],
    'sector8': [
        { color: '#FAE9C8', label: 'Павільйони"' },
        { color: '#FAE9C8', label: 'Контейнери' }
    ],
    'sector9': [
        { color: '#FAE9C8', label: 'Павільйони"' },
        { color: '#FAE9C8', label: 'Контейнери' }
    ],
    'sector10': [
        { color: '#FAE9C8', label: 'Павільйони"' },
        { color: '#FAE9C8', label: 'Контейнери' }
    ],
    'sector11': [
        { color: '#FAE9C8', label: 'Павільйони"' },
        { color: '#FAE9C8', label: 'Контейнери' }
    ],
    'sector12': [
        { color: '#FAE9C8', label: 'Павільйони"' },
        { color: '#FAE9C8', label: 'Контейнери' }
    ],
    'sector13': [
        { color: '#FAE9C8', label: 'Павільйони"' },
        { color: '#FAE9C8', label: 'Контейнери' }
    ],
    'sector14': [
        { color: '#FAE9C8', label: 'Павільйони"' },
        { color: '#FAE9C8', label: 'Контейнери' }
    ],
    'sector15': [
        { color: '#FAE9C8', label: 'Павільйони"' },
        { color: '#FAE9C8', label: 'Контейнери' }
    ],
    'sector16': [
        { color: '#FAE9C8', label: 'Павільйони"' },
        { color: '#FAE9C8', label: 'Контейнери' }
    ],
    'sector17': [
        { color: '#FAE9C8', label: 'Павільйони"' },
        { color: '#FAE9C8', label: 'Контейнери' }
    ],
    'sector18': [
        { color: '#FAE9C8', label: 'Павільйони"' },
        { color: '#FAE9C8', label: 'Контейнери' }
    ],
    'sector19': [
        { color: '#FAE9C8', label: 'Павільйони"' },
        { color: '#FAE9C8', label: 'Контейнери' }
    ],
    'sector20': [
        { color: '#FAE9C8', label: 'Павільйони"' },
        { color: '#FAE9C8', label: 'Контейнери' }
    ],
    'sector21': [
        { color: '#FAE9C8', label: 'Павільйони"' },
        { color: '#FAE9C8', label: 'Контейнери' }
    ],
    'sector22': [
        { color: '#FAE9C8', label: 'Павільйони"' },
        { color: '#FAE9C8', label: 'Контейнери' }
    ],
    'sector23': [
        { color: '#FAE9C8', label: 'Павільйони"' },
        { color: '#FAE9C8', label: 'Контейнери' }
    ],
    'sector24': [
        { color: '#FAE9C8', label: 'Павільйони"' },
        { color: '#FAE9C8', label: 'Контейнери' }
    ],
    'sector25': [
        { color: '#FAE9C8', label: 'Павільйони"' },
        { color: '#FAE9C8', label: 'Контейнери' }
    ],
    'sector26': [
        { color: '#FAE9C8', label: 'Павільйони"' },
        { color: '#FAE9C8', label: 'Контейнери' }
    ],
    'sector27': [
        { color: '#FAE9C8', label: 'Павільйони"' },
        { color: '#FAE9C8', label: 'Контейнери' }
    ],
    'sector28': [
        { color: '#FAE9C8', label: 'Павільйони"' },
        { color: '#FAE9C8', label: 'Контейнери' }
    ],
    'sector29': [
        { color: '#FAE9C8', label: 'Павільйони"' },
        { color: '#FAE9C8', label: 'Контейнери' }
    ],
    'sector30': [
        { color: '#FAE9C8', label: 'Павільйони"' },
        { color: '#FAE9C8', label: 'Контейнери' }
    ],
    'sector31': [
        { color: '#FAE9C8', label: 'Павільйони"' },
        { color: '#FAE9C8', label: 'Контейнери' }
    ],
    'sector32': [
        { color: '#FAE9C8', label: 'Павільйони"' },
        { color: '#FAE9C8', label: 'Контейнери' }
    ],
    'sector33': [
        { color: '#FAE9C8', label: 'Павільйони"' },
        { color: '#FAE9C8', label: 'Контейнери' }
    ],
    'sector-park1': { title: 'Автостоянка "Космос"', link: 'pages/parking.html' },
    'sector-park2': { title: 'Дворники', link: '#' }
};

// State management
let currentView = 'main'; // 'main' or 'detail'
let currentSector = null;
let isVerticalView = false;
let mainMapHTML = null; // Store original map HTML

document.addEventListener('DOMContentLoaded', () => {
    const mapWrapper = document.querySelector('.map-wrapper');
    const legendWrapper = document.querySelector('.legend-wrapper');
    const backButton = document.getElementById('back-to-main');
    const tooltip = document.getElementById('map-tooltip');
    const tooltipTitle = document.getElementById('tooltip-title');
    const tooltipLink = document.getElementById('tooltip-link');

    if (!mapWrapper || !legendWrapper) return;

    // Save the original main map HTML
    mainMapHTML = mapWrapper.innerHTML;

    // Initialize sector click handlers
    initializeSectorHandlers();

    // Back button handler
    if (backButton) {
        backButton.addEventListener('click', (e) => {
            e.preventDefault();
            loadMainMap();
        });
    }

    // Map Mode Toggle (Scheme vs Photo vs Vertical)
    const btnScheme = document.getElementById('btn-scheme');
    const btnPhoto = document.getElementById('btn-photo');
    const btnVertical = document.getElementById('btn-vertical');

    if (btnScheme && btnPhoto && btnVertical) {
        btnScheme.addEventListener('click', () => {
            // Set active state
            btnScheme.classList.add('selected');
            btnPhoto.classList.remove('selected');
            // We don't remove selected from btnVertical here as it can be combined with scheme view
            // though usually they might be exclusive. Let's make it work nicely.

            const currentMapPhotoImage = document.getElementById('map-photo-image');
            if (currentMapPhotoImage) {
                currentMapPhotoImage.style.display = 'none';
            }

            const svgs = mapWrapper.querySelectorAll('svg');
            svgs.forEach(svg => svg.style.display = 'block');
        });

        btnPhoto.addEventListener('click', () => {
            // Set active state
            btnPhoto.classList.add('selected');
            btnScheme.classList.remove('selected');
            // If in photo mode, vertical might not apply easily, but let's keep it simple

            const currentMapPhotoImage = document.getElementById('map-photo-image');
            if (currentMapPhotoImage) {
                currentMapPhotoImage.style.display = 'block';
            }

            const svgs = mapWrapper.querySelectorAll('svg');
            svgs.forEach(svg => svg.style.display = 'none');

            hideTooltip();
        });

        btnVertical.addEventListener('click', () => {
            isVerticalView = !isVerticalView;

            if (isVerticalView) {
                btnVertical.classList.add('selected');
            } else {
                btnVertical.classList.remove('selected');
            }

            // If we're already in a sector view, reload it with the vertical version
            if (currentView === 'detail' && currentSector) {
                loadSectorMap(currentSector);
            }
        });
    }

    // Helper to hide tooltip
    function hideTooltip() {
        if (tooltip) {
            tooltip.style.display = 'none';
            tooltip.style.opacity = '0';
        }
    }

    // Helper to show tooltip
    function showTooltip(x, y, data) {
        if (!tooltip) return;

        tooltipTitle.textContent = data.title || 'Сектор ринку';
        tooltipLink.href = data.link || '#';

        tooltip.style.display = 'block';
        requestAnimationFrame(() => {
            tooltip.style.opacity = '1';
        });

        const tooltipRect = tooltip.getBoundingClientRect();
        let top = y - tooltipRect.height - 10;
        let left = x - (tooltipRect.width / 2);

        if (left < 10) left = 10;
        if (left + tooltipRect.width > window.innerWidth - 10) {
            left = window.innerWidth - tooltipRect.width - 10;
        }
        if (top < 10) {
            top = y + 20;
        }

        tooltip.style.top = `${top + window.scrollY}px`;
        tooltip.style.left = `${left + window.scrollX}px`;
    }

    // Initialize sector click handlers
    function initializeSectorHandlers() {
        const sectors = document.querySelectorAll('.sector');

        sectors.forEach(sector => {
            sector.style.cursor = 'pointer';

            sector.addEventListener('click', (e) => {
                e.preventDefault();
                e.stopPropagation();

                const sectorId = sector.id;

                // Check if this sector has a detailed map
                if (sectorMaps[sectorId]) {
                    loadSectorMap(sectorId);
                } else {
                    // Show tooltip for sectors without detailed maps
                    const data = sectorData[sectorId] || {
                        title: `Сектор ${sectorId.replace('sector', '')}`,
                        link: '#'
                    };

                    const clickX = e.clientX;
                    const clickY = e.clientY;
                    showTooltip(clickX, clickY, data);
                }
            });
        });

        // Close tooltip when clicking outside
        document.addEventListener('click', (e) => {
            if (tooltip && !tooltip.contains(e.target) && !e.target.classList.contains('sector')) {
                hideTooltip();
            }
        });

        // Close on scroll
        window.addEventListener('scroll', () => {
            hideTooltip();
        }, { passive: true });
    }

    // Load detailed sector map
    function loadSectorMap(sectorId) {
        hideTooltip();
        let svgPath = sectorMaps[sectorId];

        if (!svgPath) return;

        // If vertical view is enabled, try to load the vertical version
        if (isVerticalView) {
            svgPath = svgPath.replace('.svg', '-v.svg');
        }

        currentView = 'detail';
        currentSector = sectorId;

        // Show back button
        if (backButton) {
            backButton.style.display = 'inline-flex';
        }

        // Load SVG
        fetch(svgPath)
            .then(response => response.text())
            .then(svgContent => {
                mapWrapper.innerHTML = svgContent;

                // Re-insert the photo image if it's missing (since innerHTML rewrite removes it)
                const newImage = document.createElement('img');
                newImage.src = 'assets/img/map-3D.png';
                newImage.id = 'map-photo-image';
                newImage.style.width = '100%';
                newImage.style.height = 'auto';
                newImage.alt = 'Фото ринку';

                // Check current mode to set initial display
                const btnPhoto = document.getElementById('btn-photo');
                if (btnPhoto && btnPhoto.classList.contains('selected')) {
                    newImage.style.display = 'block';
                    // Hide the newly loaded SVG
                    const svg = mapWrapper.querySelector('svg');
                    if (svg) svg.style.display = 'none';
                } else {
                    newImage.style.display = 'none';
                }

                mapWrapper.prepend(newImage);
                // No need to update mapPhotoImage variable since we use getElementById in toggle handlers

                updateLegend(sectorId);
            })
            .catch(error => {
                console.error('Error loading sector map:', error);
                loadMainMap(); // Fallback to main map
            });
    }

    // Load main map
    function loadMainMap() {
        hideTooltip();
        currentView = 'main';
        currentSector = null;
        isVerticalView = false;

        // Reset button state
        const btnVertical = document.getElementById('btn-vertical');
        if (btnVertical) {
            btnVertical.classList.remove('selected');
        }

        // Hide back button
        if (backButton) {
            backButton.style.display = 'none';
        }

        // Restore main map
        mapWrapper.innerHTML = mainMapHTML;

        // Restore main legend
        updateLegend(null);

        // Re-initialize sector handlers
        initializeSectorHandlers();
    }

    // Update legend based on current view
    function updateLegend(sectorId) {
        const legendList = legendWrapper.querySelector('.legend-list');
        if (!legendList) return;

        if (sectorId && detailedLegends[sectorId]) {
            // Show detailed legend
            const legend = detailedLegends[sectorId];
            let html = '';

            legend.forEach(item => {
                if (item.icon) {
                    html += `
                        <li class="legend-item">
                            <img src="${item.icon}" loading="lazy" alt="${item.label}" class="icon-wrapper">
                            <span>${item.label}</span>
                        </li>
                    `;
                } else {
                    html += `
                        <li class="legend-item">
                            <span class="legend-marker" style="background-color: ${item.color};"></span>
                            <span>${item.label}</span>
                        </li>
                    `;
                }
            });

            legendList.innerHTML = html;
        } else {
            // Restore main legend
            legendList.innerHTML = `
                <li class="legend-item">
                    <span class="legend-marker" style="background-color: #c70926;"></span>
                    <span>Адміністрація</span>
                </li>
                <li class="legend-item">
                    <span class="legend-marker" style="background-color: #837e7f;"></span>
                    <span>Автостоянка "Космос"</span>
                </li>
                <li class="legend-item">
                    <span class="legend-marker" style="background-color: #CADCC6;"></span>
                    <span>Областя</span>
                </li>
                <li class="legend-item">
                    <span class="legend-marker" style="background-color: #8FC9CA;"></span>
                    <span>Павільон "Стріла"</span>
                </li>
                <li class="legend-item">
                    <span class="legend-marker" style="background-color: #f3a6b2;"></span>
                    <span>Павільон "Київ"</span>
                </li>
                <li class="legend-item">
                    <span class="legend-marker" style="background-color: #B7CFB7;"></span>
                    <span>Павільон "Одеса"</span>
                </li>
                <li class="legend-item">
                    <span class="legend-marker" style="background-color: #F9E0CC;"></span>
                    <span>Павільон "Марс"</span>
                </li>
                <li class="legend-item">
                    <span class="legend-marker" style="background-color: #E2D9EB;"></span>
                    <span>Павільон "Зміїний"</span>
                </li>
                <li class="legend-item">
                    <span class="legend-marker" style="background-color: #BDD2E0;"></span>
                    <span>Павільон "Дорожня"</span>
                </li>
                <li class="legend-item">
                    <span class="legend-marker" style="background-color: #FFFEBD;"></span>
                    <span>Павільон "Дім"</span>
                </li>
                <li class="legend-item">
                    <img src="assets/svg_icons/car.svg" loading="lazy" alt="Машина" class="icon-wrapper">
                    <span>СТО</span>
                </li>
                <li class="legend-item">
                    <img src="assets/svg_icons/wc.svg" loading="lazy" alt="Туалет" class="icon-wrapper">
                    <span>Туалети</span>
                </li>
            `;
        }
    }

    // Product filters functionality
    initializeProductFilters();

    function initializeProductFilters() {
        const filterCheckboxes = document.querySelectorAll('.optovyi-options__checkbox');
        const filterCounter = document.querySelector('.optovyi-filter__counter');
        const clearButton = document.querySelector('.optovyi-filter__footer .optovyi-button');
        const searchInput = document.querySelector('.optovyi-search__input');

        // Update counter
        function updateFilterCounter() {
            const checkedCount = document.querySelectorAll('.optovyi-options__checkbox:checked').length;
            if (filterCounter) {
                filterCounter.textContent = checkedCount;
            }
        }

        // Add event listeners to all checkboxes
        filterCheckboxes.forEach(checkbox => {
            checkbox.addEventListener('change', updateFilterCounter);
        });

        // Clear all filters
        if (clearButton) {
            clearButton.addEventListener('click', () => {
                filterCheckboxes.forEach(checkbox => {
                    checkbox.checked = false;
                });
                updateFilterCounter();
            });
        }

        // Search functionality for filters
        if (searchInput) {
            searchInput.addEventListener('input', (e) => {
                const searchTerm = e.target.value.toLowerCase();
                const filterItems = document.querySelectorAll('.optovyi-options__item');

                filterItems.forEach(item => {
                    const label = item.querySelector('span:last-child');
                    if (label) {
                        const text = label.textContent.toLowerCase();
                        if (text.includes(searchTerm)) {
                            item.style.display = '';
                        } else {
                            item.style.display = 'none';
                        }
                    }
                });
            });
        }

        // Initialize counter
        updateFilterCounter();

        // Mobile Filter Modal Logic
        const mobileFilterBtn = document.getElementById('mobile-filter-btn');
        const filtersSidebar = document.getElementById('filters-sidebar');
        const closeFiltersBtn = document.getElementById('close-filters');

        if (mobileFilterBtn && filtersSidebar && closeFiltersBtn) {
            mobileFilterBtn.addEventListener('click', () => {
                filtersSidebar.classList.add('is-open');
                document.body.classList.add('filters-open');
            });

            closeFiltersBtn.addEventListener('click', () => {
                filtersSidebar.classList.remove('is-open');
                document.body.classList.remove('filters-open');
            });

            // Close modal on escape key
            document.addEventListener('keydown', (e) => {
                if (e.key === 'Escape' && filtersSidebar.classList.contains('is-open')) {
                    filtersSidebar.classList.remove('is-open');
                    document.body.classList.remove('filters-open');
                }
            });
        }
    }
});
