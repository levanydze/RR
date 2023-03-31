var modalBtn = document.querySelector('.modal-btn');
var modalBg = document.querySelector('.my-reserv-bg');
var modalClose = document.querySelector('.res-modal-close');


modalBtn.addEventListener('click', function(){
    modalBg.classList.add('my-res-bg-active')
});

modalClose.addEventListener('click', function(){
    modalBg.classList.remove('my-res-bg-active')
}); 