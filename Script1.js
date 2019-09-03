//Click to scroll functionality
$(document).ready(function(){
    $("#section1").click(function() {
        $("html, body").animate({
            scrollTop: $(".scroll1").offset().top
        }, 100);
    });

    $("#section2").click(function() {
        $("html, body").animate({
            scrollTop: $(".scroll2").offset().top
        }, 100);
    });

    $("#section3").click(function() {
        $("html, body").animate({
            scrollTop: $(".scroll3").offset().top
        }, 100);
    });

    $("#section4").click(function() {
        $("html, body").animate({
            scrollTop: $("#Contact").offset().top
        }, 100);
    });

});

//When clicking an option collaspe navbar functionailty
$(".navbar-nav>li>a").on("click", function(){
    $('.navbar-collapse').collapse('hide');
    /*
    $('#navbar-close').toggle("hide");
    $('#navbar-hamburger').toggle(); 
    */
});

/* will experiement with this toggle feature more later
//When clicking the custom-toggler toggle the icons
$(function() {
    $("#custom-toggler").on("click", function() {
      $('#navbar-hamburger').toggle();
      $('#navbar-close').toggle();  
    });
  });
*/
 
/*
$(function() {
    $("#custom-toggler").click(function() {
      $('#navbar-hamburger').toggleClass('hidden');
      $('#navbar-close').toggleClass('hidden');  
    });
  });
*/

//The fade in effects for the SHOP section
const faders = document.querySelectorAll(".fade-in");
const sliders = document.querySelectorAll(".slide-in")

const appearOptions = {
    threshold: 0.4,
    rootMargin: "0px 0px -20px 0px"
};

const appearOnScroll = new IntersectionObserver 
(function(
    entries, 
    appearOnScroll
) {
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            return;
        } else {
            entry.target.classList.add("appear");
            appearOnScroll.unobserve(entry.target);
        }
    })
}, appearOptions);

faders.forEach(fader => {
    appearOnScroll.observe(fader);
})

sliders.forEach(slider => {
    appearOnScroll.observe(slider);
});
