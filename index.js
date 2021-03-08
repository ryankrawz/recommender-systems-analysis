import renderMainPage from './main/main.js';
import renderProductPage from './product/product.js';

// Page loading process
const dataTarget = 'data.json';
fetch(dataTarget).then(response => {
    if (!response.ok) {
        console.error(`Failed to retrieve '${dataTarget}' with status code ${response.status}`);
    }
    return response.json();
}).then(data => {
    const urlParams = new URLSearchParams(window.location.search);
    const currentProductId = urlParams.get('product');
    if (currentProductId) {
        const matchingProducts = data.products.filter(p => p.id === currentProductId);
        if (matchingProducts.length === 1) {
            renderProductPage(matchingProducts[0]);
        } else {
            console.error(`Zero or multiple products found for id '${currentProductId}'`);
            renderMainPage(data.products);
        }
    } else {
        renderMainPage(data.products);
    }
});
