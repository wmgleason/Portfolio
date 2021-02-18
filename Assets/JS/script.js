$(document).ready(function(){
  $('#portfolio.thumbnail').hover(function(){
    $(this).children(".cust-caption").slideDown();
  },
  function(){
    $(this).children(".cust-caption").fadeOut();
  });

    
  // spy and scroll menu boogey
  $("#navbar a.hash").click( function(e) {
  
    // prevent default anchor click behavior
    e.preventDefault();

    // store hash
    var areas = this.areas;

    // Destination
    var scrollOffset = $(this.areas).offset().top;

    // animate
    $('html, body').animate({
      scrollTop: scrollOffset
    }, 500, function(){
      window.location.areas = areas;
    }) 
  })
});



