// JavaScript for first page

// Default for containers
$('.home').show();
$('.content').hide();

// Upon clicking start btn, hide home page and show 2nd page
$("#start-btn").on('click',function() {
    $('.home').hide();
    $('.content').show();
});