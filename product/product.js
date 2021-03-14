
import StitchFix from './StitchFix.js';
import Spotify from './Spotify.js';
import Netflix from './Netflix.js';
import Instagram from './Instagram.js';
import NavBar from '../main/components/navBar.js';

// Render product-specific page
export default function renderProductPage(product) {

    switch (product.id) {
        case 'stitchfix': 
            document.querySelector('.container').innerHTML = `
                ${NavBar()}
                ${StitchFix(product)}
            `;
            break;
        case 'spotify': 
            document.querySelector('.container').innerHTML = `
                ${NavBar()}
                ${Spotify(product)}
            `;
            break;
        case 'netflix': 
            document.querySelector('.container').innerHTML = `
                ${NavBar()}
                ${Netflix(product)}
            `;
            break;
        case 'instagram': 
            document.querySelector('.container').innerHTML = `
                ${NavBar()}
                ${Instagram(product)}
            `;
            break;
    }
}
