<<<<<<< HEAD
//Select init
=======
// Select init
>>>>>>> 1d94283773f35a086d058cf5d40ccce746c3c3f1
$('select').styler();

// Slick carousel init
$('.trending-carousel').slick({
<<<<<<< HEAD
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1
=======

    arrows:false,
    dots: true,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1
});

// Switch product items view
$('.grid-thumbs').on('click', function(){
    // Find cards and remove class row-card
    $('.all-items-container .card').removeClass('row-card');
    $('.all-items-container .col-4').removeClass('col-12');
});

$('.grid-list').on('click', function(){
    // Find cards and add class row-card
    $('.all-items-container .card').addClass('row-card');
    $('.all-items-container .col-4').addClass('col-12');
>>>>>>> 1d94283773f35a086d058cf5d40ccce746c3c3f1
});