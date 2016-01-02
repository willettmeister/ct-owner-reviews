//= require "isotope.min"


    $(document).ready( function() {
      // init Isotope
      var $grid = $('.review-comments').isotope({
        itemSelector: '.review-comment',
        percentPosition: true,
        masonry: {
          columnWidth: '.review-comment-sizer'
        }
      });
      // layout Isotope after each image loads
      $grid.imagesLoaded().progress( function() {
        $grid.isotope('layout');
      });  


      $('.review-comment-nav').on( 'click', '.review-comment-filter', function() {
        var filterValue = $(this).attr('data-filter');
        $grid.isotope({ filter: filterValue });

        $('.review-comment-filter').removeClass('current');
        $(this).addClass('current');
      });


    });
