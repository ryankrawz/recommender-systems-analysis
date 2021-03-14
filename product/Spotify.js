
import Section from './components/section.js';

// renders product page
function Spotify(product) {
    
    let html = ``;

    product.sections.forEach(section => {
        html += Section(section);
    });

    return html;
}

export default Spotify;