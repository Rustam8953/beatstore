const navWindow = document.querySelector('.nav-box');

const navHTML = `
    <div class="fixed">
        <div class="nav">
            <div class="nav-left">
                <div class="nav-mobile">
                    <div class="nav-burger">
                        <div class="nav-burger-block">
                            <div class="nav-line line1"></div>
                            <div class="nav-line line2"></div>
                            <div class="nav-line line3"></div>
                        </div>
                    </div>
                </div>
                <a href="index.html" class="nav-logog-link">
                    <div class="nav-logo"></div>
                </a>
            </div>
            
            <div class="nav-right">
                <div class="nav-list">
                    <a href="./index.html" class="nav-link nav-home">
                        <i class="nav-link-icon">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-house-door-fill" viewBox="0 0 16 16">
                                <path d="M6.5 14.5v-3.505c0-.245.25-.495.5-.495h2c.25 0 .5.25.5.5v3.5a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5z"/>
                            </svg>
                        </i>
                        Home
                    </a>
                    <div class="nav-link">
                        <i class="nav-link-icon">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-music-note" viewBox="0 0 16 16">
                                <path d="M9 13c0 1.105-1.12 2-2.5 2S4 14.105 4 13s1.12-2 2.5-2 2.5.895 2.5 2z"/>
                                <path fill-rule="evenodd" d="M9 3v10H8V3h1z"/>
                                <path d="M8 2.82a1 1 0 0 1 .804-.98l3-.6A1 1 0 0 1 13 2.22V4L8 5V2.82z"/>
                            </svg>
                        </i> 
                        Beats
                    </div>
                    <a href="./sound-kits.html" class="nav-link nav-kits">
                        <i class="nav-link-icon">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-soundwave" viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M8.5 2a.5.5 0 0 1 .5.5v11a.5.5 0 0 1-1 0v-11a.5.5 0 0 1 .5-.5zm-2 2a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zm4 0a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zm-6 1.5A.5.5 0 0 1 5 6v4a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm8 0a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm-10 1A.5.5 0 0 1 3 7v2a.5.5 0 0 1-1 0V7a.5.5 0 0 1 .5-.5zm12 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0V7a.5.5 0 0 1 .5-.5z"/>
                            </svg>
                        </i>
                        Sound Kits
                    </a>
                    <a href="./contact.html" class="nav-link nav-contact">
                        <i class="nav-link-icon">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-rolodex" viewBox="0 0 16 16">
                                <path d="M8 9.05a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z"/>
                                <path d="M1 1a1 1 0 0 0-1 1v11a1 1 0 0 0 1 1h.5a.5.5 0 0 0 .5-.5.5.5 0 0 1 1 0 .5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5.5.5 0 0 1 1 0 .5.5 0 0 0 .5.5h.5a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1H6.707L6 1.293A1 1 0 0 0 5.293 1H1Zm0 1h4.293L6 2.707A1 1 0 0 0 6.707 3H15v10h-.085a1.5 1.5 0 0 0-2.4-.63C11.885 11.223 10.554 10 8 10c-2.555 0-3.886 1.224-4.514 2.37a1.5 1.5 0 0 0-2.4.63H1V2Z"/>
                            </svg>
                        </i>
                        Contact
                    </a>
                </div>
                <div class="nav-fun">
                    <div class="nav-cart">
                        <div class="nav-click">
                            <div class="nav-cart-img">
                                <div class="nav-cart-icon">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" class="bi bi-bag" viewBox="0 0 16 16">
                                        <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z"/>
                                    </svg>
                                </div>
                                <div class="cart-length">
                                    <div class="cart-length-num">0</div>
                                </div>
                            </div>
                            <div class="nav-cart-num">
                                <span class="nav-cart-val"></span>
                                <span class="nav-cart-price"></span>
                            </div>
                        </div>
                        <div class="cart-block display-none">
                            <div class="cart-list">
                                
                            </div>
                            <div class="cart-action">
                                <a href="./cart.html" class="cart-btn-light">PROCEED TO CHECKOUT</a>
                                <a href="" class="cart-btn-dark">CONTINUE SHOPPING</a>
                            </div>
                        </div>
                    </div>
                    <a href="https://oauth.beatstars.com/verify?app=WEB_MARKETPLACE&version=3.14.0&origin=https:%2F%2Fwww.beatstars.com%2F&send_callback=true&t=dark-theme" class="nav-login">
                        <div class="nav-login-icon">
                            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" class="bi bi-person" viewBox="0 0 16 16">
                                <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z"/>
                            </svg>
                        </div>
                        <div class="nav-login-text">Log in</div>
                    </a>
                </div>
            </div>
        </div>
    </div>`;
navWindow.insertAdjacentHTML('beforeend', navHTML);