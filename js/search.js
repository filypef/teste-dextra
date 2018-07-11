(function(){
    'use strict'
    
    const btnSearch = document.querySelector('.ico-search');

    btnSearch.addEventListener('click', function(e){
        e.preventDefault();

        const containerSearch = document.querySelector('.container-search');
        
        if(containerSearch.classList.contains('display-none')){
            containerSearch.classList.remove('display-none');
        }else{
            containerSearch.classList.add('display-none');
        }
    })
})();
