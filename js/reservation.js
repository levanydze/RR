var modalBtn = document.querySelector('.res-button');
var modalBg = document.querySelector('.reservation-modal-bg');
var modalClose = document.querySelector('.res-close-btn');


modalBtn.addEventListener('click', function () {
    modalBg.classList.add('res-modal-bg-active');
});

modalClose.addEventListener('click', function(){
    modalBg.classList.remove('res-modal-bg-active');
});


var resBtn = document.querySelector('.res_button');
var resBg = document.querySelector('.reservation-modal-bg');
var resClose = document.querySelector('.res-close-btn');


resBtn.addEventListener('click', function(){
  resBg.add.classList('res-moda-bg-active');
});
resClose.addEventListener('click', function(){
  resClose.remove.classList('res-moda-bg-active');
});
