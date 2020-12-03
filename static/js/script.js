$(document).ready(function(){
    $('.sidenav').sidenav({edge: "right"});
  });



   $(document).ready(function(){
    $('.parallax').parallax();
  });






 const slider = document.querySelector('.slider');
    M.Slider.init(slider, {
        indicators: false,
        height: 500,
        transition: 500,
        interval: 6000
      });



  const mb = document.querySelectorAll('.materialboxed');
    M.Materialbox.init(mb, {});