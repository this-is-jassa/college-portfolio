
//Mobile navigation
const hamburgerEl = document.querySelector(".navbar-toggle");
const navListEl = document.querySelector(".navList"); 
const crossEl = document.querySelector(".cross");

hamburgerEl.addEventListener("click",function(){
  navListEl.style.display = "block";
  hamburgerEl.style.display = "none";
  crossEl.style.display = 'block';
})

crossEl.addEventListener("click",function(){
 navListEl.style.display = "none";
 crossEl.style.display = "none";
 hamburgerEl.style.display = 'block';
})

// ?----------------------------------------------------------------------

// Fixed navbar on scroll---
$(document).ready(function(){
 $(window).scroll(function() { // check if scroll event happened
   if ($(document).scrollTop() > 10) { // check if user scrolled more than 50 from top of the browser window
    // $(".portfolio__navbar--scroll ").css('color','pink');
    $(".portfolio__header").css('box-shadow', '0px 0px 10px black');
    $(".portfolio__header").css('background-color', '#1F2235 ');// if yes, then change the color of class "navbar-fixed-top" to white (#f8f8f8)
   } else {
    $(".portfolio__header").css('box-shadow', '0px 0px 10px transparent');
     $('.portfolio__header').css('background-color', 'transparent'); // if not, change it back to transparent
   }
 });
});


// ?---------------------------------------------------------------------------------------------------------

//jQuery for page scrolling feature - requires jQuery Easing plugin(****************)

$(function() {
 $('a.page-scroll').on('click', function(event) {
   var navs = $('#nav ul');
     var $anchor = $(this);
     $('html, body').stop().animate({
         scrollTop: $($anchor.attr('href')).offset().top
     }, 600);
     if(window.matchMedia("(min-width: 800px)")){
      navListEl.style.display = "block";
      hamburgerEl.style.display = 'block';
     }
     event.preventDefault();
 });
});



if(window.matchMedia("(max-width: 800px)")){
  $(function() {
   $('a.page-scroll').on('click', function(event) {
     var navs = $('#nav ul');
       var $anchor = $(this);
       $('html, body').stop().animate({
           scrollTop: $($anchor.attr('href')).offset().top
       }, 600);
       navListEl.style.display = "none";
       crossEl.style.display = "none";
       hamburgerEl.style.display = 'block';
       event.preventDefault();
      })
   })  
}


// ?------------------------------------------------------------------------------------***
// TODO : complete this : get id of current offset ::
// anchor link becomes active when you reach its id on page

var topMenu = $(".portfolio__navbar--scroll");//Get the navigation menu
// console.log(topMenu);
var topMenuHeight = topMenu.outerHeight() + 15;//Height from the top 
// console.log(topMenuHeight)
//List all the items
var menuItems = topMenu.find("a");
console.log(menuItems);
// Anchors corresponding to menu items
scrollItems = menuItems.map(function(){
  var item = $($(this).attr("href"));
  return item;
})


// adding colors to the navs---**********************
$(window).scroll(function(){
  // Get container scroll position
  var fromTop = $(this).scrollTop()+topMenuHeight;
  //get id of the current scroll item
  var cur = scrollItems.map(function(){
    if ($(this).offset().top < fromTop)
       return this;
  })
  // Get the id of the current element
  cur = cur[cur.length-1];
  var id = cur && cur.length ? cur[0].id : "";
  // set/remove active class;
 menuItems.map(function(item,elem){
   if(elem.hash === "#"+id){
     $(elem).css('color','#FF4A57')
   }
   else{
     $(elem).css('color','white')
   }
 })

})


// Add animations with waypoints and animate.css

$(function(){
  // intro
  $('.mp1').waypoint(function() {
		$('.mp1').addClass('animated fadeInLeft');
	}, {
		offset: '75%'
  });

  $('.mp2').waypoint(function() {
		$('.mp2').addClass('animated fadeInRight');
	}, {
		offset: '75%'
  });


  // popup button
  $('.button-pop').waypoint(function() {
		$('.button-pop').addClass('animated bounce');
	}, {
		offset: '65%'
  });


  // about
  $('.mp3').waypoint(function() {
		$('.mp3').addClass('animated fadeInUp');
	}, {
		offset: '95%'
  });
  

  //do's
  $('.mp4').waypoint(function() {
    $('.mp4').addClass('animated fadeInUp');
    $('.mp4-1').addClass('animated fadeInUp');
    $('.mp4-2').addClass('animated fadeInUp');
    $('.mp4-3').addClass('animated fadeInUp');
	}, {
		offset: '85%'
  });

  // technologies
  $('.mp5').waypoint(function() {
		$('.mp5').addClass('animated zoomInRight');
	}, {
		offset: '85%'
  });

  // projects
  $('.mp6').waypoint(function() {
    $('.mp6').addClass('animated fadeInUp');
    $('.mp6-1').addClass('animated fadeInUp');
    $('.mp6-2').addClass('animated fadeInUp');
    $('.mp6-3').addClass('animated fadeInUp');
    $('.mp6-4').addClass('animated fadeInUp');
    $('.mp6-5').addClass('animated fadeInUp');
    $('.mp6-6').addClass('animated fadeInUp');
	}, {
		offset: '85%'
  });


  //contact
  $('.mp7').waypoint(function() {
		$('.mp7').addClass('animated zoomInUp');
	}, {
		offset: '85%'
  });


})