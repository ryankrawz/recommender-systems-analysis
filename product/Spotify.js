
import Section from './components/section.js';

// renders product page
function Spotify(product) {
    
    let html = `
    <header id='main-header'>
        <h1 id='main-header-text'>Spotify</h1>
    </header>
    `;

    product.sections.forEach(section => {
        html += Section(section);
    });

    return html;
}

export default Spotify;