
$(document).ready(function(){


/*jQuery('#demo').carousel({
  interval: 3000
});*/
	
  /*$('a[href="#search"]').on('click', function(event) {                    
		$('#search').addClass('open');
		$('#search > form > input[type="search"]').focus();
	});            
	$('#search, #search button.close').on('click keyup', function(event) {
		if (event.target == this || event.target.className == 'close' || event.keyCode == 27) {
			$(this).removeClass('open');
		}
	}); */           
});



jQuery(document).ready(function(){

jQuery('.tm-testimonials-carousel').owlCarousel({
  
  margin: 0,
  lazyLoad:true,
  dots:true,
  nav: true,
  navClass: ['owl-prev', 'owl-next'],
  navText: [
    "<i class='fas fa-caret-left'></i>",
    "<i class='fas fa-caret-right'></i>"
  ],
  autoplay: true,
  autoplayHoverPause: true,
  responsive: {
    0: {
      items: 1
    },
    480: {
      items: 1
    },
    600: {
      items: 1
    },
    1000: {
      items:1
    }
  }
});


jQuery('#pro-cat-slider').owlCarousel({
  loop: true,
  margin: 30,
  dots:false,
  nav: false,
  navText: [
    "<i class='fa fa-angle-left'></i>",
    "<i class='fa fa-angle-right'></i>"
  ],
  autoplay: false,
  autoplayHoverPause: true,
  responsive: {
    0: {
      items: 1
    },
    600: {
      items: 2
    },
    1000: {
      items:3
    }
  }
});

jQuery('#testi-slider').owlCarousel({
  loop: true,
  margin: 30,
  dots:true,
  nav: true,
  navText: [
    "<i class='fa fa-angle-left'></i>",
    "<i class='fa fa-angle-right'></i>"
  ],
  autoplay: true,
  /*center: true,*/
  autoplayHoverPause: true,
  responsive: {
    0: {
      items: 1
    },
    600: {
      items: 1
    },
    800: {
      items:2
    },
    1200: {
      items:2
    }
  }
});

jQuery('#partners-slider').owlCarousel({
  loop: true,
  margin:10,
  dots:false,
  nav: true,
  navText: [
    "<i class='fa fa-angle-left'></i>",
    "<i class='fa fa-angle-right'></i>"
  ],
  autoplay: true,
  autoplayHoverPause: true,
  responsive: {
    0: {
      items: 1
    },
    400: {
      items: 2
    },
    600: {
      items: 3
    },
    1000: {
      items:6
    }
  }
});

/* related prodcut slider */ 

jQuery('#related-prodcut-slider').owlCarousel({
  loop: true,
  margin: 30,
  dots:true,
  nav: false,
  navText: [
    "<i class='fa fa-angle-left'></i>",
    "<i class='fa fa-angle-right'></i>"
  ],
  autoplay: false,
  autoplayHoverPause: true,
  responsive: {
    0: {
      items: 1
    },
    600: {
      items: 2
    },
    1000: {
      items:4
    }
  }
})

});




/* Categories */

jQuery(document).ready(function () {
    jQuery(".sub > a").click(function() {
        var ul = $(this).next(),
                clone = ul.clone().css({"height":"auto"}).appendTo(".mini-menu"),
                height = ul.css("height") === "0px" ? ul[0].scrollHeight + "px" : "0px";
        clone.remove();
        ul.animate({"height":height});
        return false;
    });
       jQuery('.mini-menu > ul > li > a').click(function(){
       jQuery('.sub a').removeClass('active');
       jQuery(this).addClass('active');
    }),
       jQuery('.sub ul li a').click(function(){
       jQuery('.sub ul li a').removeClass('active');
       jQuery(this).addClass('active');
    });
});

/* Categories end */

/* Filter Price */

$( function() {
    jQuery( "#slider-range" ).slider({
      range: true,
      min: 0,
      max: 1000,
      values: [ 120, 800 ],
      slide: function( event, ui ) {
        jQuery( "#amount" ).val( "$" + ui.values[ 0 ] + " - $" + ui.values[ 1 ] );
         var mi = ui.values[0];
              var mx = ui.values[1];
              filterSystem(mi, mx);
      }
    });
    jQuery( "#amount" ).val( "$" + $( "#slider-range" ).slider( "values", 0 ) +
      " - $" + jQuery( "#slider-range" ).slider( "values", 1 ) );
  } );


  function filterSystem(minPrice, maxPrice) {
      jQuery(".product-col").hide().filter(function () {
          var price = parseInt(jQuery(this).data("price"), 10);
          return price >= minPrice && price <= maxPrice;
      }).show();
  }

  /* Filter Price end */


/* product details slider */

jQuery(document).ready(function(){
  jQuery(".owl-carousel").owlCarousel({
    
    items: 1,
    
    
  });
}); 




// the following to the end is whats needed for the thumbnails.
jQuery( document ).ready(function() {
   
        // 1) ASSIGN EACH 'DOT' A NUMBER
      dotcount = 1;
   
      jQuery('.product-details-col .owl-dot').each(function() {
        jQuery( this ).addClass( 'dotnumber' + dotcount);
        jQuery( this ).attr('data-info', dotcount);
        dotcount=dotcount+1;
      });
      
       // 2) ASSIGN EACH 'SLIDE' A NUMBER
      slidecount = 1;
   
      jQuery('#product-details-slider .owl-item').not('.cloned').each(function() {
        jQuery( this ).addClass( 'slidenumber' + slidecount);
        slidecount=slidecount+1;
      });
      
      // SYNC THE SLIDE NUMBER IMG TO ITS DOT COUNTERPART (E.G SLIDE 1 IMG TO DOT 1 BACKGROUND-IMAGE)
      jQuery('#product-details-slider .owl-dot').each(function() {
          grab = jQuery(this).data('info');

          slidegrab = jQuery('.slidenumber'+ grab +' img').attr('src');
          console.log(slidegrab);

          jQuery(this).css("background-image", "url("+slidegrab+")");

      });
      
      // THIS FINAL BIT CAN BE REMOVED AND OVERRIDEN WITH YOUR OWN CSS OR FUNCTION, I JUST HAVE IT
        // TO MAKE IT ALL NEAT 
      amount = jQuery('#product-details-slider .owl-dot').length;
      gotowidth = 100/amount;
      jQuery('#product-details-slider .owl-dot').css("width", gotowidth+"%");
      newwidth = jQuery('.owl-dot').width();
      jQuery('#product-details-slider .owl-dot').css("height", newwidth+"px");
      
});




$(document).ready(function(){

var quantitiy=0;
   $('.quantity-right-plus').click(function(e){
        
        // Stop acting like a button
        e.preventDefault();
        // Get the field name
        var quantity = parseInt($('#quantity').val());
        
        // If is not undefined
            
            $('#quantity').val(quantity + 1);

          
            // Increment
        
    });

     $('.quantity-left-minus').click(function(e){
        // Stop acting like a button
        e.preventDefault();
        // Get the field name
        var quantity = parseInt($('#quantity').val());
        
        // If is not undefined
      
            // Increment
            if(quantity>0){
            $('#quantity').val(quantity - 1);
            }
    });
    
});

  $(document).ready(function () {
    $('.navbar-light .dmenu').hover(function () {
            $(this).find('.sm-menu').first().stop(true, true).slideDown(150);
        }, function () {
            $(this).find('.sm-menu').first().stop(true, true).slideUp(105)
        });
  });

