(function(){
    'use strict'

    const btnOpenMenu = document.querySelector('.icon-menu');
    const DOMbody = document.querySelector('body');
    const containerMenu = document.querySelector('.container-menu');
    
    btnOpenMenu.addEventListener('click', function(){
        DOMbody.style.overflow = 'hidden';
        containerMenu.classList.add('menu-open');
    })

    const btnCloseMenu = document.querySelector('.ico-menu--close');
    btnCloseMenu.addEventListener('click', function(){
        DOMbody.style.overflow = '';
        containerMenu.classList.remove('menu-open');
    })

})();
