// Init Tabs
$( function() {
    $( "#tabs" ).tabs();
} );

$('.trending-carousel').slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 2,
    dots: true
});

// Switch product items view
$('.grid-thumbs').on('click', function(){
    // Find cards and remove class row-card
    $('.all-items-container .card').removeClass('row-card');
    $('.all-items-container .col-lg-4').removeClass('col-lg-12');
    $('.all-items-container .col-md-6').removeClass('col-md-12');
    $('.all-items-container .col-sm-6').removeClass('col-sm-12');
    $('.all-items-container .col-xs-12').removeClass('col-xs-12');

});

$('.grid-list').on('click', function(){
    // Find cards and add class row-card
    $('.all-items-container .card').addClass('row-card');
    $('.all-items-container .col-lg-4').addClass('col-lg-12');
    $('.all-items-container .col-md-6').addClass('col-md-12');
    $('.all-items-container .col-sm-6').addClass('col-sm-12');
    $('.all-items-container .col-xs-12').addClass('col-xs-12');
});