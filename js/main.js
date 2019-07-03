$(document).ready(function() {

    $('#clock').countdown("2019/12/12", function(event) {
      var totalHours = event.offset.totalDays * 24 + event.offset.hours;
       $('.hours').html(totalHours);
       $('.minutes').html(event.strftime('%M'));
       $('.seconds').html(event.strftime('%S'));
     });
     
     $(".slider-active").owlCarousel({
      loop: true,
      nav: true,
      dots:false,
      autoplay: true,
      autoplayTimeout:3000,
      navText: ['<i class="fas fa-arrow-right"></i>','<i class="fas fa-arrow-left"></i>'],
      responsive: {
            0: {
              items: 1
          },
          767: {
              items: 1
          },
          768:{
              items:2
          },
          992: {
              items: 3
          },
          1200: {
              items: 3
          }
      }
    
      
  });
  });
