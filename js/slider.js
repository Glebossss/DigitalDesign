$(document).ready(function () {
  $('').slick({
    centerMode: true,
    centerPadding: '60px',
    slidesToShow: 2,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 3
        }
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 1
        }
      }
    ]
  });

  $('.programs__mainn').slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    centermode: true,
    arrows: false,
    autoplaySpeed: 1000,
  });

 

});

let tab = function() {
  let tabNav = document.querySelectorAll('.tabs-nav__item'),
  tabContent = document.querySelectorAll('.tab'),
  tabName;
  tabNav.forEach(item => {
  item.addEventListener('click', selectTabNav)
  });
  function selectTabNav() {
  tabNav.forEach(item => {
  item.classList.remove('is-active');
  });
  this.classList.add('is-active');
  tabName = this.getAttribute('data-tab-name');
  selectTabContent(tabName);
  }
  function selectTabContent(tabName) {
  tabContent.forEach(item => {
  item.classList.contains(tabName) ? item.classList.add('is-active') : item.classList.remove('is-active')
  })
  }
  };
  tab();

let modal = function() {
  let modalButton = document.querySelectorAll('.modal__button');
  var window = document.getElementById("modal");
  let close = document.querySelectorAll('.modal-close');
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
  modal();

