$(document).ready(function() {

//mobile-menu
$("#navToggle").click(function() {
    $(this).toggleClass("active");
    $(".overlay").toggleClass("open");
    $("body").toggleClass("locked"); 
});

//show search input
$('#search-btn1').click(function(evt){
	toggleSearchInput("#search-header-input", evt)
});

$("#search-btn2").click(function(evt){
	toggleSearchInput("#search-footer-input", evt)
});

function toggleSearchInput(formName, evt) {
	$(formName).toggle("slow")
	evt.preventDefault()
}

//active nav-link
$(function() { 
    $('.menu').on('click','.nav-link', function ( e ) {
        e.preventDefault();
        $(this).parents('.menu').find('.active').removeClass('active').end().end().addClass('active');
        $(activeTab).show();
    });
});

//slick-slider
$('.main-slider').slick({
	dots: true
});

});
 
//slow anchor links 
$(document).ready(function(){
    var headerHeight = $('header').outerHeight();

    $('.slideSection').click(function(e) {
        var linkHref = $(this).attr('href');

        $('html, body').animate({
            scrollTop: $(linkHref).offset().top - headerHeight
        }, 1000);

        e.preventDefault();
    });
});