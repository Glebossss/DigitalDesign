let burger = function() {
    let modalButton = document.querySelectorAll('.burger');
    var window = document.getElementById("menu");
    let close = document.querySelectorAll('.menu-close');
    modalButton.forEach(item => {
    item.addEventListener('click', modalActive)
    });
    function modalActive() {
    window.classList.add('is-active');
    }
    close.forEach(item => {
    item.addEventListener('click', modalClose)
    });
    function modalClose() {
    window.classList.remove('is-active');
    }
    };
    burger();