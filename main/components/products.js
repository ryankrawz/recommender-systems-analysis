// Create list of products with logo and short description
export default function getProducts(products) {
    return products.map(p => {
        return `
            <div id="${p.id}-container" class="product-container">
                <img id="${p.id}-section-img" class="section-img" src="${p.longlogo}" alt="${p.name}">
                <span id="${p.id}-shortdesc" class="product-shortdesc">${p.shortdesc}</span>
                <button id="${p.id}-button" name="${p.id}" class="product-button" style="background-color:${p.primarycolor};">
                    Learn More <i class="fas fa-angle-double-right"></i>
                </button>
            </div>
        `;
    }).join('');
}
