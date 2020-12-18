// NAVBAR MOBILE
$(document).ready(function(){
    $('.sidenav').sidenav({edge: "right"});
  });


// PARALLAX 
   $(document).ready(function(){
    $('.parallax').parallax();
  });




// SLIDER MAIN

 const slider = document.querySelector('.slider');
    M.Slider.init(slider, {
        indicators: false,
        height: 500,
        transition: 500,
        interval: 6000
      });


// MATERIAL BOX
  const mb = document.querySelectorAll('.materialboxed');
    M.Materialbox.init(mb, {});


// ----------------------------------------------------------------- GO TO TOP BUTTON

let mybutton = document.getElementById("myBtn");


window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (mybutton) {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            mybutton.style.display = "block";
        } else {
            mybutton.style.display = "none";
        }
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; 
  document.documentElement.scrollTop = 0; 
}




