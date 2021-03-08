import addHandlers from './interactions.js';
import getHeader from './components/header.js';
import getProducts from './components/products.js';
import getSearchBar from './components/searchbar.js';

// Render search bar and list of products
export default function renderMainPage(products) {
    document.querySelector('body').innerHTML = `
        <header id="main-header">
            ${getHeader(products)}
        </header>
        <main id="main-content">
            ${getSearchBar()}
            ${getProducts(products)}
        </main>
    `;
    addHandlers(products);
}
