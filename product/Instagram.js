
import Section from './components/section.js';

// renders product page
function Instagram(product) {
    
    let html = ``;

    product.sections.forEach(section => {
        html += Section(section);
    });

    return html;
}

export default Instagram;