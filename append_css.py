
css_content = """
/* Services Page Styles */

/* Service Cards (Top Grid) */
.card-services {
    background-color: #ffffff;
    border-radius: 12px;
    padding: 24px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 24px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
    text-decoration: none;
    color: #333;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    height: 100%;
}

.card-services:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
}

.card-heading-arrow {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
}

.card-heading-arrow h5 {
    font-size: 18px;
    font-weight: 700;
    margin: 0;
    color: #2e4761;
}

/* Rent Cards (Numbered) */
.grid-3r-cards {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 24px;
    margin-top: 40px;
}

.card--rent {
    background-color: #F4F9F5;
    border-radius: 12px;
    padding: 32px;
    display: flex;
    flex-direction: column;
    gap: 16px;
}

.card--rent h5 {
    font-size: 18px;
    font-weight: 700;
    margin: 0;
    color: #333;
    line-height: 1.4;
}

/* Benefit Cards */
.card--benefit {
    background-color: #F4F9F5;
    border-radius: 12px;
    padding: 32px;
    display: flex;
    align-items: center;
}

/* Detailed Service Sections */
.container-services-rental,
.container-services-coldrooms,
.container-services-commercial,
.container-services-parking,
.container-services-wc {
    padding-top: 80px;
    padding-bottom: 80px;
    border-bottom: 1px solid #eee;
}

.service-heading {
    margin-bottom: 40px;
}

.service-title {
    display: flex;
    align-items: center;
    gap: 20px;
    margin-bottom: 24px;
}

.services-heading {
    display: flex;
    flex-direction: column;
}

.overline-number {
    font-size: 12px;
    font-weight: 700;
    color: #888;
    text-transform: uppercase;
    letter-spacing: 1px;
    margin-bottom: 4px;
}

.service-img-map {
    display: grid;
    grid-template-columns: 1.5fr 1fr;
    gap: 40px;
    margin-bottom: 40px;
}

.services-img img,
.services-map img {
    width: 100%;
    height: auto;
    border-radius: 12px;
    object-fit: cover;
}

.services-map {
    background-color: #f9f9f9;
    padding: 20px;
    border-radius: 12px;
    display: flex;
    flex-direction: column;
    gap: 10px;
}

.service-description {
    margin-top: 40px;
}

.service-ul {
    display: flex;
    flex-direction: column;
    gap: 24px;
}

.pavilion-info {
    background-color: #fff;
    padding: 24px;
    border-radius: 12px;
    border: 1px solid #eee;
}

.grid-2col {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px;
}

.service-li {
    display: flex;
    flex-direction: column;
    gap: 8px;
}

.li-heading {
    font-size: 12px;
    font-weight: 700;
    text-transform: uppercase;
    color: #888;
    letter-spacing: 0.5px;
}

/* Commercial Section Extras */
.card--feature {
    background-color: #fff;
    padding: 24px;
    border-radius: 12px;
    box-shadow: 0 4px 12px rgba(0,0,0,0.05);
    display: flex;
    align-items: flex-start;
    gap: 16px;
}

.card--feature.green {
    background-color: #F4F9F5;
    box-shadow: none;
}

.card__heading--feature {
    font-size: 16px;
    font-weight: 700;
    margin-bottom: 8px;
    color: #333;
}

.about-text-block {
    background-color: #fff;
    padding: 32px;
    border-radius: 12px;
    margin: 40px 0;
}

.about-text-block.green {
    background-color: #F4F9F5;
}

.li-wrapper {
    display: flex;
    flex-direction: column;
    gap: 16px;
}

.li-icon {
    display: flex;
    gap: 12px;
    align-items: flex-start;
}

.li-bullet, .icon-check {
    width: 20px;
    height: 20px;
    flex-shrink: 0;
    margin-top: 2px;
}

.col-text-img {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 40px;
    align-items: center;
    margin: 40px 0;
}

.img-commercial {
    width: 100%;
    border-radius: 20px;
}

.icon-wrapper.light {
    background-color: #ffffff;
}

.icon-wrapper.large {
    width: 64px;
    height: 64px;
    padding: 16px;
}

/* Responsive */
@media (max-width: 991px) {
    .grid-3r-cards {
        grid-template-columns: 1fr;
    }
    
    .service-img-map {
        grid-template-columns: 1fr;
    }
    
    .col-text-img {
        grid-template-columns: 1fr;
    }
}
"""

with open('src/frontend/css/index.css', 'a', encoding='utf-8') as f:
    f.write(css_content)
