let buttonOpen = document.querySelector('.registration__button');
let buttonClose = document.querySelector('.close__button');
let buttonSave = document.querySelector('.button__save');
let body = document.querySelector('body');
let modalOver = document.querySelector('.modal__over');
let regModal = document.querySelector('.modal');
buttonOpen.addEventListener('click', function (e) {
    regModal.classList.toggle('visible')
    modalOver.classList.toggle('visible')
    body.classList.toggle('shadow')
})
buttonSave.addEventListener('click', function (e) {
    regModal.classList.toggle('visible')
    modalOver.classList.toggle('visible')
    body.classList.toggle('shadow')
})
buttonClose.addEventListener('click', function (e) {
    regModal.classList.toggle('visible')
    modalOver.classList.toggle('visible')
    body.classList.toggle('shadow')
})
