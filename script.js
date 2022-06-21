'use strict';
const closeModel = function () {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
};
const openModel = function () {
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
};
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnClose = document.querySelector('.close-modal');
const btnsShow = document.querySelectorAll('.show-modal');

for (let i = 0; i < btnsShow.length; i++)
    btnsShow[i].addEventListener('click', openModel);
btnClose.addEventListener('click', closeModel);
overlay.addEventListener('click', closeModel);

document.addEventListener('keydown', function (e) {
    if (e.code === 'Escape' && !modal.classList.contains('hidden'))
        closeModel();
});
