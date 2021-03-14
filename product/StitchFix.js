
import Section from './components/section.js';

// renders product page
function StitchFix(product) {
    
    let html = ``;

    product.sections.forEach(section => {
        html += Section(section);
    });

    return html;
}

export default StitchFix;