import getProducts from './components/products.js';

// Link to product specific-page on button click
function addLearnMoreButtonHandler() {
    const learnMoreButtons = document.querySelectorAll('.product-button');
    learnMoreButtons.forEach(b => b.addEventListener('click', function(event) {
        location.href = `?product=${event.target.name}`;
    }));
}

// Search products by user input
// function addProductSearchHandler(products) {
//     document.querySelector('.search').addEventListener('input', function(event) {
//         const searchExp = new RegExp(`${event.target.value}`, 'i');
//         const matchingProducts = products.filter(p => searchExp.test(p.name));
//         document.querySelector('#products-section').innerHTML = getProducts(matchingProducts);
//         addLearnMoreButtonHandler();
//     });
// }

// Add event handlers to main page
export default function addHandlers(products) {
    // addProductSearchHandler(products);
    addLearnMoreButtonHandler();
}
