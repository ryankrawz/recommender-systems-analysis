
import StitchFix from './StitchFix.js';
import Spotify from './Spotify.js';
import Netflix from './Netflix.js';
import Instagram from './Instagram.js';

// Render product-specific page
export default function renderProductPage(product) {

    switch (product.id) {
        case 'stitchfix': 
            document.getElementsByClassName('container')[0].innerHTML = StitchFix(product);
            break;
        case 'spotify': 
            document.getElementsByClassName('container')[0].innerHTML = Spotify(product);
            break;
        case 'netflix': 
            document.getElementsByClassName('container')[0].innerHTML = Netflix(product);
            break;
        case 'instagram': 
            document.getElementsByClassName('container')[0].innerHTML = Instagram(product);
            break;
    }
        
    

}
