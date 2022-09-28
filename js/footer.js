const footerWindow = document.querySelector('.footer')

const footerHTML = `
<div class="footer-box">
    <div class="footer-icon per-25">
        <a href="./index.html" class="footer-logo">DANSONN</a>
    </div>
    <div class="footer-block per-50">
        <div class="footer-list">
            <a href="./index.html" class="footer-list-link">Home</a>
            <a href="./index.html" class="footer-list-link">Beats</a>
            <a href="./index.html" class="footer-list-link">Sound Kits</a>
        </div>
        <div class="footer-list">
            <a href="./index.html" class="footer-list-link">About</a>
            <a href="./index.html" class="footer-list-link">Contact</a>
        </div>
        <div class="footer-list">
            <a href="./index.html" class="footer-list-link">License Info</a>
            <a href="./index.html" class="footer-list-link">Terms of use</a>
            <a href="./index.html" class="footer-list-link">Privacy Policy</a>
        </div>
    </div>
    <div class="footer-soc per-25"></div>
</div>`;

footerWindow.insertAdjacentHTML('beforeend', footerHTML);