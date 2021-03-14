
import Section from './components/section.js';

// renders product page
function Instagram(product) {
    
    let html = `
        <header id='main-header'>
            <h1 id='main-header-text'>Instagram</h1>
        </header>
    `;

    product.sections.forEach(section => {
        html += Section(section);
    });

    return html;
}

export default Instagram;