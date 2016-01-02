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

      $('.review-comment-nav').on( 'click', '.review-comment-filter', function() {
        var filterValue = $(this).attr('data-filter');
        $grid.isotope({ filter: filterValue });

        $('.review-comment-filter').removeClass('current');
        $(this).addClass('current');
      });


    });
