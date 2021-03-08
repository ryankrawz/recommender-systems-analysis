// Create list of products with logo and short description
export default function getProducts(products) {
    return `
        <section id="products-section">
            ${products.map(p => {
                return `
                    <div id="${p.id}-container" class="product-container">
                        <img id="${p.id}-section-img" class="section-img" src="${p.longlogo}" alt="${p.name}">
                        <span id="${p.id}-shortdesc" class="product-shortdesc">${p.shortdesc}</span>
                        <a id="${p.id}-button" class="product-button" href="?product=${p.id}" style="background-color:${p.primarycolor};">
                            Learn More <i class="fas fa-angle-double-right"></i>
                        </a>
                    </div>
                `;
            }).join('')}
        </section>
    `;
}
