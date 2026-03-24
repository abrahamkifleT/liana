/* ===================================================
   Liana Business – JavaScript
   =================================================== */

(function () {
    'use strict';

    /* ---- Scroll to Top ---- */
    const scrollTopBtn = document.getElementById('scrollTop');

    window.addEventListener('scroll', function () {
        if (scrollTopBtn) {
            if (window.scrollY > 400) {
                scrollTopBtn.classList.add('visible');
            } else {
                scrollTopBtn.classList.remove('visible');
            }
        }
    });

    if (scrollTopBtn) {
        scrollTopBtn.addEventListener('click', function () {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }

    /* ---- Sticky Header ---- */
    const header = document.getElementById('mainHeader');

    if (header) {
        window.addEventListener('scroll', function () {
            if (window.scrollY > 60) {
                header.classList.add('sticky');
            } else {
                header.classList.remove('sticky');
            }
        });
    }

    /* ---- Offcanvas (Mobile Menu) ---- */
    const menuOpen         = document.getElementById('menuOpen');
    const menuClose        = document.getElementById('menuClose');
    const offcanvasArea    = document.getElementById('offcanvasArea');
    const offcanvasOverlay = document.getElementById('offcanvasOverlay');

    function openMenu() {
        if (offcanvasArea && offcanvasOverlay) {
            offcanvasArea.classList.add('active');
            offcanvasOverlay.classList.add('active');
            document.body.style.overflow = 'hidden';
        }
    }

    function closeMenu() {
        if (offcanvasArea && offcanvasOverlay) {
            offcanvasArea.classList.remove('active');
            offcanvasOverlay.classList.remove('active');
            document.body.style.overflow = '';
        }
    }

    if (menuOpen)    menuOpen.addEventListener('click', openMenu);
    if (menuClose)   menuClose.addEventListener('click', closeMenu);
    if (offcanvasOverlay) offcanvasOverlay.addEventListener('click', closeMenu);

    document.querySelectorAll('.offcanvas__menu a').forEach(function (link) {
        link.addEventListener('click', closeMenu);
    });

    /* ---- Bitcoin Custody Slider ---- */
    if (typeof Swiper !== 'undefined') {
        new Swiper('.biz-bitcoin__slider', {
            loop: true,
            slidesPerView: 'auto',
            spaceBetween: 24,
            centeredSlides: false,
            navigation: {
                nextEl: '.biz-bitcoin__next',
                prevEl: '.biz-bitcoin__prev',
            },
            breakpoints: {
                0: {
                    slidesPerView: 1.15,
                    spaceBetween: 16,
                },
                576: {
                    slidesPerView: 1.5,
                    spaceBetween: 20,
                },
                768: {
                    slidesPerView: 2.2,
                    spaceBetween: 24,
                },
                1200: {
                    slidesPerView: 3.3,
                    spaceBetween: 24,
                },
            },
        });

        /* ---- Tutorial Steps Slider ---- */
        new Swiper('.biz-tutorial__slider', {
            loop: true,
            effect: 'slide',
            speed: 600,
            autoplay: {
                delay: 4000,
                disableOnInteraction: false,
            },
            pagination: {
                el: '.biz-tutorial__pagination',
                clickable: true,
            },
        });
    }

    /* ---- Animate sections on scroll ---- */
    const animItems = document.querySelectorAll(
        '.biz-stat__card, .biz-bitcoin__card, .biz-responsibility__card, .biz-uc__card, .biz-tutorial__single, .biz-custodial__mock-card'
    );

    if ('IntersectionObserver' in window) {
        const observer = new IntersectionObserver(function (entries) {
            entries.forEach(function (entry) {
                if (entry.isIntersecting) {
                    entry.target.classList.add('anim-in');
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.12 });

        animItems.forEach(function (el) {
            el.classList.add('anim-ready');
            observer.observe(el);
        });
    }

})();
