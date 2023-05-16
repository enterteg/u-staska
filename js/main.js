$(document).ready(function(){
  $('.slick-carousel').slick({
    accessibility: true,
    autoplay: true,
    arrows: true,
  });

  lightbox.option({
    'resizeDuration': 500,
    'wrapAround': true,
    'fitImagesInViewport': true,
    'positionFromTop': 150,
  })
  
  const menuButton = $('#menu-icon-button')
  const menuList = $('#menu-list')
  menuButton.click(() => {
    menuList.slideToggle('slow');    
    menuButton.toggleClass('fa-times') 
  })

});