export function animationPack() {
    const sr = ScrollReveal({
        // reset: true,
        distance: '60px',
        duration: 800,
        delay: 100,
        // origin: top / left / right / bottom
    });

    sr.reveal('.home__header, .section__title', {delay: 0});
    sr.reveal('.home__footer', {delay: 100});
    sr.reveal('.home__img', {delay: 200, origin: 'top'});

    sr.reveal('.sponsor__img, .product__card', {origin: 'top', interval: 100});
    sr.reveal('.specs__data, .discount__animate', {origin: 'left', interval: 100});
    sr.reveal('.specs__img, .discount__img', {origin: 'right'});

    sr.reveal('.case__img', {origin: 'left'});
    sr.reveal('.case__data', {});

    sr.reveal('.footer__logo, .footer__content, .footer__copy', {origin: 'bottom', interval: 100});
    // sr.reveal('.footer__copy', {origin: 'left', delay: 1000});
}