
import Section from './components/section.js';

// renders product page
function Netflix(product) {

    let html = `
    <header id='main-header'>
        <h1 id='main-header-text'>Netflix</h1>
    </header>
    `;

    product.sections.forEach(section => {
        html += Section(section);
    });

    return html;
}

export default Netflix;