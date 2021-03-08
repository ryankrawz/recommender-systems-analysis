// Create main page header
export default function getHeader(products) {
    return `
        <h1 id="main-header-text">Recommender Systems</h1>
        ${products.map(p => {
            return `<img id="${p.id}-header-img" class="header-img" src="${p.shortlogo}" alt="${p.name}">`;
        }).join('')}
    `;
}
