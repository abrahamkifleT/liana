/* ===================================================
   Liana Wallet - Main JavaScript
   =================================================== */

(function () {
    'use strict';

    /* ---- Scroll to Top ---- */
    const scrollTopBtn = document.getElementById('scrollTop');

    window.addEventListener('scroll', function () {
        if (window.scrollY > 400) {
            scrollTopBtn.classList.add('visible');
        } else {
            scrollTopBtn.classList.remove('visible');
        }
    });

    if (scrollTopBtn) {
        scrollTopBtn.addEventListener('click', function () {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }

    /* ---- Sticky Header ---- */
    const header = document.getElementById('mainHeader');

    window.addEventListener('scroll', function () {
        if (window.scrollY > 60) {
            header.classList.add('sticky');
        } else {
            header.classList.remove('sticky');
        }
    });

    /* ---- Offcanvas (Mobile Menu) ---- */
    const menuOpen     = document.getElementById('menuOpen');
    const menuClose    = document.getElementById('menuClose');
    const offcanvasArea    = document.getElementById('offcanvasArea');
    const offcanvasOverlay = document.getElementById('offcanvasOverlay');

    function openMenu() {
        offcanvasArea.classList.add('active');
        offcanvasOverlay.classList.add('active');
        document.body.style.overflow = 'hidden';
    }

    function closeMenu() {
        offcanvasArea.classList.remove('active');
        offcanvasOverlay.classList.remove('active');
        document.body.style.overflow = '';
    }

    if (menuOpen)    menuOpen.addEventListener('click', openMenu);
    if (menuClose)   menuClose.addEventListener('click', closeMenu);
    if (offcanvasOverlay) offcanvasOverlay.addEventListener('click', closeMenu);

    // Close offcanvas when any link inside it is clicked
    const offcanvasLinks = document.querySelectorAll('.offcanvas__menu a');
    offcanvasLinks.forEach(function (link) {
        link.addEventListener('click', closeMenu);
    });

    /* ---- Swiper – Future Slider ---- */
    if (typeof Swiper !== 'undefined') {
        const futureSwiper = new Swiper('.future__slider', {
            loop: true,
            effect: 'fade',
            fadeEffect: { crossFade: true },
            speed: 700,
            autoplay: {
                delay: 5000,
                disableOnInteraction: false,
            },
            pagination: {
                el: '.future__slider .swiper-pagination',
                clickable: true,
            },
        });
    }

    /* ---- Animate sections on scroll (Intersection Observer) ---- */
    const animItems = document.querySelectorAll(
        '.facility__single, .tutorial__single, .service__single, .future__content, .control__content, .faq__title'
    );

    if ('IntersectionObserver' in window) {
        const observer = new IntersectionObserver(function (entries) {
            entries.forEach(function (entry) {
                if (entry.isIntersecting) {
                    entry.target.classList.add('anim-in');
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.15 });

        animItems.forEach(function (el) {
            el.classList.add('anim-ready');
            observer.observe(el);
        });
    }

    /* ---- Background image data-attribute handler ---- */
    const bgImgEls = document.querySelectorAll('[data-background-image]');
    bgImgEls.forEach(function (el) {
        const src = el.getAttribute('data-background-image');
        if (src) el.style.backgroundImage = 'url("' + src + '")';
    });

})();
