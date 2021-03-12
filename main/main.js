import addHandlers from './interactions.js';
import getHeader from './components/header.js';
import getProducts from './components/products.js';
import getSearchBar from './components/searchbar.js';
import getNavbar from './components/navBar.js'

// Render search bar and list of products
export default function renderMainPage(products) {
    document.querySelector('.container').innerHTML = `
        <div class = "nav">
        ${getNavbar()}
        </br>
        </br>
        </br>


        </div>

        <header id="main-header">
            ${getHeader(products)}
        </header>
        
        <main id="main-content">
            ${getSearchBar()}
            <section id="products-section">
                ${getProducts(products)}
            </section>
        </main>
    `;
    addHandlers(products);
}
