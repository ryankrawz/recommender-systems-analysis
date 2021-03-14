export default function getNavbar(page){
    return `
    <nav>
    <div class="navbar">
        <div class="nav-item"><a href="/">Home</a></div>
        <div class="nav-item"><a href="/?product=stitchfix">StitchFix</a></div>
        <div class="nav-item"><a href="/?product=spotify">Spotify</a></div>
        <div class="nav-item"><a href="/?product=netflix">Netflix</a></div>
        <div class="nav-item"><a href="/?product=instagram">Instagram</a></div>
    </div>
  </nav> 
  
    `;
  }