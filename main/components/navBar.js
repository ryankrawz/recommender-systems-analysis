export default function getNavbar(page){
    return `
    <nav>
    <div class="navbar">
        <div class="nav-item"><a class="nav-link" href="/recommender-systems-analysis">Home</a></div>
        <div class="nav-item"><a class="nav-link" href="/recommender-systems-analysis/?product=stitchfix">StitchFix</a></div>
        <div class="nav-item"><a class="nav-link" href="/recommender-systems-analysis/?product=spotify">Spotify</a></div>
        <div class="nav-item"><a class="nav-link" href="/recommender-systems-analysis/?product=netflix">Netflix</a></div>
        <div class="nav-item"><a class="nav-link" href="/recommender-systems-analysis/?product=instagram">Instagram</a></div>
    </div>
  </nav>

    `;
  }
