document.addEventListener('DOMContentLoaded', function(event) {
// $(document).ready(function () {
// 	$('.menu-toggle').click(function () {
// 		$('.menu-toggle').toggleClass('menu-open');
// 		$('.menu').toggleClass('active');
// 	});
// 	$('.link').click(function () {
// 		$('.menu-toggle').toggleClass('menu-open');
// 		$('.menu').toggleClass('active');
// 	});
// 	$('.imageOne').click(function () {
// 		$('.overlayOne').toggleClass('active');
// 	});
// 	$('.imageTwo').click(function () {
// 		$('.overlayTwo').toggleClass('active');
// 	});
// 	$('.imageThree').click(function () {
// 		$('.overlayThree').toggleClass('active');
// 	});
// 	$('.imageFour').click(function () {
// 		$('.overlayFour').toggleClass('active');
// 	});
// 	$('.imageFive').click(function () {
// 		$('.overlayFive').toggleClass('active');
// 	});
// 	$('.imageSix').click(function () {
// 		$('.overlaySix').toggleClass('active');
// 	});
// 	$('.closeOverlayOne').click(function () {
// 		$('.overlayOne').toggleClass('active');
// 	});
// 	$('.closeOverlayTwo').click(function () {
// 		$('.overlayTwo').toggleClass('active');
// 	});
// 	$('.closeOverlayThree').click(function () {
// 		$('.overlayThree').toggleClass('active');
// 	});
// 	$('.closeOverlayFour').click(function () {
// 		$('.overlayFour').toggleClass('active');
// 	});
// 	$('.closeOverlayFive').click(function () {
// 		$('.overlayFive').toggleClass('active');
// 	});
// 	$('.closeOverlaySix').click(function () {
// 		$('.overlaySix').toggleClass('active');
// 	});
// });

// Button to scroll up to the top

// Get the button:
let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}
});