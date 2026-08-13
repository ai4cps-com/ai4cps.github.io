/*!
* Start Bootstrap - Modern Business v5.0.7 (https://startbootstrap.com/template-overviews/modern-business)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-modern-business/blob/master/LICENSE)
*/
// Close the responsive navigation after selecting a destination.
document.querySelectorAll('.mobile-menu a').forEach((link) => {
    link.addEventListener('click', () => {
        link.closest('.mobile-menu')?.removeAttribute('open');
    });
});
