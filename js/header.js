(function(){
    'use strict'

    window.addEventListener('scroll', function(){
        const header = document.querySelector('.container-header');
        const sticky =  header.offsetTop;
        
        if(this.pageYOffset > sticky){
            header.classList.add('header-fixed');
        }else{
            header.classList.remove('header-fixed');
        }
    })
})();
